<template>
  <div class="solver">
    <solution-set :current-list="guesses" :current-guess="currentGuess" />
    <div class="a">
      <game-keyboard
        @key-clicked="letterHandler"
        @back-clicked="backHandler"
        @enter-clicked="enterHandler"
      />
      <letter-selector :letter="letter" @color-clicked="colorHandler" />
    </div>
    {{ words }}
  </div>
</template>

<script>
export default {
  // 18:9   error    Component name "Solver" should always be multi-word
  // solver-bolver it is
  name: 'SolverBolver',
  data() {
    return {
      letter: '',
      guesses: [],
      currentGuess: [],
    }
  },
  computed: {
    words() {
      return this.$store.state.solver.filteredWords
    },
  },
  methods: {
    letterHandler(letter) {
      this.letter = letter
    },
    backHandler() {
      this.currentGuess.pop()
    },
    enterHandler() {
      this.guesses.push(this.currentGuess)

      this.$store.dispatch('solver/submit_guess', this.currentGuess)
      // run solution
      this.currentGuess = []
    },
    colorHandler(color) {
      this.currentGuess.push({
        letter: this.letter,
        type: color,
        position: this.currentGuess.length,
      })

      this.letter = ''
    },
  },
}
</script>

<style>
.solver {
  margin: 0 auto;
  width: 500px;
}

/* global colors */

.yellow {
  background: #d9c457;
}

.grey {
  background: #646464;
}

.green {
  background: #538d4a;
}
</style>
