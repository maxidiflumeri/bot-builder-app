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
const botbuilder_dialogs_1 = require("botbuilder-dialogs");
const moment = require("moment");
require("moment/locale/es");
const weather_service_1 = require("../services/weather.service");
class AyudaOpcionesDialogs extends botbuilder_dialogs_1.ComponentDialog {
    constructor(dialogId) {
        super(dialogId);
        this.dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        this.addDialog(new botbuilder_dialogs_1.WaterfallDialog('Ayuda', [
            (step) => __awaiter(this, void 0, void 0, function* () {
                const choices = ['Quiero saber sobre un tema', 'Quiero conocer el profesor', 'Quiero saber la sede', 'quiero saber la fecha y hora', 'quiero saber el estado del tiempo'];
                const options = {
                    prompt: "¿En que podemos ayudarle?",
                    choices: choices
                };
                return yield step.prompt('choicePrompt', options);
            }),
            (step) => __awaiter(this, void 0, void 0, function* () {
                switch (step.result.index) {
                    case 0:
                        yield step.context.sendActivity(`Tu puedes preguntar:\n* _Este es el chatbot de presentacion?_\n* _De que esta hablando ahora?_\n* _Hay otra persona hablando?_`);
                        break;
                    case 1:
                        yield step.context.sendActivity(`Tu puedes preguntar:\n* _Quien esta hablando acerca de bots?_\n* _Donde estan dando la charla de bot framework?_\n* _Quien esta hablando?_`);
                        break;
                    case 2:
                        yield step.context.sendActivity(`Tu puedes preguntar:\n* _Donde estan hablando?_\n* _Donde es la charla de bot framework?_\n* _A que hora es la charla de bot framework?_`);
                        break;
                    case 3:
                        yield step.context.sendActivity(`${this.dateTime}`);
                        break;
                    case 4:
                        const weather = new weather_service_1.WeatherService();
                        const currentWeather = yield weather.getWeather('buenos-aires');
                        yield step.context.sendActivity(`El tiempo actual esta con ${currentWeather.data[0].weather.description} y la temperatura es de: ${currentWeather.data[0].temp}°C`);
                        break;
                    default:
                        break;
                }
                return yield step.endDialog();
            })
        ]));
    }
}
exports.AyudaOpcionesDialogs = AyudaOpcionesDialogs;
//# sourceMappingURL=AyudaOpciones.dialogs.js.map