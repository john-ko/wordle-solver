<template>
  <div v-if="letter" class="letter-selector">
    <div class="row">
      <button class="letter grey" @click="clickHandler('GREY')">
        {{ letter }}
      </button>
      <button class="letter yellow" @click="clickHandler('YELLOW')">
        {{ letter }}
      </button>
      <button class="letter green" @click="clickHandler('GREEN')">
        {{ letter }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LetterSelector',
  props: {
    letter: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickHandler(color) {
      this.$emit('color-clicked', color)
    },
  },
}
</script>

<style scoped>
.letter-selector {
  width: 300px;
  margin: 0 auto;
}

.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}

.letter {
  width: 100%;
  height: 92px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  box-sizing: border-box;
  text-transform: uppercase;
  color: #fff;
  user-select: none;
}
</style>
