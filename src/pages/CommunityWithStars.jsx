import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withStar } from "../data/withStar";
import { useAuth } from "../contexts/AuthContext";
import "./styles/CommunityWithStar.css";

export default function CommunityWithStars() {
	const ITEMS_PER_PAGE = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const { isAuthenticated } = useAuth();
	const totalPages = Math.ceil(withStar.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = withStar.slice(startIndex, endIndex);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	const goToPage = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const goPrev = () => setCurrentPage((prev) => Math.max(1, prev - 1));
	const goNext = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1));

	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);
	return (
		<main className="community-withstar--container">
			<section className="community-withstar--header">
				<h1 className="section-title">
					With STAR <span>화이트트드림과 함께한 스타들!</span>
				</h1>
			</section>
			<section className="community-withstar--grid">
				{currentItems.map((item) => (
					<Link
						key={item.id}
						to={`/community/with-star/${item.id}`}
						className="community-withstar--card"
					>
						<img
							className="community-withstar--card-image-mobile"
							src={item.imageMobile || item.image}
							alt={item.title}
						/>
						<img
							className="community-withstar--card-image-desktop"
							src={item.image}
							alt={item.title}
						/>
						<div className="community-withstar--card-content">
							<h2>{item.title}</h2>
							<p>{item.date}</p>
						</div>
					</Link>
				))}
			</section>
			{isAuthenticated && (
				<div className="community-withstar--add-wrapper">
					<Link
						className="community-withstar--add-button"
						to="/community/with-star/new"
					>
						<span>+</span> 글쓰기
					</Link>
				</div>
			)}
			<nav
				className="community-withstar--pagination"
				aria-label="With star pagination"
			>
				<button
					className="nav prev"
					onClick={goPrev}
					disabled={currentPage === 1}
					aria-label="Previous page"
				>
					{"<"}
				</button>
				{pageNumbers.map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => goToPage(pageNumber)}
						className={`page-button${
							pageNumber === currentPage ? " is-active" : ""
						}`}
						aria-current={pageNumber === currentPage ? "page" : undefined}
					>
						{pageNumber}
					</button>
				))}
				<button
					className="nav next"
					onClick={goNext}
					disabled={currentPage === totalPages}
					aria-label="Next page"
				>
					{">"}
				</button>
			</nav>
		</main>
	);
}
