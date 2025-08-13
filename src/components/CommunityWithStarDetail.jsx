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
		<main className="page-withstar-detail">
			<h1>{item.title || "with STAR"}</h1>
			<div className="withstar-detail--image">
				<img
					src={item.imageDetail || item.image}
					alt={item.title || `with star ${item.id}`}
				/>
			</div>
			{item.description && (
				<p className="withstar-detail--desc">{item.description}</p>
			)}
		</main>
	);
}
