require("dotenv").config();
const client = require("../src/bot.js");

async function run() {
  try {
    await client.run();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
