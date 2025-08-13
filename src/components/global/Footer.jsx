import instagramIcon from "/assets/icons/instagram.svg";
import facebookIcon from "/assets/icons/facebook.svg";
import blogIcon from "/assets/icons/blog.svg";
import logo from "/assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-container--info">
				<div className="footer-logo">
					<img src={logo} alt="White Dream Dental Clinic" />
				</div>
				<div className="footer-info">
					<div className="footer-info--address">
						<h4>강남 화이트드림치과</h4>
						<p>서울시 서초구 서초대로 77길 17 BLOCK77빌딩 5F</p>
					</div>
					<div className="footer-info--address">
						<h4>사업자정보</h4>
						<p>220-10-12749</p>
						<p>정수윤</p>
					</div>
					<div className="footer-info--address">
						<h4>대표번호</h4>
						<a href="tel:025582879">TEL. 02-558-2879</a>
						<p>FAX. 02-6499-2879</p>
					</div>
				</div>
				<div className="footer-socials">
					<Link to="/">
						<img src={instagramIcon} alt="Instagram" />
					</Link>
					<Link to="/">
						<img src={facebookIcon} alt="Facebook" />
					</Link>
					<Link to="/">
						<img src={blogIcon} alt="Blog" />
					</Link>
				</div>
			</div>
			<div className="footer-container--copyright">
				<p>Copyright@2025 White Dream Dantal Clinic.</p>
				<p>All rights reserved.</p>
				<p>Designed and Created by D&D Creative Studio</p>
			</div>
		</footer>
	);
}
