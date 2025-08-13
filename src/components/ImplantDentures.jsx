import "./styles/ImplantDentures.css";

export default function ImplantDentures() {
	return (
		<div className="implant-dentures">
			<section className="hero">
				<img
					src="/assets/images/Implant-supported dentures/Implant_supported_dentures_heroimg.jpg"
					alt="Implant-supported dentures hero"
				/>
				<div className="content">
					<h1>임플란트 틀니</h1>
					<p>더 안정적인 유지력과 편안함</p>
				</div>
			</section>
			<section className="benefits">
				<h2>장점</h2>
				<div className="grid">
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_benefits_stableandstrong.svg"
						alt="안정적"
					/>
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_benefits_noboneloss.svg"
						alt="뼈 흡수 방지"
					/>
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_benefits_lesspain.svg"
						alt="덜 아픔"
					/>
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_benefits_costeffective.svg"
						alt="경제적"
					/>
				</div>
			</section>
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/Implant-supported dentures/Implant_supported_dentures_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
		</div>
	);
}
