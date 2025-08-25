import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import "./styles/AestheticGumAesthetics.css";

export default function AestheticGumAesthetics() {
	return (
		<div className="aesthetic-gum">
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
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
			<section className="types">
				<h2>치료 유형</h2>
				<div className="grid">
					<img
						src="/assets/images/gum-aesthetic/typesoftreatment01.jpg"
						alt="유형 1"
					/>
					<img
						src="/assets/images/gum-aesthetic/typesoftreatment02.jpg"
						alt="유형 2"
					/>
					<img
						src="/assets/images/gum-aesthetic/typesoftreatment03.jpg"
						alt="유형 3"
					/>
				</div>
			</section>
		</div>
	);
}
