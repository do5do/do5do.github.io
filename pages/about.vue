<template>
	<div>
		<section class="about-logo start-pd-top">
			<div class="about-logo__box" :class="{'active': logoMoving}">
				<div class="about-logo__type">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="87" height="17" viewBox="0 0 87 17">
						<defs>
							<path id="a" d="M0 .456h13.202V15H0z"/>
							<path id="c" d="M.96.098h11.443V11H.96z"/>
							<path id="e" d="M.24.456h13.202V15H.24z"/>
							<path id="g" d="M.2.098h11.442V11H.2z"/>
							<path id="i" d="M.48.456h13.202V15H.48z"/>
							<path id="k" d="M.44.098h11.442V11H.439z"/>
						</defs>
						<g fill="none" fill-rule="evenodd">
							<g transform="translate(0 .544)">
								<mask id="b" fill="#fff">
									<use xlink:href="#a"/>
								</mask>
								<path fill="#000" d="M7.481 8.898c0-1.18-.4-1.92-1.42-1.92-1.58 0-2.1 1.94-2.1 3.441 0 .94.42 1.7 1.46 1.7 1.52 0 2.06-2 2.06-3.22zm-.88 4.661h-.04c-.66.96-1.58 1.441-2.76 1.441C.438 15 0 12.04 0 10.778c0-3.94 2.06-6.68 5.16-6.68 1.2 0 2.3.34 3 1.54L9.241.455h3.961l-2.96 14.283h-3.88l.24-1.18z" mask="url(#b)"/>
							</g>
							<g transform="translate(12 4.544)">
								<mask id="d" fill="#fff">
									<use xlink:href="#c"/>
								</mask>
								<path fill="#000" d="M6.32 8.12c1.562 0 2.122-2.302 2.122-3.202 0-1.26-.321-1.94-1.381-1.94-1.58 0-2.14 2.4-2.14 3.46 0 .861.28 1.681 1.4 1.681M7.36.1c3.04 0 5.042 1.398 5.042 4.54C12.403 7.3 10.922 11 6.14 11 3.28 11 .96 9.62.96 6.14.96 2.837 3.12.097 7.362.097" mask="url(#d)"/>
							</g>
							<g transform="translate(31 .544)">
								<mask id="f" fill="#fff">
									<use xlink:href="#e"/>
								</mask>
								<path fill="#000" d="M7.721 8.898c0-1.18-.4-1.92-1.42-1.92-1.58 0-2.1 1.94-2.1 3.441 0 .94.42 1.7 1.46 1.7 1.52 0 2.06-2 2.06-3.22zm-.88 4.661h-.04c-.66.96-1.58 1.441-2.76 1.441-3.362 0-3.8-2.96-3.8-4.222 0-3.94 2.06-6.68 5.16-6.68 1.2 0 2.3.34 3 1.54L9.481.455h3.961l-2.96 14.283h-3.88l.24-1.18z" mask="url(#f)"/>
							</g>
							<g transform="translate(44 4.544)">
								<mask id="h" fill="#fff">
									<use xlink:href="#g"/>
								</mask>
								<path fill="#000" d="M5.56 8.12c1.562 0 2.122-2.302 2.122-3.202 0-1.26-.32-1.94-1.381-1.94-1.58 0-2.14 2.4-2.14 3.46 0 .861.28 1.681 1.4 1.681M6.6.1c3.04 0 5.042 1.398 5.042 4.54C11.643 7.3 10.16 11 5.38 11 2.52 11 .2 9.62.2 6.14.2 2.837 2.36.097 6.6.097" mask="url(#h)"/>
							</g>
							<g transform="translate(62 .544)">
								<mask id="j" fill="#fff">
									<use xlink:href="#i"/>
								</mask>
								<path fill="#000" d="M7.96 8.898c0-1.18-.4-1.92-1.42-1.92-1.58 0-2.1 1.94-2.1 3.441 0 .94.42 1.7 1.46 1.7 1.52 0 2.06-2 2.06-3.22zm-.88 4.661h-.04C6.38 14.52 5.46 15 4.28 15c-3.361 0-3.8-2.96-3.8-4.222 0-3.94 2.06-6.68 5.16-6.68 1.2 0 2.3.34 3 1.54L9.72.455h3.962l-2.96 14.283H6.84l.24-1.18z" mask="url(#j)"/>
							</g>
							<g transform="translate(75 4.544)">
								<mask id="l" fill="#fff">
									<use xlink:href="#k"/>
								</mask>
								<path fill="#000" d="M5.8 8.12c1.561 0 2.121-2.302 2.121-3.202 0-1.26-.32-1.94-1.38-1.94-1.58 0-2.14 2.4-2.14 3.46 0 .861.28 1.681 1.4 1.681M6.84.1c3.04 0 5.041 1.398 5.041 4.54C11.882 7.3 10.402 11 5.62 11 2.76 11 .44 9.62.44 6.14.44 2.837 2.6.097 6.84.097" mask="url(#l)"/>
							</g>
						</g>
					</svg>
				</div>
				<div class="diagonal-line"></div>
			</div>
		</section>

		<!-- about info -->
		<section class="about-info">
			<div class="container-narrow">
				<div class="about-info__top">
					<div class="paragraph">
						<p class="title font-helve">do it do it true</p>
						<p class="sub-title">실현하는 사람, 김도희입니다.</p>
						<p class="description">
							<span class="bold">dohee Kim</span> / 1995. 05. 19<br>
							+82)10 - 2455 - 7030<br>
							<span class="text-line">
								<a href="mailto:#">do151015@gmail.com</a>
							</span>
						</p>
					</div>
				</div>
				<figure class="about-img">
					<img src="/images/about-illust.jpg">
				</figure>
				<div class="about-info__bottom">
					<div class="paragraph">
						<p class="title font-helve">create 200%</p>
						<p class="description">
							모든 일에는 다 뜻이 있듯이 디자인[design: <span class="bold">설계</span>하다]에도 이유가 있어야 한다고 생각합니다. 사용성에 맞는 사고방식[100%]으로 작은 것에도 의미를 담고 숨겨진 재미를 추구합니다. 이러한 이유를 바탕으로 표현된 사람들의 관심을 이끌 수 있는 시각적인 비주얼[100%]이 더해져 사용자에게 더 좋은 경험을 선사하는, 200% 실현하는 크리에이터가 되고자 합니다.
						</p>
					</div>
					<div class="paragraph">
						<p class="title font-helve">education</p>
						<p class="description">
							<span class="bold">부경대학교</span><br>
							시각디자인학과 전공<br>
							@2014.03 ~ 2018.02
						</p>
					</div>
					<div class="paragraph">
						<p class="title font-helve">work</p>
						<p class="description">
							<span class="bold">Aart</span>, a family group of Yoondesign<br>
							graphic / UXUI designer<br>
							@2018.05 ~ 2019.06
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				logoMoving: false,
			}
		},
		mounted () {
			setTimeout ( () => {
				this.logoMoving = true;
			}, 100);
		}
	}
</script>

<style scoped src="~/assets/scss/pages/about.scss" lang="scss">
</style>