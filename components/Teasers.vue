<template>
  <section class="bg-white py-8">
  <loadingBar :isVisible="isLoading"/>
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        {{ $route.name === 'allRecipe' ? 'Semua Resep' : 'Rekomendasi Resep' }}
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div v-if="showRecipe.length" class="w-full flex flex-wrap">
        <teaser-column v-for="(recipe, index) in showRecipe" v-bind:key="index" :rows="3" :title="recipe.title"
          :thumb="recipe.thumb" :difficulty="recipe.difficulty" :time="recipe.times" :serving="recipe.serving"
          action="Detail" @clicked="toDetail(recipe.key)">
        </teaser-column>
      </div>
      <div v-else class="mx-auto">
        <p class="text-gray-600 text-center font-bold mb-32">
          Menu Masih Kosong
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import TeaserColumn from '@/components/TeaserColumn'
  import axiosInstances from '../utils/server'
  import LoadingBar from '@/components/LoadingBar'

  export default {
    name: 'Teasers',
    components: {
      'teaser-column': TeaserColumn,
      loadingBar:LoadingBar
    },
    data: function () {
      return {
        showRecipe: [],
        isLoading: true
      }
    },
    mounted() {
      this.fetchLatestRecipe()
    },
    methods: {
      async fetchLatestRecipe() {
        let self = this
        this.isLoading = true
        await axiosInstances({
            url: "/recipes",
            method: "get",
          })
          .then(({data}) => {
            if (self.$route.name === 'allRecipe') {
              if (data.results.length % 2 === 0) {
                this.showRecipe = data.results.slice(0, data.results.length - 1)
              } else {
                this.showRecipe = data.results
              }
            } else {
              this.showRecipe = data.results.slice(0, 3)
            }
            self.isLoading = false
          })
          .catch((err) => {
            console.log(err);
            alert(err)
            self.isLoading = false
          });
      },
      toDetail(key) {
        this.$router.push({name: 'detailRecipe', query: { key: key}})
      }
    },
  }

</script>
