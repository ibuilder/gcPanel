import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const plugins = [];

if (process.env.GOOGLE_GENAI_API_KEY) {
  plugins.push(googleAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY,
  }));
} else {
  console.warn('GOOGLE_GENAI_API_KEY is not set, googleAI plugin will not be used.');
}

export const ai = genkit({
  promptDir: './prompts',
  plugins: plugins,
  model: 'googleai/gemini-2.0-flash',
});
