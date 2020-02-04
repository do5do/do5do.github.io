<template>
	<div class="work-detail__box">
		<swiper :options="swiperOption">
			<swiper-slide>
				<section class="work-detail">
					<!-- main description area -->
					<div class="main-description__box items">
						<div class="wd-paragraph pd-bottom">
							<nuxt-link to="/work">
								<p class="title font-helve" :class="{'title-kor': workDetail.static.kor}">{{workDetail.static.title}}</p>
							</nuxt-link>
							<p class="description">
								{{workDetail.static.ctg}}<br>
								<!-- client 정보 -->
								<template v-if="clientYN">
									<span class="bold">Client</span><span>{{workDetail.static.client}}</span>
								</template>
								<!-- 사이트 연결 -->
								<template v-if="workDetail.static.visit">
									<a :href="workDetail.static.link" :target="blank" @click="handleSite()">
										<span class="text-line">Visit live</span>
									</a>
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
						<toast
							:paraTopTitle="workDetail.component.paragraphTop.title"
							:paraTopDesc="workDetail.component.paragraphTop.description"
							:imgFull01="workDetail.component.imgFull01"
							:title="workDetail.component.visualMotif.title"
							:description="workDetail.component.visualMotif.description"
							:image="workDetail.component.visualMotif.image"
							:imgFull02="workDetail.component.imgFull02"
							:textTop="workDetail.component.textTop.text"
							:textTopDesc="workDetail.component.textTop.description"
							:imgFull03="workDetail.component.imgFull03"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
							:imgFull04="workDetail.component.imgFull04"
							:textBottom2="workDetail.component.textBottom2.text"
							:textBottomDesc2="workDetail.component.textBottom2.description"
						/>
					</template>

					<template v-if="workDetail.id === 2">
						<ticketX
							:title="workDetail.component.visualMotif.title"
							:description="workDetail.component.visualMotif.description"
							:image="workDetail.component.visualMotif.image"
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

					<template v-if="workDetail.id === 3">
						<lalaollaMV
							:paraTopTitle="workDetail.component.paragraphTop.title"
							:paraTopDesc="workDetail.component.paragraphTop.description"
							:imgFull01="workDetail.component.imgFull01"
							:imgFull02="workDetail.component.imgFull02"
							:imgFull03="workDetail.component.imgFull03"
							:imgFull04="workDetail.component.imgFull04"
							:imgFull05="workDetail.component.imgFull05"
							:textTop="workDetail.component.textTop.text"
							:textTopDesc="workDetail.component.textTop.description"
							:imgFull06="workDetail.component.imgFull06"
							:textTop2="workDetail.component.textTop2.text"
							:textTopDesc2="workDetail.component.textTop2.description"
							:imgFull07="workDetail.component.imgFull07"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
							:imgFull08="workDetail.component.imgFull08"
							:imgFull09="workDetail.component.imgFull09"
						/>
					</template>

					<template v-if="workDetail.id === 4">
						<theMoment
							:imgFull01="workDetail.component.imgFull01"
							:textTop="workDetail.component.textTop.text"
							:textTopDesc="workDetail.component.textTop.description"
							:imgFull02="workDetail.component.imgFull02"
							:textTop2="workDetail.component.textTop2.text"
							:textTopDesc2="workDetail.component.textTop2.description"
							:imgFull03="workDetail.component.imgFull03"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
							:imgFull04="workDetail.component.imgFull04"
							:textBottom2="workDetail.component.textBottom2.text"
							:textBottomDesc2="workDetail.component.textBottom2.description"
						/>
					</template>

					<template v-if="workDetail.id === 5">
						<conde
							:title="workDetail.component.visualMotif.title"
							:description="workDetail.component.visualMotif.description"
							:image="workDetail.component.visualMotif.image"
							:imgFull01="workDetail.component.imgFull01"
							:textTop="workDetail.component.textTop.text"
							:textTopDesc="workDetail.component.textTop.description"
							:imgFull02="workDetail.component.imgFull02"
							:imgFull03="workDetail.component.imgFull03"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
						/>
					</template>

					<template v-if="workDetail.id === 6">
						<karryAd
							:paraTopTitle="workDetail.component.paragraphTop.title"
							:paraTopDesc="workDetail.component.paragraphTop.description"
							:imgFull01="workDetail.component.imgFull01"
							:imgFull02="workDetail.component.imgFull02"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
						/>
					</template>

					<template v-if="workDetail.id === 7">
						<lalaollaPoster
							:imgFull01="workDetail.component.imgFull01"
							:textTop="workDetail.component.textTop.text"
							:textTopDesc="workDetail.component.textTop.description"
							:imgFull02="workDetail.component.imgFull02"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
							:imgFull03="workDetail.component.imgFull03"
							:textTop2="workDetail.component.textTop2.text"
							:textTopDesc2="workDetail.component.textTop2.description"
							:imgFull04="workDetail.component.imgFull04"
							:textBottom2="workDetail.component.textBottom2.text"
							:textBottomDesc2="workDetail.component.textBottom2.description"
						/>
					</template>

					<template v-if="workDetail.id === 8">
						<fooddeuk
							:title="workDetail.component.visualMotif.title"
							:description="workDetail.component.visualMotif.description"
							:image="workDetail.component.visualMotif.image"
							:imgFull01="workDetail.component.imgFull01"
							:textBottom="workDetail.component.textBottom.text"
							:textBottomDesc="workDetail.component.textBottom.description"
							:imgFull02="workDetail.component.imgFull02"
							:imgFull03="workDetail.component.imgFull03"
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
	import toast from '~/components/work-detail/toast.vue'
	import ticketX from '~/components/work-detail/ticketX.vue'
	import conde from '~/components/work-detail/conde.vue'
	import fooddeuk from '~/components/work-detail/fooddeuk.vue'
	import theMoment from '~/components/work-detail/theMoment.vue'
	import lalaollaMV from '~/components/work-detail/lalaollaMV.vue'
	import karryAd from '~/components/work-detail/karryAd.vue'
	import lalaollaPoster from '~/components/work-detail/lalaollaPoster.vue'
	import axios from "axios"

	export default {
		components: {
			toast,
			ticketX,
			conde,
			fooddeuk,
			theMoment,
			lalaollaMV,
			karryAd,
			lalaollaPoster,
		},
		// json 비동기로 불러오기
		async asyncData({params}) {
			let {data: workDetailData} = await axios.get(process.env.API_SERVER_ADDRESS + '/data/work-detail.json');

			// 데이터를 참조할 수 있게 변수에 저장
			return {
				workNumber: Number(params.wd),
				workDataList: workDetailData.data.length,
				workDetail: workDetailData.data,
			};
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
					mousewheel: {
						releaseOnEdges: true
					},
					breakpoints: {
						// 1000 이하 모바일
						1000: {
							init: false,
							//direction: 'vertical',
						}
					}
				},
				clientYN: false,
				blank: '',
			}
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
			if (this.workDetail.static.client === '' || this.workDetail.static.client === undefined) {
				this.clientYN = false;
			} else {
				this.clientYN = true;
			}

			// visit link control
			if (this.workDetail.static.link === '') {
				// 링크가 생성되지 않도록 함
				this.workDetail.static.link = 'javascript:void(0)';
				this.blank = '';
			} else {
				// 링크 있을때 새창으로 열기
				this.blank = '_blank';
			}
		},
		methods: {
			// 사이트가 준비중일때
			handleSite () {
				if (this.workDetail.static.link === '' || this.workDetail.static.link === 'javascript:void(0)') {
					alert('준비중 입니다.');
				}
			},
		}
	}
</script>

<style src="~/assets/scss/pages/work-detail.scss" lang="scss">

</style>