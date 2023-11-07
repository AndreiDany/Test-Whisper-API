import OpenAI from "openai";

const openai = new OpenAI();

const fs = require('fs');

const audioFilePath = "./audio.mp4a";

const audioFile  = fs.readFileSync(audioFilePath);

async function main() {

  const transcript = await openai.audio.transcriptions.create({
    model:"whisper-1",
    file: audioFile,
    responseFormat: "text"
  });

  console.log(transcript);
}

main();