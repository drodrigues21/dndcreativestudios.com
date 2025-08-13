import { Link } from "react-router-dom";
import "./styles/CommunityNotice.css";

export default function CommunityNotice() {
	return (
		<main className="page-community-notice">
			<header className="page-header">
				<h1>공지사항</h1>
				<Link className="add-button" to="/community/notice/new">글쓰기</Link>
			</header>
			<section className="content">목록이 여기에 표시됩니다.</section>
		</main>
	);
}
