<template>
	<div class="wd-body">
		<!-- contents image : img-top, text-bottom -->
		<div class="wd-contents body-items">
			<figure class="wd-image">
				<img :src="contentsImgTop" alt="포트폴리오 이미지">
			</figure>
			<!-- text layout : 최대 2줄 -->
			<div class="wd-paragraph">
				<p class="sub-title">{{contentsSubtitle}}</p>
				<p class="description">
					{{contentsSubDesc}}
				</p>
			</div>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull01" alt="포트폴리오 이미지">
		</figure>

		<!-- text layout : top -->
		<div class="wd-paragraph body-items wd-paragraph-narrow margin-narrow">
			<p class="sub-title">{{textTop}}</p>
			<p class="description" v-html="textTopDesc"></p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull02" alt="포트폴리오 이미지">
		</figure>
	</div>
</template>

<script>
	export default {
		props: {
			contentsImgTop: {
				type: String,
			},
			contentsSubtitle: {
				type: String,
				default: 'contents layout sub title'
			},
			contentsSubDesc: {
				type: String,
				default: 'contents layout sub description'
			},
			textTop: {
				type: String,
				default: 'title top'
			},
			imgFull01: {
				type: String,
			},
			textTopDesc: {
				type: String,
				default: 'title top description'
			},
			imgFull02: {
				type: String,
			},
		}
	}
</script>

<style scoped>

</style>