import HeaderSection from "./global/HeaderSection";
import HeroSection from "./global/HeroSection";
import SquareCardsWithImages from "./global/SquareCardsWithImages";
import tealSquare from "/assets/icons/teal-square.png";
import checkmark from "/assets/icons/checkmark.png";
import tmjSymptomsImg from "/assets/images/tmj-treatment/tmj_symptomimg.jpg";
import tmjSymptomsImgMobile from "/assets/images/tmj-treatment/tmj_symptomimg-mobile.png";
import "./styles/TMJtreatment.css";

export default function TMJtreatment() {
	return (
		<div className="treat-tmj">
			<HeaderSection />
			<section className="hero-section">
				<HeroSection />
				<div className="hero-section--content-container">
					<h2 className="hero-section--title-kr">턱관절 장애란?</h2>
					<p className="hero-section--content-text">
						턱관절이 탈구되거나 염증이 생겨, 턱 통증이
						<span>유발되는 증상을 말합니다. 입을 벌리고 다물때</span>
						<span>턱 디스크의 위치가 변화 하면서 입을 부드럽게</span>
						여닫지 못해 움직임에 장애가 생기는 것을 말합니다.
					</p>
				</div>
			</section>
			<section className="tmj-treatment--symptoms">
				<h2 className="section-title">
					Symptoms of TMD <span>턱관절 장애 증상 체크리스트</span>
				</h2>
				<div className="tmj-treatment-content--container">
					<div className="tmj-treatment-img--container">
						<img
							className="tmj-treatment-img--desktop"
							src={tmjSymptomsImg}
							alt="Woman with toothache and TMJ symptoms"
						/>
						<img
							className="tmj-treatment-img--mobile"
							src={tmjSymptomsImgMobile}
							alt="Woman with toothache and TMJ symptoms"
						/>
					</div>
					<div className="tmj-treatment-content">
						<div className="tmj-treatment-content--text">
							<div className="tmj-treatment-content--checkmark">
								<img className="teal-square" src={tealSquare} alt="" />
								<img className="checkmark-icon" src={checkmark} alt="" />
							</div>
							<p>
								입을 여닫을 때 덜컥 거리고 ‘딱’하는 <span>소리가 들린다.</span>
							</p>
						</div>
						<div className="tmj-treatment-content--text">
							<div className="tmj-treatment-content--checkmark">
								<img className="teal-square" src={tealSquare} alt="" />
								<img className="checkmark-icon" src={checkmark} alt="" />
							</div>
							<p>
								턱 주변의 뻐근한 느낌과 함께
								<span>목, 어깨, 머리 쪽 통증이 있다.</span>
							</p>
						</div>
						<div className="tmj-treatment-content--text">
							<div className="tmj-treatment-content--checkmark">
								<img className="teal-square" src={tealSquare} alt="" />
								<img className="checkmark-icon" src={checkmark} alt="" />
							</div>
							<p>
								검지, 중지, 약지를 모아 세로로 입에
								<span>넣으려 하면 잘 들어가지 않는다.</span>
							</p>
						</div>
						<div className="tmj-treatment-content--text">
							<div className="tmj-treatment-content--checkmark">
								<img className="teal-square" src={tealSquare} alt="" />
								<img className="checkmark-icon" src={checkmark} alt="" />
							</div>
							<p>
								아침에 일어나서 입을 벌리려 하면,
								<span>잘 벌려지지 않는다.</span>
							</p>
						</div>
						<div className="tmj-treatment-content--text">
							<div className="tmj-treatment-content--checkmark">
								<img className="teal-square" src={tealSquare} alt="" />
								<img className="checkmark-icon" src={checkmark} alt="" />
							</div>
							<p>턱 통증으로 식사를 하기 어렵다.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="tmj-treatment--target-audience">
				<h2 className="section-title">
					Treatment methods <span>턱관절 장애 치료 방법</span>
				</h2>
				<div className="tmj-treatment--target-audience-container square-cards-with-image--container">
					<SquareCardsWithImages />
				</div>
			</section>
		</div>
	);
}
