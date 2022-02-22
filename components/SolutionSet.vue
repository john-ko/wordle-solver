<template>
  <div class="solution-set">
    <div v-for="(guesses, index) in currentList" :key="index" class="row">
      <div
        v-for="guess in guesses"
        :key="guess.letter"
        class="tile"
        :class="guess.type.toLowerCase()"
      >
        {{ guess.letter }}
      </div>
    </div>
    <!-- current guess -->
    <div class="row">
      <div
        v-for="index in guessLength"
        :key="index"
        class="tile"
        :class="getClass(index)"
      >
        {{ getLetter(index) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionSet',
  props: {
    currentList: {
      type: Array,
      default: () => [],
    },
    currentGuess: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    guessLength() {
      return [0, 1, 2, 3, 4]
    },
  },
  methods: {
    getClass(index) {
      return this.currentGuess[index]?.type.toLowerCase() ?? ''
    },
    getLetter(index) {
      return this.currentGuess[index]?.letter ?? ''
    },
  },
}
</script>

<style scoped>
.row {
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}

.tile::before {
  content: '';
  display: inline-block;
  padding-bottom: 100%;
}

.tile {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  text-transform: uppercase;
  user-select: none;
  border: 2px solid #ccc;
  color: #eee;
}
</style>
