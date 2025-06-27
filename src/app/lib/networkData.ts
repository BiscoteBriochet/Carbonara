import { NetworkData } from "@/app/lib/interfaces";

const networkData = {
    lines: [
        {
            id: "M1",
            name: "",
            colour: "#ffcd02",
            type: "LSR"
        },{
            id: "M2",
            name: "",
            colour: "#006db8",
            type: "LSR"
        },{
            id: "M3",
            name: "",
            colour: "#9b993b",
            type: "LSR"
        },{
            id: "M4",
            name: "",
            colour: "#bb4a9b",
            type: "LSR"
        },{
            id: "M5",
            name: "",
            colour: "#f78f4b",
            type: "LSR"
        },{
            id: "M6",
            name: "",
            colour: "#77c696",
            type: "LSR"
        },{
            id: "M7",
            name: "",
            colour: "#f59fb3",
            type: "LSR"
        },
        {
            id: "RER A",
            name: "",
            colour: "#ed1c2a",
            type: "LSR"
        },
        {
            id: "RER B",
            name: "",
            colour: "#4c90cd",
            type: "LSR"
        },
        {
            id: "RER C",
            name: "",
            colour: "#ffcd02",
            type: "LSR"
        },
        {
            id: "RER D",
            name: "",
            colour: "#008c5a",
            type: "LSR"
        },
        {
            id: "RER E",
            name: "",
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
