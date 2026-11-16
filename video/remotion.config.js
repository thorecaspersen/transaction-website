import path from 'node:path';
import { Config } from '@remotion/cli/config';

Config.overrideWebpackConfig((config) => ({
  ...config,
  resolve: { ...config.resolve, roots: [path.resolve('public')] },
}));
