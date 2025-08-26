import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import CircleCards from "./global/CircleCards";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";
import BenefitsAndSymptoms from "./global/BenefitsAndSymptoms";
import "./styles/AestheticWhitinyVeneers.css";

export default function AestheticWhitinyVeneers() {
	return (
		<div className="aesthetic-veneers">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">화이티니 라미네이트란?</h2>
					<p className="hero-section--content-text">
						화이티니 라미네이트는 화이트드림의 독자적인
						<span>앞니치료 솔루션으로, 아름다움과 건강함이라는 </span>
						<span>두가지 목적을 충족시킬 수 있도록 고안되었습니다.</span>
					</p>
				</div>
			</section>
			<section className="section-recommend implant-fullmouth--recommend">
				<h2 className="section-title implant-fullmouth--recommend-title">
					Recommend <span>이런분께 추천해요</span>
				</h2>
				<CircleCards />
			</section>
			<section className="veneers-beforeafter">
				<h2 className="section-title">
					Before & After <span>화이티니 라미 전후사진</span>
				</h2>
				<BeforeAndAfterCard selectedCategory="치아교정" />
				<div className="before-and-after--notice">
					<p>
						*본이미지는 치료의 이해를 위해 삽입되었으며, 모든치료는 개인차가
						있습니다.
					</p>
					<p>
						*동일한 조건에서 촬영되었으며, 보정이 이루어지지 않은 이미지입니다
					</p>
				</div>
			</section>
			<section className="implant-fullmouth--benefits">
				<h2 className="section-title implant-fullmouth--benefits-title">
					Benefits <span>화이티니 라미네이트 장점</span>
				</h2>
				<div className="benefits-cards--container">
					<BenefitsAndSymptoms />
				</div>
			</section>
		</div>
	);
}
