<template>
	<div class="wd-body">
		<!-- contents layout : img-bottom, text-top 2 -->
		<div class="wd-contents contents__img-bottom items">
			<div class="wd-paragraph" :style="`width: ${textWidth}`">
				<p class="sub-title">{{title01}}</p>
				<p class="description">
					티켓: 티켓의 가장 단순한 형태인 직사각형에서부터 출발하여, '흩어져있던 티켓을 모아 서로에게 연결해준다는 의미'를 담아 도식화된 티켓들이 모여 텍스트를 이루고 형태를 띠게 됩니다.<br><br>
					각진: 티켓에서 뻗어 나온 형태로 곡선 없이 각져 있어 강하고 잘 다듬어진 느낌을 전달해 줍니다. 이는 페스티벌의 묵직함과 열정을 담고 있으며, 어두운 무채색 컬러에 화려한 조명을 상징하는 옐로를 포인트로 디자인하였습니다.
				</p>
			</div>
			<figure class="wd-image" :style="`width: ${imgWidthBottom}`">
				<img src="/work-detail/ticketX/icons.jpg" alt="아이콘">
			</figure>
		</div>
		<!-- contents layout : img-top, text-bottom 1 -->
		<div class="wd-contents items">
			<figure class="wd-image" :style="`width: ${imgWidthTop}`">
				<img src="/work-detail/ticketX/application-1.jpg" alt="어플리케이션">
			</figure>
			<!-- text layout : 최대 2줄 -->
			<div class="wd-paragraph">
				<p class="sub-title">Symbol</p>
				<p class="description">
					티켓을 형상화한 텍스트 모티프를 바탕으로 T와 X의 조합으로 이루어졌습니다.
				</p>
			</div>
		</div>
		<!-- image layout : height full -->
		<figure class="wd-image items">
			<img src="/work-detail/ticketX/application-2.jpg" alt="어플리케이션">
		</figure>

		<!-- image layout : height full -->
		<figure class="wd-image items">
			<img src="/work-detail/ticketX/application-2.jpg" alt="더미">
		</figure>
		<!-- text layout : top -->
		<div class="wd-paragraph items wd-paragraph-narrow items__margin-narrow">
			<p class="sub-title">티켓 구매 페이지</p>
			<p class="description">
				해당 페스티벌을 눌렀을 때 나오는 페이지로 공연 일정이 요일별로 구분되어 있어 선택이 쉬우며, 남은 중고 티켓의 매수를 알려줍니다.
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image items">
			<img src="/work-detail/ticketX/application-2.jpg" alt="더미">
		</figure>
		<!-- text layout : bottom -->
		<div class="wd-paragraph paragraph-bottom items wd-paragraph-narrow items__margin-narrow">
			<p class="sub-title">마이 티켓</p>
			<p class="description">
				화면 하단의 마이티켓 탭으로 들어가면 내가 구매한 티켓이 나오고, 입장과 선물, 판매가 쉽습니다.
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image items">
			<img src="/work-detail/ticketX/application-2.jpg" alt="더미">
		</figure>
	</div>
</template>

<script>
	export default {
		name: "wd-ticketX",
		props: {
			title01: ''
		},
		data () {
			return {
				textWidth: '',
				imgWidthBottom: '47vw',
				imgWidthTop: '',
			}
		}
	}
</script>

<style scoped>

</style>