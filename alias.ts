import { resolve } from 'path';

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  lynmix: r('./packages/lynmix/src/'),
};
