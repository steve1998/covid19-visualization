export interface CovidObject {
    "date": number;
    "new_confirmed": number,
    "new_deceased": number,
    "total_confirmed": number,
    "total_deceased": number,
}

export interface CovidStatesObject {
    "date": number;
    "state": string;
    "total_confirmed": number,
    "total_deceased": number,
}