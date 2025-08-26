import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import StagesCards from "./global/StagesCards";
import SquareCardsWithImages from "./global/SquareCardsWithImages";
import "./styles/RootCanalTreatment.css";

export default function RootCanalTreatment() {
	return (
		<div className="treat-rootcanal">
			<HeaderSection />
			<section className="hero-section root-canal-treatment--hero">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">신경치료란?</h2>
					<p className="hero-section--content-text">
						치아 내부에 있는 신경(치수, pulp)이나 혈관이 감염되었거나 손상되었을
						때, 이를 제거하고 치아 내부를 깨끗이 소독한 후 밀봉하여 치아를
						보존하는 치료입니다. 주요 목적은 자연 치아를 최대한 살리는 것입니다.
						감염된 치수를 그대로 두면 통증이나 염증이 심해지고, 결국 치아를 빼야
						하는 상황까지 갈 수 있기 때문에 신경치료가 필요합니다.
					</p>
				</div>
			</section>
			<section className="section-recommend root-canal-treatment--stages">
				<h2 className="section-title">
					Treatment steps <span>충치 진행 단계별 치료</span>
				</h2>
				<div className="root-canal-treatment--stages-container">
					<StagesCards />
				</div>
			</section>
			<section className="root-canal-treatment--target-audience">
				<h2 className="section-title">
					Who need this? <span>이런경우 필요해요</span>
				</h2>
				<h2 className="section-title section-title--desktop">
					Indications for treatment <span>이런 경우 필요해요</span>
				</h2>
				<div className="root-canal-treatment--target-audience-container square-cards-with-image--container">
					<SquareCardsWithImages />
				</div>
			</section>
		</div>
	);
}
