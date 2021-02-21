<template>
  <div class="card">
    <div
      class="card_img"
      :style="{background: `center / cover no-repeat url(${require(`@/assets/imgs/${cardData.imageName}.png`)})`}"
    />
    <div class="card_mask">
      <h5 class="mask_title mask_content--hide">
        {{ cardData.title }}
      </h5>
      <p class="mask_skills mask_content--hide">
        使用技術: {{ cardData.skills }}
      </p>
      <p v-if="cardData.isHeroku" class="mask_isHeroku mask_content--hide">
        (免費Heroku伺服器，重啟約40秒)
      </p>
      <div class="mask_links">
        <a class="mask_content--hide" target="_blank" :href="cardData.demoLink">
          Demo
        </a>
        <a class="mask_content--hide" target="_blank" :href="cardData.gitLink">
          GitHub
        </a>
        <a v-if="cardData.mediumLink" data-destination="medium" class="mask_content--hide" target="_blank" :href="cardData.mediumLink">
          Medium
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(152, 193, 217, 1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  &:hover {
    .card_img {
      transform: scale(1.1);
    }
    .card_mask {
      background-color: rgba(61, 90, 128, .7);
      transition: all .5s ease-out;
    }
    .mask_content--hide {
      color: white;
    }
  }
}

.card_img {
    height: 300px;
    transition: all .3s ease-out;
}

.card_mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-align: center;
  a {
    text-decoration: underline;
    &:first-of-type {
      margin-right: 1rem;
    }
    &[data-destination = 'medium'] {
      display: block;
      margin-top: .5rem;
    }
  }
}

.mask {
  &_content--hide {
    color: rgba(255, 255, 255, .0);
    // color: inherit;
    transition: color .3s ease-in-out;
    margin-bottom: 0.5rem;
  }
  &_title {
    font-size: 3rem;
    font-weight: 700;
  }
  &_skills {
    font-size: 500;
    line-height: 1.5rem;
    text-align: center;
  }
  &_isHeroku {
    font-size: 0.5rem;
  }
}
</style>
