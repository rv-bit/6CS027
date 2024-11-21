import type { Config } from 'drizzle-kit';

export default {
    schema: './src/drizzle/schema',
    out: './src/drizzle/migrations',
    dialect: 'sqlite',
    driver: 'expo',
} satisfies Config;