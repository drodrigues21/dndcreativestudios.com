export default function NotFound() {
	return (
		<section
			className="notfound"
			style={{ padding: "8rem 2rem", textAlign: "center" }}
		>
			<h1 className="h2">페이지를 찾을 수 없습니다</h1>
			<p className="kr-body" style={{ marginTop: "1.2rem" }}>
				요청하신 페이지가 존재하지 않거나 이동되었습니다.
			</p>
			<a
				href="/"
				className="kr-body"
				style={{
					display: "inline-block",
					marginTop: "2.4rem",
					color: "var(--accent)",
				}}
			>
				홈으로 가기
			</a>
		</section>
	);
}
