import { Link } from "react-router-dom";
import { useState } from "react";
import { noticesDB } from "../data/noticesDB";
import ArrowDown from "../assets/icons/arrow-down.svg";
import ArrowUp from "../assets/icons/arrow-up.svg";
import "./styles/CommunityNotice.css";

export default function CommunityNotice() {
	const [openIds, setOpenIds] = useState(
		new Set(noticesDB[0] ? [noticesDB[0].id] : [])
	);

	const toggleOpen = (id) => {
		setOpenIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		});
	};

	return (
		<main className="community-notice--container">
			<section className="community-notice--header">
				<h1 className="section-title">
					Notice <span>화이트트드림 공지사항</span>
				</h1>
			</section>
			<section className="community-notice--content">
				<ul className="community-notice--list">
					{noticesDB.map((item) => {
						const isOpen = openIds.has(item.id);
						return (
							<div className="community-notice--item-wrapper">
								<li
									className={`community-notice--item${isOpen ? " open" : ""}`}
									key={item.id}
								>
									<button
										className="community-notice--summary"
										onClick={() => toggleOpen(item.id)}
										aria-expanded={isOpen}
									>
										<span className="community-notice--title">
											{item.title}
										</span>
										<img
											className="community-notice--arrow"
											src={isOpen ? ArrowUp : ArrowDown}
											alt=""
										/>
									</button>
									<div className="community-notice--date">{item.date}</div>
								</li>
								{isOpen && (
									<div className="community-notice--body">
										<p>{item.content1}</p>
										{item.content2 && <p>{item.content2}</p>}
										{item.content3 && <p>{item.content3}</p>}
										{item.content4 && <p>{item.content4}</p>}
										{item.content5 && <p>{item.content5}</p>}
										{item.content6 && <p>{item.content6}</p>}
										{item.content7 && <p>{item.content7}</p>}
										{item.content8 && <p>{item.content8}</p>}
									</div>
								)}
							</div>
						);
					})}
				</ul>
				<div className="community-notice--add-button-wrapper">
					<Link
						to="/community/notice/new"
						className="community-notice--add-button"
					>
						+ 글쓰기
					</Link>
				</div>
				<nav className="community-notice--pagination" aria-label="pagination">
					<button className="nav prev" aria-label="previous">
						{"<"}
					</button>
					<button className="page active">1</button>
					<button className="page">2</button>
					<button className="page">3</button>
					<button className="page">4</button>
					<button className="page">5</button>
					<button className="page">6</button>
					<button className="nav next" aria-label="next">
						{">"}
					</button>
				</nav>
			</section>
		</main>
	);
}
