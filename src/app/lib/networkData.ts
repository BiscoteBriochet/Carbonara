import { NetworkData } from "@/app/lib/interfaces";

const networkData = {
    lines: [
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
        },
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
            name: "Ferme à Or"
        }, {
            name: "Gambetta"
        },{
            name: "Gare Centrale de Routerailand"
        },{
            name: "Gare d'Italie – Colisée"
        },{
            name: "Gare de l'Ouest – Tour Eiffel"
        },{
            name: "Gare de Mont-Qu"
        }, {
            name: "Gare du Nord"
        },{
            name: "Géode – Stade Teddy Riner"
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
            name: "Pont Talon"
        },{
            name: "Routerailand"
        },{
            name: "Routerailand – Porcidrome"
        },{
            name: "Saint-Denis Nord"
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
            from: "Gare d'Italie – Colisée",
            to: "Nation",
            lineID: "A",
            time: 80
        },
        {
            from: "Nation",
            to: "Gare de l'Ouest – Tour Eiffel",
            lineID: "A",
            time: 60
        },
        {
            from: "Gare de l'Ouest – Tour Eiffel",
            to: "Salle des Coffres",
            lineID: "A",
            time: 55
        },
        {
            from: "Salle des Coffres",
            to: "Châtelet – Les Halles",
            lineID: "A",
            time: 40
        },
        {
            from: "Le Hury",
            to: "Ferme à Or",
            lineID: "B",
            time: 65
        },
        {
            from: "Ferme à Or",
            to: "Gare Centrale de Routerailand",
            lineID: "B",
            time: 120
        },
        {
            from: "Gare Centrale de Routerailand",
            to: "Routerailand – Porcidrome",
            lineID: "B",
            time: 40
        },
        {
            from: "Routerailand – Porcidrome",
            to: "Géode – Stade Teddy Riner",
            lineID: "B",
            time: 50
        },
        {
            from: "Géode – Stade Teddy Riner",
            to: "Gare du Nord",
            lineID: "B",
            time: 30
        },
        {
            from: "Gare du Nord",
            to: "Châtelet – Les Halles",
            lineID: "B",
            time: 60
        },
        {
            from: "Saint-Jacques",
            to: "Châtelet – Les Halles",
            lineID: "1",
            time: 20
        },
        {
            from: "Châtelet – Les Halles",
            to: "Place de l'Étoile – Arc de Triomphe",
            lineID: "1",
            time: 20
        },
        {
            from: "Place de l'Étoile – Arc de Triomphe",
            to: "Promenade Rouge",
            lineID: "1",
            time: 10
        },
        {
            from: "Promenade Rouge",
            to: "Mairie de Saint-Denis",
            lineID: "1",
            time: 25
        },
        {
            from: "Mairie de Saint-Denis",
            to: "Saint-Denis Nord",
            lineID: "1",
            time: 20
        },
        {
            from: "Saint-Denis Nord",
            to: "Plutus-les-Lacs",
            lineID: "1",
            time: 20
        },
        {
            from: "Plutus-les-Lacs",
            to: "Porcidrome",
            lineID: "1",
            time: 35
        },
        {
            from: "Châtelet – Les Halles",
            to: "Salle des Coffres",
            lineID: "2",
            time: 40
        },
        {
            from: "Salle des Coffres",
            to: "Gare de l'Ouest – Tour Eiffel",
            lineID: "2",
            time: 45
        },
        {
            from: "Gare de l'Ouest – Tour Eiffel",
            to: "Pont Talon",
            lineID: "2",
            time: 35
        },
        {
            from: "Pont Talon",
            to: "Bouleau-sous-Bois",
            lineID: "2",
            time: 20
        },
        {
            from: "Bouleau-sous-Bois",
            to: "Diorite",
            lineID: "2",
            time: 20
        },
        {
            from: "Diorite",
            to: "Tour à Mobs",
            lineID: "2",
            time: 20
        },
        {
            from: "Tour à Mobs",
            to: "Mairie de Saint-Denis",
            lineID: "2",
            time: 25
        },
        {
            from: "Arsenal",
            to: "Châtelet – Les Halles",
            lineID: "3",
            time: 30
        },
        {
            from: "Châtelet – Les Halles",
            to: "Paris – Désert",
            lineID: "3",
            time: 30
        },
        {
            from: "Paris – Désert",
            to: "Toutensablé",
            lineID: "3",
            time: 15
        },
        {
            from: "Toutensablé",
            to: "Gambetta",
            lineID: "3",
            time: 20
        },
        {
            from: "Gambetta",
            to: "Lac du Jardin",
            lineID: "3",
            time: 15
        },
        {
            from: "Lac du Jardin",
            to: "Azuria Sud",
            lineID: "3",
            time: 15
        },
        {
            from: "Azuria Sud",
            to: "Azuria Nord",
            lineID: "3",
            time: 15
        },
        {
            from: "Gare de l'Ouest – Tour Eiffel",
            to: "Victor Hugo",
            lineID: "4",
            time: 15
        },
        {
            from: "Victor Hugo",
            to: "Salle des Coffres",
            lineID: "4",
            time: 25
        },
        {
            from: "Salle des Coffres",
            to: "Bastille",
            lineID: "4",
            time: 25
        },
        {
            from: "Bastille",
            to: "Châtelet – Les Halles",
            lineID: "4",
            time: 20
        },
        {
            from: "Châtelet – Les Halles",
            to: "Esplanade",
            lineID: "4",
            time: 40
        },
        {
            from: "Esplanade",
            to: "Gare de Mont-Qu",
            lineID: "4",
            time: 30
        },
        {
            from: "Gare de Mont-Qu",
            to: "Piscine Léon Marchand",
            lineID: "4",
            time: 10
        },
        {
            from: "Porcidrome",
            to: "Routerailand",
            lineID: "5",
            time: 25
        },
        {
            from: "Routerailand",
            to: "Azuria Nord",
            lineID: "5",
            time: 45
        },
        {
            from: "Azuria Nord",
            to: "Géode – Stade Teddy Riner",
            lineID: "5",
            time: 25
        },
        {
            from: "Géode – Stade Teddy Riner",
            to: "Gare du Nord",
            lineID: "5",
            time: 30
        },
        {
            from: "Gare du Nord",
            to: "Montparnasse",
            lineID: "5",
            time: 15
        },
        {
            from: "Montparnasse",
            to: "Jaurès",
            lineID: "5",
            time: 20
        },
        {
            from: "Jaurès",
            to: "Châtelet – Les Halles",
            lineID: "5",
            time: 15
        },
        {
            from: "Châtelet – Les Halles",
            to: "Bastille",
            lineID: "5",
            time: 30
        },
        {
            from: "Bastille",
            to: "Arsenal",
            lineID: "5",
            time: 20
        },
        {
            from: "Cairolis Est",
            to: "Île Champignon",
            lineID: "7",
            time: 25
        },
        {
            from: "Île Champignon",
            to: "Tour à Mobs",
            lineID: "7",
            time: 15
        },
        {
            from: "Tour à Mobs",
            to: "Saint-Michel – Notre-Dame",
            lineID: "7",
            time: 45
        },
        {
            from: "Saint-Michel – Notre-Dame",
            to: "Châtelet – Les Halles",
            lineID: "7",
            time: 30
        }
    ]
} as NetworkData;

export default networkData;
