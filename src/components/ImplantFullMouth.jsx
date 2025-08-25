import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import CircleCards from "./global/CircleCards";
import "./styles/ImplantFullMouth.css";

export default function ImplantFullMouth() {
	return (
		<div className="implant-fullmouth">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">임플란트란?</h2>
					<p className="hero-section--content-text">
						상실한 자연치아를 대체하기 위해 잇몸뼈에 직접
						<span>인공 치근을 식립하여 치아를 복원하는데 도움을 주는</span>
						<span>대표적인 치료 방법입니다.</span>
					</p>
				</div>
			</section>
			<section className="benefits">
				<h2>장점</h2>
				<div className="grid">
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_superstable.png"
						alt="안정적"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_expertlycrafted.png"
						alt="정밀 제작"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_freedomtospeak.png"
						alt="자유로운 발음"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_lowmaintenance.png"
						alt="유지관리 용이"
					/>
				</div>
			</section>
			<section className="section-recommend implant-fullmouth--recommend">
				<h2 className="section-title implant-fullmouth--recommend-title">
					Recommend <span>이런경우 추천해요</span>
				</h2>
				<CircleCards />
			</section>
		</div>
	);
}
