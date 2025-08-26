import { squareCardsDB } from "../../data/squareCardsDB";
import { usePathMappedRecord } from "../../hooks/usePathMappedRecord";
import "../styles/SquareCards.css";

export default function SquareCards() {
	const currentSquareCards = usePathMappedRecord(squareCardsDB, {
		fallback: squareCardsDB[0],
	});

	const squareCard = squareCardsDB.filter(
		(item) => item.section === currentSquareCards.section
	);

	console.log(squareCard);

	return (
		<div className="square-cards--container">
			{squareCard.map((item) => (
				<div className="square-card" key={item.id}>
					<img className="square-card--img" src={item.image} alt={item.title} />
					<h3 className="square-card--title">
						{item.title}
						<span className="square-card--icon">
							<img src={item.icon} alt="" />
						</span>
					</h3>
					{item.subTitle && (
						<h4 className="square-card--sub-title">{item.subTitle}</h4>
					)}
					<div className="square-card--pill-container">
						<span className="square-card--black-pill">{item.blackPill}</span>
						<p className="square-card--p">{item.advantage}</p>
					</div>
					{item.disadvantage && (
						<div className="square-card--pill-container disadvantage-pill">
							<span className="square-card--white-pill">{item.whitePill}</span>
							<p className="square-card--p">{item.disadvantage}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
