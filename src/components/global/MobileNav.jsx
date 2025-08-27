import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ConsultationForm from "./ConsultationForm";
import OurPolicies from "./OurPolicies";
import MessegeComfirmation from "./MessegeComfirmation";
import upArrow from "../../assets/icons/arrow-up.svg";
import downArrow from "../../assets/icons/arrow-down.svg";
import mobileNavBgTop from "../../assets/icons/wave01.svg";
import "../styles/Modal.css";
import "../styles/MobileNav.css";

export default function MobileNav() {
	const { isAuthenticated, logout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();
	const [openSubMenus, setOpenSubMenus] = useState({});
	const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
	const [isPoliciesModalOpen, setIsPoliciesModalOpen] = useState(false);
	const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

	// Prevent body scrolling when menu or modals are open
	useEffect(() => {
		if (
			isMenuOpen ||
			isConsultationModalOpen ||
			isPoliciesModalOpen ||
			isConfirmationModalOpen
		) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Cleanup function to restore scrolling when component unmounts
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [
		isMenuOpen,
		isConsultationModalOpen,
		isPoliciesModalOpen,
		isConfirmationModalOpen,
	]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleToggleKeyDown = (e, toggleFn) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleFn();
		}
	};

	const toggleSubMenu = (itemIndex) => {
		setOpenSubMenus((prev) => ({
			...prev,
			[itemIndex]: !prev[itemIndex],
		}));
	};

	const openConsultationModal = () => {
		setIsConsultationModalOpen(true);
	};

	const closeConsultationModal = () => {
		setIsConsultationModalOpen(false);
	};

	const openPoliciesModal = () => {
		setIsPoliciesModalOpen(true);
	};

	const closePoliciesModal = () => {
		setIsPoliciesModalOpen(false);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setIsConsultationModalOpen(false);
		setIsConfirmationModalOpen(true);
	};

	const closeConfirmationModal = () => {
		setIsConfirmationModalOpen(false);
	};

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<>
			{/* Mobile Navigation */}
			<nav
				className="main-nav--mobile-container"
				aria-label="Mobile primary navigation"
			>
				<div className="main-nav--mobile">
					<div className="main-nav--mobile-icon main-nav--mobile-home">
						<Link to="/">
							<img src="/assets/icons/home.svg" alt="home" />
							<span className="hamburger-text">홈</span>
						</Link>
					</div>
					<div className="main-nav--mobile-icon main-nav--mobile-location">
						<a href="#location">
							<img src="/assets/icons/location.svg" alt="location" />
							<span className="hamburger-text">위치</span>
						</a>
					</div>
					<div
						className={`main-nav--mobile-hamburger ${
							isMenuOpen ? "active" : ""
						}`}
						onClick={toggleMenu}
						role="button"
						tabIndex={0}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
						onKeyDown={(e) => handleToggleKeyDown(e, toggleMenu)}
					>
						<div className="hamburger-line--container">
							<span className="hamburger-line"></span>
							<span className="hamburger-line"></span>
							<span className="hamburger-line"></span>
						</div>
						<span className="hamburger-text">메뉴</span>
					</div>
					<div className="main-nav--mobile-icon main-nav--mobile-contact">
						<Link to="/about-us">
							<img src="/assets/icons/contact.svg" alt="contact" />
							<span className="hamburger-text">톡상담</span>
						</Link>
					</div>
					<div
						className="main-nav--mobile-icon main-nav--mobile-customer"
						onClick={openConsultationModal}
					>
						<img src="/assets/icons/customer-service.svg" alt="customer" />
						<span className="hamburger-text">빠른상담</span>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={`main-nav--mobile-overlay ${isMenuOpen ? "active" : ""}`}
					id="mobile-menu"
				>
					<div className="main-nav--mobile-menu">
						<div className="main-nav--mobile-bg-top">
							<img src={mobileNavBgTop} alt="" />
						</div>

						<div className="main-nav--mobile-menu-header">
							<div className="mobile-menu-logo">
								<img src="/assets/icons/mobile-nav-logo.svg" alt="logo" />
							</div>
						</div>
						<ul className="main-nav--mobile-list">
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(0)}
									role="button"
									tabIndex={0}
									aria-expanded={!!openSubMenus[0]}
									aria-controls="submenu-0"
									onKeyDown={(e) =>
										handleToggleKeyDown(e, () => toggleSubMenu(0))
									}
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
									id="submenu-0"
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/about-us"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												치과소개
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/doctors-profile"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												의료진 소개
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/facilities"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												시설및기공소
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/devices"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												장비소개
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/hours-and-find-us-here"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												진료시간 및 오시는길
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(1)}
									role="button"
									tabIndex={0}
									aria-expanded={!!openSubMenus[1]}
									aria-controls="submenu-1"
									onKeyDown={(e) =>
										handleToggleKeyDown(e, () => toggleSubMenu(1))
									}
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
									id="submenu-1"
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/orthodontics"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												치아교정
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/orthodontics/invisalign"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												인비절라인
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/orthodontics/clip-pyc"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												클리피씨
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(2)}
									role="button"
									tabIndex={0}
									aria-expanded={!!openSubMenus[2]}
									aria-controls="submenu-2"
									onKeyDown={(e) =>
										handleToggleKeyDown(e, () => toggleSubMenu(2))
									}
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
									id="submenu-2"
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/implants"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												임플란트
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/implants/bone-graft"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												뼈이식 임플란트
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/implants/full-mouth"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												전체임플란트
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/implants/dentures"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												임플란트 틀니
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(3)}
									role="button"
									tabIndex={0}
									aria-expanded={!!openSubMenus[3]}
									aria-controls="submenu-3"
									onKeyDown={(e) =>
										handleToggleKeyDown(e, () => toggleSubMenu(3))
									}
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
									id="submenu-3"
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/aesthetics"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												화이티니 라미네이트
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/aesthetics/teeth-whitening"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												치아미백
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/aesthetics/gum-aesthetics"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												잇몸성형
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(4)}
									role="button"
									tabIndex={0}
									aria-expanded={!!openSubMenus[4]}
									aria-controls="submenu-4"
									onKeyDown={(e) =>
										handleToggleKeyDown(e, () => toggleSubMenu(4))
									}
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
									id="submenu-4"
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/treatments"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												충치치료
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/treatments/root-canal"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												신경치료
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/treatments/wisdom-tooth-removal"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												사랑니 발치
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/treatments/tmj-treatment"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												턱관절치료
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/treatments/gum-disease-treatment"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												잇몸치료
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className="main-nav--mobile-item">
								<div
									className="main-nav--mobile-link"
									onClick={() => toggleSubMenu(5)}
									role="button"
									tabIndex={0}
									aria-expanded={!!openSubMenus[5]}
									aria-controls="submenu-5"
									onKeyDown={(e) =>
										handleToggleKeyDown(e, () => toggleSubMenu(5))
									}
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
									id="submenu-5"
								>
									<ul className="main-nav--mobile-item-sub-list">
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/community/notice"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												공지사항
											</Link>
										</li>
										<li className="main-nav--mobile-item-sub-item">
											<Link
												to="/community/with-star"
												className="main-nav--mobile-item-sub-link"
												onClick={closeMenu}
											>
												with STAR
											</Link>
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
									rel="noopener noreferrer"
								>
									<img src="/assets/icons/instagram.svg" alt="instagram link" />
								</a>
							</div>
							<div className="main-nav--mobile-social-item">
								<a
									href="https://www.facebook.com/white.dream.en"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src="/assets/icons/facebook.svg" alt="facebook link" />
								</a>
							</div>
							<div className="main-nav--mobile-social-item">
								<a
									href="https://booking.naver.com/booking/13/bizes/206339"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src="/assets/icons/blog.svg" alt="blog link" />
								</a>
							</div>
						</div>
						<div className="main-nav--mobile-login">
							{isAuthenticated ? (
								<button
									onClick={() => {
										logout();
										navigate("/");
									}}
								>
									logout
								</button>
							) : (
								<Link to="/login" onClick={closeMenu}>
									Login / Sign Up
								</Link>
							)}
						</div>
					</div>
				</div>
			</nav>

			{/* Consultation Modal */}
			{isConsultationModalOpen && (
				<div className="modal-overlay" onClick={closeConsultationModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<ConsultationForm
							onClose={closeConsultationModal}
							onPoliciesClick={openPoliciesModal}
							onSubmit={handleFormSubmit}
						/>
					</div>
				</div>
			)}

			{/* Policies Modal */}
			{isPoliciesModalOpen && (
				<div className="modal-overlay" onClick={closePoliciesModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<OurPolicies onClose={closePoliciesModal} />
					</div>
				</div>
			)}

			{/* Confirmation Modal */}
			{isConfirmationModalOpen && (
				<div className="modal-overlay" onClick={closeConfirmationModal}>
					<div
						className="modal-content confirmation-modal"
						onClick={(e) => e.stopPropagation()}
					>
						<MessegeComfirmation onConfirm={closeConfirmationModal} />
					</div>
				</div>
			)}
		</>
	);
}
