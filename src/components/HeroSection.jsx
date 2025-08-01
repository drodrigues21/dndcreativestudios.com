import { useState, useEffect } from "react";
import "../components/styles/HeroSection.css";
import { homeHeroImgDB } from "../data/homeHeroImgDB";

export default function HeroSection() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % homeHeroImgDB.length
			);
		}, 5000); // Change image every 5 seconds

		// Cleanup interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="main-hero-section">
			<div className="main-hero-section--img">
				<img
					src={
						window.innerWidth < 1024
							? homeHeroImgDB[currentImageIndex].mobileImg
							: homeHeroImgDB[currentImageIndex].img
					}
					alt=""
				/>
			</div>
			<div className="main-hero-section--content">
				<h1>
					고난이도 임플란트 케이스 <br></br> 임상경험 많은 전문의
				</h1>
				<h2>타 치과에서 '진료의뢰'로 찾아오는 치과</h2>
			</div>
			<div className="main-hero-section--phoneIcon">
				<a href="tel:025582879">
					<img src="/assets/icons/phone-icon.svg" alt="" />
				</a>
			</div>
		</section>
	);
}
