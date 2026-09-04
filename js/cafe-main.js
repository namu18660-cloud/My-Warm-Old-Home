// 초기 게시글 샘플 데이터
let posts = [
  {
    id: 1,
    category: "NOTICE",
    categoryName: "공지",
    title: "2020 레트로 카페 리뉴얼 안내 및 이용 수칙",
    writer: "카페매니저",
    date: "2026.03.01",
    views: 452,
    content: "안녕하세요, 카페 회원 여러분! 따뜻한 크림/아이보리 톤으로 게시판이 리뉴얼되었습니다. 자유롭게 소통해주세요."
  },
  {
    id: 2,
    category: "FREE",
    categoryName: "자유",
    title: "오늘 카페에서 들은 2020년 감성 플레이리스트 추천합니다",
    writer: "커피매니아",
    date: "2026.03.02",
    views: 128,
    content: "잔잔한 로파이(Lo-fi) 비트와 아쿠스틱 기타 선율이 어우러지는 곡들인데 들어보세요!"
  },
  {
    id: 3,
    category: "INFO",
    categoryName: "정보",
    title: "CSS 웹 폰트 성능 최적화 팁 공유",
    writer: "웹디자이너",
    date: "2026.03.03",
    views: 89,
    content: "font-display: swap 설정과 WOFF2 포맷 활용으로 로딩 속도를 대폭 개선할 수 있습니다."
  },
  {
    id: 4,
    category: "QNA",
    categoryName: "질문",
    title: "모바일 오프캔버스 사이드바 구현할 때 주의점이 있나요?",
    writer: "초보개발자",
    date: "2026.03.04",
    views: 64,
    content: "z-index 레이어 관리와 가로 스크롤 방지를 위해 overflow-x: hidden 처리가 필수적입니다."
  }
];

let currentFilter = "ALL";

// DOM 엘리먼트 참조
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const btnSidebarOpen = document.getElementById("btnSidebarOpen");
const btnSidebarClose = document.getElementById("btnSidebarClose");
const cafeSidebar = document.getElementById("cafeSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const boardTbody = document.getElementById("boardTbody");
const filterTabs = document.querySelectorAll(".btn-filter-tab");
const menuLinks = document.querySelectorAll(".menu-link");
const currentBoardTitle = document.getElementById("currentBoardTitle");
const postModal = document.getElementById("postModal");
const btnCloseModal = document.getElementById("btnCloseModal");
const modalBody = document.getElementById("modalBody");
const btnOpenWriteModal = document.getElementById("btnOpenWriteModal");

// 1. 다크/라이트 테마 전환
themeToggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
  }
});

// 2. 모바일 사이드바 제어
function openSidebar() {
  cafeSidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
}

function closeSidebar() {
  cafeSidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
}

btnSidebarOpen?.addEventListener("click", openSidebar);
btnSidebarClose?.addEventListener("click", closeSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);

// 3. 게시글 목록 렌더링
function renderPosts() {
  boardTbody.innerHTML = "";

  const filteredPosts = currentFilter === "ALL" 
    ? posts 
    : posts.filter(post => post.category === currentFilter);

  if (filteredPosts.length === 0) {
    boardTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 30px; color: var(--text-sub);">등록된 게시글이 없습니다.</td></tr>`;
    return;
  }

  filteredPosts.forEach(post => {
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.innerHTML = `
      <td class="col-cat">${post.categoryName}</td>
      <td class="col-title">${post.title}</td>
      <td class="col-writer">${post.writer}</td>
      <td class="col-date">${post.date}</td>
      <td class="col-views">${post.views}</td>
    `;
    
    tr.addEventListener("click", () => openDetailModal(post.id));
    boardTbody.appendChild(tr);
  });
}

// 4. 필터 탭 클릭 이벤트
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    currentFilter = tab.dataset.filter;
    renderPosts();
  });
});

// 5. 사이드바 메뉴 클릭 이벤트
menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const category = link.dataset.category;
    currentFilter = category;

    // 상단 탭 연동
    filterTabs.forEach(t => {
      if (t.dataset.filter === category) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    currentBoardTitle.textContent = link.textContent;
    renderPosts();
    closeSidebar();
  });
});

// 6. 상세보기 모달
function openDetailModal(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  post.views += 1;
  renderPosts();

  modalBody.innerHTML = `
    <div style="font-size: 0.8rem; color: var(--accent-color); font-weight: bold; margin-bottom: 6px;">[${post.categoryName}]</div>
    <h2 style="margin: 0 0 10px 0; font-size: 1.2rem;">${post.title}</h2>
    <div style="font-size: 0.8rem; color: var(--text-sub); border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 16px;">
      작성자: ${post.writer} | 작성일: ${post.date} | 조회수: ${post.views}
    </div>
    <div style="font-size: 0.95rem; line-height: 1.6; min-height: 100px;">
      ${post.content.replace(/\n/g, '<br>')}
    </div>
  `;

  postModal.classList.remove("hidden");
}

// 7. 글쓰기 모달
btnOpenWriteModal.addEventListener("click", () => {
  modalBody.innerHTML = `
    <h2 style="margin: 0 0 16px 0; font-size: 1.1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">카페 글쓰기</h2>
    <form id="writeForm" style="display: flex; flex-direction: column; gap: 12px;">
      <select id="writeCategory" style="padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-main);">
        <option value="FREE">자유게시판</option>
        <option value="INFO">정보공유</option>
        <option value="QNA">질문/답변</option>
      </select>
      <input type="text" id="writeTitle" placeholder="제목을 입력하세요" required style="padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-main);">
      <textarea id="writeContent" rows="6" placeholder="내용을 작성하세요" required style="padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-main); color: var(--text-main); font-family: inherit; resize: vertical;"></textarea>
      <button type="submit" class="btn-write-main" style="margin-top: 8px;">작성 완료</button>
    </form>
  `;

  postModal.classList.remove("hidden");

  const writeForm = document.getElementById("writeForm");
  writeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = document.getElementById("writeCategory").value;
    const title = document.getElementById("writeTitle").value;
    const content = document.getElementById("writeContent").value;

    const categoryMap = { FREE: "자유", INFO: "정보", QNA: "질문" };
    const today = new Date();
    const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

    const newPost = {
      id: posts.length + 1,
      category: category,
      categoryName: categoryMap[category],
      title: title,
      writer: "카페회원",
      date: dateStr,
      views: 0,
      content: content
    };

    posts.unshift(newPost);
    renderPosts();
    postModal.classList.add("hidden");
  });
});

// 8. 모달 닫기
btnCloseModal.addEventListener("click", () => {
  postModal.classList.add("hidden");
});

postModal.addEventListener("click", (e) => {
  if (e.target === postModal) {
    postModal.classList.add("hidden");
  }
});

// 초기화
renderPosts();
