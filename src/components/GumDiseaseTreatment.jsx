import "./styles/GumDiseaseTreatment.css";

export default function GumDiseaseTreatment() {
	return (
		<div className="treat-gumdisease">
			<section className="hero">
				<img
					src="/assets/images/gum-disease-treatment/gumdiseasetreatment_heroimg.jpg"
					alt="Gum disease hero"
				/>
				<div className="content">
					<h1>잇몸치료</h1>
					<p>염증 조절과 치주 건강 회복</p>
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
