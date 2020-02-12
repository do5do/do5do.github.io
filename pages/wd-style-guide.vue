<template>
	<div>
		<section class="wd-body">
			<!-- text layout : top -->
			<div class="wd-paragraph body-items">
				<p class="sub-title">Design Keyword</p>
				<p class="description">
					티켓: 티켓의 가장 단순한 형태인 직사각형에서부터 출발하여, '흩어져있던 티켓을 모아 서로에게 연결해준다는 의미'를 담아 도식화된 티켓들이 모여 텍스트를 이루고 형태를 띠게 됩니다.<br><br>
					각진: 티켓에서 뻗어 나온 형태로 곡선 없이 각져 있어 강하고 잘 다듬어진 느낌을 전달해 줍니다. 이는 페스티벌의 묵직함과 열정을 담고 있으며, 어두운 무채색 컬러에 화려한 조명을 상징하는 옐로를 포인트로 디자인하였습니다.
				</p>
			</div>
			<!-- text layout : middle -->
			<div class="wd-paragraph body-items paragraph-middle">
				<p class="sub-title">Design Keyword</p>
				<p class="description">
					티켓: 티켓의 가장 단순한 형태인 직사각형에서부터 출발하여, '흩어져있던 티켓을 모아 서로에게 연결해준다는 의미'를 담아 도식화된 티켓들이 모여 텍스트를 이루고 형태를 띠게 됩니다.<br><br>
					각진: 티켓에서 뻗어 나온 형태로 곡선 없이 각져 있어 강하고 잘 다듬어진 느낌을 전달해 줍니다. 이는 페스티벌의 묵직함과 열정을 담고 있으며, 어두운 무채색 컬러에 화려한 조명을 상징하는 옐로를 포인트로 디자인하였습니다.
				</p>
			</div>
			<!-- text layout : bottom -->
			<div class="wd-paragraph body-items paragraph-bottom">
				<p class="sub-title">Design Keyword</p>
				<p class="description">
					티켓: 티켓의 가장 단순한 형태인 직사각형에서부터 출발하여, '흩어져있던 티켓을 모아 서로에게 연결해준다는 의미'를 담아 도식화된 티켓들이 모여 텍스트를 이루고 형태를 띠게 됩니다.<br><br>
					각진: 티켓에서 뻗어 나온 형태로 곡선 없이 각져 있어 강하고 잘 다듬어진 느낌을 전달해 줍니다. 이는 페스티벌의 묵직함과 열정을 담고 있으며, 어두운 무채색 컬러에 화려한 조명을 상징하는 옐로를 포인트로 디자인하였습니다.
				</p>
			</div>

			<!-- image layout : height full -->
			<figure class="wd-image body-items">
				<img src="/work-detail/ticketX/application-1.jpg" alt="어플리케이션">
			</figure>


			<!-- contents image : img-top, text-bottom -->
			<div class="wd-contents body-items">
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

			<!-- contents text : img-bottom, text-top -->
			<div class="wd-contents  contents-text body-items">
				<div class="wd-paragraph" :style="`width: ${textWidth}`">
					<p class="sub-title">Design Keyword</p>
					<p class="description">
						티켓: 티켓의 가장 단순한 형태인 직사각형에서부터 출발하여, '흩어져있던 티켓을 모아 서로에게 연결해준다는 의미'를 담아 도식화된 티켓들이 모여 텍스트를 이루고 형태를 띠게 됩니다.<br><br>
						각진: 티켓에서 뻗어 나온 형태로 곡선 없이 각져 있어 강하고 잘 다듬어진 느낌을 전달해 줍니다. 이는 페스티벌의 묵직함과 열정을 담고 있으며, 어두운 무채색 컬러에 화려한 조명을 상징하는 옐로를 포인트로 디자인하였습니다.
					</p>
				</div>
				<figure class="wd-image" :style="`width: ${imgWidthBottom}`">
					<img src="/work-detail/ticketX/application-2.jpg" alt="어플리케이션">
				</figure>
			</div>

			<!-- video autoplay: pc에서 스와이퍼 길이가 안맞아지는 오류 발생(video태그가 들어가면 발생함) -->
			<div class="wd-video body-items">
				<video style="height:100%;" autoplay loop muted playsinline preload="true">
					<source :src="video01" type="video/mp4">
				</video>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				imgWidthTop: '',
				imgWidthBottom: '',
				textWidth: '',
			}
		}
	}
</script>

<style lang="scss">

</style>