loadEnv()

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client.ts";
import { loadEnv } from "#/utils.ts";

const db = new PrismaClient({ adapter: new PrismaPg(process.env.DATABASE_URL!) });

export { db };