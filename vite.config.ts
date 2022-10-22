import react from '@vitejs/plugin-react';
import { UserConfig, ConfigEnv } from 'vite';
import { join } from 'path';

const srcRoot = join(__dirname, 'src');

export default ({ command }: ConfigEnv): UserConfig => {
  // DEV
  if (command === 'serve') {
    return {
      root: srcRoot,
      base: '/',
      plugins: [react()],
      resolve: {
        alias: [
          { find: '@assets', replacement: join(__dirname, '/src/assets') },
          {
            find: '@components',
            replacement: join(__dirname, '/src/components')
          },
          {
            find: '@layouts',
            replacement: join(__dirname, '/src/layouts')
          },
          { find: '@hooks', replacement: join(__dirname, '/src/hooks') },
          { find: '@store', replacement: join(__dirname, '/src/store') },
          { find: '@services', replacement: join(__dirname, '/src/services') },
          { find: '@pages', replacement: join(__dirname, '/src/pages') },
          { find: '@utils', replacement: join(__dirname, '/src/utils') },
          { find: '@types', replacement: join(__dirname, '/src/types') },
          { find: '@router', replacement: join(__dirname, '/src/router') }
        ]
      },
      build: {
        outDir: join(srcRoot, '/out'),
        emptyOutDir: true,
        rollupOptions: {}
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT
      },
      optimizeDeps: {
        exclude: ['path']
      }
    };
  }
  // PROD
  return {
    root: srcRoot,
    base: './',
    plugins: [react()],
    resolve: {
      alias: [
        { find: '@assets', replacement: join(__dirname, '/src/assets') },
        {
          find: '@components',
          replacement: join(__dirname, '/src/components')
        },
        {
          find: '@layouts',
          replacement: join(__dirname, '/src/layouts')
        },
        { find: '@hooks', replacement: join(__dirname, '/src/hooks') },
        { find: '@store', replacement: join(__dirname, '/src/store') },
        { find: '@services', replacement: join(__dirname, '/src/services') },
        { find: '@pages', replacement: join(__dirname, '/src/pages') },
        { find: '@utils', replacement: join(__dirname, '/src/utils') },
        { find: '@types', replacement: join(__dirname, '/src/types') },
        { find: '@router', replacement: join(__dirname, '/src/router') }
      ]
    },
    build: {
      outDir: join(srcRoot, '/out'),
      emptyOutDir: true,
      rollupOptions: {}
    },
    server: {
      port: process.env.PORT === undefined ? 3000 : +process.env.PORT
    },
    optimizeDeps: {
      exclude: ['path']
    }
  };
};
