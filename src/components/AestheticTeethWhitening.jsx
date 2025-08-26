import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import CircleCards from "./global/CircleCards";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";
import BenefitsAndSymptoms from "./global/BenefitsAndSymptoms";
import "./styles/AestheticTeethWhitening.css";

export default function AestheticTeethWhitening() {
	return (
		<div className="aesthetic-whitening">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">
						화이트드림 1-DAY 전문가미백
					</h2>
					<p className="hero-section--content-text">
						높은 농도의 미백제를 바른 후 미백 속도를 빠르게 해주는 광선을
						부가적으로 이용하여 미백의 효과를 극대화하는 시술입니다.
					</p>
					<p className="hero-section--content-text">
						치아를 깨끗하게 세척한 후 미백제를 바르고 광선을 조사하는 과정으로
						미백하려는 치아에만 선택적으로 고농도의 미백제를 도포해야 하기
						때문에 잇몸의 정확하고 꼼꼼한 격리가 수반되어야 합니다.
					</p>
					<p className="hero-section--content-text">
						강남 화이트 드림치과에서는 미백제가 희석되지 않고 치아 표면에
						오염되지 않도록 타액을 확실히 격리시키며, 입술 또한 보호크림을
						바르고 미백을 진행하기 때문에 안전한 시술이 가능하며 만족도가
						높습니다.
					</p>
				</div>
			</section>
			<section className="section-recommend implant-fullmouth--recommend">
				<h2 className="section-title implant-fullmouth--recommend-title">
					Recommend <span>이런분께 추천해요</span>
				</h2>
				<CircleCards />
			</section>
			<section className="veneers-beforeafter">
				<h2 className="section-title">
					Before & After <span>화이티니 라미 전후사진</span>
				</h2>
				<BeforeAndAfterCard selectedCategory="치아교정" />
				<div className="before-and-after--notice">
					<p>
						*본이미지는 치료의 이해를 위해 삽입되었으며, 모든치료는 개인차가
						있습니다.
					</p>
					<p>
						*동일한 조건에서 촬영되었으며, 보정이 이루어지지 않은 이미지입니다
					</p>
				</div>
			</section>
			<section className="implant-fullmouth--benefits">
				<h2 className="section-title implant-fullmouth--benefits-title">
					Benefits <span>화이티니 라미네이트 장점</span>
				</h2>
				<div className="benefits-cards--container">
					<BenefitsAndSymptoms />
				</div>
			</section>
		</div>
	);
}
