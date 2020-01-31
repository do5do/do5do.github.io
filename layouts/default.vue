<template>
  <div class="wrap">
    <div class="noise-bg"></div>
    <theHeader></theHeader>
    <nuxt/>
    <theFooter v-if="footerShow"></theFooter>
  </div>
</template>

<script>
  import theHeader from '~/components/theHeader.vue';
  import theFooter from '~/components/theFooter.vue';

  export default {
    components: {
      'theHeader': theHeader,
      'theFooter': theFooter
    },
    data () {
      return {
        footerShow: true,
      }
    },
    watch: {
      $route () {
        this.detectWd();
      }
    },
    mounted () {
      // 초기 실행
      this.handle100vh();
      this.detectWd();

      // resize 할 때마다 실행
      window.addEventListener('resize', () => {
        this.handle100vh();
        this.detectWd();
      });
    },
    methods: {
      // device height 100vh
      handle100vh () {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      },
      // footer show/hide, swiper overflow control
      handleWorkWidPC () {
        if (this.$route.name === 'work-wd') {
          this.footerShow = false;
          document.body.style.overflow = 'hidden';
        } else {
          this.footerShow = true;
          document.body.style.overflow = 'auto';
        }
      },
      // footer show/hide, swiper overflow control
      handleWorkWidMobile () {
        if (this.$route.name === 'work-wd') {
          this.footerShow = true;
          document.body.style.overflow = 'auto';
        }
      },
      detectWd () {
        if (matchMedia("(max-width:1000px)").matches) {
          // 모바일 버전
          this.handleWorkWidMobile();
        } else {
          // pc 버전
          this.handleWorkWidPC();
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  .noise-bg {
    //display: none;
    position: absolute;
    background:url(/images/body-noise.png) repeat center;
    background-size: 180px;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
</style>

