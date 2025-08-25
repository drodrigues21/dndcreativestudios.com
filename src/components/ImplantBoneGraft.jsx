import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import CircleCards from "./global/CircleCards";
import StagesCards from "./global/StagesCards";
import SquareCards from "./global/SquareCards";
import "./styles/ImplantBoneGraft.css";

export default function ImplantBoneGraft() {
	return (
		<div className="implant-bonegraft">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">뼈이식 임플란트란?</h2>
					<p className="hero-section--content-text">
						잇몸뼈의 양이 부족할 경우 인공치근이 단단하게{" "}
						<span>자리잡을 수없기 때문에 환자 본인의 뼈나 인공뼈,</span>
						<span>동물뼈, 등을 이식하여 충분한 잇몸 뼈를 형성해 주는</span>
						<span>수술법입니다.</span>
					</p>
				</div>
			</section>
			<section className="section-recommend  implant-bonegraft--recommend">
				<h2 className="section-title implant-home--recommend-title">
					Recommend <span>이런경우 추천해요</span>
				</h2>
				<CircleCards />
			</section>
			<section className="section-recommend implant-bonegraft--stages">
				<h2 className="section-title">
					Stages <span>뼈이식 임임란트 시술과정</span>
				</h2>
				<div className="implant-bonegraft--stages-container">
					<StagesCards />
				</div>
			</section>
			<section className="section-recommend implant-bonegraft-materials-section">
				<h2 className="section-title">
					Materials <span>이식 뼈 재료의 종류</span>
				</h2>
				<div className="implant-bonegraft--materials">
					<SquareCards />
				</div>
			</section>
		</div>
	);
}
