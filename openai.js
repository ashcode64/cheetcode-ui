import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: 'sk-_TnA6mTAAfUgSApmbkRV-B1KZwqKF7RAT0jJnupD8TT3BlbkFJ6-m4IJSpStrEgxBd3STj5fcRSZyuFM9DwP0A1kadoA',
    dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAi(message) {
    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        max_tokens: 256,
        temperature: 0.7,
    });
    return res.choices[0].message.content;
}