import { useState } from "react";
import BeforeAndAfterCard from "./global/BeforeAndAfterCard";
import "../components/styles/BeforeAndAfterHome.css";

export default function BeforeAndAfterHome() {
	const [selectedCategory, setSelectedCategory] = useState("임플란트");

	const categories = ["임플란트", "치아교정", "라미네이트", "치아미백"];

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className="before-and-after--container">
			<div className="before-and-after--navbar">
				<ul className="before-and-after--navbar--list">
					{categories.map((category) => (
						<li key={category} className="before-and-after--navbar--list--item">
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleCategoryClick(category);
								}}
								className={selectedCategory === category ? "active" : ""}
							>
								{category}
							</a>
						</li>
					))}
				</ul>
			</div>
			<BeforeAndAfterCard selectedCategory={selectedCategory} />
		</div>
	);
}
