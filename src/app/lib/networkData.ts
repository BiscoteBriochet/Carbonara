import { NetworkData } from "@/app/lib/interfaces";

const networkData = {
    lines: [
        {
            id: "1",
            name: "Métro 1",
            colour: "#ffcd02",
            type: "LSR"
        },{
            id: "2",
            name: "Métro 2",
            colour: "#006db8",
            type: "LSR"
        },{
            id: "3",
            name: "Métro 3",
            colour: "#9b993b",
            type: "LSR"
        },{
            id: "4",
            name: "Métro 4",
            colour: "#bb4a9b",
            type: "LSR"
        },{
            id: "5",
            name: "Métro 5",
            colour: "#f78f4b",
            type: "LSR"
        },{
            id: "6",
            name: "Métro 6",
            colour: "#77c696",
            type: "LSR"
        },{
            id: "7",
            name: "Métro 7",
            colour: "#f59fb3",
            type: "LSR"
        },
        {
            id: "A",
            name: "RER A",
            colour: "#ed1c2a",
            type: "LSR"
        },
        {
            id: "B",
            name: "RER B",
            colour: "#4c90cd",
            type: "LSR"
        },
        {
            id: "C",
            name: "RER C",
            colour: "#ffcd02",
            type: "LSR"
        },
        {
            id: "D",
            name: "RER D",
            colour: "#008c5a",
            type: "LSR"
        },
        {
            id: "E",
            name: "RER E",
            colour: "#bb4a9b",
            type: "LSR"
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
