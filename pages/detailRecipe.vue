<template>
  <div>
    <heroTop/>
    <recipeDetail/>
    <img src="~assets/img/wave-top.svg?inline" alt="asset masakapa.com" />
  </div>
</template>

<script>
import HeroTop from '@/components/HeroTop'
import RecipeDetail from '@/components/RecipeDetail'

export default {
  name: 'detailRecipe',
  components: {
    heroTop: HeroTop,
    recipeDetail: RecipeDetail
  },
}
</script>