import "./styles/AestheticWhitinyVeneers.css";

export default function AestheticWhitinyVeneers() {
	return (
		<div className="aesthetic-veneers">
			<section className="hero">
				<img
					src="/assets/images/veneers/veneers_heroimg.jpg"
					alt="Veneers hero"
				/>
				<div className="content">
					<h1>화이트니 라미네이트</h1>
					<p>얇고 자연스러운 심미 보철</p>
				</div>
			</section>
			<section className="benefits">
				<h2>장점</h2>
				<div className="grid">
					<img
						src="/assets/images/veneers/veneers_benefits_002mm.svg"
						alt="얇은 두께"
					/>
					<img
						src="/assets/images/veneers/veneers_benefits_1dayresult.svg"
						alt="빠른 결과"
					/>
					<img
						src="/assets/images/veneers/veneers_benefits_inhouselab.svg"
						alt="인하우스 랩"
					/>
					<img
						src="/assets/images/veneers/veneers_benefits_minimum.svg"
						alt="최소 삭제"
					/>
				</div>
			</section>
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<img
						src="/assets/images/veneers/veneers_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/veneers/veneers_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/veneers/veneers_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/veneers/veneers_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
		</div>
	);
}
