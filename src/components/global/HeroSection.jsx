import { heroSection } from "../../data/HeroSection";
import { usePathMappedRecord } from "../../hooks/usePathMappedRecord";
import "../styles/HeroSection.css";

export default function HeroSection() {
	const currentHeroSection = usePathMappedRecord(heroSection, {
		getPaths: (item) => item.routes || item.paths || [],
		fallback: heroSection[0],
	});

	return (
		<div className="hero-section--img-container">
			<img
				src={currentHeroSection.imageMobile}
				alt="Implant hero"
				className="hero-section--img-mobile"
			/>
			<img
				src={currentHeroSection.image}
				alt="Implant hero"
				className="hero-section--img-desktop"
			/>
			<h1 className="hero-section--title-en">{currentHeroSection.title}</h1>
		</div>
	);
}
