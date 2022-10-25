<template>
  <div>
    <heroTop/>
    <teasers />
  </div>
</template>

<script>
import HeroTop from '@/components/HeroTop'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'LandingPage',
  components: {
    heroTop: HeroTop,
    features: Features,
    teasers: Teasers,
    'call-to-action': CallToAction
  },
}
</script>