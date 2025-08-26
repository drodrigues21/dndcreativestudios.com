import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import BenefitsAndSymptoms from "./global/BenefitsAndSymptoms";
import specialistPic from "/assets/images/invisalign/invisalign_docpic.jpg";
import specialistPicMobile from "/assets/images/invisalign/invisalign_docpic-mobile.png";
import "./styles/OrthodonticsClipPyc.css";

export default function OrthodonticsClipPyc() {
	return (
		<div className="ortho-clippyc">
			<HeaderSection />
			<section className="ortho-hero">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr hero-section--title-kr-clippyc-mobile">
						Clippy-C는 세라믹(Ceramic)
						<span>자가결찰 브라켓으로, 메탈 보다</span>
						<span>뛰어난 심미성과 편리함이 장점입니다</span>
					</h2>
					<h2 className="hero-section--title-kr hero-section--title-kr-clippyc-desktop">
						Clippy-C는 세라믹(Ceramic) 자가결찰 브라켓으로,
						<span>메탈 보다 뛰어난 심미성과 편리함이 장점입니다</span>
					</h2>
					<p className="hero-section--content-text hero-section--content-text-clippyc">
						자가결찰 브라켓은 와이어를 고정하는
						<span>클립 형태의 장치를 사용해 브라켓과 와이어 사이를</span>
						<span>고정하는 얇은 철사가 없어 외관이 더욱 깔끔합니다.</span>
					</p>
					<p className="hero-section--content-text hero-section--content-text-clippyc">
						또한, 브라켓이 와이어를 고정하기 때문에 일정한
						<span>힘을 유지할 수 있어 치아 이동 시 통증이 덜합니다.</span>
					</p>
				</div>
			</section>

			<section className="clp-section-benefits">
				<h2 className="clp-section-benefits--title">
					Benefits <span>클리피씨 장점</span>
				</h2>
				<div className="benefits-cards--clippyc">
					<BenefitsAndSymptoms />
				</div>
			</section>

			<section className="clp-specialist">
				<div className="clp-specialist-img-container">
					<img
						className="clp-specialist-img-mobile"
						src={specialistPicMobile}
						alt="hero image"
					/>
					<img
						className="clp-specialist-img-desktop"
						src={specialistPic}
						alt="hero image"
					/>
				</div>
				<h2 className="clp-specialist--title">
					화이트드림치과의원 강남점은 <span>치과교정과 전문의 및 인정의가</span>
					<span>상주하고 있습니다.</span>
				</h2>
				<p className="clp-specialist--content">
					첫 상담부터 치료의 마지막까지 각각의
					<span>케이스에 맞는 교정치료를 진행하고 있습니다.</span>
				</p>
			</section>
		</div>
	);
}
