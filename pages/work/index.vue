<template>
	<div class="container-wide">
		<section class="page-header__box start-pd-top">
			<div class="page-header position-relative">
				<p class="page-title font-helve">work</p>
				<div class="work-category mobile-z-index">
					<!-- pc category -->
					<ul class="mobile-hidden">
						<template v-for="(val, key) in option.getFilterData">
							<template v-if="key === 'UX / UI'"></template>
							<template v-else>
								<li :class="[key === filterOption ? 'active' : '']" @click="filter(key)">
									<p class="page-sub-title">{{key}}</p>
								</li>
							</template>
						</template>
					</ul>

					<!-- mobile category -->
					<div class="select-box mobile-visible">
						<label for="work-ctg">{{selectedValue}}</label>
						<select id="work-ctg" name="work-ctg" v-model="selectedValue" @change="changeCtg()">
							<template v-for="(val, key) in option.getFilterData">
								<template v-if="key === 'User Experience / User Interface'"><!-- 값을 비워줌 --></template>
								<template v-else>
									<option :value="key">{{key}}</option>
								</template>
							</template>
						</select>
					</div>
				</div>
			</div>
		</section>

		<!-- work list section -->
		<section class="work-list">
			<client-only>
				<isotope
					class="work-list__ul"
					ref="list"
					:item-selector="'work-list__li'"
					:list="workList"
					:options="option"
					@filter="filterOption = arguments[0]"
				>
					<div v-for="(list, index) in workList" :key="index">
						<nuxt-link :to="{name: 'work-wd', params: {wd: list.id}}">
							<div class="list-content">
								<div class="img-box">
									<img :src="list.thumbnail">
								</div>
								<p class="list-tag">{{list.tag}}</p>
								<p class="list-title">{{list.title}}</p>
							</div>
						</nuxt-link>
					</div>
				</isotope>
			</client-only>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		// json 비동기로 불러오기
		async asyncData() {
			let {data: workListData} = await axios.get(process.env.API_SERVER_ADDRESS + '/data/work-list.json');
			// 데이터를 참조할 수 있게 변수에 저장
			return {
				workList: workListData.data
			}
		},
		created () {
			// 워크리스트 데이터 배열 순서 상관 없이 id 순 정렬
			let lists = this.workList;
			lists.sort((a,b) => {
				return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
			});
			this.workList = lists;
		},
		data () {
			return {
				selected: null,
				filterOption: 'All',
				option: {
					itemSelector: '.work-list__li',
					getFilterData: {
						'All': (el) => {
							return true;
						},
						'Brand Experience': (el) => {
							return el.ctg.indexOf('Brand Experience') >= 0;
						},
						'User Experience / User Interface': (el) => {
							return el.ctg.indexOf('User Experience / User Interface') >= 0;
						},
						'UX / UI': (el) => {
							return el.ctg.indexOf('User Experience / User Interface') >= 0;
						},
						'illustration': (el) => {
							return el.ctg.indexOf('illustration') >= 0;
						},
						'Graphic': (el) => {
							return el.ctg.indexOf('Graphic') >= 0;
						}
					},
				},

				selectedValue: 'All',
			}
		},
		mounted () {

		},
		methods: {
			filter (key) {
				this.$refs.list.filter(key);
			},
			changeCtg () {
				this.filter(this.selectedValue);
			},
		}
	}
</script>

<style scoped src="~/assets/scss/pages/work.scss" lang="scss">

</style>