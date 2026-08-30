import { PromptTemplate } from "langchain/prompts";
import { OpenAI } from "langchain/llms/openai"
import { StructuredOutputParser } from "langchain/output_parsers";

import z from 'zod';

const cv = {
    name: "Alex Doe",
    title: "Full Stack Developer",
    contact: {
      address: "City, Country",
      email: "hello@example.com",
      phone: "+00 000 000 0000",
      linkedin: "/alex-doe",
    },
    experience: [
      {
        company: "Acme Corp",
        position: "Senior Full Stack Developer",
        description: [
          "Built and maintained web applications with React, Node.js and PostgreSQL.",
          "Designed REST APIs and integrated third-party services.",
          "Wrote unit and integration tests.",
          "Worked in an agile team and reviewed pull requests.",
        ],
        period: "JANUARY 2022 - PRESENT",
      },
      {
        company: "Example Labs",
        position: "Full Stack Developer",
        description: [
          "Developed a dashboard using React, Node.js and MongoDB.",
          "Containerized services with Docker and deployed to the cloud.",
          "Collaborated with design and product on new features.",
        ],
        period: "JUNE 2020 - DECEMBER 2021",
      },
      {
        company: "Startup Inc",
        position: "Software Developer",
        description: [
          "Implemented frontend features and internal admin tools.",
          "Supported existing APIs and fixed production issues.",
        ],
        period: "JANUARY 2018 - MAY 2020",
      },
    ],
    languages: {
      ENGLISH: "C1",
    },
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Docker",
      "AWS",
      "SQL",
      "REST APIs",
      "CSS",
      "HTML",
    ],
  };
  
  
const parser = StructuredOutputParser.fromZodSchema(z.object({
    response: z.any().describe('The response for the question asked by the recluter based on the resume.'),
}));

const getPrompt = async (entry:string) => {
    const format_instructions = parser.getFormatInstructions();

    const prompt = new PromptTemplate({
        template: `Given the CV data provided in JSON format: \n {cv} \n Role-play as the applicant, using the information from the CV to answer questions from the recruiter. When asked about experiences or details from the CV, provide specific answers using the data. Create lists or tables when appropriate. For instance, if asked about work experience, provide the list of companies from the CV. If the recruiter explicitly asks for the CV or resume, respond with 'response': 'cv requested'. Answer accordingly and following the provided format! Please remember to send a STRING. It has to be easy to parse using JSON.parse(). If the response is an array, just join all its items separated by a space (" ") . You have to answer quickly and briefly. If they ask, I'm a SENIOR developer. Don't forget that you are here to help me to find new jobs, so try to say good things about me and try to "sell me" but being honest.  \n {format_instructions} \n {entry}`,
        inputVariables: ['entry','cv'],
        partialVariables: {format_instructions},
    });
    const input = await prompt.format({
        entry,
        cv: JSON.stringify(cv, null, 2),
    });
    return input;
}

export const askQuestionToGPT = async (prompt)=> {
    const input = await getPrompt(prompt);
    const model = new OpenAI({
        temperature:0,
        modelName:"gpt-3.5-turbo",
    });
    let result = await model.call(input);
    try{
        return parser.parse(result);
    }catch(e){
        console.error(e);
    }
}