const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-YPaNawdE8MoEGhn7tVH8KMaH",
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new OpenAIApi(configuration);

module.exports = client;
