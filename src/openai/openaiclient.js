import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default async function resond(messages) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a very helpful assistant ,You try to help users in any way possible , remember not to suggest anything'},
    { role: 'user', content: messages}],
    model: 'gpt-3.5-turbo',
  }).then(res=> res.choices[0].message.content)


  return chatCompletion
}

