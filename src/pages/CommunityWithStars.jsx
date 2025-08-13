import { Link } from "react-router-dom";
import { withStar } from "../data/withStar";
import "./styles/CommunityWithStar.css";

export default function CommunityWithStars() {
	return (
		<main className="page-community-withstar">
			<header className="page-header">
				<h1>with STAR</h1>
				<Link className="add-button" to="/community/with-star/new">
					글쓰기
				</Link>
			</header>
			<section className="withstar-grid">
				{withStar.map((item) => (
					<Link
						key={item.id}
						to={`/community/with-star/${item.id}`}
						className="withstar-card"
					>
						<img src={item.image} alt={item.title || `with star ${item.id}`} />
					</Link>
				))}
			</section>
		</main>
	);
}
