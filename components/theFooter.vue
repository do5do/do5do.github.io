<template>
	<footer>
		<div class="footer-inner" :class="{'footer-margin': footerMarginNone}">
			<div class="ft-logo">
				<img src="~/static/images/logo-type.svg" alt="로고 타입">
			</div>
			<p class="ft-copy">© 2019, dododo. All Rights Reserved.</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "theFooter",
		data () {
			return {
				footerMarginNone: false,
			}
		},
		watch: {
			$route () {
				// 실시간 감지
				this.detectMargin();
			}
		},
		mounted () {
			// 초기 실행
			this.detectMargin();

			// resize 할때마다 감지
			window.addEventListener('resize', () => {
				this.detectMargin();
			});
		},
		methods: {
			// mobile work detail에서 footer margin 없애기
			handleFooterMargin () {
				if (this.$route.name === 'work-wd') {
					this.footerMarginNone = true;
				} else {
					this.footerMarginNone = false;
				}
			},
			detectMargin () {
				if (matchMedia("(max-width:1000px)").matches) {
					// mobile
					this.handleFooterMargin();
				}
			}
		}
	}
</script>

<style scoped src="~/assets/scss/common/footer.scss" lang="scss">
</style>