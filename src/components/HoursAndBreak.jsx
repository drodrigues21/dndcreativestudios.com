import "../components/styles/HoursAndBreak.css";
import hoursAndBreakImage from "/assets/images/mainpage/hoursimg.jpg";
import hoursCalendar from "/assets/images/mainpage/hours_calendar.png";
import hoursHourglass from "/assets/images/mainpage/hours_hourglass.png";

export default function HoursAndBreak() {
	return (
		<div className="hours-and-break-container">
			<div className="hours-and-break-image">
				<img src={hoursAndBreakImage} alt="" />
			</div>
			<div className="hours-and-break-content">
				<div className="hours-and-break-content--item">
					<img
						className="calendar-icon"
						src={hoursCalendar}
						alt="hours calendar"
					/>
					<h2>
						Hours <br /> <span>진료시간</span>
					</h2>
					<div className="hours-and-break-content--item-info">
						<div className="hours-and-break-content--item-info-item">
							<h3>월/목</h3>
							<p>
								10:00 - 21:00 <span>야간</span>
							</p>
						</div>
						<div className="hours-and-break-content--item-info-item">
							<h3>화/수/금</h3>
							<p>10:00 - 19:00</p>
						</div>
						<div className="hours-and-break-content--item-info-item">
							<h3>토요일</h3>
							<p>10:00 - 16:00</p>
						</div>
					</div>
				</div>
				<div className="hours-and-break-content--item">
					<img
						className="hourglass-icon"
						src={hoursHourglass}
						alt="hours calendar"
					/>
					<h2>
						Lunch break <br /> <span>점심시간</span>
					</h2>
					<div className="hours-and-break-content--item-info">
						<div className="hours-and-break-content--item-info-item">
							<h3>평일</h3>
							<p>13:00 - 14:30</p>
						</div>
						<div className="hours-and-break-content--item-info-item">
							<h3>토요일</h3>
							<p>12:30 - 14:00</p>
						</div>
					</div>
				</div>
				<p className="hours-and-break-content--item-text">
					*일요일은 휴진입니다
				</p>
			</div>
		</div>
	);
}
