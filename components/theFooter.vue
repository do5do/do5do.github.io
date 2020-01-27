<template>
	<footer>
		<div class="footer-inner" :class="{'footer-margin': footerMarginNone}">
			<div class="ft-logo">
				<img src="/images/logo-type.svg" alt="로고 타입">
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
				this.handleFooterMargin();
			}
		},
		mounted () {
			// 초기 실행
			this.handleFooterMargin();
		},
		methods: {
			// mobile work detail 페이지에서 footer margin 없애기 (pc는 footer자체가 false임)
			handleFooterMargin () {
				if (this.$route.name === 'work-wd') {
					this.footerMarginNone = true;
				} else {
					this.footerMarginNone = false;
				}
			}
		}
	}
</script>

<style scoped src="~/assets/scss/common/footer.scss" lang="scss">
</style>