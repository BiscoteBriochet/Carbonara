import { NetworkData } from "@/app/lib/interfaces";

const networkData = {
    lines: [
        {
            id: "1",
            name: "Métro 1",
            colour: "#b80b4b",
            type: "LSR"
        },
        {
            id: "A",
            name: "RER A",
            colour: "#cec92a",
            type: "HSR"
        }
    ],
    stations: [
        {
            name: "Châtelet"
        },
        {
            name: "Les Halles"
        }
    ],
    connections: [
        {
            from: "Châtelet",
            to: "Les Halles",
            lineID: "1",
            time: 185
        },
        {
            from: "Châtelet",
            to: "Les Halles",
            lineID: "A",
            time: 60
        }
    ]
} as NetworkData;

export default networkData;
