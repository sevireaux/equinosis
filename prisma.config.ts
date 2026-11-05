import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
  generator: {
    name: 'client',
    provider: 'prisma-client-js',
  }
});


