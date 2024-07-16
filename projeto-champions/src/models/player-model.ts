export interface PlayerModel{
    id: number;
    name: string;
    club: string;
    nationality: number;
    position: string;
    statistics: {
        overrall: number;
        pace: number;
        shooting: number;
        passing: number;
        dribbling: number;
        defending: number;
        physical: number;
    },
}