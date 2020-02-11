<template>
	<div class="container">
		<section class="page-header__box start-pd-top">
			<div class="page-header position-relative">
				<p class="page-title font-helve">toy project</p>
				<div class="toy-sub-title">
					<p class="page-sub-title">
						기획부터 개발까지,<br class="mobile-hidden">
						목표는 앱이다.
					</p>
				</div>
			</div>
		</section>

		<!-- toy contents section -->
		<section class="toy-contents start-pd-top">
			<div class="device-box">
				<div class="device-auto" :style="{backgroundImage: `url(${img1})`}">
					<img :src="img1" alt="todo 이미지">
				</div>
				<div class="paragraph">
					<p class="title font-helve">Todo list</p>
					<p class="sub-title text-line">
						<a href="https://doittrue.github.io/todo/" target="_blank">try it</a>
					</p>
					<p class="description">
						하루 업무 리스트를 종이에 관리하던 친구가 있었습니다. 하루가 끝나고 제때 버려지면 다행이지, 온 책상과 바닥을 쓸며 돌아다니는 너덜 해진 종이들을 보며 매일 쓰고 리셋 시킬 수 있는 할 일 리스트가 있으면 좋겠다는 생각에 웹으로 구현하게 되었습니다.<br><br>
						업무 전 리스트를 추가하고, 그 리스트들을 처리할 때마다 체크하여 한 일과 안 한 일을 구별합니다. 그날 할 일을 다 하지 못했다면 브라우저를 끄지 말고 내일의 나에게 맡깁니다. 리스트를 입력하면 사용자의 로컬 저장소인 로컬 스토리지에 저장되기 때문에 브라우저를 끄지 않는 한 내가 추가한 리스트들은 사라지지 않죠. 모두 완료한 뒤엔 모조리 지워버리고 미션 컴플리트!<br><br>
						처음엔 이렇게 쓰고 저장하고 지우는 기능만 있으면 될 줄 알았습니다. 하지만 만들다 보니 욕심은 끝이 없고.. 써놓은 리스트를 수정할 수 있으면 좋을 것 같아 수정하는 기능까지 추가하게 되었습니다. 나중에는 누군가가 이러더군요. ‘’리스트의 순서도 바꿀 수 있으면 좋겠어!” ....? 이렇게 단순한 프로젝트였는데도 개발은 정말 끝이 없고 많은 테스트와 시간과 노력이 드는구나 싶었습니다. 다 만들었다고 끝나는 게 아니라 만들면 이제 시작인 것을 몸소 실감하며, 하고 싶은 디자인으로 원하는 기능까지 만들 수 있어서 재밌었습니다.
					</p>
					<p class="sub-title pd-top">PC / mobile</p>
				</div>
			</div>

			<div class="contents-padding textground">
				<div class="device-box">
					<div class="paragraph paragraph-left">
						<p class="title font-helve">My textground</p>
						<p class="sub-title text-line">
							<a href="https://doittrue.github.io/textground/" target="_blank">try it</a>
						</p>
						<p class="description">
							명언을 좋아하는 저는 늘 메모를 해둡니다. 그중 지금 보고 싶은 명언들을 뽑아 핸드폰 배경으로 사용하고 싶을 때가 있는데, 늘 만들어서 써야지 생각만 하고 그냥 넘어가곤 했죠. 그러다 문득 내가 원하는 대로 커스텀하고, 디바이스 사이즈에 맞춰서 저장해주는 게 있으면 재밌겠다 싶어 만들어보게 되었습니다. my textground는 text + background로 제가 만든 조잡한 합성어입니다. 느낌 오는 그대로 나만의 텍스트 배경인 거죠. 후후.. 네이밍 추천받습니다.<br><br>
							내가 원하는 글을 쓰고 화면 안에서 여기저기 옮겨보며, 서체를 고르고 크기, 두께, 행간 등을 조절하는 재밌는 편집 놀이를 할 수 있습니다. 물론 배경도 바꿀 수 있죠. 색으로 채워도 되고 내가 찍은 이미지를 넣을 수도 있습니다. 이미지를 넣었는데 글이 안 보인다고요? 글자색을 바꿔도 되고, 이미지를 넣었을 때 나타나는 하단 왼쪽 아이콘을 눌리면 이미지 위에 어둠이 깔려 글이 잘 보일 겁니다. 이제 맘에 들면 저장☆ 여기서 잠깐! 텍스트에 이모티콘을 쓰고 저장을 눌리면 바로 저장이 안 됩니다.. 브라우저를 나갔다가 들어가거나 또는 핸드폰 화면을 잠갔다 풀면 저장이 되어있는 신기한 버그가 있습니다.<br><br>
							개발을 하면서 처음에 했던 기획과는 달리 점점 더 많은 기능들이 추가되었습니다. 이 프로젝트를 하면서 제가 써보지 못했던 다양한 기능들을 연습해 볼 수 있었고, 모바일 환경이 까다롭고 어렵다는 것을 많이 느꼈습니다. pc에서는 구현이 잘 되는데 모바일에서는 구현이 안 되는 버그들이 많았고 그 이유를 알지 못해 아직도 해결하지 못한 이슈도 있습니다. 하지만 계속해서 업데이트해 나갈 것이고 버그를 잡을 방법을 모색해 볼 것입니다.
						</p>
						<p class="sub-title pd-top">mobile / chrome, safari</p>
					</div>
					<div class="device-auto device-right" :style="{backgroundImage: `url(${img2})`}">
						<img :src="img2" alt="textground 이미지">
					</div>
				</div>
				<div class="device-box">
					<div class="device-auto left" :style="{backgroundImage: `url(${img3})`}">
						<img :src="img3" alt="textground 2">
					</div>
					<div class="device-auto right" :style="{backgroundImage: `url(${img4})`}">
						<img :src="img4" alt="textground 3">
					</div>
				</div>
			</div>

			<div class="contents-padding portfolio">
				<div class="device-box">
					<div class="paragraph paragraph-left">
						<p class="title font-helve">do do do</p>
						<p class="sub-title text-line">
							here
						</p>
						<p class="description">
							우연한 기회로 한동안 개발(퍼블리싱)을 배웠습니다. 열심히 배웠던 것을 활용하여 포트폴리오를 만들어보자는 생각에 제작하게 되었습니다. 프레임워크(vue)를 사용하여 사이트 전체를 구축하는 건 처음이라 많이 버벅였지만 그만큼 재미있고 뿌듯한 작업이었습니다.<br><br>
							main 페이지에 입장하였을 때, 타 사이트와는 달리 차별성 있는 느낌을 전달하고자 내비게이션의 위치를 달리하였습니다. UX적으로 불편해하는 유입자가 있을 거라는 생각은 했지만 사소한 변화를 통해 사이트를 이용하는 동안 작은 재미를 주고 싶었습니다. 이러한 부분은 work detail 페이지에서도 볼 수 있는데, 스크롤의 방향을 달리하여 지루함을 덜고, 콘텐츠가 돋보일 수 있도록 기획하였습니다. 이 덕에 고생 좀 했지만 새로운 css도 써보게 되고 좋은 밑거름이 된 것 같습니다.
						</p>
						<p class="sub-title pd-top">PC / mobile</p>
					</div>
					<div class="device-auto device-right" :style="{backgroundImage: `url(${img5})`}">
						<img :src="img5" alt="do do do 이미지">
					</div>
				</div>
			</div>

			<p class="sub-title continue-text">to be continued</p>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img1: '/images/toy-todo.png',
				img2: '/images/toy-textground.png',
				img3: '/images/toy-textground2.png',
				img4: '/images/toy-textground3.png',
				img5: '/images/toy-dododo.png'
			}
		}
	}
</script>

<style scoped src="~/assets/scss/pages/toy-proj.scss" lang="scss">

</style>