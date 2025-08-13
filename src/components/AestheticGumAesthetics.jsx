import "./styles/AestheticGumAesthetics.css";

export default function AestheticGumAesthetics() {
	return (
		<div className="aesthetic-gum">
			<section className="hero">
				<img
					src="/assets/images/gum-aesthetic/gumaesthtic_heroimg.jpg"
					alt="Gum aesthetics hero"
				/>
				<div className="content">
					<h1>잇몸성형</h1>
					<p>균형 잡힌 미소선을 위한 잇몸 라인 개선</p>
				</div>
			</section>
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/gum-aesthetic/gumaesthtic_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
			<section className="types">
				<h2>치료 유형</h2>
				<div className="grid">
					<img
						src="/assets/images/gum-aesthetic/typesoftreatment01.jpg"
						alt="유형 1"
					/>
					<img
						src="/assets/images/gum-aesthetic/typesoftreatment02.jpg"
						alt="유형 2"
					/>
					<img
						src="/assets/images/gum-aesthetic/typesoftreatment03.jpg"
						alt="유형 3"
					/>
				</div>
			</section>
		</div>
	);
}
