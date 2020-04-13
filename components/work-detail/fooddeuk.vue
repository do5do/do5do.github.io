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
			textBottom: {
				type: String,
				default: 'text top sub title'
			},
			textBottomDesc: {
				type: String,
				default: 'text top description'
			},
		}
	}
</script>

<style scoped>

</style>