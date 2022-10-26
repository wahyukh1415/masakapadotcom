<template>
  <footer class="bg-gradient-to-r from-pink-600 to-amber-400">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6 sm:text-center text-center">
        <div class="flex-1 mb-6">
          <p class="no-underline font-bold text-white hover:underline">{{date}} <span>©</span> Powered by</p>
          <logo />
        </div>

        <div class="flex-1">
          <p class="uppercase font-bold text-white md:mb-6">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >FAQ</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Help</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Support</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase font-bold text-white md:mb-6">Legal</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Terms</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Privacy</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase font-bold text-white md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Facebook</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Linkedin</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase font-bold text-white md:mb-6">Company</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Official Blog</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >About Us</a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="#"
                class="no-underline hover:underline text-slate-100 font-semibold"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'TheFooter',
  components: {
    logo: Logo
  },
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
