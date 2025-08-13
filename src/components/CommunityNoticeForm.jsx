import "./styles/CommunityNoticeForm.css";

export default function CommunityNoticeForm() {
	return (
		<main className="page-notice-form">
			<h1>공지사항 글쓰기</h1>
			<form className="notice-form" onSubmit={(e) => e.preventDefault()}>
				<label>
					제목
					<input type="text" name="title" required />
				</label>
				<label>
					내용
					<textarea name="content" rows={6} />
				</label>
				<button type="submit">등록</button>
			</form>
		</main>
	);
}
