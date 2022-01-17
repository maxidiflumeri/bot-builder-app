import { ComponentDialog, PromptOptions, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs'
import * as moment from 'moment'
import 'moment/locale/es';
import {EstadoClimaDialogs} from './estadoClima.dialogs'

export class AyudaOpcionesDialogs extends ComponentDialog {

    private dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')


    constructor(dialogId: string) {
        super(dialogId)
        this.addDialog(new WaterfallDialog('Ayuda', [
            async (step: WaterfallStepContext) => {
                const choices = ['Quiero saber sobre un tema', 'Quiero conocer el profesor', 'Quiero saber la sede', 'quiero saber la fecha y hora', 'quiero saber el estado del tiempo']
                const options: PromptOptions = {
                    prompt: "¿En que podemos ayudarle?",
                    choices: choices
                }
                return await step.prompt('choicePrompt', options)
            },
            async (step: WaterfallStepContext) => {
                switch (step.result.index) {
                    case 0:
                        await step.context.sendActivity(`Tu puedes preguntar:\n* _Este es el chatbot de presentacion?_\n* _De que esta hablando ahora?_\n* _Hay otra persona hablando?_`)
                        break
                    case 1:
                        await step.context.sendActivity(`Tu puedes preguntar:\n* _Quien esta hablando acerca de bots?_\n* _Donde estan dando la charla de bot framework?_\n* _Quien esta hablando?_`)
                        break
                    case 2:
                        await step.context.sendActivity(`Tu puedes preguntar:\n* _Donde estan hablando?_\n* _Donde es la charla de bot framework?_\n* _A que hora es la charla de bot framework?_`)
                        break
                    case 3:
                        await step.context.sendActivity(`${this.dateTime}`)
                        break
                    case 4:
                        const estadoClima: EstadoClimaDialogs = new EstadoClimaDialogs('EstadoClima')
                        break
                    default:
                        break
                }
                return await step.endDialog()
            }
        ]))
    }
}