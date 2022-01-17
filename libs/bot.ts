import { ConversationState, TurnContext } from 'botbuilder'
import { DialogSet, ChoicePrompt } from 'botbuilder-dialogs'
import { Opcion1Pregunta1Dialog } from '../dialogs/Opcion1Pregunta1.dialog'
import { AyudaOpcionesDialogs } from '../dialogs/AyudaOpciones.dialogs'
import { EstadoClimaDialogs } from '../dialogs/estadoClima.dialogs'
import { FechaHoraDialogs } from '../dialogs/FechaHora.dialogs'

export class EchoBot {

    private _dialogs: DialogSet
    private _conversationState: ConversationState

    constructor(dialog: DialogSet, conversationState: ConversationState) {
        this._dialogs = dialog
        this._conversationState = conversationState
        this.addDialogs()
    }

    async onTurn(context: TurnContext) {

        const dc = await this._dialogs.createContext(context)
        await dc.continueDialog()
        if (context.activity.text != null && context.activity.text.toLowerCase() === 'ayuda') {
            await dc.beginDialog("Ayuda")
        } else if (context.activity.text != null && context.activity.text.toLowerCase() === 'este es el chatbot de presentacion') {
            await dc.beginDialog("Opcion1Pregunta1")
        } else if (context.activity.text != null && context.activity.text.toLowerCase().includes('clima')) {
            await dc.beginDialog("EstadoClima")
        } else if (context.activity.text != null && (context.activity.text.toLowerCase().includes('hora') || context.activity.text.toLowerCase().includes('fecha'))) {
            await dc.beginDialog("FechaHora")
        } else {
            await context.sendActivity(`Disculpame, no te entiendo!`)
        }

        await this._conversationState.saveChanges(context)
    }

    private addDialogs(): void {
        this._dialogs.add(new AyudaOpcionesDialogs('Ayuda'))
        this._dialogs.add(new Opcion1Pregunta1Dialog('Opcion1Pregunta1'))
        this._dialogs.add(new EstadoClimaDialogs('EstadoClima'))
        this._dialogs.add(new FechaHoraDialogs('FechaHora'))
        this._dialogs.add(new ChoicePrompt('choicePrompt'))
    }
}

