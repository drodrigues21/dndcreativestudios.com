import { useState, useEffect, useRef } from "react";
import "../styles/BeforeAndAfterCard.css";
import { beforeAndAfterHomeDB } from "../../data/beforeAndAfterHome";

export default function BeforeAndAfterCard({ selectedCategory }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const containerRef = useRef(null);

	// Filter data based on selected category
	const filteredData = beforeAndAfterHomeDB.filter(
		(item) => item.category === selectedCategory
	);

	// Reset active index when category changes
	useEffect(() => {
		setActiveIndex(0);
		if (containerRef.current) {
			containerRef.current.scrollLeft = 0;
		}
	}, [selectedCategory]);

	// Handle scroll to update active dot
	const handleScroll = () => {
		if (containerRef.current) {
			const scrollLeft = containerRef.current.scrollLeft;
			const cardWidth = 300 + 32; // card width + gap (2rem = 32px)
			const newIndex = Math.round(scrollLeft / cardWidth);
			setActiveIndex(Math.min(newIndex, filteredData.length - 1));
		}
	};

	return (
		<div className="before-and-after-wrapper">
			<div
				className="before-and-after-cards-container"
				ref={containerRef}
				onScroll={handleScroll}
			>
				{filteredData.map((item) => (
					<div key={item.id} className="before-and-after-card">
						<div className="before-and-after-card--img before-img">
							<h4>Before {item.beforeDate}</h4>
							<img src={item.imgBefore} alt="before" />
						</div>
						<div className="before-and-after-card--img after-img">
							<h4>After {item.afterDate}</h4>
							<img src={item.imgAfter} alt="after" />
						</div>
					</div>
				))}
			</div>

			{/* Pagination Dots */}
			{filteredData.length > 1 && (
				<div className="pagination-dots">
					{filteredData.map((_, index) => (
						<div
							key={index}
							className={`pagination-dot ${
								index === activeIndex ? "active" : ""
							}`}
							onClick={() => {
								const cardWidth = 300 + 32; // card width + gap
								containerRef.current?.scrollTo({
									left: index * cardWidth,
									behavior: "smooth",
								});
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
}
