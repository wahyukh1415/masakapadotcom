<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Kenapa masakapa.com?
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <feature-right
        headline="Resep Simple"
        content="Kita bisa membuat resep sederhana dengan rasa yang luar biasa. melalui resep otentik, kita akan mendapatkan hidangan yang memanjakan lidah kita"
      >
        <img src="~assets/img/simpleRecipe.png?inline" class="w-3/4 h-auto" alt="simple recipe" slot="svg" />
      </feature-right>
      <feature-left
        headline="Ingridient Simple"
        content="melalui bahan-bahan sederhana kita bisa membuat berbagai macam masakan yang mengundang selera"
      >
        <img src="~assets/img/simpleIngredient.png?inline" class="w-3/4 h-auto " alt="simple ingredient" slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'Features',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft
  }
}
</script>
