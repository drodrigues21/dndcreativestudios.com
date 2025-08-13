import "./styles/OrthodonticsInvisalign.css";

export default function OrthodonticsInvisalign() {
	return (
		<div className="ortho-invisalign">
			<section className="hero">
				<img
					src="/assets/images/invisalign/invisalign_heroimg.jpg"
					alt="Invisalign hero"
				/>
				<div className="content">
					<h1>인비절라인</h1>
					<p>탈부착 가능한 투명교정으로 일상 속 편안함을</p>
				</div>
			</section>
			<section className="benefits">
				<h2>장점</h2>
				<div className="grid">
					<figure>
						<img
							src="/assets/images/invisalign/invisalign_benefits_fastresult.png"
							alt="빠른 결과"
						/>
						<figcaption>빠른 결과</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/invisalign/invisalign_benefits_lessvisit.png"
							alt="내원 횟수 감소"
						/>
						<figcaption>내원 횟수 감소</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/invisalign/invisalign_benefits_lesspain.png"
							alt="덜 아픔"
						/>
						<figcaption>덜 아픔</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/invisalign/invisalign_benefits_eatfreely.png"
							alt="자유로운 식사"
						/>
						<figcaption>자유로운 식사</figcaption>
					</figure>
				</div>
			</section>
			<section className="doctor">
				<img
					src="/assets/images/invisalign/invisalign_docpic.jpg"
					alt="Doctor"
				/>
			</section>
		</div>
	);
}
