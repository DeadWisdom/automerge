import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/automerge.js",
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
  },
  plugins: [commonjs(), nodeResolve()],
};
