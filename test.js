require('dotenv').config();

const ChatGPT = require('./chatgpt_sdk');

// Replace with your actual API key.

const chatGPT = new ChatGPT();

async function test() {
    try {
        const prompt = "Translate the following English text to French: 'Hello, how are you?'";
        const response = await chatGPT.generateResponse(prompt);
        console.log(response);
    } catch (error) {
        console.error(error.message);
    }
}

test();