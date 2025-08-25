import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import "./styles/AestheticTeethWhitening.css";

export default function AestheticTeethWhitening() {
	return (
		<div className="aesthetic-whitening">
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
						src="/assets/images/whitening/whitening_benefit_1daytreatment.svg"
						alt="1 Day"
					/>
					<img
						src="/assets/images/whitening/whitening_benefit_approvedmaterial.svg"
						alt="승인된 재료"
					/>
					<img
						src="/assets/images/whitening/whitening_benefit_lesssensitivity.svg"
						alt="저감도"
					/>
					<img
						src="/assets/images/whitening/whitening_benefit_satisfyingresult.svg"
						alt="만족도"
					/>
				</div>
			</section>
		</div>
	);
}
