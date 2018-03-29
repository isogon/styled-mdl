import __ from 'lodash/fp/placeholder'
import invariant from 'invariant'
import mapValues from 'lodash/fp/mapValues'
import merge from 'lodash/merge'
import pipe from 'lodash/fp/flow'
import prop from 'lodash/fp/get'

import { contrastTone, darkVariant, lightVariant } from './colorTones'

export const THEME_KEY = 'mdl'

const BASE_THEME_OPTIONS = {
  preferredFont: '"Roboto", sans-serif',
  primary: undefined,
  secondary: undefined,
  text: {
    dark: {
      primary: 'rgb(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
      hint: 'rgba(0,0,0,0.38)',
      disabled: 'rgba(0,0,0,0.38)',
      icon: 'rgba(0,0,0,0.38)',
    },
    light: {
      primary: 'rgb(255,255,255)',
      secondary: 'rgba(255,255,255,0.7)',
      hint: 'rgba(255,255,255,0.5)',
      disabled: 'rgba(255,255,255,0.5)',
      icon: 'rgba(255,255,255,0.5)',
    },
  },
  background: 'rgb(255,255,255)',
}

const validateOptions = (options) => {
  invariant(
    options.primary && options.secondary,
    "Missing theme values. You must provide a color value for keys 'primary' and 'secondary'",
  )
}

const createBaseTheme = (options) => {
  validateOptions(options)
  return merge({}, BASE_THEME_OPTIONS, options)
}

export default function createTheme(options) {
  const base = createBaseTheme(options)
  const { primary, secondary, background, text } = base
  const primaryLight = lightVariant(base.primary)
  const primaryDark = darkVariant(base.primary)
  const secondaryLight = lightVariant(base.secondary)
  const secondaryDark = darkVariant(base.secondary)

  const contrastingTextFor = mapValues(pipe(contrastTone, prop(__, text)), {
    primary,
    primaryLight,
    primaryDark,
    secondary,
    secondaryLight,
    secondaryDark,
    background,
  })

  const theme = {
    ...base,
    // Primary
    primary,
    primaryLight,
    primaryDark,
    // Secondary
    secondary,
    secondaryLight,
    secondaryDark,
    // Text-primary on "primary" background
    textPrimaryOnPrimary: contrastingTextFor.primary.primary,
    textSecondaryOnPrimary: contrastingTextFor.primary.secondary,
    textHintOnPrimary: contrastingTextFor.primary.hint,
    textDisabledOnPrimary: contrastingTextFor.primary.disabled,
    textIconOnPrimary: contrastingTextFor.primary.icon,
    // Text-primary on "primary-light" background
    textPrimaryOnPrimaryLight: contrastingTextFor.primaryLight.primary,
    textSecondaryOnPrimaryLight: contrastingTextFor.primaryLight.secondary,
    textHintOnPrimaryLight: contrastingTextFor.primaryLight.hint,
    textDisabledOnPrimaryLight: contrastingTextFor.primaryLight.disabled,
    textIconOnPrimaryLight: contrastingTextFor.primaryLight.icon,
    // Text-primary on "primary-dark" background
    textPrimaryOnPrimaryDark: contrastingTextFor.primaryDark.primary,
    textSecondaryOnPrimaryDark: contrastingTextFor.primaryDark.secondary,
    textHintOnPrimaryDark: contrastingTextFor.primaryDark.hint,
    textDisabledOnPrimaryDark: contrastingTextFor.primaryDark.disabled,
    textIconOnPrimaryDark: contrastingTextFor.primaryDark.icon,
    // Text-primary on "secondary" background
    textPrimaryOnSecondary: contrastingTextFor.secondary.primary,
    textSecondaryOnSecondary: contrastingTextFor.secondary.secondary,
    textHintOnSecondary: contrastingTextFor.secondary.hint,
    textDisabledOnSecondary: contrastingTextFor.secondary.disabled,
    textIconOnSecondary: contrastingTextFor.secondary.icon,
    // Text-primary on "secondary-light" background
    textPrimaryOnSecondaryLight: contrastingTextFor.secondaryLight.primary,
    textSecondaryOnSecondaryLight: contrastingTextFor.secondaryLight.secondary,
    textHintOnSecondaryLight: contrastingTextFor.secondaryLight.hint,
    textDisabledOnSecondaryLight: contrastingTextFor.secondaryLight.disabled,
    textIconOnSecondaryLight: contrastingTextFor.secondaryLight.icon,
    // Text-primary on "secondary-dark" background
    textPrimaryOnSecondaryDark: contrastingTextFor.secondaryDark.primary,
    textSecondaryOnSecondaryDark: contrastingTextFor.secondaryDark.secondary,
    textHintOnSecondaryDark: contrastingTextFor.secondaryDark.hint,
    textDisabledOnSecondaryDark: contrastingTextFor.secondaryDark.disabled,
    textIconOnSecondaryDark: contrastingTextFor.secondaryDark.icon,
    // Text-primary on "background" background
    textPrimaryOnBackground: contrastingTextFor.background.primary,
    textSecondaryOnBackground: contrastingTextFor.background.secondary,
    textHintOnBackground: contrastingTextFor.background.hint,
    textDisabledOnBackground: contrastingTextFor.background.disabled,
    textIconOnBackground: contrastingTextFor.background.icon,
    // Text-primary on "light" background
    textPrimaryOnLight: text.dark.primary,
    textSecondaryOnLight: text.dark.secondary,
    textHintOnLight: text.dark.hint,
    textDisabledOnLight: text.dark.disabled,
    textIconOnLight: text.dark.icon,
    // Text-primary on "dark" background
    textPrimaryOnDark: text.light.primary,
    textSecondaryOnDark: text.light.secondary,
    textHintOnDark: text.light.hint,
    textDisabledOnDark: text.light.disabled,
    textIconOnDark: text.light.icon,
  }

  return { [THEME_KEY]: theme }
}
