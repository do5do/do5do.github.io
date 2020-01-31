<template>
	<div class="wd-body">
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

		<!-- text layout : top -->
		<div class="wd-paragraph body-items wd-paragraph-narrow margin-narrow">
			<p class="sub-title">{{textTop2}}</p>
			<p class="description">
				{{textTopDesc2}}
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
			textTop2: {
				type: String,
				default: 'text top sub title'
			},
			textTopDesc2: {
				type: String,
				default: 'text top description'
			},
			imgFull03: {
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
			imgFull04: {
				type: String,
			},
			textBottom2: {
				type: String,
				default: 'text top sub title'
			},
			textBottomDesc2: {
				type: String,
				default: 'text top description'
			},
		}
	}
</script>

<style scoped>

</style>