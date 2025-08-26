import HeaderSection from "../components/global/HeaderSection";
import HeroSection from "../components/global/HeroSection";
import { heroSection } from "../data/HeroSection";
import { facilitiesGalleryDB } from "../data/facilitiesGalleryDB";
import { usePathMappedRecord } from "../hooks/usePathMappedRecord";
import Carousel from "../components/global/Carousel";
import inHouseLab from "/assets/images/facility&inhouselab/facilityandinhouselab_inhouselab.jpg";
import "../components/styles/HeroSection.css";
import "./styles/Facilities.css";

export default function Facilities() {
	const currentHeroSection = usePathMappedRecord(heroSection, {
		getPaths: (item) => item.routes || item.paths || [],
		fallback: heroSection[0],
	});

	return (
		<main className="page-facilities">
			<HeaderSection />
			<div className="hero-section--container">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">
						화이트드림치과는 매년 성장을
						<span>거듭하며 운영되고있는 치과입니다.</span>
					</h2>
					<p className="hero-section--content-text">
						300평 이상의 넓은 규모로 앞선 디지털 장비
						<span>시스템과 가공시스템을 구비하고 있습니다.</span>
					</p>
					<p className="hero-section--content-text">
						월 평균 50명 정도의 난 케이스 환자가
						<span>‘치료의뢰’를 통해 방문하고 있습니다.</span>
					</p>
				</div>
			</div>
			<section className="facilities-section-1">
				<div className="facilities-section-1--content">
					<h2 className="facilities-section-1--title">
						Facilities <span>시설 둘러보기</span>
					</h2>
				</div>
				<div className="facilities-section-1--carousel-container">
					<Carousel
						items={facilitiesGalleryDB}
						initialId={1}
						autoPlayMs={5000}
						renderItem={(item, isCenter) => (
							<div className={`facilities-card${isCenter ? " is-center" : ""}`}>
								<img src={item.image} alt={item.title} />
								<h5>{item.title}</h5>
								<p>{item.description}</p>
							</div>
						)}
					/>
				</div>
			</section>
			<section className="facilities-section-2">
				<div className="facilities-section-2--content">
					<h2 className="facilities-section-2--title">
						In-House Lab <span>내부 실험실</span>
					</h2>
				</div>
				<div className="facilities-section-2--img-container">
					<img src={inHouseLab} alt="in-house lab" />
				</div>
				<div className="facilities-section-2--content-text-container">
					<h3 className="facilities-section-2--content-text-title">
						화이트드림치과는 환자의 편의와
						<span>만족스러운 치료결과가 최우선입니다.</span>
					</h3>
					<p className="facilities-section-2--content-text-description">
						20년 이상의 경력을 가지고 있는
						<span>치기공사와 전문의 그룹이 환자에게</span>
						<span>편안하고 자연치아같은 보철물을 제작합니다.</span>
					</p>
					<p className="facilities-section-2--content-text-description">
						보통의 치과들과는 다르게 치과 내에
						<span>3D디지털 기공센터가 있기 때문에 환자들의</span>
						<span>내원 횟수를 줄일 수 있고, 혹시 불편한 점이</span>
						<span>발생하더라도 즉시 보철물의 수정이 가능합니다.</span>
					</p>
				</div>
			</section>
		</main>
	);
}
