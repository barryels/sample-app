import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
  },
});
