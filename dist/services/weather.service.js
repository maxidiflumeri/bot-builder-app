"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const API_KEY = '55bbbbf333aa45e2b2c5c4413a8f5161';
class WeatherService {
    getWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let weather = yield axios_1.default.get(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lang=es&city=${city}&country=AR`);
                return weather.data;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
}
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map