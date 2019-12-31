<template>
	<div class="work-detail__box">
		<swiper :options="swiperOption">
			<swiper-slide>
				<section class="work-detail">
					<!-- main description area -->
					<div class="main-description__box items">
						<div class="wd-paragraph">
							<p class="title font-helve">{{workDetail.static.title}}</p>
							<p class="description">
								{{workDetail.static.ctg}}<br>
								<template v-if="clientYN">
									<span class="bold">Client</span><span>{{workDetail.static.client}}</span>
								</template>
							</p>
						</div>
						<div class="wd-paragraph__box">
							<div class="wd-paragraph top">
								<p class="sub-title">Overview</p>
								<p class="description">
									{{workDetail.static.overview}}
								</p>
							</div>
							<div class="wd-paragraph bottom">
								<p class="sub-title">Situation</p>
								<p class="description"
								   v-html="workDetail.static.situation"
								></p>
							</div>
						</div>
					</div>

					<!-- main image area -->
					<div class="main-image items row-full">
						<img :src="workDetail.static.mainImg" alt="포트폴리오 이미지">
					</div>

					<!-- detail contents component : s -->
					<template v-if="workDetail.id === 1">
						<ticketX
							:title="workDetail.component.designKeyword.title"
							:description="workDetail.component.designKeyword.description"
							:image="workDetail.component.designKeyword.image"
							:contentsImgTop="workDetail.component.contentsImage.imgTop"
							:contentsSubtitle="workDetail.component.contentsImage.subTitle"
							:contentsSubDesc="workDetail.component.contentsImage.subDesc"
							:imgFull01="workDetail.component.imgFull01"
							:imgFull02="workDetail.component.imgFull02"
							:textTop="workDetail.component.textTop.text"
							:textTopDesc="workDetail.component.textTop.description"
							:imgFull03="workDetail.component.imgFull03"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
							:imgFull04="workDetail.component.imgFull04"
						/>
					</template>
					<!-- detail contents component : e -->

					<!-- work detail footer -->
					<div class="wd-footer items">
						<p class="font-helve wd-footer__text">
							<nuxt-link to="">next</nuxt-link>
						</p>
						<p class="font-helve wd-footer__text">
							<nuxt-link to="/work">view list</nuxt-link>
						</p>
					</div>
				</section>
			</swiper-slide>
			<div class="swiper-scrollbar mobile-hidden" slot="scrollbar"></div>
		</swiper>
	</div>
</template>

<script>
	import ticketX from '~/components/ticketX.vue'
	import axios from "axios";

	export default {
		// json 비동기로 불러오기
		async asyncData({params}) {
			let {data: workDetailData} = await axios.get(process.env.API_SERVER_ADDRESS + '/data/work-detail.json')
			console.log(params.wd);
			// 데이터를 참조할 수 있게 변수에 저장
			return {
				workDetail: workDetailData.data[0]
			}
		},
		components: {
			ticketX
		},
		data () {
			return {
				swiperOption: {
					direction: 'horizontal',
					slidesPerView: 'auto',
					freeMode: true,
					scrollbar: {
						el: '.swiper-scrollbar'
					},
					init: true,
					mousewheel: {
						releaseOnEdges: true
					},
					breakpoints: {
						// 1000 이하 모바일
						1000: {
							init: false
						}
					}
				},
				clientYN : false
			}
		},
		created () {
			// client 정보 true, false
			if (this.workDetail.static.client === '' || this.workDetail.static.client === null) {
				this.clientYN = false;
			} else {
				this.clientYN = true;
			}
		}
	}
</script>

<style src="~/assets/scss/pages/work-detail.scss" lang="scss">

</style>