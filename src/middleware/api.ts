import axios, { AxiosResponse } from 'axios';

export async function fetchData(key: string) {
    const response: AxiosResponse = await axios.get('/fetchData', {
        params: {
            key: 'US'
        }
    });

    const data = response.data;
    return data;
}