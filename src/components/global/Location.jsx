import mapImg from "/assets/images/mainpage/navermap.jpg";
import "../styles/Location.css";
import { useState } from "react";

export default function Location() {
	const [copySuccess, setCopySuccess] = useState(false);

	const copyToClipboard = async () => {
		const textToCopy = "서울시 서초구 서초대로 77길 17 BLOCK77 빌딩 5층";

		try {
			await navigator.clipboard.writeText(textToCopy);
			setCopySuccess(true);
			// Reset the success message after 2 seconds
			setTimeout(() => setCopySuccess(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
			// Fallback for older browsers
			const textArea = document.createElement("textarea");
			textArea.value = textToCopy;
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			try {
				document.execCommand("copy");
				setCopySuccess(true);
				setTimeout(() => setCopySuccess(false), 2000);
			} catch (err) {
				console.error("Fallback: Oops, unable to copy", err);
			}
			document.body.removeChild(textArea);
		}
	};

	return (
		<div className="location-container">
			<div className="location-container--title">
				<h2>
					Find us here <br />
					<span>오시는 길</span>
				</h2>
				<p>
					서울시 서초구 서초대로 77길 17 BLOCK77 빌딩 5층
					<svg
						width="18"
						height="20"
						viewBox="0 0 18 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={copyToClipboard}
						style={{ cursor: "pointer", marginLeft: "8px" }}
						title="Click to copy address"
					>
						<g clip-path="url(#clip0_64_1210)">
							<path
								d="M13 1H1V14"
								stroke="black"
								stroke-width="1.2"
								stroke-linecap="square"
								stroke-linejoin="round"
							/>
							<path
								d="M5 5H17V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V5Z"
								stroke="black"
								stroke-width="1.2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_64_1210">
								<rect width="18" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
					{copySuccess && (
						<span
							className="copy-success-message"
							style={{
								marginLeft: "1rem",
								color: "#62bed0",
								fontSize: "1.2rem",
								fontWeight: "500",
							}}
						>
							Copied!
						</span>
					)}
				</p>
				<a href="/" className="location-container--map-cta">
					네이버 지도 바로 열기
					<svg
						width="31"
						height="15"
						viewBox="0 0 31 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.9724 14.7829L21.4355 14.3423L29.711 7.50166L21.4355 0.661035L21.9686 0.217285L30.7809 7.50166L21.9724 14.7829Z"
							fill="white"
						/>
						<path
							d="M30.2439 7.18921H0V7.81421H30.2439V7.18921Z"
							fill="white"
						/>
					</svg>
				</a>
			</div>
			<div className="location-container--map">
				<img src={mapImg} alt="White Dream Dental Clinic location" />
			</div>
			<a href="/" className="location-container--map-cta-mobile">
				네이버 지도 바로 열기
			</a>
			<div className="location-container--caution">
				<h4 className="location-container--caution-title-en">Caution</h4>
				<h4 className="location-container--caution-title-kr">
					화이트드림 주의사항
					<svg
						width="41"
						height="16"
						viewBox="0 0 41 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 8L39.789 8M33.013 0.999999L40 8L33.012 15"
							stroke="#252525"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</h4>
			</div>
		</div>
	);
}
