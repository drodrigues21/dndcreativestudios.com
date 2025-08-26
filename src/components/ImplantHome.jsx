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
				<div className="implant-home--structure-container">
					<div className="implant-home--structure-img">
						<img
							src="/assets/images/implant/implant_structure.png"
							alt="임플란트 구조"
						/>
					</div>
					<div className="implant-home--structure-content">
						<div className="implant-home--structure-content-mobile">
							<div className="implant-home--structure-content-mobile-content">
								<div className="implant-home--structure-content-mobile-content-item">
									<h5>보철 (크라운)</h5>
									<p>
										인접치아와 어울려 조화를 이루도록
										<span>인공으로 만든 치아의 상부</span>
									</p>
								</div>
								<div className="implant-home--structure-content-mobile-content-item">
									<h5>지대주(어버트먼트)</h5>
									<p>
										보철물을 지지하기 위해 인공치근과
										<span>크라운을 연결하는 부분</span>
									</p>
								</div>
								<div className="implant-home--structure-content-mobile-content-item">
									<h5>인공치근(픽스처)</h5>
									<p>
										치조골에 심어져 치아의 심어져
										<span>치아의 뿌리역할을 하는 부분</span>
									</p>
								</div>
							</div>
						</div>
						<div className="implant-home--structure-content-desktop">
							<div className="implant-home--structure-content-desktop-header">
								<div className="implant-home--structure-content-desktop-header-left">
									<h4>부위</h4>
								</div>
								<div className="implant-home--structure-content-desktop-header-right">
									<h4>설명</h4>
								</div>
							</div>
							<div className="implant-home--structure-content-desktop-content">
								<div className="implant-home--structure-content-desktop-content-item">
									<h5>보철(크라운)</h5>
									<p>
										인접치아와 어울려 조화를 이루도록
										<span>인공으로 만든 치아의 상부</span>
									</p>
								</div>
								<div className="implant-home--structure-content-desktop-content-item">
									<h5>지대주(어버트먼트)</h5>
									<p>
										보철물을 지지하기 위해 인공치근과
										<span>크라운을 연결하는 부분</span>
									</p>
								</div>
								<div className="implant-home--structure-content-desktop-content-item">
									<h5>인공치근(픽스처)</h5>
									<p>
										치조골에 심어져 치아의 심어져
										<span>치아의 뿌리역할을 하는 부분</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
