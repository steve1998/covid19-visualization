import axios, { AxiosResponse } from 'axios';

export async function fetchDataCountry() {
    const response: AxiosResponse = await axios.get('/fetchDataCountry');

    const data = response.data;
    return data;
}

export async function fetchDataStates() {
    const response: AxiosResponse = await axios.get('/fetchDataStates')

    const data = response.data;
    return data;
}