import { squareCardsDB } from "../../data/squareCardsDB";
import { usePathMappedRecord } from "../../hooks/usePathMappedRecord";
import "../styles/SquareCardsWithImages.css";

export default function SquareCardsWithImages() {
	const currentSquareCards = usePathMappedRecord(squareCardsDB, {
		fallback: squareCardsDB[0],
	});

	const squareCard = squareCardsDB.filter(
		(item) => item.section === currentSquareCards.section
	);

	return (
		<div className="square-cards-with-img--container">
			{squareCard.map((item) => (
				<div className="square-card-with-img--card" key={item.id}>
					<div className="square-card-with-img-images">
						<img
							className="square-card-with-img--desktop"
							src={item.image}
							alt={item.title}
						/>
						<img
							className="square-card-with-img--mobile"
							src={item.imageMobile}
							alt={item.title}
						/>
					</div>
					<div className="square-card-with-img-content">
						<div className="square-card-with-img-content--title">
							<h2>{item.title}</h2>
						</div>
						<div className="square-card-with-img-content--pill-container">
							<span className="square-card-with-img-content--pill">
								{item.blackPill}
							</span>
							<p className="square-card-with-img-content--p">
								{item.advantage}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
