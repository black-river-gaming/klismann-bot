const openai = require("../adapters/openai");

const FRASES = [
  "Eu tenho um primo que já viu isso aí, e na verdade é $answer",
  "Não pô, isso aí é $answer",
];

const getAnswer = async (content) => {
  try {
    // const response = await openai.createCompletion({
    //   model: "ada",
    //   prompt: [content],
    //   suffix: "Num sei",
    // });

    return FRASES[Math.floor(Math.random() * FRASES.length)].replace(
      "$answer",
      content.trim()
    );
  } catch (error) {
    console.log(`Error fetching answer: ${error.message}`);
    if (error.response.data) {
      console.log(error.response.data);
    }
    return "Aconteceu algo que jamais deveria acontecer. Não sei.";
  }
};

module.exports = {
  getAnswer,
};
