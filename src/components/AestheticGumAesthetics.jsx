import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import CircleCards from "./global/CircleCards";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";
import SquareCards from "./global/SquareCards";
import "./styles/AestheticGumAesthetics.css";

export default function AestheticGumAesthetics() {
	return (
		<div className="aesthetic-gum">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">잇몸성형이란?</h2>
					<p className="hero-section--content-text">
						과도하게 드러나는 잇몸이나 비대칭 라인을 다듬어
						<span>미소를 아름답게 정리하며, 잇몸이 얇거나 내려간</span>
						<span>부위에는 이식술을 통해 건강한 잇몸을 되찾고,</span>
						<span>어두운 잇몸은 레이저 미백으로 생기 있는</span>
						<span>핑크빛으로개선해 전체적인 인상을 밝게 만듭니다.</span>
					</p>
				</div>
			</section>
			<section className="section-recommend implant-fullmouth--recommend">
				<h2 className="section-title implant-fullmouth--recommend-title">
					Recommend <span>이런분께 추천해요</span>
				</h2>
				<CircleCards />
			</section>
			<section className="gum-aesthetics--beforeafter">
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
					Types of surgery <span>잇몸성형 종류</span>
				</h2>
				<div className="types-of-surgery-cards--container">
					<SquareCards />
				</div>
			</section>
		</div>
	);
}
