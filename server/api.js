const axios = require('axios');
const URIs = require('./constants/URIs.json');
const legend = require('./constants/legend.json');
const states = require('./constants/states.json');

async function fetchDataCountry() {
    let response = await axios.get(URIs.US);
    let payload = []

    if (response) {
        const columns = response.data.columns;
        const records = response.data.data;

        records.forEach(record => {
            if (columns[legend.date] !== null && record[legend.total_confirmed] !== null && record[legend.total_deceased] !== null && record[legend.new_confirmed] !== null && record[legend.new_deceased] !== null) {
                const date = Date.parse(record[legend.date]);
    
                const object = {
                    "date": date,
                    "new_confirmed": record[legend.new_confirmed],
                    "new_deceased": record[legend.new_deceased],
                    "total_confirmed": record[legend.total_confirmed],
                    "total_deceased": record[legend.total_deceased],
                };
    
                payload.push(object);
            }
        })
    
        return payload;
    }

    return 'Data not found';
}

async function fetchDataStates() {
    let payload = []

    for (var key in states) {
        const response = await axios.get(states[key]);

        if (response) {
            const records = response.data.data;
            const columns = response.data.columns;
    
            for (let i = records.length - 1; i >= 0; i--) {
                if (columns[legend.date] !== null && records[i][legend.total_confirmed] !== null && records[i][legend.total_deceased] !== null) {
                    const date = Date.parse(records[i][legend.date]);
    
                    const object = {
                        "date": date,
                        "state": records[i][legend.state],
                        "total_confirmed": records[i][legend.total_confirmed],
                        "total_deceased": records[i][legend.total_deceased] 
                    }
    
                    payload.push(object);
                    break;
                }
            } 
        }
    }
    
    return payload;
}

module.exports = {
    fetchDataCountry,
    fetchDataStates
}