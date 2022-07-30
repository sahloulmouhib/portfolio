import {
  COLOR_BG,
  COLOR_BG_LIGHT,
  COLOR_BG_VARIANT,
  COLOR_BG_VARIANT_LIGHT,
  COLOR_LIGHT,
  COLOR_LIGHT_LIGHT,
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT,
  COLOR_PRIMARY_VARIANT,
  COLOR_PRIMARY_VARIANT_LIGHT,
  COLOR_WHITE,
  COLOR_WHITE_LIGHT,
} from "./colors";

export const DARK_MODE = {
  "--color-bg": COLOR_BG,
  "--color-bg-variant": COLOR_BG_VARIANT,
  "--color-primary": COLOR_PRIMARY,
  "--color-primary-variant": COLOR_PRIMARY_VARIANT,
  "--color-white": COLOR_WHITE,
  "--color-light": COLOR_LIGHT,
};

export const LIGHT_MODE = {
  "--color-bg": COLOR_BG_LIGHT,
  "--color-bg-variant": COLOR_BG_VARIANT_LIGHT,
  "--color-primary": COLOR_PRIMARY_LIGHT,
  "--color-primary-variant": COLOR_PRIMARY_VARIANT_LIGHT,
  "--color-white": COLOR_WHITE_LIGHT,
  "--color-light": COLOR_LIGHT_LIGHT,
};
