<template>
  <div>
    <nav>
      <img :src="require('@/assets/imgs/logo.png')" height="50" @click="scrollToSection('contact')">
      <ul class="navbar_nav">
        <li class="nav_items" @click="scrollToSection('about')">
          關於我
        </li>
        <li class="nav_items" @click="scrollToSection('skills')">
          技術能力
        </li>
        <li class="nav_items" @click="scrollToSection('portfolio')">
          作品集
        </li>
      </ul>
    </nav>
    <Nuxt />
    <footer>
      <p>Copyright © 2021 RayLin All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(destination) {
      const targetSection = document.getElementById(destination);
      window.scrollTo({
        top: targetSection.offsetTop - (window.innerHeight / 3),
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">

</style>
