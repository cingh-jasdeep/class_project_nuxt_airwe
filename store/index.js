import { supportedLanguages, defaultLanguage } from '~/constants/index'

const navigatorLanguages = require('navigator-languages')
const navigatorLanguagesPref = navigatorLanguages()?.[0]?.slice(0, 2) // try to get user preference
const initLanguage =
  navigatorLanguagesPref in supportedLanguages
    ? navigatorLanguagesPref
    : defaultLanguage

export const state = () => ({
  userLanguage: initLanguage,
})

export const mutations = {
  switchLanguage(state, newVal) {
    state.userLanguage = newVal in supportedLanguages ? newVal : defaultLanguage
  },
}
