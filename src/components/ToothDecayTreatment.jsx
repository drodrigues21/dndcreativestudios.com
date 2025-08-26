import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import StagesCards from "./global/StagesCards";

import treatmentTimingIMG from "/assets/images/tooth-decay-treatment/toothdecay_timing.png";
import "./styles/ToothDecayTreatment.css";

export default function ToothDecayTreatment() {
	return (
		<div className="treat-toothdecay">
			<HeaderSection />
			<section className="hero-section tooth-decay-treatment--hero">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">충치의 원인과 치료</h2>
					<p className="hero-section--content-text">
						치아 머리 부분의 표면을 덮고 있으며, 치아 상아질을 보호하는 반투명한
						흰색의 단단한 물질을 에나멜질이라고 합니다.
					</p>
					<p className="hero-section--content-text">
						입 속에 있는 박테리아에 의해 전분,설탕, 당 등이 분해 되면서 산이
						발생되는데 이때 산에 의해 에나멜질이 손상되어 충치가 발생합니다.
					</p>
					<p className="hero-section--content-text">
						충치를 치료할 때에는 레진을 주 재료로 사용하며 충치의 범위와
						치료방법에 따라 골드,지르코니아, 세라믹 등의 재료가 사용됩니다.
					</p>
					<p className="hero-section--content-text">
						또한 충치의 범위에 따라 레진 치료나 인레이, 올세라믹,크라운 등
						다양한 방법으로 치료 받게 되며 이때 재료선정 및 치료 방법은
						치과의사와 상의 후 합리적인 비용 및 상태에 따라 선정합니다.
					</p>
				</div>
			</section>
			<section className="section-recommend tooth-decay-treatment--stages">
				<h2 className="section-title">
					Treatment by stages <span>충치 진행 단계별 치료</span>
				</h2>
				<div className="tooth-decay-treatment--stages-container">
					<StagesCards />
				</div>
			</section>
			<section className="tooth-decay-treatment--timing">
				<h2 className="section-title tooth-decay-treatment-title--mobile">
					Treatment timing <span>충치 치료 시기는?</span>
				</h2>
				<h2 className="section-title tooth-decay-treatment-title--desktop">
					When to start treatment <span>충치치료 언제 해야할까?</span>
				</h2>
				<div className="tooth-decay-treatment--timing-content">
					<div className="tooth-decay-treatment--timing-content-img">
						<img
							src={treatmentTimingIMG}
							alt="Woman with pain due to tooth decay"
						/>
					</div>
					<div className="tooth-decay-treatment--timing-content-text">
						<h5>
							<span>Q.</span> 충치치료 언제해야할까?
						</h5>
						<h5>
							<span>A.</span> 충치를 발견한 그 즉시!
						</h5>
						<p>
							전염성이 있는 충치는 주변 치아까지 우식
							<span>시키며, 치료 시기를 놓쳐 충치가 신경까지</span>
							<span>침범하면 신경치료를 해야합니다.</span>
							<span>심한경우 발치 후 임플란트 시술을 받아야</span>
							<span>하기 때문에 발견즉시 내원하여 진료 받는걸</span>
							추천드립니다.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
