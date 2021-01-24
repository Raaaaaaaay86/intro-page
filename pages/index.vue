<template>
  <div class="main">
    <div class="container">
      <section class="contact">
        <div class="contact_info">
          <p class="info_motto">
            讓前端開啟無限可能
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
            <li>
              <i class="fab fab fa-linkedin fa-2x" />
            </li>
            <li>
              <i class="fab fa-medium fa-2x" />
            </li>
            <li>
              <i class="fab fa-github fa-2x" />
            </li>
            <li>
              <i class="fab fa-instagram-square fa-2x" />
            </li>
          </ul>
        </div>
        <div class="contact_avatar">
          <img :src="require('@/assets/imgs/avatar.jpg')" height="250">
        </div>
      </section>
      <section class="about">
        <h2 class="title">
          關於我
        </h2>
        <div class="about_content">
          <p>
            於 2020 6月畢業於龍華科技大學應用外語系，大四在台北萬豪酒店服務中心實習，服務過
            許多英語系國家住客，皆能提供正確且即時的服務，期間也在住客入住問卷調查中被提及
            。實習同時，在下班時間自學網頁前端技術，高職就讀電機科時就有接觸過程式撰寫基礎
            ，所以在學習前端的過程中比較能掌握學習節奏。大學期間也擔任社團活動領導人，所以
            對於團隊合作也非常適應。目前希望先繼續保持在前端領域一段時間，更熟悉前端技術時，不排斥繼續往後端領域延伸。
          </p>
        </div>
      </section>
      <section class="skills">
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
      <section class="portfolio">
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
        },
        {
          imageName: 'nuxt-hotel',
          title: '訂房預約',
          skills: 'Nuxt, API串接',
          isHeroku: true,
          demoLink: 'https://hotel-house.herokuapp.com/',
        },
        {
          imageName: 'nuxt-cloudDrive',
          title: '模擬雲端硬碟',
          skills: 'Nuxt, Firebase',
          isHeroku: true,
          demoLink: 'https://cloud-drive-raylin.herokuapp.com/',
        },
        {
          imageName: 'icon-roullete',
          title: '抽獎轉盤',
          skills: 'D3.js, Vue3(Composition API)',
          demoLink: 'http://quirky-mountain.surge.sh/',
        },
        {
          imageName: 'tic-tac-toe',
          title: '井字遊戲',
          skills: 'Vue3(Composition API), localStorage',
          demoLink: 'http://direful-pan.surge.sh/',
        },
        {
          imageName: 'canvas',
          title: '繪畫板',
          skills: 'HTML5 canvas, Vue3(Composition API)',
          demoLink: 'http://offbeat-direction.surge.sh/',
        },
        {
          imageName: '60s-game',
          title: '60秒數學挑戰',
          skills: 'Vue3(Composition API)',
          demoLink: 'http://aquatic-sort.surge.sh/',
        },
        {
          imageName: 'aqi',
          title: '台灣空汙儀表板',
          skills: 'PUG, Vue3(Composition API)',
          demoLink: 'http://brainy-power.surge.sh/',
        },
        {
          imageName: 'calculator',
          title: '計算機',
          skills: 'PUG, VanillaJS',
          demoLink: 'http://curvy-sand.surge.sh/',
        },
        {
          imageName: 'clock',
          title: '實時時鐘',
          skills: 'PUG, VanillaJS, SCSS',
          demoLink: 'http://grieving-interest.surge.sh/',
        },
        {
          imageName: 'world-clock',
          title: '世界時鐘',
          skills: 'PUG, VanillaJS, SCSS',
          demoLink: 'http://clammy-linen.surge.sh/',
        },
        {
          imageName: '9x9',
          title: 'JS乘法表',
          skills: 'VanillaJS, SCSS',
          demoLink: 'http://resolute-twist.surge.sh/',
        },
      ],
    };
  },
};
</script>

<style>

</style>
