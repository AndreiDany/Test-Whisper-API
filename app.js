import OpenAI from "openai";

const openai = new OpenAI();

const fs = require('fs');
data = await fs.readFile(audioFilePath)

const audioFilePath = '/audio.mp4a';

async function main() {
  const transcript = await openai.audio.transcriptions.create({
    model:"whisper-1",
    file: data
  });

  console.log(transcript);
}

main();