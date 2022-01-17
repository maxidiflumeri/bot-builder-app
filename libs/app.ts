import { BotFrameworkAdapter, ConversationState, MemoryStorage } from "botbuilder";
import * as restify from "restify";
import {EchoBot} from './bot'
import { DialogSet } from "botbuilder-dialogs";

const conversationState = new ConversationState(new MemoryStorage())
const dialogs = new DialogSet(conversationState.createProperty('dialogState'))

const server = restify.createServer()
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log(`${server.name} listening on ${server.url}`)
});

const adapter = new BotFrameworkAdapter({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

const echo: EchoBot = new EchoBot(dialogs, conversationState)

server.post('/api/messages', (res, req) => {
    adapter.processActivity(res, req, async (context) => {
        await echo.onTurn(context)
    });
});
