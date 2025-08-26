import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import StagesCards from "./global/StagesCards";
import SquareCardsWithImages from "./global/SquareCardsWithImages";
import "./styles/WisdomToothRemoval.css";

export default function WisdomToothRemoval() {
	return (
		<div className="treat-wisdom">
			<HeaderSection />
			<section className="hero-section wisdom-tooth-removal--hero">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">사랑니 발치</h2>
					<p className="hero-section--content-text">
						사랑니란 큰 어금니 중에서 3번째 위치인 제 3대구치를 말하며 구강 내에
						제일 늦게 나오는 치아입니다. 대부분 사람들에게서 발견되지만 약
						7%정도는 사랑니가 없는 경우도 있습니다. 사랑니는 치열의 맨 안쪽 끝에
						자리를 잡고있어 칫솔질이 제대로 되지 않는 경우가 있어 치아의 부식이
						쉽게 발생되기도 합니다. 또한 공간이 부족한 경우 치아 전체의 배열에
						영향을 줄 수 있습니다. 사랑니는 무조건 발치 할 필요는 없지만
						사랑니로 인해 충치 및 염증, 치열의 변화가 있는 경우 신속하게 발치
						하여 기타 질환을 미리 예방하는것이 바람직합니다.
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
