import "../components/styles/ClientStats.css";
import checkMark from "/assets/images/mainpage/checkmark.png";
import statsIcon01 from "/assets/images/mainpage/stats-icon01.png";
import statsIcon02 from "/assets/images/mainpage/stats-icon02.png";
import statsIcon03 from "/assets/images/mainpage/stats-icon03.png";

export default function ClientStats() {
	return (
		<div className="client-stats-container">
			<div className="client-stats-header">
				<div className="client-stats-header--title">
					<h2 className="client-stats-title--en">
						Dentist you <br></br>can count on
					</h2>
					<h2 className="client-stats-title--kr">믿을 수 있는 전문의</h2>
				</div>
				<div className="client-stats-title--icon">
					<img src={checkMark} alt="checkmark" />
				</div>
			</div>
			<div className="client-stats-content">
				<div className="client-stats-content--item">
					<div className="client-stats-content--info">
						<h3>120K+</h3>
						<p>임플란트 식립갯수</p>
					</div>
					<div className="client-stats-content--item--icon">
						<img src={statsIcon01} alt="" />
					</div>
				</div>
				<div className="client-stats-content--item">
					<div className="client-stats-content--info">
						<h3>120K+</h3>
						<p>임플란트 식립갯수</p>
					</div>
					<div className="client-stats-content--item--icon">
						<img src={statsIcon02} alt="" />
					</div>
				</div>
				<div className="client-stats-content--item">
					<div className="client-stats-content--info">
						<h3>120K+</h3>
						<p>임플란트 식립갯수</p>
					</div>
					<div className="client-stats-content--item--icon">
						<img src={statsIcon03} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
