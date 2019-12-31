<template>
	<div class="wd-body">
		<!-- contents text : img-bottom, text-top -->
		<div class="wd-contents contents__img-bottom body-items">
			<div class="wd-paragraph">
				<p class="sub-title">{{title}}</p>
				<p class="description"
				   v-html="description"
				></p>
			</div>
			<figure class="wd-image" :style="`width: ${imgBottom}`">
				<img :src="image" alt="포트폴리오 이미지">
			</figure>
		</div>

		<!-- contents image : img-top, text-bottom -->
		<div class="wd-contents body-items">
			<figure class="wd-image" :style="`width: ${imgTop}`">
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

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull02" alt="포트폴리오 이미지">
		</figure>
		<!-- text layout : top -->
		<div class="wd-paragraph body-items wd-paragraph-narrow items__margin-narrow">
			<p class="sub-title">{{textTop}}</p>
			<p class="description">
				{{textTopDesc}}
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull03" alt="포트폴리오 이미지">
		</figure>
		<!-- text layout : bottom -->
		<div class="wd-paragraph paragraph-bottom body-items wd-paragraph-narrow items__margin-narrow">
			<p class="sub-title">{{textBottom}}</p>
			<p class="description">
				{{textBottomDesc}}
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull04" alt="포트폴리오 이미지">
		</figure>
	</div>
</template>

<script>
	export default {
		name: "wd-ticketX",
		props: {
			title: {
				type: String,
				default: 'Design Keyword'
			},
			description: {
				type: String,
				default: 'design keyword description'
			},
			image: {
				type: String,
			},
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
			imgFull01: {
				type: String,
			},
			imgFull02: {
				type: String,
			},
			textTop: {
				type: String,
				default: 'text top sub title'
			},
			textTopDesc: {
				type: String,
				default: 'text top description'
			},
			imgFull03: {
				type: String,
			},
			textBottom: {
				type: String,
				default: 'text bottom sub title'
			},
			textBottomDesc: {
				type: String,
				default: 'text bottom description'
			},
			imgFull04: {
				type: String,
			},
		},
		data () {
			return {
				imgBottom: '47vw',
				imgTop: '',
			}
		}
	}
</script>

<style scoped>

</style>