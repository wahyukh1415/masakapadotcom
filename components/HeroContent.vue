<template>
  <div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-3/6 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose font-bold w-full">masakapa.com</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Mudah dan Menyenangkan untuk menjadi Juru Masak
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Membantu Anda memasak berbagai hidangan yang sederhana, simple dan memanjakan lidah kita
        </p>

        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-md my-6 py-4 px-8 shadow-lg"
          @click="subscription"
        >
          Subscribe
        </button>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/6 py-6 text-center">
        <img class="w-full md:w-4/5 z-50 mx-auto" src="~/assets/img/hero.png" alt="imagehero" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroContent',
  methods:{
    subscription(){
      alert('terima kasih sudah men subcribe website kami')
    }
  }
}
</script>
