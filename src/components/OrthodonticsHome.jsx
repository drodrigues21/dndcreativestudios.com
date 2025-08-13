import "./styles/OrthodonticsHome.css";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";

export default function OrthodonticsHome() {
	return (
		<div className="ortho-home">
			<section className="ortho-hero">
				<img
					src="/assets/images/orthodontics/orthodontics_heroimg.jpg"
					alt="Orthodontics hero"
				/>
				<div className="ortho-hero--content">
					<h1>치아교정</h1>
					<p>보다 고른 치열과 건강한 교합을 위한 맞춤형 교정 치료</p>
				</div>
			</section>

			<section className="ortho-recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<figure>
						<img
							src="/assets/images/orthodontics/orthodontics_recommend_crowded.png"
							alt="Crowded teeth"
						/>
						<figcaption>치열이 고르지 못한 경우</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/orthodontics/orthodontics_recommend_gappedteeth.png"
							alt="Gapped teeth"
						/>
						<figcaption>치아 사이 공간이 큰 경우</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/orthodontics/orthodontics_recommend_overbite.png"
							alt="Overbite"
						/>
						<figcaption>과개교합(Overbite)</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/orthodontics/orthodontics_recommend_underbite.png"
							alt="Underbite"
						/>
						<figcaption>반대교합(Underbite)</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/orthodontics/orthodontics_recommend_openbite.png"
							alt="Openbite"
						/>
						<figcaption>개방교합(Open bite)</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/orthodontics/orthodontics_recommend_crossbite.png"
							alt="Crossbite"
						/>
						<figcaption>교차교합(Cross bite)</figcaption>
					</figure>
				</div>
			</section>

			<section className="ortho-types">
				<h2>교정 장치의 종류</h2>
				<div className="types-grid">
					<figure>
						<img
							src="/assets/images/orthodontics/typesofbraces_metal.jpg"
							alt="Metal braces"
						/>
						<figcaption>메탈 교정</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/orthodontics/typesofbraces_invisalign.jpg"
							alt="Invisalign"
						/>
						<figcaption>인비절라인</figcaption>
					</figure>
					<figure>
						<img
							src="/assets/images/orthodontics/typesofbraces_clippyc.jpg"
							alt="Clippy-C"
						/>
						<figcaption>클리피씨</figcaption>
					</figure>
				</div>
			</section>

			<section className="ortho-beforeafter">
				<h2>Before & After</h2>
				<BeforeAndAfterCard selectedCategory="치아교정" />
			</section>
		</div>
	);
}
