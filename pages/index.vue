<template>
  <div class="wrap">
    <section class="main-visual">
      <svg xmlns="http://www.w3.org/2000/svg" width="749" height="521" viewBox="0 0 749 521">
        <g id="eyes" fill="none" fill-rule="evenodd">
          <path stroke="#000" stroke-width="4.6" d="M359.834 519.668L571.634.945M7.389 216.574c2.446-15.412 7.88-30.423 16.09-43.705 4.947-8.002 10.9-15.376 17.812-21.833a111.219 111.219 0 0 1 20.263-14.996c14.706-8.47 31.633-13.232 48.989-13.36 7.34-.053 15.644.64 22.755 2.222a97.653 97.653 0 0 1 27.008 10.425c8.259 4.713 15.456 10.808 21.428 17.356 8.133 8.916 14.793 20.05 18.78 31.408 4.629 13.186 5.478 27.97 3.778 42.417-1.727 14.678-6.371 28.991-13.707 41.553-15.171 25.978-39.158 48.458-62.925 67.673-12.175 9.844-26.408 20.376-38.525 29.345-40.62 30.065-82.71 56.368-86.271 82.508l217.498-.1"></path>
          <path class="left-eyeball" fill="#000" d="M316.448 284.153c0 33.142-16.926 60.008-37.806 60.008s-37.806-26.866-37.806-60.008 16.926-60.008 37.806-60.008 37.806 26.866 37.806 60.008"/>
          <path class="eye" stroke="#000" stroke-width="4.6" d="M471.009 287.71c0 91.567-55.094 165.798-123.053 165.798-67.96 0-123.052-74.231-123.052-165.797 0-91.567 55.093-165.796 123.053-165.796 67.959 0 123.052 74.229 123.052 165.796z"/>
          <path class="right-eyeball" fill="#000" d="M591.324 284.153c0 33.142-16.927 60.008-37.806 60.008-20.88 0-37.805-26.866-37.805-60.008s16.925-60.008 37.805-60.008c20.879 0 37.806 26.866 37.806 60.008"/>
          <path class="eye" stroke="#000" stroke-width="4.6" d="M745.883 287.71c0 91.567-55.092 165.798-123.052 165.798-67.96 0-123.052-74.231-123.052-165.797 0-91.567 55.092-165.796 123.052-165.796 67.96 0 123.052 74.229 123.052 165.796z"/>
        </g>
      </svg>
      <div class="visual__bottom-text font-helve">do it do it true</div>
    </section>

    <!-- 메인 텍스트 영역 -->
    <section class="container">
      <div class="main-visual__text-area mobile-motion-control" :class="{'active': textUp}">
        <div class="text-box">
          <p class="main-title font-helve">I create</p>
        </div>
        <div class="main-title__box" @mouseover="showUnderLine(1)" :class="{'active': underLine1}">
          <nuxt-link to="/about" class="first">
            <p class="main-title font-helve under-line line-mobile">
              <span>two hundred </span>
              <span>percent</span>
            </p>
            <span class="active-text">About me</span>
          </nuxt-link>
        </div>
        <div class="main-title__box margin" @mouseover="showUnderLine(2)" :class="{'active': underLine2}">
          <nuxt-link to="/toy-proj" class="second">
            <p class="main-title font-helve under-line">do it</p>
            <span class="active-text">Not work</span>
          </nuxt-link>
        </div>
        <div class="main-title__box margin margin-mobile" @mouseover="showUnderLine(3)" :class="{'active': underLine3}">
          <nuxt-link to="/work" class="third">
            <p class="main-title font-helve under-line">do it true</p>
            <span class="active-text">What I do</span>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        underLine1: false,
        underLine2: false,
        underLine3: false,
        textUp: false,
      }
    },
    created () {
      if (process.client) {
        window.addEventListener('scroll', () => {
          this.mainTextUp();
        });
      }
    },
    mounted () {
      // 초기 실행
      this.mainTextUp();
      // tablet 감지
      this.detectTablet();
      // resize 할 때마다 실행
      window.addEventListener('resize', () => {
        this.detectTablet();
      })
    },
    methods: {
      showUnderLine (n) {
        switch (n) {
          case 1:
            this.underLine1 = true;
            break;
          case 2:
            this.underLine2 = true;
            break;
          case 3:
            this.underLine3 = true;
            break;
        }
      },
      mainTextUp () {
        if (window.scrollY > 300) {
          this.textUp = true;
        }
      },
      // tablet 감지해서 main text 고정
      detectTablet () {
        let underLine = document.querySelectorAll('.under-line');
        let activeText = document.querySelectorAll('.active-text');

        if (this.$device.isTablet) {
          // querySelectorAll은 한번에 선택이 안돼서 모두 선택하려고 for로 갯수만큼 돌려줌
          for (let i=0; i < underLine.length; i++) {
            underLine[i].style.backgroundSize = '100% 0.29vw';
          }

          for (let j=0; j < activeText.length; j++) {
            activeText[j].style.width = '100%';
          }
        }
      }
    }
  }
</script>

<style scoped src="~/assets/scss/pages/main.scss" lang="scss">
</style>


