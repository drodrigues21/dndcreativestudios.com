import "./styles/ToothDecayTreatment.css";

export default function ToothDecayTreatment() {
	return (
		<div className="treat-toothdecay">
			<section className="hero">
				<img
					src="/assets/images/tooth-decay-treatment/toothdecaytreatment_heroimg.jpg"
					alt="Tooth decay hero"
				/>
				<div className="content">
					<h1>충치치료</h1>
					<p>초기부터 정확한 진단과 치료</p>
				</div>
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
