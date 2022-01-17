import { ComponentDialog, PromptOptions, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs'
import { WeatherService } from '../services/weather.service'

export class EstadoClimaDialogs extends ComponentDialog {

    constructor(dialogId: string) {        
        super(dialogId)
        this.addDialog(new WaterfallDialog('EstadoClima', [
            async (step: WaterfallStepContext) => {
                const weather: WeatherService = new WeatherService()
                const currentWeather = await weather.getWeather('buenos-aires')
                await step.context.sendActivity(`El tiempo actual esta con ${currentWeather.data[0].weather.description} y la temperatura es de: ${currentWeather.data[0].temp}°C`)
                return await step.endDialog()
            },            
        ]))
    }
}

