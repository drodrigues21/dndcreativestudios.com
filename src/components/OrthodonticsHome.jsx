import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import { heroSection } from "../data/HeroSection";
import { usePathMappedRecord } from "../hooks/usePathMappedRecord";
import { orthodonticsDB } from "../data/orthodonticsDB";
import { squareCardsDB } from "../data/squareCardsDB";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";
import "./styles/OrthodonticsHome.css";

export default function OrthodonticsHome() {
	// const currentHeroSection = usePathMappedRecord(heroSection, {
	// 	getPaths: (item) => item.routes || item.paths || [],
	// 	fallback: heroSection[0],
	// });

	const typesOfBraces = squareCardsDB.filter(
		(item) => item.section === "braces"
	);

	return (
		<div className="ortho-home">
			<HeaderSection />
			<section className="ortho-hero">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">
						치아 교정을 해야 하는 이유는?
					</h2>
					<p className="hero-section--content-text">
						치아가 벌어져 있는 경우 충치 발생 확률이
						<span>높아질 수 있고, 부정교합인 경우 턱관절 질환으로</span>
						<span>이어질 가능성이 있습니다.</span>
						<span>치아교정으로 이런</span>
						<span>문제점들을 예방 및 개선이 가능합니다.</span>
					</p>
				</div>
			</section>

			<section className="ortho-section-recommend">
				<h2 className="ortho-section-recommend--title">
					Recommend <span>이런분께 추천해요</span>
				</h2>
				<div className="ortho-section-recommend--cards-container">
					{orthodonticsDB.map((item) => (
						<div className="ortho-section-recommend--card" key={item.id}>
							<img src={item.image} alt={item.title} />
							<h3>{item.title}</h3>
							<p>{item.description1}</p>
							<p>{item.description2}</p>
						</div>
					))}
				</div>
			</section>

			<section className="ortho-beforeafter">
				<h2 className="ortho-beforeafter--title">
					Before & After <span>교정 전후사진</span>
				</h2>
				<BeforeAndAfterCard selectedCategory="치아교정" />
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

			<section className="ortho-section--types-of-braces">
				<h2 className="ortho-section--types-of-braces--title">
					Types of Braces <span>교정치료 종류</span>
				</h2>
				<div className="ortho-section--types-of-braces--cards-container">
					{typesOfBraces.map((item) => (
						<div className="ortho-section--types-of-braces--card" key={item.id}>
							<img
								className="ortho-section--types-of-braces--card-img"
								src={item.image}
								alt={item.title}
							/>
							<h3>
								{item.title}
								<span>
									<img src={item.icon} alt="" />
								</span>
							</h3>
							<div className="pill--container">
								<span className="card--black-pill">{item.blackPill}</span>
								<p>{item.advantage}</p>
							</div>
							<div className="pill--container">
								<span className="card-white--pill">{item.whitePill}</span>
								<p>{item.disadvantage}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
