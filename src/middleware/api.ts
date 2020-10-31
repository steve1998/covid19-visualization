import URIs from '../constants/URIs.json';
import legend from '../constants/legend.json';
import axios from 'axios';

export async function fetchData(key: string) {
    let data: any = await axios.get(URIs.US);

    if (typeof(data) !== undefined) {
        data = processData(data.data);
        return data;
    }
}

function processData(data: any) {
    const records: Array<string> = data.data;
    let processedData: Array<any> = records.map(record => {
        let object: any = {
            "date": record[legend.date],
            "new_confirmed": record[legend.new_confirmed],
            "new_deceased": record[legend.new_deceased],
            "new_recovered": record[legend.new_recovered],
            "new_tested": record[legend.new_tested],
            "total_confirmed": record[legend.total_confirmed],
            "total_deceased": record[legend.total_deceased],
            "total_recovered": record[legend.total_recovered],
            "total_tested": record[legend.total_tested],
            "new_hospitalized": record[legend.new_hospitalized],
            "total_hospitalized": record[legend.total_hospitalized]
        }

        return object;
    })
    
    return processedData;
}