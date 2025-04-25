'use server';

/**
 * @fileOverview An AI agent to analyze project documents for risks, cost overruns, and schedule delays.
 *
 * - analyzeProjectDocumentation - A function that handles the project document analysis process.
 * - AnalyzeProjectDocumentationInput - The input type for the analyzeProjectDocumentation function.
 * - AnalyzeProjectDocumentationOutput - The return type for the analyzeProjectDocumentation function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AnalyzeProjectDocumentationInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A project document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  documentType: z.string().describe('The type of the document (e.g., contract, specification, daily report).'),
  projectName: z.string().describe('The name of the project.'),
});
export type AnalyzeProjectDocumentationInput = z.infer<typeof AnalyzeProjectDocumentationInputSchema>;

const AnalyzeProjectDocumentationOutputSchema = z.object({
  risks: z.array(z.string()).describe('Potential risks identified in the document.'),
  costOverruns: z.array(z.string()).describe('Potential cost overruns identified in the document.'),
  scheduleDelays: z.array(z.string()).describe('Potential schedule delays identified in the document.'),
  summary: z.string().describe('A summary of the document analysis.'),
});
export type AnalyzeProjectDocumentationOutput = z.infer<typeof AnalyzeProjectDocumentationOutputSchema>;

export async function analyzeProjectDocumentation(
  input: AnalyzeProjectDocumentationInput
): Promise<AnalyzeProjectDocumentationOutput> {
  return analyzeProjectDocumentationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeProjectDocumentationPrompt',
  input: {
    schema: z.object({
      documentDataUri: z
        .string()
        .describe(
          "A project document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
        ),
      documentType: z.string().describe('The type of the document (e.g., contract, specification, daily report).'),
      projectName: z.string().describe('The name of the project.'),
    }),
  },
  output: {
    schema: z.object({
      risks: z.array(z.string()).describe('Potential risks identified in the document.'),
      costOverruns: z.array(z.string()).describe('Potential cost overruns identified in the document.'),
      scheduleDelays: z.array(z.string()).describe('Potential schedule delays identified in the document.'),
      summary: z.string().describe('A summary of the document analysis.'),
    }),
  },
  prompt: `You are an AI assistant for project managers in the construction industry. Your task is to analyze project documents and identify potential risks, cost overruns, and schedule delays.

  Project Name: {{{projectName}}}
  Document Type: {{{documentType}}}
  Document Content: {{media url=documentDataUri}}

  Analyze the document content and provide the following:
  - A list of potential risks.
  - A list of potential cost overruns.
  - A list of potential schedule delays.
  - A summary of the document analysis.
  `,
});

const analyzeProjectDocumentationFlow = ai.defineFlow<
  typeof AnalyzeProjectDocumentationInputSchema,
  typeof AnalyzeProjectDocumentationOutputSchema
>(
  {
    name: 'analyzeProjectDocumentationFlow',
    inputSchema: AnalyzeProjectDocumentationInputSchema,
    outputSchema: AnalyzeProjectDocumentationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
