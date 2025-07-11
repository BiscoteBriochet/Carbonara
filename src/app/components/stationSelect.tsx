import React from "react";
import { SearchableSelect } from "@/app/components/searchableSelect";
import NavigationModeToggle from "@/app/components/navigationModeToggle";

interface StationSelectProps {
    selectStart: (val: string) => void;
    selectEnd: (val: string) => void;
    startStation: string;
    endStation: string;
    metric: string;
    setMetric: (value: string) => void;
    onRouteFind: () => void;
    error?: string;
}

export function StationSelect({ selectStart, selectEnd, startStation, endStation, metric, setMetric, onRouteFind, error }: StationSelectProps) {
    return (
        <div className="mb-5">
            <div className="flex flex-wrap gap-4 sm:items-end">
                <div className="flex-1">
                    <p>Départ :</p>
                    <SearchableSelect
                        value={startStation}
                        setValue={selectStart} />
                </div>
                <div className="flex-1">
                    <p>Arrivée :</p>
                    <SearchableSelect
                        value={endStation}
                        setValue={selectEnd} />
                </div>
                <button
                    className="find-route-btn"
                    aria-label="Find route between selected stations"
                    onClick={onRouteFind}
                >
                    C'est parti
                </button>
                <div className="w-full h-[36px] flex justify-center sm:w-auto sm:justify-start">
                    <NavigationModeToggle checked={metric === "transfers"} onChange={checked => setMetric(checked ? "transfers" : "time")}></NavigationModeToggle>
                </div>
            </div>
            {error && (
                <div className="status-message status-message--error">
                    {error}
                </div>
            )}
        </div>
    );
}
