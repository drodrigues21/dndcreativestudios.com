import "../components/styles/HeroSection.css";
import { homeHeroImgDB } from "../data/homeHeroImgDB";

export default function HeroSection() {
	return (
		<section className="main-hero-section">
			<div className="main-hero-section--img">
				<img src={homeHeroImgDB[0].img} alt="" />
			</div>
			<div className="main-hero-section--content">
				<h1>고난이도 임플란트 케이스 임상경험 많은 전문의</h1>
				<h2>타 치과에서 ‘진료의뢰’로 찾아오는 치과</h2>
			</div>
			<div className="main-hero-section--phoneIcon">
				<img src="/assets/icons/phone-icon.svg" alt="" />
			</div>
		</section>
	);
}
