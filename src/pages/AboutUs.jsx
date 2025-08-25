import HeaderSection from "../components/global/HeaderSection";
import heroImg from "/assets/images/aboutus/aboutus_heroimg.jpg";
import aboutus01 from "/assets/images/aboutus/aboutus01.jpg";
import aboutus02 from "/assets/images/aboutus/aboutus02.jpg";
import aboutus03 from "/assets/images/aboutus/aboutus03.png";
import aboutus03Desktop from "/assets/images/aboutus/aboutus03-desktop.jpg";

import "./styles/AboutUs.css";

export default function AboutUs() {
	return (
		<main className="page-aboutus">
			{/* Header Section */}
			<HeaderSection />
			{/* Hero Section */}
			<h1 className="page-aboutus--title">We put your health first</h1>
			<div className="page-aboutus--hero-img">
				<img src={heroImg} alt="hero" />
			</div>
			<section className="page-aboutus--hero-section">
				<h3 className="page-aboutus--section--title">
					환자분들에게 만족스러운 치료 결과를 제공하는 것.
				</h3>
				<p className="page-aboutus--section--text">
					이보다 나은 가치는 적어도
					<span>화이트드림치과에서는 없습니다. 어려운 치료를</span>
					<span>잘하는 치과, 나와 가족이 함께 치료 받을 수 있는</span> 신뢰받는
					치과가 되는데 최선의 노력을 다하겠습니다.
				</p>
				<p className="page-aboutus--section--text">
					오늘도 어김없이 환자분들을 만납니다.{" "}
					<span>제가 가장 잘 할 수 있고 좋아하는 이 일을 오늘도</span> 할 수
					있음에 늘 감사한 마음입니다.
				</p>
			</section>
			<section className="page-aboutus--section-1">
				<div className="page-aboutus--section-1--img">
					<img src={aboutus01} alt="Dentist with patient" />
					<img src={aboutus02} alt="Prosthetic teeth" />
				</div>
				<div className="page-aboutus--section-1--content">
					<h3 className="page-aboutus--section-1--title">
						양심적인 진단, 정석적인 치료과정. <span>화이트드림치과는</span>
						<span> 꼭 필요한 치료만을 합니다.</span>
					</h3>
					<p className="page-aboutus--section-1--text">
						화이트드림치과에서는 누구에게나
						<span>치료비용과 사용재료가 투명하게 공개되어</span>
						<span>환자들이 자신이 가진 치료결정권을</span> 온전하게 행사할 수
						있는 환경을 만들고자 합니다.
					</p>
					<p className="page-aboutus--section-1--text">
						덧붙여, 임상 안정성이 확보된 재료 사용을{" "}
						<span>원칙으로하며, 안전을 최우선으로 생각합니다.</span>
					</p>
				</div>
			</section>
			<section className="page-aboutus--section-2">
				<div className="page-aboutus--section-2--hero">
					<h2 className="page-aboutus--section-2--title">
						Cutting edge dentistry
					</h2>
					<img src={aboutus03} alt="Dentist with patient" />
					<img
						className="page-aboutus--section-2--hero-img-desktop"
						src={aboutus03Desktop}
						alt="Dentist with patient"
					/>
				</div>
				<div className="page-aboutus--section-2--content">
					<h3 className="page-aboutus--section-2--sub-title">
						강남역에서만 10년 <span>고난이도 임상경험이 많은 전문의</span>
					</h3>
					<p className="page-aboutus--section-2--text">
						화이트드림치과는 강남역에서만 10년이상{" "}
						<span>매년 성장을 거듭하며 운영되고있는 치과입니다.</span>
					</p>
					<p className="page-aboutus--section-2--text">
						300평 이상의 넓은 규모로 앞선 디지털 장비{" "}
						<span>시스템과 가공시스템을 구비하고 있습니다.</span>
					</p>
					<p className="page-aboutus--section-2--text">
						월 평균 50명 정도의 난 케이스 환자가{" "}
						<span>‘치료의뢰’를 통해 방문하고 있습니다.</span>
					</p>
				</div>
			</section>
		</main>
	);
}
