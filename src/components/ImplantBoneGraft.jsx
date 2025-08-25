import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import CircleCards from "./global/CircleCards";
import "./styles/ImplantBoneGraft.css";

export default function ImplantBoneGraft() {
	return (
		<div className="implant-bonegraft">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">임플란트란?</h2>
					<p className="hero-section--content-text">
						상실한 자연치아를 대체하기 위해 잇몸뼈에 직접
						<span>인공 치근을 식립하여 치아를 복원하는데 도움을 주는</span>
						<span>대표적인 치료 방법입니다.</span>
					</p>
				</div>
			</section>
			<section className="stages">
				<h2 className="section-title implant-home--recommend-title">
					Recommend <span>이런경우 추천해요</span>
				</h2>
				<CircleCards />
			</section>
			<section className="materials">
				<h2>재료</h2>
				<div className="row">
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_materials01.jpg"
						alt="material 1"
					/>
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_materials02.jpg"
						alt="material 2"
					/>
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_materials03.jpg"
						alt="material 3"
					/>
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_materials04.jpg"
						alt="material 4"
					/>
				</div>
			</section>
			<section className="recommend">
				<h2>이런 분께 추천드려요</h2>
				<div className="row">
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_recommend01.png"
						alt="추천 1"
					/>
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_recommend02.png"
						alt="추천 2"
					/>
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_recommend03.png"
						alt="추천 3"
					/>
					<img
						src="/assets/images/dental-bone-graft/dentalbonegraft_recommend04.png"
						alt="추천 4"
					/>
				</div>
			</section>
		</div>
	);
}
