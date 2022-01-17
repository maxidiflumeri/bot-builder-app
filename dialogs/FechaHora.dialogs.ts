import { ComponentDialog, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs'
import * as moment from 'moment'
import 'moment/locale/es';

export class FechaHoraDialogs extends ComponentDialog {

    private dateTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    
    constructor(dialogId: string) {
        super(dialogId)
        this.addDialog(new WaterfallDialog('FechaHora', [
            async (step: WaterfallStepContext) => {
                await step.context.sendActivity(`${this.dateTime}`)
                return await step.endDialog()
            },
        ]))
    }
}