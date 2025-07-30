import APIRequest from "./api";

export async function sendAIMessage(messages,language="en") {
    let bot_message = null;
    try {
        const response = await APIRequest.post('ai-message',{ messages: messages,language:language });
        bot_message = await response.data;

    } catch (error) {
        if (error.response && error.response.status === 404) {
            bot_message = null
        } else {

            console.error(error);
        }
    }
    return bot_message;

}