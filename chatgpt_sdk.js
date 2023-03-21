const axios = require('axios');
require('dotenv').config();

class ChatGPT {
    constructor(apiKey) {
        this.apiKey = process.env.OPENAI_API_KEY;
        this.endpoint = 'https://api.openai.com/v1/engines/davinci/completions';  // This is an example; replace with the actual endpoint if different.
    }

    async generateResponse(prompt, maxTokens = 150, retries = 3, retryDelay = 1000) {
        const headers = {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
        };

        const data = {
            prompt: prompt,
            max_tokens: maxTokens,
        };

        while (retries > 0) {
            try {
                const response = await axios.post(this.endpoint, data, {headers: headers});
                return response.data.choices[0].text.trim();
            } catch (error) {
                if (error.response && error.response.status === 429 && retries > 0) {
                    retries -= 1;
                    await new Promise(res => setTimeout(res, retryDelay));
                } else {
                    throw new Error(`Failed to get response from ChatGPT: ${error.message}`);
                }
            }
        }
        throw new Error('Failed to get response from ChatGPT after multiple retries due to rate limits.');
    }
}

module.exports = ChatGPT;