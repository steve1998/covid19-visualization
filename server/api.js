const axios = require('axios');
const URIs = require('./constants/URIs.json');
const legend = require('./constants/legend.json');

async function fetchDataGoogle(key) {
    var response = undefined
    var payload = []

    switch(key) {
        case 'US':
            response = await axios.get(URIs.US);
            break;
        default:
            break;
    }

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
   

module.exports = fetchDataGoogle;