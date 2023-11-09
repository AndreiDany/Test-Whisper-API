import fs from "fs";
import path from "path";
import OpenAI, { toFile } from "openai";

const openai = new OpenAI({
  apiKey: ''
});

const audioFilePath = path.resolve("speech.mp3");
console.log(audioFilePath)
async function main() {

const audioFile = await fs.readFileSync(audioFilePath);

const params = {
  model: 'whisper-1',
  file: toFile(audioFile)
};

transcriptionSpech(params);

}

function transcriptionSpech(params) {
  const transcriptions = openai.audio.transcriptions.create(params)
  .then(transcription => {
    console.log(transcription);
  })
  .catch(error => {
    console.error('Eroare:', error);
  });
}

main();