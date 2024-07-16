import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Paris Saint-Germain",
        "nationality": 54,
        "position": "Forward",
        "statistics": {
            "overrall": 93,
            "pace": 85,
            "shooting": 92,
            "passing": 91,
            "dribbling": 95,
            "defending": 38,
            "physical": 65
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Manchester United",
        "nationality": 150,
        "position": "Forward",
        "statistics": {
            "overrall": 91,
            "pace": 87,
            "shooting": 93,
            "passing": 82,
            "dribbling": 88,
            "defending": 35,
            "physical": 77
        }
    },
    {
        "id": 3,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": 7,
        "position": "Midfielder",
        "statistics": {
            "overrall": 91,
            "pace": 76,
            "shooting": 86,
            "passing": 93,
            "dribbling": 87,
            "defending": 64,
            "physical": 78
        }
    },
    {
        "id": 4,
        "name": "Robert Lewandowski",
        "club": "FC Barcelona",
        "nationality": 147,
        "position": "Forward",
        "statistics": {
            "overrall": 92,
            "pace": 78,
            "shooting": 94,
            "passing": 81,
            "dribbling": 86,
            "defending": 44,
            "physical": 82
        }
    },
    {
        "id": 5,
        "name": "Kylian Mbappé",
        "club": "Paris Saint-Germain",
        "nationality": 58,
        "position": "Forward",
        "statistics": {
            "overrall": 91,
            "pace": 97,
            "shooting": 88,
            "passing": 80,
            "dribbling": 92,
            "defending": 36,
            "physical": 76
        }
    },
    {
        "id": 6,
        "name": "Luka Modrić",
        "club": "Real Madrid",
        "nationality": 35,
        "position": "Midfielder",
        "statistics": {
            "overrall": 87,
            "pace": 74,
            "shooting": 76,
            "passing": 90,
            "dribbling": 90,
            "defending": 75,
            "physical": 66
        }
    },
    {
        "id": 7,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": 104,
        "position": "Defender",
        "statistics": {
            "overrall": 89,
            "pace": 78,
            "shooting": 60,
            "passing": 71,
            "dribbling": 72,
            "defending": 91,
            "physical": 86
        }
    },
    {
        "id": 8,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": 131,
        "position": "Forward",
        "statistics": {
            "overrall": 88,
            "pace": 89,
            "shooting": 91,
            "passing": 65,
            "dribbling": 80,
            "defending": 45,
            "physical": 88
        }
    },
    {
        "id": 9,
        "name": "Neymar Jr.",
        "club": "Paris Saint-Germain",
        "nationality": 17,
        "position": "Forward",
        "statistics": {
            "overrall": 90,
            "pace": 91,
            "shooting": 85,
            "passing": 87,
            "dribbling": 94,
            "defending": 36,
            "physical": 64
        }
    },
    {
        "id": 10,
        "name": "Karim Benzema",
        "club": "Real Madrid",
        "nationality": 54,
        "position": "Forward",
        "statistics": {
            "overrall": 89,
            "pace": 78,
            "shooting": 88,
            "passing": 83,
            "dribbling": 87,
            "defending": 42,
            "physical": 76
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayer = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}  

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database[index].statistics = statistics;
    }
    return database[index]
}