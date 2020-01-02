<template>
	<header v-bind:class="{'scroll': isScroll}">
		<div class="header-inner">
			<div class="logo">
				<nuxt-link to="/">
					<div class="logo-symbol">
						<svg xmlns="http://www.w3.org/2000/svg" width="87" height="56" viewBox="0 0 87 56">
							<g fill="none" fill-rule="evenodd">
								<path class="eyes" fill="none" d="M82.622 30.305c0 4.033-1.93 7.303-4.31 7.303-2.382 0-4.312-3.27-4.312-7.303C74 26.27 75.93 23 78.312 23c2.38 0 4.31 3.271 4.31 7.305M51.622 30.305c0 4.033-1.93 7.303-4.31 7.303-2.382 0-4.312-3.27-4.312-7.303C43 26.27 44.93 23 47.312 23c2.38 0 4.31 3.271 4.31 7.305"/>
								<path stroke="#000" stroke-width="2.8" d="M41.045 13.337c-7.104 0-12.864 7.802-12.864 17.427s5.76 17.427 12.864 17.427c1.567 0 3.062-.4 4.452-1.094l8.068-20.28c-1.322-7.72-6.42-13.48-12.52-13.48zM84.829 30.764c0 9.624-5.76 17.427-12.864 17.427-7.105 0-12.864-7.803-12.864-17.427 0-9.624 5.759-17.427 12.864-17.427 7.104 0 12.864 7.803 12.864 17.427zM3.257 23.287c.256-1.62.824-3.198 1.683-4.594a11.127 11.127 0 0 1 1.861-2.295 11.606 11.606 0 0 1 2.119-1.575 10.398 10.398 0 0 1 5.122-1.405c.767-.005 1.635.067 2.379.234.989.22 1.952.596 2.823 1.096a9.319 9.319 0 0 1 2.24 1.824 9.85 9.85 0 0 1 1.963 3.3c.484 1.387.572 2.941.396 4.46a11.353 11.353 0 0 1-1.434 4.366c-1.586 2.731-4.094 5.094-6.578 7.114-1.272 1.035-2.761 2.142-4.028 3.084-4.246 3.16-8.646 5.925-9.018 8.672l22.737-.01M42.287 55.145L64.428.623"/>
							</g>
						</svg>
					</div>
					<transition name="logoType">
						<div v-if="logoType" class="logo-type">
							<img src="/images/logo-type.svg" alt="로고 타입">
						</div>
					</transition>
				</nuxt-link>
			</div>
			<div class="header-right">
				<!-- main header text -->
				<div class="header-text font-helve" v-if="headerMain">
					<transition name="emojiText" mode="out-in">
						<span v-if="mainText" key="start">hello !</span>
						<span v-else class="emoji-text" key="end">{{emojiText}}</span>
					</transition>
				</div>

				<!-- pc nav -->
				<nav class="header-nav" v-else>
					<ul class="mobile-hidden pc-nav">
						<template v-for="(nav, index) in navMenu">
							<li class="font-helve" :key="index">
								<nuxt-link :to="nav.to">{{nav.title}}</nuxt-link>
							</li>
						</template>
					</ul>

					<!-- pdf download -->
					<a href="" download class="pdf-download mobile-hidden">
						<p>pdf</p>
					</a>

					<!-- mobile hamburger -->
					<div class="mobile-hamburger mobile-visible" @click="handleNavMobile()">
						<div class="line"></div>
						<div class="line"></div>
					</div>
				</nav>
			</div>
		</div>

		<!-- mobile nav -->
		<nav class="mobile-nav mobile-visible" :class="{'open': showNav}">
			<div class="mobile-nav__inner">
				<div @click="handleNavMobile()">
					<nuxt-link to="/" class="mobile-logo-type">
						<img src="/images/logo-type.svg" alt="로고 타입">
					</nuxt-link>
				</div>
				<ul class="mobile-nav__ul">
					<template v-for="(nav, index) in navMenu">
						<li class="font-helve" @click="handleNavMobile()" :key="index">
							<nuxt-link :to="nav.to">{{nav.title}}</nuxt-link>
						</li>
					</template>
				</ul>
				<!-- pdf download -->
				<a href="" download class="pdf-download-mobile mobile-visible">
					<p>pdf</p>
				</a>
				<div class="cancel-box" @click="handleNavMobile()">
					<div class="cancel-line"></div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				// header 관련
				headerMain: true,
				mainText: true,
				isScroll: false,
				logoType: true,
				emojiText: 'move mouse over the text',

				// nav 관련
				showNav: false,

				// nav li for in으로 제어
				navMenu: [
					{
						title: 'work',
						to: { name : 'work'}
					},
					{
						title: 'about',
						to: { name : 'about'}
					},
					{
						title: 'toy project',
						to: { name : 'toy-proj'}
					}
				],
			}
		},
		created () {
			// process.client는 가상 돔이 그려진 후 실행시킴
			if (process.client) {
				// scroll 감지
				window.addEventListener('scroll', () => {
					if (matchMedia("(max-width:1000px)").matches) {
						// 1000px 이하 모바일 버전
						this.mainScrollChangeMobile();
					} else {
						// 1000px 초과 pc 버전
						this.mainScrollChangePC();
					}
				})
			}
		},
		watch: {
			$route() {
				// header 실시간 감지
				this.detectHeader();
			}
		},
		mounted() {
			// header 감지 초기 실행
			this.detectHeader();

			// 랜더링 후 리사이징 감지
			window.addEventListener('resize', () => {
				this.detectHeader();
			});
		},
		methods: {
			// mobile nav control
			handleNavMobile () {
				if (this.showNav === false) {
					this.showNav = true;
					document.body.style.overflow = 'hidden';

				} else {
					this.showNav = false;
					document.body.style.overflow = 'auto';
				}
			},
			// header PC control
			handleHeaderPC () {
				if (this.$route.name === 'index') {
					this.headerMain = true;
					this.isScroll = false;
					this.mainText = true;
				} else if (this.$route.name === 'work-wd') {
					this.headerMain = false;
					this.isScroll = true;
				} else {
					this.headerMain = false;
					this.isScroll = false;
				}
			},
			// header mobile control
			handleHeaderMobile () {
				if (this.$route.name === 'index') {
					this.headerMain = true;
				} else {
					this.headerMain = false;
				}
			},
			detectHeader () {
				if (matchMedia("(max-width:1000px)").matches) {
					// 1000px 이하 모바일 버전
					this.handleHeaderMobile();
				} else {
					// 1000px 초과 pc 버전
					this.handleHeaderPC();
				}
			},
			mainScrollChangePC () {
				if (window.scrollY <= 130) {
					this.isScroll = false;
					this.mainText = true;

				} else if (window.scrollY > 130 && window.scrollY <= 560) {
					this.isScroll = true;
					this.mainText = true;

				} else if (window.scrollY > 560) {
					this.isScroll = true;
					this.mainText = false;
				}
			},
			mainScrollChangeMobile () {
				if (window.scrollY <= 130) {
					this.mainText = true;
					this.logoType = true;

				} else if (window.scrollY > 130 && window.scrollY <= 560) {
					this.mainText = true;
					this.logoType = false;

				} else if (window.scrollY > 560) {
					this.mainText = false;
					this.logoType = false;
					this.emojiText = 'touch the text';
				}
			},
		}
	}
</script>

<style scoped src="~/assets/scss/common/header.scss" lang="scss">

</style>