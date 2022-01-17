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
class Opcion1Pregunta1Dialog extends botbuilder_dialogs_1.ComponentDialog {
    constructor(dialogId) {
        super(dialogId);
        this.addDialog(new botbuilder_dialogs_1.WaterfallDialog('Opcion1Pregunta1', [
            (step) => __awaiter(this, void 0, void 0, function* () {
                yield step.context.sendActivity(`Si, este es el chatbot de presentación.`);
                yield step.context.sendActivity(`Si tiene otra consulta, vuelve a escribir "ayuda"`);
                return yield step.endDialog();
            })
        ]));
    }
}
exports.Opcion1Pregunta1Dialog = Opcion1Pregunta1Dialog;
//# sourceMappingURL=Opcion1Pregunta1.dialog.js.map