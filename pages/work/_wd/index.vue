<template>
	<div class="work-detail__box">
		<swiper :options="swiperOption">
			<swiper-slide>
				<section class="work-detail">
					<!-- main description area -->
					<div class="main-description__box items">
						<div class="wd-paragraph pd-bottom">
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
						<template v-if="workNumber !== workDataList">
							<p class="font-helve wd-footer__text">
								<nuxt-link :to="{name: 'work-wd', params: {wd: workNumber + 1}}">next</nuxt-link>
							</p>
						</template>
						<template v-else>
							<p class="font-helve wd-footer__text disabled">next</p>
						</template>
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
			let {data: workDetailData} = await axios.get(process.env.API_SERVER_ADDRESS + '/data/work-detail.json');
			let options = {};

			// 데이터를 참조할 수 있게 변수에 저장
			return {
				workNumber: Number(params.wd),
				workDataList: workDetailData.data.length,
				workDetail: workDetailData.data,
			};

			// The server-side needs a full url to work
			if (process.server) {
				options.baseURL = `http://${process.env.API_SERVER_ADDRESS}/work/${this.workNumber}`
			}
		},
		components: {
			ticketX
		},
		created () {
			// 리스트의 id를 가져와서 상세정보의 id를 비교하여 데이터 출력.
			let params = this.workNumber;
			let data = {};
			// 메모리 줄이기 위해 변수에 담음
			let detail = this.workDetail.forEach((item) => {
				if (item.id === params) {
					data = item;
				}
			});
			this.workDetail = data;

			// client 정보 true, false
			if (this.workDetail.static.client === '' || this.workDetail.static.client === null) {
				this.clientYN = false;
			} else {
				this.clientYN = true;
			}
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
				// client 정보
				clientYN : false,
			}
		}
	}
</script>

<style src="~/assets/scss/pages/work-detail.scss" lang="scss">

</style>