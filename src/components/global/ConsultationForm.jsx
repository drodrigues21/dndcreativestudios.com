import { useState } from "react";
import formImg from "/assets/images/mainpage/consultation-form-img.png";
import checkIcon from "../../assets/icons/check-icon.png";
import "../styles/ConsultationForm.css";

export default function ConsultationForm({
	onClose,
	onPoliciesClick,
	onSubmit,
}) {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
	});

	const [validationState, setValidationState] = useState({
		name: false,
		phone: false,
	});

	// Validation functions
	const validateName = (name) => {
		return name.length >= 2 && /^[가-힣a-zA-Z\s]+$/.test(name);
	};

	const validatePhone = (phone) => {
		return /^0[0-9]\d{9}$/.test(phone);
	};

	// Handle input changes
	const handleInputChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));

		// Update validation state
		let isValid = false;
		if (field === "name") {
			isValid = validateName(value);
		} else if (field === "phone") {
			isValid = validatePhone(value);
		}

		setValidationState((prev) => ({
			...prev,
			[field]: isValid,
		}));
	};
	return (
		<div className="consultation-form--container">
			<div className="consultation-form--img">
				<img src={formImg} alt="consultation-form-img" />
			</div>
			<div className="consultation-form--content">
				<div className="consultation-form--header">
					<h2>빠른 상담 신청</h2>
					<div className="consultation-form--close-icon" onClick={onClose}>
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
				<div className="consultation-form--form">
					<form className="consultation-form" onSubmit={onSubmit}>
						<div className="consultation-form--form-item">
							<label htmlFor="department">이메일</label>
							<select name="department" id="department">
								<option value="임플란트">임플란트</option>
								<option value="치아교정">치아교정</option>
								<option value="라미네이트">라미네이트</option>
								<option value="일반진료">일반진료</option>
							</select>
						</div>
						<div className="consultation-form--form-item">
							<label htmlFor="name">이름</label>
							<div
								className={`input-wrapper ${
									validationState.name ? "valid" : ""
								}`}
							>
								<input
									type="text"
									id="name"
									placeholder="eg.홍길동"
									value={formData.name}
									onChange={(e) => handleInputChange("name", e.target.value)}
								/>
								{validationState.name && (
									<img
										src={checkIcon}
										alt="valid"
										className="input-check-icon"
									/>
								)}
							</div>
						</div>
						<div className="consultation-form--form-item">
							<label htmlFor="phone">
								연락처 <span>‘-’없이 넣으세요</span>
							</label>
							<div
								className={`input-wrapper ${
									validationState.phone ? "valid" : ""
								}`}
							>
								<input
									type="text"
									id="phone"
									placeholder="eg.01012345678"
									value={formData.phone}
									onChange={(e) => handleInputChange("phone", e.target.value)}
								/>
								{validationState.phone && (
									<img
										src={checkIcon}
										alt="valid"
										className="input-check-icon"
									/>
								)}
							</div>
						</div>
						<div className="consultation-form--form-item terms-and-conditions">
							<label htmlFor="terms-and-conditions">
								개인정보 수집 및 이용 동의하기
								<input type="checkbox" id="terms-and-conditions" />
							</label>
						</div>
						<div className="consultation-form--form-policies">
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									onPoliciesClick();
								}}
							>
								내용보기
							</a>
						</div>
						<button className="consultation-form--form-submit" type="submit">
							신청하기
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
