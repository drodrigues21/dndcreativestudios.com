import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import "./styles/WisdomToothRemoval.css";

export default function WisdomToothRemoval() {
	return (
		<div className="treat-wisdom">
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
			<section className="problems">
				<h2>문제 유형</h2>
				<div className="row">
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_problem01.jpg"
						alt="문제 1"
					/>
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_problem02.jpg"
						alt="문제 2"
					/>
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_problem03.jpg"
						alt="문제 3"
					/>
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_problem04.jpg"
						alt="문제 4"
					/>
				</div>
			</section>
			<section className="stages">
				<h2>치료 단계</h2>
				<div className="row">
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_treatment_stage01.png"
						alt="stage 1"
					/>
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_treatment_stage02.png"
						alt="stage 2"
					/>
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_treatment_stage03.png"
						alt="stage 3"
					/>
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_treatment_stage04.png"
						alt="stage 4"
					/>
					<img
						src="/assets/images/wisdomtooth-removal/wisdomtoothremoval_treatment_stage05.png"
						alt="stage 5"
					/>
				</div>
			</section>
		</div>
	);
}
