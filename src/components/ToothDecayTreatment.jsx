import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import "./styles/ToothDecayTreatment.css";

export default function ToothDecayTreatment() {
	return (
		<div className="treat-toothdecay">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
			</section>
			<section className="stages">
				<h2>충치 진행 단계</h2>
				<div className="row">
					<img
						src="/assets/images/tooth-decay-treatment/toothdecaytreatment_stage01.png"
						alt="stage 1"
					/>
					<img
						src="/assets/images/tooth-decay-treatment/toothdecaytreatment_stage02.png"
						alt="stage 2"
					/>
					<img
						src="/assets/images/tooth-decay-treatment/toothdecaytreatment_stage03.png"
						alt="stage 3"
					/>
					<img
						src="/assets/images/tooth-decay-treatment/toothdecaytreatment_stage04.png"
						alt="stage 4"
					/>
				</div>
			</section>
		</div>
	);
}
