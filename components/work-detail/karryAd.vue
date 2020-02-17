<template>
	<div class="wd-body">
		<!-- text layout : top -->
		<div class="wd-paragraph body-items">
			<p class="sub-title">{{paraTopTitle}}</p>
			<p class="description" v-html="paraTopDesc"></p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items margin-narrow-little">
			<img :src="imgFull01" alt="포트폴리오 이미지">
		</figure>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull02" alt="포트폴리오 이미지">
		</figure>

		<!-- text layout : bottom -->
		<div class="wd-paragraph paragraph-bottom body-items wd-paragraph-narrow margin-narrow-little">
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
			paraTopTitle: {
				tyep: String,
				default: 'title top'
			},
			paraTopDesc: {
				type: String,
				default: 'title top description'
			},
			imgFull01: {
				type: String,
			},
			imgFull02: {
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