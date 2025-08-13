import "./styles/ImplantHome.css";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";

export default function ImplantHome() {
	return (
		<div className="implant-home">
			<section className="hero">
				<img
					src="/assets/images/implant/implant_heroimg.jpg"
					alt="Implant hero"
				/>
				<div className="content">
					<h1>임플란트</h1>
					<p>자연치아에 가까운 기능과 심미성</p>
				</div>
			</section>
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="grid">
					<img
						src="/assets/images/implant/implant_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/implant/implant_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/implant/implant_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/implant/implant_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
			<section className="structure">
				<h2>임플란트 구조</h2>
				<img
					src="/assets/images/implant/implant_structure.png"
					alt="임플란트 구조"
				/>
			</section>
			<section className="beforeafter">
				<h2>Before & After</h2>
				<BeforeAndAfterCard selectedCategory="임플란트" />
			</section>
		</div>
	);
}
