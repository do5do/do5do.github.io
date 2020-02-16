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

		<!-- text layout : top -->
		<div class="wd-paragraph body-items">
			<p class="sub-title">{{paraTopTitle}}</p>
			<p class="description" v-html="paraTopDesc"></p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items margin-narrow-little">
			<img :src="imgFull01" alt="포트폴리오 이미지">
		</figure>

		<!-- contents text : img-bottom, text-top -->
		<div class="wd-contents contents-text body-items">
			<div class="wd-paragraph">
				<p class="sub-title">{{title}}</p>
				<p class="description" v-html="description"></p>
			</div>
			<figure class="wd-image">
				<img :src="image" alt="포트폴리오 이미지">
			</figure>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull02" alt="포트폴리오 이미지">
		</figure>

		<!-- text layout : top -->
		<div class="wd-paragraph body-items wd-paragraph-narrow margin-narrow">
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
		<div class="wd-paragraph paragraph-bottom body-items wd-paragraph-narrow margin-narrow">
			<p class="sub-title">{{textBottom}}</p>
			<p class="description">
				{{textBottomDesc}}
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull04" alt="포트폴리오 이미지">
		</figure>

		<!-- text layout : bottom -->
		<div class="wd-paragraph paragraph-bottom body-items wd-paragraph-narrow margin-narrow">
			<p class="sub-title">{{textBottom2}}</p>
			<p class="description">
				{{textBottomDesc2}}
			</p>
		</div>
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
			paraTopTitle: {
				type: String,
				default: 'title top'
			},
			paraTopDesc: {
				type: String,
				default: 'title top description'
			},
			imgFull01: {
				type: String,
			},
			title: {
				type: String,
				default: 'Visual Motif'
			},
			description: {
				type: String,
				default: 'visual Motif description'
			},
			image: {
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
			textBottom2: {
				type: String,
				default: 'text bottom sub title'
			},
			textBottomDesc2: {
				type: String,
				default: 'text bottom description'
			},
		}
	}
</script>

<style scoped>

</style>