import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import "./styles/TMJtreatment.css";

export default function TMJtreatment() {
	return (
		<div className="treat-tmj">
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
			<section className="symptoms">
				<h2>증상</h2>
				<img
					src="/assets/images/tmj-treatment/tmj_symptomimg.jpg"
					alt="TMJ symptoms"
				/>
			</section>
			<section className="methods">
				<h2>치료 방법</h2>
				<div className="row">
					<img
						src="/assets/images/tmj-treatment/tmj_treatment_method01.jpg"
						alt="방법 1"
					/>
					<img
						src="/assets/images/tmj-treatment/tmj_treatment_method02.jpg"
						alt="방법 2"
					/>
					<img
						src="/assets/images/tmj-treatment/tmj_treatment_method03.jpg"
						alt="방법 3"
					/>
					<img
						src="/assets/images/tmj-treatment/tmj_treatment_method04.jpg"
						alt="방법 4"
					/>
				</div>
			</section>
		</div>
	);
}
