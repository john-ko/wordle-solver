<template>
  <div class="game-keyboard">
    <div class="row">
      <button @click="onClickHandler('q')">q</button>
      <button @click="onClickHandler('w')">w</button>
      <button @click="onClickHandler('e')">e</button>
      <button @click="onClickHandler('r')">r</button>
      <button @click="onClickHandler('t')">t</button>
      <button @click="onClickHandler('y')">y</button>
      <button @click="onClickHandler('u')">u</button>
      <button @click="onClickHandler('i')">i</button>
      <button @click="onClickHandler('o')">o</button>
      <button @click="onClickHandler('p')">p</button>
    </div>
    <div class="row">
      <div class="spacer half"></div>
      <button @click="onClickHandler('a')">a</button>
      <button @click="onClickHandler('s')">s</button>
      <button @click="onClickHandler('d')">d</button>
      <button @click="onClickHandler('f')">f</button>
      <button @click="onClickHandler('g')">g</button>
      <button @click="onClickHandler('h')">h</button>
      <button @click="onClickHandler('j')">j</button>
      <button @click="onClickHandler('k')">k</button>
      <button @click="onClickHandler('l')">l</button>
      <div class="spacer half"></div>
    </div>
    <div class="row">
      <button class="one-and-a-half" @click="enterhandler">ENTER</button>
      <button @click="onClickHandler('z')">z</button>
      <button @click="onClickHandler('x')">x</button>
      <button @click="onClickHandler('c')">c</button>
      <button @click="onClickHandler('v')">v</button>
      <button @click="onClickHandler('b')">b</button>
      <button @click="onClickHandler('n')">n</button>
      <button @click="onClickHandler('m')">m</button>
      <button class="one-and-a-half" @click="backHandler">←</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameKeyboard',
  methods: {
    onClickHandler(key) {
      this.$emit('key-clicked', key)
      // const guesses = [
      //   {
      //     letter: 'i',
      //     type: 'GREY',
      //   },
      //   {
      //     letter: 'r',
      //     type: 'YELLOW',
      //     position: 1
      //   },
      //   {
      //     letter: 'a',
      //     type: 'GREY'
      //   },
      //   {
      //     letter: 't',
      //     type: 'YELLOW',
      //     position: 3
      //   },
      //   {
      //     letter: 'e',
      //     type: 'YELLOW',
      //     position: 4
      //   },

      //   {
      //     letter: 'r',
      //     type: 'YELLOW',
      //     position: 0
      //   },

      //   {
      //     letter: 'e',
      //     type: 'YELLOW',
      //     position: 1
      //   },
      // ]

      // this.$store.dispatch('solver/submit_guess', guesses)
    },
    backHandler() {
      this.$emit('back-clicked')
    },
    enterhandler() {
      this.$emit('enter-clicked')
    },
  },
}
</script>

<style scoped>
.game-keyboard {
  margin: 0 auto;
  width: 100%;
}

.row {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}

button {
  font-family: inherit;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background: rgb(158 158 158);
  color: #eee;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}

.half {
  flex: 0.5;
}

.one-and-a-half {
  flex: 1.5;
  font-size: 12px;
}
</style>
