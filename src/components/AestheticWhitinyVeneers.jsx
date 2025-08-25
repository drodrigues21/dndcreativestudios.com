import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import "./styles/AestheticWhitinyVeneers.css";

export default function AestheticWhitinyVeneers() {
	return (
		<div className="aesthetic-veneers">
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
						src="/assets/images/veneers/veneers_benefits_002mm.svg"
						alt="얇은 두께"
					/>
					<img
						src="/assets/images/veneers/veneers_benefits_1dayresult.svg"
						alt="빠른 결과"
					/>
					<img
						src="/assets/images/veneers/veneers_benefits_inhouselab.svg"
						alt="인하우스 랩"
					/>
					<img
						src="/assets/images/veneers/veneers_benefits_minimum.svg"
						alt="최소 삭제"
					/>
				</div>
			</section>
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<img
						src="/assets/images/veneers/veneers_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/veneers/veneers_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/veneers/veneers_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/veneers/veneers_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
		</div>
	);
}
