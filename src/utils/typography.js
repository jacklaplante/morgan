import Typography from "typography";
import stAnnesTheme from "typography-theme-st-annes";

import { colors, animation } from "./presets";

const typography = new Typography(stAnnesTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

// Back out the below once Typography is upgraded for es6
export const { scale, rhythm, options } = typography;
export default typography;
