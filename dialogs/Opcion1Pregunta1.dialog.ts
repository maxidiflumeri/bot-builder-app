import { ComponentDialog, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs'

export class Opcion1Pregunta1Dialog extends ComponentDialog{

    constructor(dialogId: string){
        super(dialogId)
        
        this.addDialog(new WaterfallDialog('Opcion1Pregunta1', [
            async (step: WaterfallStepContext) => {
                await step.context.sendActivity(`Si, este es el chatbot de presentación.`)
                await step.context.sendActivity(`Si tiene otra consulta, vuelve a escribir "ayuda"`)
                return await step.endDialog()
            }
        ]))
    }          
}