<template>
  <section class="bg-white border-b py-8">
    <loadingBar :isVisible="isLoading"/>
    <div class="container max-w-5xl mx-auto m-8">
      <h1
        class="w-full my-6 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Detail Resep
      </h1>
      <div class="w-full mb-6">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <detail-recipe-left
        :headline="detailRecipe.title ? detailRecipe.title : 'Title'"
        :author="detailRecipe.author ? detailRecipe.author.user : '-'"
        :datePublished="detailRecipe.author ? detailRecipe.author.datePublished : '(-)'"
        :content="detailRecipe.desc ? detailRecipe.desc : 'Description'"
        :ingredient="detailRecipe.ingredient ? detailRecipe.ingredient : []"
        :needItem="detailRecipe.needItem ? detailRecipe.needItem : []"
        :step="detailRecipe.step ? detailRecipe.step : []"
        :difficulty="detailRecipe.difficulty ? detailRecipe.difficulty : '-'" 
        :time="detailRecipe.times ? detailRecipe.times : '-'" 
        :serving="detailRecipe.servings ? detailRecipe.servings : '-'"
      >
        <img v-if="detailRecipe.thumb" :src="detailRecipe.thumb" class="w-3/4 h-auto" alt="simple ingredient" slot="svg" />
        <div v-else slot="svg">
          <img src="~/assets/img/imageBroken.svg" class="w-3/4 h-3/4 mb-3" alt="image broken">
          <p class="text-gray-600 mb-3">
            Tidak Ada Gambar
          </p>
        </div>
      </detail-recipe-left>
    </div>
  </section>
</template>

<script>
import DetailRecipeLeft from '@/components/RecipeDetailLeft'
import axiosInstances from '../utils/server'
import LoadingBar from '@/components/LoadingBar'

export default {
  name: 'RecipeDetail',
  components: {
    'detail-recipe-left': DetailRecipeLeft,
    loadingBar:LoadingBar
  },
  data: function () {
      return {
        detailRecipe: {},
        isLoading: true
      }
    },
    mounted() {
      this.fetchLatestRecipe()
    },
    methods: {
      async fetchLatestRecipe() {
        let self = this
        self.isLoading = true
        await axiosInstances({
            url: "/recipe/" + this.$route.query.key,
            method: "get",
          })
          .then(({data}) => {
            this.detailRecipe = data.results
            self.isLoading = false
          })
          .catch((err) => {
            console.log(err);
            self.isLoading = false
          });
      },
    },
}
</script>
