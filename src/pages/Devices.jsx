import HeaderSection from "../components/global/HeaderSection";
import HeroSection from "../components/global/HeroSection";
import { heroSection } from "../data/HeroSection";
import { usePathMappedRecord } from "../hooks/usePathMappedRecord";
import { devices } from "../data/devicesDB";
import Carousel from "../components/global/Carousel";
import "./styles/Devices.css";

export default function Devices() {
	const currentHeroSection = usePathMappedRecord(heroSection, {
		getPaths: (item) => item.routes || item.paths || [],
		fallback: heroSection[0],
	});

	return (
		<main className="page-devices">
			<HeaderSection />
			<div className="devices-hero--container">
				<HeroSection />
			</div>
			<div className="devices-hero--content-container ">
				<h2 className="devices-hero--title-kr">
					한 차원 다른 진단. 완성형 치과의 기준을 세웁니다.
				</h2>
			</div>
			<section className="devices-section-1">
				<div className="devices-section-1--content-container">
					<h2 className="devices-section-1--title">
						Machines <span>장비소개</span>
					</h2>
				</div>
				<div className="devices-section-1--carousel-container">
					<Carousel
						items={devices}
						initialId={1}
						autoPlayMs={5000}
						renderItem={(item, isCenter) => (
							<div className={`devices-card${isCenter ? " is-center" : ""}`}>
								<img src={item.image} alt={item.title} />
							</div>
						)}
					/>
				</div>
			</section>
		</main>
	);
}
