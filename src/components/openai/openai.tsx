import OpenAI from 'openai';

const openAi = new OpenAI({
    apiKey: "your_api_key_here",
    dangerouslyAllowBrowser: true //
});

export async function sendMsgOpenAi(message: string) {
    const res = await openAi.chat.completions.create({
        model: "gpt-3.5-turbo-0125", // Ensure you use the exact model name as required
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000, // Adjust token limit if necessary from 10000 to something more typical for chat, like 1000
        top_p: 1,
        presence_penalty: 0,
    });

    return res.choices[0].message.content;  // Adjusted to fit the structure of the API response
}
