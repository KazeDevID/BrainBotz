module.exports = {
  name: 'ai',
  code: async(kaze) => {
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
try {
const completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: `${kaze.args.join(" ")}`,
});
kaze.reply({text: `${completion.data.choices[0].text}`});
} catch(err) {
  kaze.reply({text: `${err}`})
  }
}
}