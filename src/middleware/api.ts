import axios, { AxiosResponse } from 'axios';

export async function fetchData(key: string) {
    // let baseURL: string = process.env.PORT + '/fetchData' || 'http://localhost:5000/fetchData';
    const response: AxiosResponse = await axios.get('/fetchData', {
        params: {
            key: 'US'
        }
    });

    const data = response.data;
    return data;
}

// function processData(data: any) {
//     const records: Array<any> = data.data;
//     let processedData: Array<CovidObject> = [];

//     records.forEach(record => {
//         if (record[legend.date] !== null && record[legend.total_confirmed] !== null && record[legend.total_deceased] !== null && record[legend.new_confirmed] !== null && record[legend.new_deceased] !== null) {
//             const date: number = Date.parse(record[legend.date]);

//             let object: any = {
//                 "date": date,
//                 "new_confirmed": record[legend.new_confirmed],
//                 "new_deceased": record[legend.new_deceased],
//                 "total_confirmed": record[legend.total_confirmed],
//                 "total_deceased": record[legend.total_deceased],
//             };

//             processedData.push(object);
//         }
//     });
        
//     return processedData;
// }