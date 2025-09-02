import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

"DATABASE_URL="postgresql://neondb_owner:npg_MzZhwgE5X8WT@ep-cool-field-af65jghj.c-2.us-west-"

    "DATABASE_URL="postgresql://neondb_owner:npg_MzZhwgE5X8WT@ep-cool-field-af65jghj.c-2.us-west-",
  );
}

export const pool = new Pool({ connectionString: process.env."DATABASE_URL="postgresql://neondb_owner:npg_MzZhwgE5X8WT@ep-cool-field-af65jghj.c-2.us-west-"});
export const db = drizzle({ client: pool, schema });
