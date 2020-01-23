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
    created () {
      if (process.client) {
        // work detail body overflow 조절
        if (matchMedia("(max-width:1000px)").matches) {
          // 모바일 버전
          if (this.$route.name === 'work-wd') {
            document.body.style.overflow = 'auto';
          }
        } else {
          // pc 버전
          if (this.$route.name === 'work-wd') {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
        }
      }
    },
    watch: {
      $route () {
        // footer, bg 실시간 감지
        this.detectWorkWid();

        // work detail body overflow 조절
        if (matchMedia("(max-width:1000px)").matches) {
          // 모바일 버전
          if (this.$route.name === 'work-wd') {
            document.body.style.overflow = 'auto';
          }
        } else {
          // pc 버전
          if (this.$route.name === 'work-wd') {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
        }
      }
    },
    mounted () {
      // vh control 초기 실행
      this.handle100vh();
      // footer, bg 감지 control 초기 실행
      this.detectWorkWid();

      // resize할때 실행
      window.addEventListener('resize', () => {
        this.handle100vh();
        this.detectWorkWid();
      });
    },
    methods: {
      // device height 100vh
      handle100vh () {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      },
      // footer show/hide
      handleWorkWidPC () {
        if (this.$route.name === 'work-wd') {
          this.footerShow = false;
        } else {
          this.footerShow = true;
        }
      },
      // footer show/hide
      handleWorkWidMobile () {
        if (this.$route.name === 'work-wd') {
          this.footerShow = true;
        }
      },
      // media 감지
      detectWorkWid () {
        if (matchMedia("(max-width:1000px)").matches) {
          // 모바일 버전
          this.handleWorkWidMobile();
        } else {
          // pc 버전
          this.handleWorkWidPC();
        }
      }
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
    display: none;
    position: absolute;
    background:url(/images/body-noise.png) repeat center;
    background-size: 180px;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
</style>

