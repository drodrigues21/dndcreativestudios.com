import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import CircleCards from "./global/CircleCards";
import BenefitsAndSymptoms from "./global/BenefitsAndSymptoms";
import "./styles/ImplantDentures.css";

export default function ImplantDentures() {
	return (
		<div className="implant-dentures">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">임플란트 틀니란?</h2>
					<p className="hero-section--content-text">
						상실한 자연치아를 대체하기 위해 잇몸뼈에 직접
						<span>인공 치근을 식립하여 치아를 복원하는데 도움을 주는</span>
						<span>대표적인 치료 방법입니다.</span>
					</p>
				</div>
			</section>
			<section className="section-recommend implant-home--recommend">
				<h2 className="section-title implant-home--recommend-title">
					Recommend <span>이런경우 추천해요</span>
				</h2>
				<CircleCards />
			</section>
			<section className="implant-dentures--benefits">
				<h2 className="section-title">
					Benefits <span>임플란트 틀니 장점</span>
				</h2>
				<div className="benefits-cards--container">
					<BenefitsAndSymptoms />
				</div>
			</section>
		</div>
	);
}
