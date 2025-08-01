import "../styles/Navbar.css";

export default function Navbar() {
	return (
		<>
			{/* Desktop Navigation */}
			<nav className="main-header--nav">
				<ul className="main-header--nav-list">
					<li className="main-header--nav-item">
						<a href="/" className="main-header--nav-link">
							치과소개
						</a>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										치과소개
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										의료진 소개
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										시설및기공소
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										장비소개
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										진료시간 및 오시는길
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<a href="/" className="main-header--nav-link">
							치아교정
						</a>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										치아교정
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										인비절라인
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										클리피씨
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<a href="/" className="main-header--nav-link">
							임플란트
						</a>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										임플란트
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										뼈이식 임플란트
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										전체임플란트
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										임플란트 틀니
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<a href="/" className="main-header--nav-link">
							심미치료
						</a>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										화이티니 라미네이트
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										치아미백
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										잇몸성형
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<a href="/" className="main-header--nav-link">
							일반진료
						</a>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										충치치료
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										신경치료
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										사랑니 발치
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										턱관절치료
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										잇몸치료
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="main-header--nav-item">
						<a href="/" className="main-header--nav-link">
							커뮤니티
						</a>
						<div className="main-header--nav-item-sub">
							<ul className="main-header--nav-item-sub-list">
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										공지사항
									</a>
								</li>
								<li className="main-header--nav-item-sub-item">
									<a href="/" className="main-header--nav-item-sub-link">
										with STAR
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</>
	);
}
