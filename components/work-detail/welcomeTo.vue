<template>
	<div class="wd-body">
		<!-- image layout : height full -->
		<figure class="wd-image body-items">
			<img :src="imgFull01" alt="포트폴리오 이미지">
		</figure>
	</div>
</template>

<script>
	export default {
		props: {
			imgFull01: {
				type: String,
			},
		}
	}
</script>

<style scoped>

</style>