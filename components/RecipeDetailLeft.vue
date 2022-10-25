<template>
  <div class="flex flex-wrap">
    <div class="w-5/6 sm:w-1/2 m-auto px-2">
      <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
        {{ headline }}
      </h3>
      <p class="text-gray-600 mb-1">
        Author: {{ author }} 
      </p>
      <p class="text-gray-600 mb-3 font-bold">
        {{ datePublished }} 
      </p>
      <p class="text-gray-600 mb-3">
        {{ content }}
      </p>
      <h3 class="text-3xl text-gray-600 font-bold leading-none mb-3">Ingredient</h3>
      <div v-if="ingredient.length">
        <ul v-for="(data, index) in ingredient" v-bind:Key="index" class="text-gray-600 mb-3">
          <li>
            - {{ data }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-gray-600 mb-3">
          Tidak ada yang ingridient
        </p>
      </div>
      <h3 class="text-3xl text-gray-600 font-bold leading-none mb-3">Item yang dibutuhkan</h3>
      <div v-if="needItem.length">
        <ul v-for="(data, index) in needItem" v-bind:Key="index" class="text-gray-600 mb-3">
          <li>
            <img :src="data.thumb_item" class="w-14 h-auto" alt="need Item">{{ data.item_name }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-gray-600 mb-3">
          Tidak ada yang dibutuhkan
        </p>
      </div>
      <h3 class="text-3xl text-gray-600 font-bold leading-none mb-3">Step by Step</h3>
      <div v-if="Step.length">
        <ul v-for="(data, index) in Step" v-bind:Key="index" class="text-gray-600 mb-3">
          <li>
            <p>
            {{ data }}
            </p>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-gray-600 mb-3">
          Tidak ada yang stp by step
        </p>
      </div>
    </div>
    <div class="w-full sm:w-1/2 p-6">
      <slot name="svg" class="w-3/4 h-auto" />
      <p class="text-gray-600 mb-3">
        Tingkat Kesulitan: {{ difficulty }}
      </p>
      <p class="text-gray-600 mb-3">
        Saran Penyajian: {{ serving }}
      </p>
      <p class="text-gray-600 mb-3">
        Waktu Untuk Memasak: {{ time }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecipeLeft',
  props: {
    headline: {
      type: String,
      required: false
    },
    author: {
      type: String,
      required: false
    },
    datePublished: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    ingredient: {
      type: Array,
      required: false
    },
    needItem: {
      type: Array,
      required: false
    },
    Step: {
      type: Array,
      required: false
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
  }
}
</script>
