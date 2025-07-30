import { useState, useEffect } from "react";
import upArrow from "../../assets/icons/arrow-up.svg";
import downArrow from "../../assets/icons/arrow-down.svg";
import mobileNavBgTop from "../../assets/icons/wave01.svg";
// import mobileNavBgBottom01 from "../../assets/icons/wave02.svg";
// import mobileNavBgBottom02 from "../../assets/icons/wave03.svg";
import "../styles/MobileNav.css";

export default function MobileNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openSubMenus, setOpenSubMenus] = useState({});

	// Prevent body scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Cleanup function to restore scrolling when component unmounts
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleSubMenu = (itemIndex) => {
		setOpenSubMenus((prev) => ({
			...prev,
			[itemIndex]: !prev[itemIndex],
		}));
	};

	return (
		<>
			{/* Mobile Navigation */}
			<nav className="main-nav--mobile-container">
				<div className="main-nav--mobile">
					<div className="main-nav--mobile-icon main-nav--mobile-home">
						<a href="/">
							<img src="/assets/icons/home.svg" alt="home" />
							<span className="hamburger-text">홈</span>
						</a>
					</div>
					<div className="main-nav--mobile-icon main-nav--mobile-location">
						<a href="/">
							<img src="/assets/icons/location.svg" alt="location" />
							<span className="hamburger-text">위치</span>
						</a>
					</div>
					<div
						className={`main-nav--mobile-hamburger ${
							isMenuOpen ? "active" : ""
						}`}
						onClick={toggleMenu}
					>
						<div className="hamburger-line--container">
							<span className="hamburger-line"></span>
							<span className="hamburger-line"></span>
							<span className="hamburger-line"></span>
						</div>
						<span className="hamburger-text">메뉴</span>
					</div>
					<div className="main-nav--mobile-icon main-nav--mobile-contact">
						<a href="/">
							<img src="/assets/icons/contact.svg" alt="contact" />
							<span className="hamburger-text">톡상담</span>
						</a>
					</div>
					<div className="main-nav--mobile-icon main-nav--mobile-customer">
						<a href="/">
							<img src="/assets/icons/customer-service.svg" alt="customer" />
							<span className="hamburger-text">빠른상담</span>
						</a>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={`main-nav--mobile-overlay ${isMenuOpen ? "active" : ""}`}
				>
					<div className="main-nav--mobile-menu">
						<div className="main-nav--mobile-bg-top">
							<img src={mobileNavBgTop} alt="" />
						</div>

						<div className="main-nav--mobile-menu-header">
							<div className="mobile-menu-logo">
								<img src="/assets/icons/mobile-nav-logo.svg" alt="logo" />
							</div>
							{/* <div className="main-nav--mobile-bg-bottom01">
								<img src={mobileNavBgBottom01} alt="" />
							</div>
							<div className="main-nav--mobile-bg-bottom02">
								<img src={mobileNavBgBottom02} alt="" />
							</div> */}
						</div>
						<ul className="main-nav--mobile-list">
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(0)}
								>
									치과소개
									<span className="main-nav--mobile-arrow">
										<img
											src={openSubMenus[0] ? upArrow : downArrow}
											alt={openSubMenus[0] ? "up arrow" : "down arrow"}
										/>
									</span>
								</div>
								<div
									className={`main-nav--mobile-item-sub ${
										openSubMenus[0] ? "active" : ""
									}`}
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												치과소개
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												의료진 소개
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												시설및기공소
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												장비소개
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												진료시간 및 오시는길
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(1)}
								>
									치아교정
									<span className="main-nav--mobile-arrow">
										<img
											src={openSubMenus[1] ? upArrow : downArrow}
											alt={openSubMenus[1] ? "up arrow" : "down arrow"}
										/>
									</span>
								</div>
								<div
									className={`main-nav--mobile-item-sub ${
										openSubMenus[1] ? "active" : ""
									}`}
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												치아교정
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												인비절라인
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												클리피씨
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(2)}
								>
									임플란트
									<span className="main-nav--mobile-arrow">
										<img
											src={openSubMenus[2] ? upArrow : downArrow}
											alt={openSubMenus[2] ? "up arrow" : "down arrow"}
										/>
									</span>
								</div>
								<div
									className={`main-nav--mobile-item-sub ${
										openSubMenus[2] ? "active" : ""
									}`}
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												임플란트
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												뼈이식 임플란트
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												전체임플란트
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												임플란트 틀니
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(3)}
								>
									심미치료
									<span className="main-nav--mobile-arrow">
										<img
											src={openSubMenus[3] ? upArrow : downArrow}
											alt={openSubMenus[3] ? "up arrow" : "down arrow"}
										/>
									</span>
								</div>
								<div
									className={`main-nav--mobile-item-sub ${
										openSubMenus[3] ? "active" : ""
									}`}
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												화이티니 라미네이트
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												치아미백
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												잇몸성형
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(4)}
								>
									일반진료
									<span className="main-nav--mobile-arrow">
										<img
											src={openSubMenus[4] ? upArrow : downArrow}
											alt={openSubMenus[4] ? "up arrow" : "down arrow"}
										/>
									</span>
								</div>
								<div
									className={`main-nav--mobile-item-sub ${
										openSubMenus[4] ? "active" : ""
									}`}
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												충치치료
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												신경치료
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												사랑니 발치
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												턱관절치료
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												잇몸치료
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(5)}
								>
									커뮤니티
									<span className="main-nav--mobile-arrow">
										<img
											src={openSubMenus[5] ? upArrow : downArrow}
											alt={openSubMenus[5] ? "up arrow" : "down arrow"}
										/>
									</span>
								</div>
								<div
									className={`main-nav--mobile-item-sub ${
										openSubMenus[5] ? "active" : ""
									}`}
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												공지사항
											</a>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<a href="/" className="main-nav--mobile-item-sub-link">
												with STAR
											</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<div className="main-nav--mobile-social">
							<div className="main-nav--mobile-social-item">
								<a
									href="https://www.instagram.com/white.dream.en"
									target="_blank"
								>
									<img src="/assets/icons/instagram.svg" alt="instagram link" />
								</a>
							</div>
							<div className="main-nav--mobile-social-item">
								<a
									href="https://www.facebook.com/white.dream.en"
									target="_blank"
								>
									<img src="/assets/icons/facebook.svg" alt="facebook link" />
								</a>
							</div>
							<div className="main-nav--mobile-social-item">
								<a
									href="https://booking.naver.com/booking/13/bizes/206339"
									target="_blank"
								>
									<img src="/assets/icons/blog.svg" alt="blog link" />
								</a>
							</div>
						</div>
						<div className="main-nav--mobile-login">
							<a href="/">Login</a>
							<span> / </span>
							<a href="/">Sign up</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
