import { loadEnv } from "#/utils.ts";
import { defineConfig } from "prisma/config";

loadEnv()

const DATABASE_URL = process.env["DATABASE_URL"]
if (!DATABASE_URL) {
  throw new Error("no existe DATABASE_URL en .env")
}

export default defineConfig({
  schema: "src/prisma/schema.prisma",
  migrations: {
    path: "src/prisma/migrations",
  },
  datasource: {
    url: DATABASE_URL,
  },
});
