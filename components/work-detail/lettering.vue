<template>
	<div class="wd-body">
		<!-- text layout : top -->
		<div class="wd-paragraph body-items wd-paragraph-narrow">
			<p class="sub-title">{{textTop}}</p>
			<p class="description" v-html="textTopDesc"></p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items margin-narrow-little">
			<img :src="imgFull01" alt="포트폴리오 이미지">
		</figure>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull02" alt="포트폴리오 이미지">
		</figure>
	</div>
</template>

<script>
	export default {
		props: {
			textTop: {
				type: String,
				default: 'title top'
			},
			textTopDesc: {
				type: String,
				default: 'title top description'
			},
			imgFull01: {
				type: String,
			},
			imgFull02: {
				type: String,
			},
		}
	}
</script>

<style scoped>

</style>