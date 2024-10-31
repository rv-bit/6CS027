import type { Config } from 'drizzle-kit';

export default {
    dialect: 'sqlite',
    driver: 'expo',
    schema: './drizzle/schema',
    out: './drizzle/migrations',
} satisfies Config;