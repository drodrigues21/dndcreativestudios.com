import "./styles/ImplantFullMouth.css";

export default function ImplantFullMouth() {
	return (
		<div className="implant-fullmouth">
			<section className="hero">
				<img
					src="/assets/images/full-mouth-implant/fullmouthimplant_heroimg.jpg"
					alt="Full mouth implant hero"
				/>
				<div className="content">
					<h1>전체임플란트</h1>
					<p>전체 치아의 기능과 심미를 동시에 회복</p>
				</div>
			</section>
			<section className="benefits">
				<h2>장점</h2>
				<div className="grid">
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_superstable.png"
						alt="안정적"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_expertlycrafted.png"
						alt="정밀 제작"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_freedomtospeak.png"
						alt="자유로운 발음"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_benefits_lowmaintenance.png"
						alt="유지관리 용이"
					/>
				</div>
			</section>
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/full-mouth-implant/fullmouthimplant_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
		</div>
	);
}
