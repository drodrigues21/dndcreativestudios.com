import "./styles/OrthodonticsClipPyc.css";

export default function OrthodonticsClipPyc() {
	return (
		<div className="ortho-clippyc">
			<section className="hero">
				<img
					src="/assets/images/clippy-c/clippyc_heroimg.jpg"
					alt="Clippy-C hero"
				/>
				<div className="content">
					<h1>클리피씨</h1>
					<p>자연스러운 심미성과 효율적인 치아 이동</p>
				</div>
			</section>
			<section className="benefits">
				<h2>장점</h2>
				<div className="grid">
					<figure>
						<img
							src="/assets/images/clippy-c/clippyc_benefits_fastresult.png"
							alt="빠른 결과"
						/>
						<figcaption>빠른 결과</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/clippy-c/clippyc_benefits_lessvisit.png"
							alt="내원 횟수 감소"
						/>
						<figcaption>내원 횟수 감소</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/clippy-c/clippyc_benefits_lesspain.png"
							alt="덜 아픔"
						/>
						<figcaption>덜 아픔</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/clippy-c/clippyc_benefits_aesthetic.png"
							alt="심미적"
						/>
						<figcaption>심미적</figcaption>
					</figure>
				</div>
			</section>
			<section className="doctor">
				<img src="/assets/images/clippy-c/clippyc_doctorimg.jpg" alt="Doctor" />
			</section>
		</div>
	);
}
