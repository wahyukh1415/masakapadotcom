<template>
  <div
    :class="classList"
    class="w-full w-5/6 lg:w-1/3 p-6 flex flex-col flex-grow flex-shrink drop-shadow-md"
  >
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
    >
      <a href="#" class="flex flex-wrap no-underline hover:no-underline">
        <p class="w-full text-gray-600 text-xs md:text-sm px-6">
          <img class="text-center" :src="thumb" alt="">
        </p>
        <div class="w-full font-bold text-xl text-gray-800 px-6">
          {{ title }}
        </div>
        <p class="w-full text-gray-600 text-xs md:text-sm px-6 mt-2">
          Tingkat kesulitan: {{ difficulty }}
        </p>
        <p class="w-full text-gray-600 text-xs md:text-sm px-6">
          Waktu untuk memasak: {{ time }}
        </p>
        <p class="w-full text-gray-600 text-xs md:text-sm px-6">
          Saran Penyajian: {{ serving }}
        </p>
      </a>
    </div>
    <div
      v-if="renderAction"
      class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow py-1 px-6"
    >
      <div class="flex items-center justify-end">
        <button
          class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-md my-6 py-4 px-8 shadow-lg"
          @click.prevent="onClick"
        >
          {{ action }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserColumn',
  props: {
    rows: {
      type: Number,
      required: true,
      validator: value => {
        return value >= 1 && value <= 6
      }
    },
    action: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: ''
    },
    thumb: {
      type: String,
      required: ''
    },
    difficulty: {
      type: String,
      required: ''
    },
    time: {
      type: String,
      required: ''
    },
    serving: {
      type: String,
      required: ''
    },
  },
  computed: {
    classList() {
      return `md:w-1/${this.rows}`
    },
    renderAction() {
      return this.action !== ''
    }
  },
  methods: {
    onClick() {
      // NOTE: is fired, but not handled in this template
      this.$emit('clicked')
    }
  }
}
</script>
