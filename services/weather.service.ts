import axios from 'axios'

const API_KEY = '55bbbbf333aa45e2b2c5c4413a8f5161'

export class WeatherService {      

    async getWeather(city: string) {       
        try {
            let weather: any = await axios.get(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lang=es&city=${city}&country=AR`)
            return weather.data
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

