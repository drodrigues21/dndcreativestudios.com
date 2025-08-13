import "./styles/CommunityWithStarForm.css";

export default function CommunityWithStarForm() {
	return (
		<main className="page-withstar-form">
			<h1>with STAR 글쓰기</h1>
			<form className="withstar-form" onSubmit={(e) => e.preventDefault()}>
				<label>
					제목
					<input type="text" name="title" required />
				</label>
				<label>
					이미지 URL
					<input type="url" name="image" />
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
