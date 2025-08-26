import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import BenefitsAndSymptoms from "./global/BenefitsAndSymptoms";
import SquareCardsWithImages from "./global/SquareCardsWithImages";
import "./styles/GumDiseaseTreatment.css";

export default function GumDiseaseTreatment() {
	return (
		<div className="treat-gumdisease">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">치주질환이란</h2>
					<p className="hero-section--content-text">
						충치와 더불어 구강의 제 2대 질환으로 불리는
						<span>치주질환은 치아를 잡아주는 역할을 하는 잇몸뼈가</span>
						<span>녹아내리는 증상으로, 치아 주위 조직에 염증이 생겨</span>
						잇몸과 치조골을 파괴하는 질환입니다.
					</p>
					<p className="hero-section--content-text">
						구강질환중 자주 발생하는 치주질환은 초기 통증이
						<span>없는 경우가 많고 만성적으로 진행되기 때문에 늦게</span>
						<span>발견되기 쉽습니다. 이런 치주질환의 예방을</span>
						<span>위해서는 정기적인 구강검진이 필수로 이루어져야</span>
						합니다.
					</p>
				</div>
			</section>
			<section className="gum-disease-treatment--benefits-and-symptoms">
				<h2 className="section-title">
					Symptoms <span>치주질환 증상</span>
				</h2>
				<BenefitsAndSymptoms />
			</section>
			<section className="gum-disease-treatment--causes">
				<h2 className="section-title">
					Causes of disease <span>치주질환 원인</span>
				</h2>
				<div className="gum-disease-treatment--causes-container square-cards-with-image--container">
					<SquareCardsWithImages />
				</div>
			</section>
		</div>
	);
}
