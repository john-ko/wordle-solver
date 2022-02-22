import { GetterTree, ActionTree, MutationTree } from 'vuex'
import WORDS from './word-list.json'

export enum GUESS_COLOR {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  GREY = 'GREY',
}

export interface Letter {
  letter: string
  type: GUESS_COLOR
  position?: number
}

export interface SolverState {
  counter: number
  words: string[]
  guesses: Letter[]
  filteredWords: string[]
}

export const state: () => SolverState = () => ({
  counter: 0,
  words: WORDS,
  guesses: [],
  filteredWords: [],
})

export type RootState = ReturnType<typeof state>

export interface Mutations {
  increment(state: SolverState): void
  setFilteredWords(state: SolverState, words: string[]): void
}

export const mutations: MutationTree<RootState> = {
  increment(state: SolverState) {
    state.counter++
  },
  set_filteredWords(state: SolverState, words: string[]) {
    state.filteredWords = words
  },
  add_guesses(state: SolverState, guesses: Letter[]) {
    state.guesses.push(...guesses)
  },
}

export const actions: ActionTree<RootState, RootState> = {
  submit_guess({ commit, state }, guesses: Letter[]) {
    let filteredWords = state.words
    if (state?.filteredWords?.length) {
      filteredWords = state.filteredWords
    }
    commit('add_guesses', guesses)
    const words = solver(state.guesses, filteredWords)
    commit('set_filteredWords', words)
  },
}

export const getters: GetterTree<RootState, RootState> = {
  get_filteredWords(state) {
    return state.filteredWords
  },
}

export function solver(guesses: Letter[], words: string[]) {
  let filteredWords = [...words]
  for (const guess of guesses) {
    filteredWords = filterWords(guess, filteredWords)
  }

  return filteredWords
}

export function filterWords(guess: Letter, filteredWords: string[]): string[] {
  if (guess.type === 'GREY') {
    return filterGreyLetter(guess.letter, filteredWords)
  }

  if (guess.position === undefined) {
    throw new Error(
      `yellow or green with unknown position ${guess.letter}, ${guess.type}`
    )
  }

  if (guess.type === 'GREEN') {
    return filterGreenLetter(guess.letter, guess.position, filteredWords)
  }

  // must be yellow
  return filterYellowLetter(guess.letter, guess.position, filteredWords)
}

export function filterGreyLetter(letter: string, words: string[]): string[] {
  return words.filter((word) => !word.includes(letter))
}

export function filterYellowLetter(
  letter: string,
  pos: number,
  words: string[]
) {
  return words.filter((word) => word.includes(letter) && word[pos] !== letter)
}

export function filterGreenLetter(
  letter: string,
  pos: number,
  words: string[]
) {
  return words.filter((word) => word[pos] === letter)
}
