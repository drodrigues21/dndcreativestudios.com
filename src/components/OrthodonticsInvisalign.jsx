import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import BenefitsAndSymptoms from "./global/BenefitsAndSymptoms";
import specialistPic from "/assets/images/invisalign/invisalign_docpic.jpg";
import specialistPicMobile from "/assets/images/invisalign/invisalign_docpic-mobile.png";
import "./styles/OrthodonticsInvisalign.css";

export default function OrthodonticsInvisalign() {
	return (
		<div className="ortho-invisalign">
			<HeaderSection />
			<section className="ortho-hero">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">
						전세계 1천만명이 Invisalign합니다
					</h2>
					<p className="hero-section--content-text">
						인비절라인은 눈에 거의 띄지 않는 투명한재질의
						<span>교정장치로 탈부착이 가능한 FDA 승인을 받은</span>
						<span>의료 기기입니다.</span>
					</p>
				</div>
			</section>

			<section className="invis-section-benefits">
				<h2 className="section-title invis-section-benefits--title">
					Benefits <span>인비절라인 장점</span>
				</h2>
				<div className="benefits-cards--invisalign">
					<BenefitsAndSymptoms />
				</div>
			</section>

			<section className="invis-specialist">
				<div className="invis-specialist-img-container">
					<img
						className="invis-specialist-img-mobile"
						src={specialistPicMobile}
						alt="hero image"
					/>
					<img
						className="invis-specialist-img-desktop"
						src={specialistPic}
						alt="hero image"
					/>
				</div>
				<h2 className="invis-specialist--title">
					화이트드림치과의원 강남점은 <span>치과교정과 전문의 및 인정의가</span>
					<span>상주하고 있습니다.</span>
				</h2>
				<p className="invis-specialist--content">
					첫 상담부터 치료의 마지막까지 각각의
					<span>케이스에 맞는 교정치료를 진행하고 있습니다.</span>
				</p>
			</section>
		</div>
	);
}
