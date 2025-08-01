import formImg from "/assets/images/mainpage/consultation-form-img.png";
import "../styles/OurPolicies.css";

export default function OurPolicies({ onClose }) {
	return (
		<div className="our-policies--container">
			<div className="our-policies--img">
				<img src={formImg} alt="our-policies-img" />
			</div>
			<div className="our-policies--content">
				<div className="our-policies--content-header">
					<h2>개인정보 수집 및 이용 동의</h2>
					<div className="our-policies--content-close-icon" onClick={onClose}>
						<svg
							width="40"
							height="41"
							viewBox="0 0 40 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect x="0.5" y="1" width="39" height="39" stroke="#252525" />
							<rect
								width="21.116"
								height="1.50829"
								transform="matrix(-0.707103 0.70711 -0.707103 -0.707111 27.9976 13.5688)"
								fill="#252525"
							/>
							<rect
								width="21.116"
								height="1.50829"
								transform="matrix(0.707103 0.707111 -0.707103 0.707111 13.0686 12.5)"
								fill="#252525"
							/>
						</svg>
					</div>
				</div>
				<div className="our-policies--content-body">
					<h3>개인정보 제공받는 자 : 강남화이트드림치과의원</h3>
					<div className="our-policies--content-body-item">
						<ul className="our-policies--main-list">
							<li>개인정보 수집 범위 : 이름, 핸드폰</li>
							<li>
								개인정보수집이용목적 :
								<ul className="our-policies--sub-list">
									<li>- 온라인 상담 및 전화상담</li>
									<li>- 진단 및 치료를 위한 진료서비스 제공</li>
									<li>- 진료비 청구, 수납, 환급 등 진료지원을 위한 자료</li>
									<li>
										- 진료예약, 예약조회 및 회원제 서비스 이용에 따른 본인 확인
										절차에 사용
									</li>
									<li>
										- 고지사항 전달, 불만처리 등을 위한 원활한 의사소통 경로의
										확보, 새로운 서비스 및 행사 정보의 안내.
									</li>
									<li>- 증명서 발송, 검진 관련 물품 발송</li>
									<li>
										- 개인 맞춤 컨텐츠 제공 및 신규 서비스 개발을 위한 자료
									</li>
									<li>- 교육, 연구, 진료서비스에 필요한 최소한의 분석 자료</li>
									<li>- 온라인 수탁검사 및 임상시험심사를 위한 기초 자료</li>
									<li>- 건강정보 및 본원 소식지 등 홍보자료 제공</li>
								</ul>
							</li>
							<li>
								개인정보 보유 및 이용기간 :
								<ul className="our-policies--sub-list">
									<li>
										수집 및 이용 목적 달성 시 까지 보유하며 이후 지체없이
										파기하는 것을 원칙으로 함 입력정보는 개인정보 보호정책에
										따라 철저히 보호되며, 위의 목적 외에는 다른 용도로 절대
										활용하지 않습니다.
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
