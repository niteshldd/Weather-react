import axios from 'axios';
const API_KEY = 'd4601d17751fdca1b0ef63f822622fc0';
const URL_API = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){
    const url = `${URL_API}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
}