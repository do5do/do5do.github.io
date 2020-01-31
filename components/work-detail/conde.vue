<template>
	<div class="wd-body">
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
			<img :src="imgFull01" alt="포트폴리오 이미지">
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
			<img :src="imgFull02" alt="포트폴리오 이미지">
		</figure>

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
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'Visual Motif'
			},
			description: {
				type: String,
				default: 'Visual Motif description'
			},
			image: {
				type: String,
			},
			imgFull01: {
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
			imgFull02: {
				type: String,
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
		}
	}
</script>

<style scoped>

</style>