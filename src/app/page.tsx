"use client";

import React, { useEffect, useState } from "react";
import networkData from "@/app/lib/networkData";
import { LegProp } from "@/app/lib/interfaces";
import { ParentSize } from "@visx/responsive";
import RoutingResult from "@/app/components/routingResult";
import { findRoute } from "@/app/util/routing";
import { StationSelect } from "@/app/components/stationSelect";

export default function Home() {
    const [startStation, setStartStation] = useState("");
    const [endStation, setEndStation] = useState("");
    const [metric, setMetric] = useState("time");
    const [route, setRoute] = useState<LegProp[] | null | undefined>(undefined);
    const [error, setError] = useState<string | undefined>();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set initial values after hydration
        setStartStation(networkData.stations[0].name);
        setEndStation(networkData.stations[0].name);
        setIsClient(true);
    }, []);

    const handleRouteFind = async () => {
        setError(undefined);

        try {
            if (startStation === endStation) {
                throw new Error("Le départ et l'arrivée doivent être différents.");
            }

            const result = findRoute(startStation, endStation, metric);

            if (result !== null && result !== undefined && result.length === 0) {
                throw new Error("Aucun itinéraire trouvé entre ces deux stations.");
            }

            setRoute(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred finding the route");
            setRoute(null);
        }
    };

    if (!isClient) {
        return (
            <main className="w-full max-w-7xl mx-auto mt-0 mb-0 px-4 rounded-lg shadow-lg fade-in" role="main">
                <div className="grid gap-4 grid-cols-2">
                    <div className="col-span-full">
                        <h2 className="text-center mb-5" style={{ color: "var(--color-primary-light)" }}>Loading...</h2>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <>
            <main className="w-full max-w-7xl mx-auto mt-0 mb-0 px-4 rounded-lg shadow-lg fade-in" role="main">
                <div className="grid gap-4 grid-cols-2">
                    <div className="col-span-full">
                        <h1 className="text-center text-[2rem]/(--line-height-tight) font-bold font-(family-name:--font-primary) tracking-wider" style={{ color: "var(--color-primary)" }}>Creep'Mobilités</h1>
                        <h2 className="text-center text-[1.5rem]/(--line-height-tight) font-bold font-(family-name:--font-primary) tracking-wide mb-5" style={{ color: "var(--color-primary-light)" }}>Une application RATP</h2>

                        <div className="line-border" role="separator" />

                        <div className="text-center text-base/(--line-height-relaxed) transition-all">
                            <p>Sélectionnez le départ et l'arrivée pour trouver le meilleur itinéraire.</p>
                            <p className="text-(length:--font-size-sm)/(--line-height-normal) mt-2">
                                <b>Note : Le temps total de trajet ne prend pas en compte le temps des correspondances.</b>
                            </p>
                        </div>

                        <div
                            role="region"
                            aria-label="Route Planning Section"
                        >
                            <StationSelect
                                selectStart={(val: string) => setStartStation(val)}
                                selectEnd={(val: string) => setEndStation(val)}
                                startStation={startStation}
                                endStation={endStation}
                                metric={metric}
                                setMetric={(val: string) => setMetric(val)}
                                onRouteFind={handleRouteFind}
                                error={error}
                            />

                            <div
                                role="region"
                                aria-label="Route Results"
                                aria-live="polite"
                            >
                                {RoutingResult({ route })}
                            </div>
                        </div>

                        <div className="line-border" role="separator" />
                    </div>

                    
                </div>
            </main>
        </>
    );
}
