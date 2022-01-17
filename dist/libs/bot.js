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
const Opcion1Pregunta1_dialog_1 = require("../dialogs/Opcion1Pregunta1.dialog");
const AyudaOpciones_dialogs_1 = require("../dialogs/AyudaOpciones.dialogs");
class EchoBot {
    constructor(dialog, conversationState) {
        this._dialogs = dialog;
        this._conversationState = conversationState;
        this.addDialogs();
    }
    onTurn(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const dc = yield this._dialogs.createContext(context);
            yield dc.continueDialog();
            if (context.activity.text != null && context.activity.text.toLowerCase() === 'ayuda') {
                yield dc.beginDialog("Ayuda");
            }
            else if (context.activity.text != null && context.activity.text.toLowerCase() === 'este es el chatbot de presentacion') {
                yield dc.beginDialog("Opcion1Pregunta1");
            }
            else {
                yield context.sendActivity(`Disculpame, no te entiendo!`);
            }
            yield this._conversationState.saveChanges(context);
        });
    }
    addDialogs() {
        this._dialogs.add(new AyudaOpciones_dialogs_1.AyudaOpcionesDialogs('Ayuda'));
        this._dialogs.add(new Opcion1Pregunta1_dialog_1.Opcion1Pregunta1Dialog('Opcion1Pregunta1'));
        this._dialogs.add(new botbuilder_dialogs_1.ChoicePrompt('choicePrompt'));
    }
}
exports.EchoBot = EchoBot;
//# sourceMappingURL=bot.js.map