import { resolve } from 'path';

const r = (p: string) => resolve(__dirname, p);

export const alias: Record<string, string> = {
  lynmix: r('./packages/lynmix/src/'),
  '@lynmix/cli': r('./packages/cli/src/'),
  '@lynmix/core': r('./packages/core/src/'),
  '@lynmix/react': r('./packages/react/src/'),
  '@lynmix/vue': r('./packages/vue/src/'),
  '@lynmix/solid': r('./packages/solid/src/'),
  '@lynmix/node': r('./packages/node/src/'),
  '@lynmix/serve': r('./packages/serve/src/'),
  '@lynmix/runtime': r('./packages/runtime/src/'),
  '@lynmix/express': r('./packages/express/src/'),
  'create-lynmix': r('./packages/create-lynmix/src/'),
};
