import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import "./styles/GumDiseaseTreatment.css";

export default function GumDiseaseTreatment() {
	return (
		<div className="treat-gumdisease">
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
			<section className="causes">
				<h2>원인</h2>
				<div className="row">
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_cause01.jpg"
						alt="원인 1"
					/>
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_cause02.jpg"
						alt="원인 2"
					/>
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_cause03.jpg"
						alt="원인 3"
					/>
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_cause04.jpg"
						alt="원인 4"
					/>
				</div>
			</section>
			<section className="symptoms">
				<h2>증상</h2>
				<div className="row">
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_symptoms_bleedingandswollen.svg"
						alt="출혈/부종"
					/>
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_symptoms_gumabscess.svg"
						alt="농양"
					/>
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_symptoms_looseteeth.svg"
						alt="이동"
					/>
					<img
						src="/assets/images/gum-disease-treatment/gumdiseasetreatment_symptoms_painfulteeth.svg"
						alt="통증"
					/>
				</div>
			</section>
		</div>
	);
}
