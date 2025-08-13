import "./styles/TMJtreatment.css";

export default function TMJtreatment() {
	return (
		<div className="treat-tmj">
			<section className="hero">
				<img
					src="/assets/images/tmj-treatment/tmj_heroimg.jpg"
					alt="TMJ hero"
				/>
				<div className="content">
					<h1>턱관절치료</h1>
					<p>증상 완화와 기능 회복을 위한 체계적 치료</p>
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
