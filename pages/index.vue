<template>
  <div class="main">
    <div class="container">
      <section id="contact" class="contact">
        <div class="contact_info">
          <p class="info_motto">
            敢於嘗試，才有突破
          </p>
          <h1 class="info_name">
            林家富
          </h1>
          <h1 class="info_name">
            Ray Lin
          </h1>
          <p class="info_email">
            <i class="fas fa-envelope" />
            mirror46258@gmail.com
          </p>
          <ul class="info_socialMedia">
            <!-- <li>
              <i class="fab fab fa-linkedin fa-2x" />
            </li> -->
            <li>
              <a target="_blank" href="https://raaaaaaaay86.medium.com/">
                <i class="fab fa-medium fa-2x" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Raaaaaaaay86">
                <i class="fab fa-github fa-2x" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/raylin4real/">
                <i class="fab fa-instagram-square fa-2x" />
              </a>
            </li>
          </ul>
        </div>
        <div class="contact_avatar">
          <img :src="require('@/assets/imgs/avatar.jpg')">
        </div>
      </section>
      <section id="about" class="about">
        <h2 class="title">
          關於我
        </h2>
        <div class="about_content">
          <p>
            目前主要以 Vue 為主要開發框架，且理解如何使用 Nuxt 來使用 SSR 或是 static site 來增進
            網頁的 SEO 績效。目前流行的 CSS 框架: Bootstrap,  TailwindCSS 也都有使用經驗。也懂
            透過使用 SCSS 預處理來規劃網頁 RWD 設計。對於後端需求(Express.js, Firebase)有概略理解。
            過去其他工作經常透過英文進行文字和口語溝通，對自身英文能力有相當信心。目前著重於前端領域，
            目前正在學習如何使用 TypeScript 開發，未來也想再學習 React.js 以滿足不同需求，
            希望更熟悉前端之技術後，也能夠往後端持續延伸技術知識。
          </p>
        </div>
      </section>
      <section id="skills" class="skills">
        <h2 class="title">
          技術能力
        </h2>
        <div class="skills_list">
          <ul>
            <li>HTML / CSS / JavaScript (ES6)</li>
            <li>理解基本 JQuery 使用，非必須情況，通常則以 VanillaJS 開發</li>
            <li>以 Vue / Vuex 開發 SPA，且有使用 Composition API 之經驗</li>
            <li>以 Nuxt 開發作品，透過 SSR 增進網站 SEO</li>
            <li>使用 SCSS 預處理規劃 RWD</li>
          </ul>
          <ul>
            <li>特殊需求時，可以 PUG 模板語言規劃 HTML</li>
            <li>Firebase + Express.js 開發電商購物車 API 並串接之經驗</li>
            <li>Bootstrap / TailwindCSS 框架規劃網頁版面</li>
            <li>具備基本 Git 使用觀念</li>
            <li>多益 TOEIC 835 分，且有實務工作應用英文之經驗</li>
          </ul>
        </div>
      </section>
      <section id="portfolio" class="portfolio">
        <div class="title">
          作品集
        </div>
        <div class="portfolio_grid">
          <template v-for="(cardData, index) in cardDatas">
            <PortfolioCard :key="index" :card-data="cardData" />
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard.vue';

export default {
  components: {
    PortfolioCard,
  },
  data() {
    return {
      cardDatas: [
        {
          imageName: 'nuxt-shop',
          title: '電商網站',
          skills: 'Nuxt, Firebase, Express.js, API串接',
          isHeroku: true,
          demoLink: 'https://ray-nuxt-shop.herokuapp.com/',
          gitLink: 'https://github.com/Raaaaaaaay86/NuxtShop/tree/fire',
        },
        {
          imageName: 'nuxt-hotel',
          title: '訂房預約',
          skills: 'Nuxt, API串接',
          isHeroku: true,
          demoLink: 'https://hotel-house.herokuapp.com/',
          gitLink: 'https://github.com/Raaaaaaaay86/nuxtHotel',
        },
        {
          imageName: 'nuxt-cloudDrive',
          title: '模擬雲端硬碟',
          skills: 'Nuxt, Firebase',
          isHeroku: true,
          demoLink: 'https://cloud-drive-raylin.herokuapp.com/',
          gitLink: 'https://github.com/Raaaaaaaay86/nuxt_firebase_cloud_drive',
        },
        {
          imageName: 'icon-roullete',
          title: '抽獎轉盤',
          skills: 'D3.js, Vue3(Composition API)',
          demoLink: 'http://quirky-mountain.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/roulette-icon',
        },
        {
          imageName: 'tic-tac-toe',
          title: '井字遊戲',
          skills: 'Vue3(Composition API), localStorage',
          demoLink: 'http://direful-pan.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/tic-tac-toe',
          mediumLink: 'https://raaaaaaaay86.medium.com/%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%B7%E4%BA%95%E5%AD%97%E9%81%8A%E6%88%B2%E8%B4%8F%E5%AE%B6-d2fd35e49f02',
        },
        {
          imageName: 'canvas',
          title: '繪畫板',
          skills: 'HTML5 canvas, Vue3(Composition API)',
          demoLink: 'http://offbeat-direction.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/draw-canvas',
        },
        {
          imageName: '60s-game',
          title: '60秒數學挑戰',
          skills: 'Vue3(Composition API)',
          demoLink: 'http://aquatic-sort.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/60-seconds-game',
        },
        {
          imageName: 'aqi',
          title: '台灣空汙儀表板',
          skills: 'PUG, RWD, Vue3(Composition API)',
          demoLink: 'http://brainy-power.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/aqi-dashboard',
        },
        {
          imageName: 'calculator',
          title: '計算機',
          skills: 'PUG, VanillaJS',
          demoLink: 'http://curvy-sand.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/calculator',
        },
        {
          imageName: 'clock',
          title: '實時時鐘',
          skills: 'PUG, VanillaJS, SCSS',
          demoLink: 'http://grieving-interest.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/clock',
          mediumLink: 'https://raaaaaaaay86.medium.com/%E5%88%A9%E7%94%A8pug-scss-js-%E8%88%92%E6%9C%8D%E9%80%A0%E5%87%BA%E6%99%82%E9%90%98-bc183b9475c5',
        },
        {
          imageName: 'world-clock',
          title: '世界時鐘',
          skills: 'PUG, VanillaJS, SCSS',
          demoLink: 'http://clammy-linen.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/world-clock',
        },
        {
          imageName: '9x9',
          title: 'JS乘法表',
          skills: 'VanillaJS, SCSS',
          demoLink: 'http://resolute-twist.surge.sh/',
          gitLink: 'https://github.com/Raaaaaaaay86/9x9',
          mediumLink: 'https://raaaaaaaay86.medium.com/%E5%88%A9%E7%94%A8%E8%BF%B4%E5%9C%88%E9%80%A0%E5%87%BA%E4%B9%9D%E4%B9%9D%E4%B9%98%E6%B3%95%E8%A1%A8-a55ab38be2cc',
        },
      ],
    };
  },
  mounted() {
    const contactSection = document.getElementById('contact');
    document.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      contactSection.style.backgroundPositionY = `${scrollPosition / 10}px`;
    });
  },
};
</script>

<style>

</style>
