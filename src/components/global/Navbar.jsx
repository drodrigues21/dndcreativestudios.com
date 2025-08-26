import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
	return (
		<>
			{/* Desktop Navigation */}
			<nav className="main-header--nav" aria-label="Primary navigation">
				<ul className="main-header--nav-list">
					<li className="main-header--nav-item">
						<NavLink to="/about-us" className="main-header--nav-link">
							치과소개
						</NavLink>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/about-us" className="main-header--nav-item-sub-link">
										치과소개
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink
										to="/doctors-profile"
										className="main-header--nav-item-sub-link"
									>
										의료진 소개
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/facilities" className="main-header--nav-item-sub-link">
										시설및기공소
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/devices" className="main-header--nav-item-sub-link">
										장비소개
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/hours-and-find-us-here" className="main-header--nav-item-sub-link">
										진료시간 및 오시는길
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<NavLink to="/orthodontics" className="main-header--nav-link">
							치아교정
						</NavLink>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/orthodontics" className="main-header--nav-item-sub-link">
										치아교정
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/orthodontics/invisalign" className="main-header--nav-item-sub-link">
										인비절라인
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/orthodontics/clip-pyc" className="main-header--nav-item-sub-link">
										클리피씨
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<NavLink to="/implants" className="main-header--nav-link">
							임플란트
						</NavLink>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/implants" className="main-header--nav-item-sub-link">
										임플란트
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/implants/bone-graft" className="main-header--nav-item-sub-link">
										뼈이식 임플란트
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/implants/full-mouth" className="main-header--nav-item-sub-link">
										전체임플란트
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/implants/dentures" className="main-header--nav-item-sub-link">
										임플란트 틀니
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<NavLink to="/aesthetics" className="main-header--nav-link">
							심미치료
						</NavLink>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/aesthetics" className="main-header--nav-item-sub-link">
										화이티니 라미네이트
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/aesthetics/teeth-whitening" className="main-header--nav-item-sub-link">
										치아미백
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/aesthetics/gum-aesthetics" className="main-header--nav-item-sub-link">
										잇몸성형
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<NavLink to="/treatments" className="main-header--nav-link">
							일반진료
						</NavLink>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/treatments" className="main-header--nav-item-sub-link">
										충치치료
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/treatments/root-canal" className="main-header--nav-item-sub-link">
										신경치료
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/treatments/wisdom-tooth-removal" className="main-header--nav-item-sub-link">
										사랑니 발치
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/treatments/tmj-treatment" className="main-header--nav-item-sub-link">
										턱관절치료
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/treatments/gum-disease-treatment" className="main-header--nav-item-sub-link">
										잇몸치료
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<NavLink to="/community/notice" className="main-header--nav-link">
							커뮤니티
						</NavLink>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/community/notice" className="main-header--nav-item-sub-link">
										공지사항
									</NavLink>
								</li>
								<li className="main-header--nav-item-sub-item">
									<NavLink to="/community/with-star" className="main-header--nav-item-sub-link">
										with STAR
									</NavLink>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</>
	);
}
