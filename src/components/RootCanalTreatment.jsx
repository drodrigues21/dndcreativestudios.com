import "./styles/RootCanalTreatment.css";

export default function RootCanalTreatment() {
	return (
		<div className="treat-rootcanal">
			<section className="hero">
				<img
					src="/assets/images/root-canal-treatment/rootcanaltreatment_heroimg.jpg"
					alt="Root canal hero"
				/>
				<div className="content">
					<h1>신경치료</h1>
					<p>치아를 보존하기 위한 근관 치료</p>
				</div>
			</section>
			<section className="stages">
				<h2>치료 단계</h2>
				<div className="row">
					<img
						src="/assets/images/root-canal-treatment/rootcanaltreatment_stage01.png"
						alt="stage 1"
					/>
					<img
						src="/assets/images/root-canal-treatment/rootcanaltreatment_stage02.png"
						alt="stage 2"
					/>
					<img
						src="/assets/images/root-canal-treatment/rootcanaltreatment_stage03.png"
						alt="stage 3"
					/>
					<img
						src="/assets/images/root-canal-treatment/rootcanaltreatment_stage04.png"
						alt="stage 4"
					/>
				</div>
			</section>
		</div>
	);
}
