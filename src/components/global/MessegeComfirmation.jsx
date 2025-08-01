import checkIcon from "../../assets/icons/check-icon.png";
import "../styles/MessegeComfirmation.css";

export default function MessegeComfirmation({ onConfirm }) {
	return (
		<div className="messege-comfirmation--container">
			<div className="messege-comfirmation">
				<div className="messege-comfirmation--icon">
					<img src={checkIcon} alt="check-icon" />
				</div>
				<div className="messege-comfirmation--content">
					<h3>Success!</h3>
					<p>빠른 상담 신청이 완료되었습니다</p>
				</div>
			</div>
			<button className="messege-comfirmation--button" onClick={onConfirm}>
				확인
			</button>
		</div>
	);
}
