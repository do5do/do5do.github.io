<template>
	<div>
		<section class="work-detail">
			<!-- main description area -->
			<div class="main-description__box items">
				<div class="wd-paragraph">
					<p class="title font-helve">Ticket X</p>
					<p class="description">
						Brand Identity, User Interface Design, User Experience Strategy Design<br>
						<span class="bold">Client</span> / VOLUME UNIT
					</p>
				</div>
				<div class="wd-paragraph__box">
					<div class="wd-paragraph top">
						<p class="sub-title">Overview</p>
						<p class="description">
							티켓 엑스는 중고 티켓 거래 플랫폼입니다. 손쉽게 티켓을 사고, 안전하게 팔고, 선물할 수 있으며 페스티벌이나 공연 당일에는 큐얼 코드 하나로 기다림 없이 입장할 수 있습니다.
						</p>
					</div>
					<div class="wd-paragraph bottom">
						<p class="sub-title">Situation</p>
						<p class="description">
							가고 싶었던 공연이 있어 예매를 했지만 부득이한 사정이 생겨 공연에 가지 못할 때가 있습니다. 이럴 때면 예매했던 티켓을 중고 사이트에 올려놓고, 구매자의 연락을 손꼽아 기다립니다. 구매자의 연락이 오면 직접 만나거나 택배로 티켓을 거래합니다. 이렇게 판매자와 구매자 모두 티켓을 사고팔기까지에 많은 단계를 거치게 됩니다. 또한 거래 도중 티켓이 보장되지 않았거나 원하는 금액을 얻지 못하는 경우가 발생할 수 있습니다.<br><br>
							실물 티켓 거래라는 단점을 보완하고 개인이 직접 거래하는 중고 티켓을 확실하게 보장하며 안전하게 거래할 수 있도록 합니다. 또한 공연 현장에서 본인 확인 절차를 위해 실물 티켓으로 다시 교환 후 입장하는 시스템의 불편함을 큐얼 코드 한 번으로 줄이고자 하였습니다.
						</p>
					</div>
				</div>
			</div>

			<!-- main image area -->
			<div class="main-image items row-full">
				<img src="~/static/work-detail/ticketX/splash-screen.jpeg">
			</div>

			<!-- detail contents component : s -->
			<ticketX
				title01="Design Keyword"
			/>
			<!-- detail contents component : e -->

			<!-- work detail footer -->
			<div class="wd-footer items">
				<p class="font-helve wd-footer__text">
					<nuxt-link to="">next</nuxt-link>
				</p>
				<p class="font-helve wd-footer__text">
					<nuxt-link to="/work">view list</nuxt-link>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
	import ticketX from '~/components/ticketX.vue'

	export default {
		components: {
			ticketX
		},
		created () {
			if (process.client) {
				window.addEventListener('wheel', (e) => {
					let el = document.querySelector('.work-detail');
					document.querySelector('body').style.overflow = 'hidden';

					if (e.deltaY > 0) {
						el.scrollLeft += 20;
					} else {
						el.scrollLeft -= 20;
					}
				})
			}
		},
		methods: {

		}
	}
</script>

<style scoped src="~/assets/scss/pages/work-detail.scss" lang="scss">

</style>