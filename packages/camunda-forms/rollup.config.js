import pkg from './package.json';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

function pgl(plugins=[]) {
  return [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    ...plugins
  ];
}

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
    ],
    plugins: pgl()
  }
];