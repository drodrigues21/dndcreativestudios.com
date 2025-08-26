import { useParams } from "react-router-dom";
import { withStar } from "../data/withStar";
import "./styles/CommunityWithStarDetail.css";

export default function CommunityWithStarDetail() {
	const { id } = useParams();
	const item = withStar.find((s) => String(s.id) === id);

	if (!item) {
		return (
			<main className="page-withstar-detail">
				<h1>게시물을 찾을 수 없습니다.</h1>
			</main>
		);
	}

	return (
		<main className="withstar-detail--container">
			<div className="withstar-detail--image-wrapper">
				<img
					src={item.imageDetail || item.image}
					alt={item.title || `with star ${item.id}`}
				/>
			</div>
			<div className="withstar-detail--header-wrapper">
				<h1 className="withstar-detail--title">{item.title || "with STAR"}</h1>
				<div className="withstar-detail--author-date-wrapper">
					<p className="withstar-detail--author">{item.author}</p>
					<p className="withstar-detail--date">{item.date}</p>
				</div>
			</div>
			{item.description && (
				<p className="withstar-detail--description">{item.description}</p>
			)}
		</main>
	);
}
