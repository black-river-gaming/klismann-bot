const { Events } = require("discord.js");
const { getAnswer } = require("../services/klismann");

const stripMentions = (content) => {
  return content.replace(/(<@.*?>)/g, "");
};

const init = async (client) => {
  client.on(Events.MessageCreate, async (message) => {
    if (message.author === client.user) return;
    if (!message.mentions.users.has(client.user.id)) return;
    console.log(stripMentions(message.content));
    return await message.reply(await getAnswer(stripMentions(message.content)));
  });
};

module.exports = {
  name: "messages",
  init,
};
