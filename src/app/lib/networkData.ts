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
            name: "Arsenal"
        },{
            name: "Azuria Nord"
        },{
            name: "Azuria Sud"
        },{
            name: "Bastille"
        },{
            name: "Bouleau-sous-Bois"
        }, {
            name: "Cairolis Est"
        },{
            name: "Châtelet – Les Halles"
        },{
            name: "Diorite"
        },{
            name: "Esplanade"
        },{
            name: "Ferme à or"
        }, {
            name: "Gambetta"
        },{
            name: "Gare Centrale de Routerailand"
        },{
            name: "Gare d'Italie"
        },{
            name: "Gare de l'Ouest – Tour Eiffel"
        },{
            name: "Gare de Mont-Qu"
        }, {
            name: "Gare du Nord"
        },{
            name: "Géode"
        },{
            name: "Île Champignon"
        },{
            name: "Jaurès"
        },{
            name: "Lac du Jardin"
        }, {
            name: "Le Hury"
        },{
            name: "Mairie de Saint-Denis"
        },{
            name: "Montparnasse"
        },{
            name: "Nation"
        },{
            name: "Paris – Désert"
        }, {
            name: "Piscine Léon Marchand"
        },{
            name: "Place de l'Étoile – Arc de Triomphe"
        },{
            name: "Plutus-les-Lacs"
        },{
            name: "Porcidrome"
        },{
            name: "Promenade Rouge"
        }, {
            name: "Quartier d'affaires"
        },{
            name: "Routerailand"
        },{
            name: "Routerailland – Porcidrome"
        },{
            name: "Saint-Denis – Nord"
        },{
            name: "Saint-Jacques"
        }, {
            name: "Saint-Michel – Notre-Dame"
        },{
            name: "Salle des Coffres"
        },{
            name: "Tour à Mobs"
        },{
            name: "Toutensablé"
        },{
            name: "Victor Hugo"
        },,{
            name: "Vieux Pont"
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
