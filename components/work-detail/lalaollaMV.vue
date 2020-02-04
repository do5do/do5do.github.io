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

		<figure class="wd-image body-items margin-narrow">
			<img :src="imgFull02" alt="포트폴리오 이미지">
		</figure>

		<figure class="wd-image body-items margin-narrow">
			<img :src="imgFull03" alt="포트폴리오 이미지">
		</figure>

		<figure class="wd-image body-items margin-narrow">
			<img :src="imgFull04" alt="포트폴리오 이미지">
		</figure>

		<figure class="wd-image body-items margin-narrow">
			<img :src="imgFull05" alt="포트폴리오 이미지">
		</figure>

		<!-- text layout : top -->
		<div class="wd-paragraph body-items wd-paragraph-narrow">
			<p class="sub-title">{{textTop}}</p>
			<p class="description">
				{{textTopDesc}}
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items margin-narrow-little">
			<img :src="imgFull06" alt="포트폴리오 이미지">
		</figure>

		<!-- text layout : top -->
		<div class="wd-paragraph body-items wd-paragraph-narrow">
			<p class="sub-title">{{textTop2}}</p>
			<p class="description">
				{{textTopDesc2}}
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items margin-narrow-little">
			<img :src="imgFull07" alt="포트폴리오 이미지">
		</figure>

		<!-- text layout : bottom -->
		<div class="wd-paragraph paragraph-bottom body-items wd-paragraph-narrow">
			<p class="sub-title">{{textBottom}}</p>
			<p class="description">
				{{textBottomDesc}}
			</p>
		</div>

		<!-- image layout : height full -->
		<figure class="wd-image body-items margin-narrow-little">
			<img :src="imgFull08" alt="포트폴리오 이미지">
		</figure>

		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull09" alt="포트폴리오 이미지">
		</figure>
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
			imgFull03: {
				type: String,
			},
			imgFull04: {
				type: String,
			},
			imgFull05: {
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
			imgFull06: {
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
			imgFull07: {
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
			imgFull08: {
				type: String,
			},
			imgFull09: {
				type: String,
			},
		}
	}
</script>

<style scoped>

</style>