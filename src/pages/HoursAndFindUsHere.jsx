import { Link } from "react-router-dom";
import HeaderSection from "../components/global/HeaderSection";
import HeroSection from "../components/global/HeroSection";
import { heroSection } from "../data/HeroSection";
import { usePathMappedRecord } from "../hooks/usePathMappedRecord";
import hoursImg from "/assets/images/hours-and-find-us-here/hoursandfindushere_hoursimg.jpg";
import hoursBuildingImg from "/assets/images/hours-and-find-us-here/hoursandfindushere_findushereimg.jpg";
import hoursMapImg from "/assets/images/mainpage/navermap.jpg";
import "./styles/HoursAndFindUsHere.css";
import backArrow from "../assets/icons/backArrow.png";

export default function HoursAndFindUsHere() {
	const currentHeroSection = usePathMappedRecord(heroSection, {
		getPaths: (item) => item.routes || item.paths || [],
		fallback: heroSection[0],
	});

	return (
		<main className="page-hours-and-find-us-here">
			<HeaderSection />
			<div className="hours-and-find-us-here-hero--container">
				<HeroSection />
				<div className="hours-and-find-us-here-hero--content-container">
					<h2 className="hours-and-find-us-here-hero--title-kr">
						편안한 내원을 위한 시작, <span>강남 화이트드림치과입니다</span>
					</h2>
				</div>
			</div>
			<section className="hours-and-find-us-here-section-1">
				<div className="hours-and-find-us-here-section-1--container">
					<div className="hours-and-find-us-here-section-1--img-container">
						<img src={hoursImg} alt="hours and find us here section 1" />
					</div>
					<div className="hours-and-find-us-here-section-1--content-container">
						<div className="hours-and-find-us-here-section-1--hours">
							<h3>
								Hours <span>진료시간</span>
							</h3>
							<div className="hours-and-find-us-here-section-1--hours-info">
								<div className="hours-and-find-us-here-section-1--hours-info-item">
									<h4>월/목</h4>
									<p>
										10:00 - 21:00 <span>야간</span>
									</p>
								</div>
								<div className="hours-and-find-us-here-section-1--hours-info-item">
									<h4>화/수/금</h4>
									<p>10:00 - 19:00</p>
								</div>
								<div className="hours-and-find-us-here-section-1--hours-info-item">
									<h4>토요일</h4>
									<p>10:00 - 16:00</p>
								</div>
							</div>
						</div>
						<div className="hours-and-find-us-here-section-1--break">
							<h3>
								Lunch break <br /> <span>점심시간</span>
							</h3>
							<div className="hours-and-find-us-here-section-1--break-info">
								<div className="hours-and-find-us-here-section-1--break-info-item">
									<h4>평일</h4>
									<p>12:30 - 14:30</p>
								</div>
								<div className="hours-and-find-us-here-section-1--break-info-item">
									<h4>토요일</h4>
									<p>12:00 - 14:00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="hours-and-find-us-here-location--mobile">
				<div className="hours-and-find-us-here-location--container">
					<h3 className="hours-and-find-us-here-location--title">
						Find us here <span>오시는 길</span>
					</h3>
					<div className="hours-and-find-us-here-location--map">
						<img src={hoursMapImg} alt="White Dream Dental Clinic location" />
					</div>
					<div className="hours-and-find-us-here-location--map-cta-container">
						<a
							href="https://map.naver.com/p/entry/place/35700929?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202508111712&locale=ko&svcName=map_pcv5"
							className="hours-and-find-us-here-location--map-cta"
						>
							네이버 지도 바로 열기
						</a>
					</div>
				</div>
			</section>
			<section className="hours-and-find-us-here-location--desktop">
				<div className="hours-and-find-us-here-location--info-container">
					<div className="hours-and-find-us-here-location--info">
						<h3 className="hours-and-find-us-here-location--title">
							강남 화이트드림치과 <span>오시는 길</span>
						</h3>
						<p className="hours-and-find-us-here-location--address">
							서울시 서초구 서초대로 77길 17 BLOCK77빌딩 5층{" "}
							<span>강남역 10번출구에서 도보 1분</span>
						</p>
						<p className="hours-and-find-us-here-location--address">
							1층에 IBK기업은행이 있는 검정색 유리로된 건물입니다
						</p>
						<div className="hours-and-find-us-here-location--cta">
							<Link to="https://map.naver.com/p/entry/place/35700929?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202508111712&locale=ko&svcName=map_pcv5">
								네이버 지도 열기
								<img src={backArrow} alt="back arrow" />
							</Link>
						</div>
					</div>
				</div>
				<div className="hours-and-find-us-here-location--img-container">
					<img
						src={hoursBuildingImg}
						alt="White Dream Dental Clinic location"
					/>
				</div>
			</section>
		</main>
	);
}
