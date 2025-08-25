import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";
import CircleCards from "./global/CircleCards";
import "./styles/ImplantHome.css";

export default function ImplantHome() {
	return (
		<div className="implant-home">
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

			<section className="section-recommend implant-home--recommend">
				<h2 className="section-title implant-home--recommend-title">
					Recommend <span>이런경우 추천해요</span>
				</h2>
				<CircleCards />
			</section>

			<section className="implant-home--beforeafter">
				<h2 className="section-title implant-home--beforeafter-title">
					Before & After <span>임플란트 전후사진</span>
				</h2>
				<BeforeAndAfterCard selectedCategory="임플란트" />
				<div className="before-and-after-ortho--notice">
					<p>
						*본이미지는 치료의 이해를 위해 삽입되었으며, 모든치료는 개인차가
						있습니다.
					</p>
					<p>
						*동일한 조건에서 촬영되었으며, 보정이 이루어지지 않은 이미지입니다
					</p>
				</div>
			</section>

			<section className="implant-home--structure">
				<h2 className="section-title implant-home--structure-title">
					Structure of implant <span>임플란트 구조</span>
				</h2>
				<img
					src="/assets/images/implant/implant_structure.png"
					alt="임플란트 구조"
				/>
			</section>
		</div>
	);
}
