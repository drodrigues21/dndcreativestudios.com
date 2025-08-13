import "./styles/AestheticTeethWhitening.css";

export default function AestheticTeethWhitening() {
	return (
		<div className="aesthetic-whitening">
			<section className="hero">
				<img
					src="/assets/images/whitening/whitening_heroimg.jpg"
					alt="Whitening hero"
				/>
				<div className="content">
					<h1>치아미백</h1>
					<p>안전하고 효과적인 미백 치료</p>
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
