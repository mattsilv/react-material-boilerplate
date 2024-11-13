import postcssPresetEnv from "postcss-preset-env";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";

export default {
  plugins: [postcssPresetEnv(), postcssNested(), autoprefixer()],
};
