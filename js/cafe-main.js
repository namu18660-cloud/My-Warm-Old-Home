/**
 * 한빛빌라 입주민 누리집 - 메인 인터렉션 & 데이터 제어
 */

// =========================================================
// 1. 게시글 및 댓글 데이터베이스
// =========================================================
const boardData = {
  1: {
    id: 0,
    category: "notice",
    title: "[안내] 누리집 이용 수칙 및 카테고리 안내",
    writer: "오재현(관리)",
    date: "2007.03.15",
    viewCount: 45,
    content: `한빛빌라 누리집에 오신 것을 환영합니다.\n\n본 공간은 주안4동 한빛빌라 입주민 및 관련 식구 전용 소통 채널입니다.\n\n- 공지: 건물 관리 및 중요 변경사항\n- 제안: 공유 자료 및 건의사항\n- 나눔: 입주민 간 물품 나눔\n- 기타: 잡담 및 일상 소통\n\n타인에 대한 비방이나 불필요한 마찰은 자제해 주시기 바랍니다.`,
    comments: [
      { writer: "김서현", date: "08.25 14:10", text: "확인했습니다! 게시판 깔끔하네요." }
    ]
  },

  2: {
    id: 6,
    category: "notice",
    title: "[공지] 한빛빌라 거처 기본 생활 수칙 안내 (반드시 숙지 바랍니다)",
    writer: "정지아",
    date: "2019.09.02",
    viewCount: 38,
    content: `101호 정지아입니다.

공동주택 특성상 기본 질서가 지켜지지 않으면 입주민 간 불필요한 마찰이 발생합니다.
신규 입주 및 오가는 식구분들이 늘어남에 따라 기본 거처 수칙을 정리해 올리니 반드시 숙지해 주시기 바랍니다.

1. 우편함 관리 및 장기 방치 금지
- 우편물과 전단지는 3일 이상 쌓이지 않도록 주기적으로 수거하십시오. 
- 명의 불분명 우편물이나 안내문은 무단 개봉하지 마시고 101호로 전달 바랍니다.

2. 야간 세탁기 및 청소기 사용 자제
- 22:00 이후 가전제품 사용에 따른 진동과 소음은 층간소음의 주원인입니다.
- 야간 가전 사용은 엄격히 금하며, 불가피한 사정이 있을 경우 미리 양해를 구하십시오.

3. 복도 및 계단 정숙
- 공용 공간은 소리가 크게 울립니다. 복도 이동 시 고성방가 및 대화 자제 바랍니다.
- 공용 계단에 개인 물품을 적재하여 통행을 방해하는 행위는 금지합니다.

4. 외부 방문객 및 야간 체류 제한
- 외부 방문객의 24시간 이상 장기 체류 및 야간 숙박은 사전에 동의를 구해야 합니다.
- 입주민 외 출입자의 동선과 보안 관리를 위한 조치이니 협조 부탁드립니다.

5. 지하 공실 및 옥상 출입 금지
- 지하 관리 공간 및 옥상은 안전사고 예방을 위해 지정된 관리인 외 출입을 엄격히 금합니다.
- 이상 소음이나 시설 점검이 필요한 경우 직접 확인하지 마시고 101호나 관리인(오재현)에게 즉시 알리십시오.

기본 수칙을 준수하여 조용하고 안정된 주거 환경을 유지할 수 있도록 협조 바랍니다.
수칙 위반 시 별도로 말씀드리겠습니다.`,
    comments: [
      { writer: "박상철", date: "09.02 13:00", text: "확인~ 고생했다!" }, // <-- 쉼표 수정 완료
      { writer: "윤서우", date: "09.02 13:00", text: "확인했습니다." },
      { writer: "이태규", date: "09.02 13:00", text: "확인." }
    ]
  },
  
  3: {
    id: 1,
    category: "notice",
    title: "[공지] 202호 공실 대여 안내",
    writer: "오재현(관리)",
    date: "2019.09.01",
    viewCount: 24,
    content: `주민 및 식구 여러분 안녕하십니까. 온누리부동산 오재현입니다.\n\n우선, 온누리부동산 내부 전산 시스템 처리 과정에서 발생한 심각한 오류에 대해 심심한 사죄의 말씀 드립니다.\n\n최근 202호의 내부 리모델링 작업을 마무리한 뒤 온누리부동산 측에서 해당 세대에 대한 '식구 임시 대여' 등록 절차를 진행하던 중, 전산 입력 상의 착오로 인해 해당 매물이 외부 부동산망에 전체 공개 매물로 오등록되는 사고가 발생했습니다.\n\n이 과정에서 정식 임대차 계약 신청 및 입주 수속이 전산상으로 승인되어 버리는 일이 일어났습니다.\n\n건물주이신 정지아 님과 박상철 님께서 상황을 전달받으신 후 해당 계약건을 수용해 주시어, 202호는 예정과 달리 일반 신규 입주민을 정식으로 맞이하는 방향으로 결정되었습니다.\n\n이에 따라, 그동안 인천 현장 지원이나 대기 목적으로 202호를 임시 이용하시던 식구분들께서는 금일부터 당분간 다른 거처를 이용해 주시기 바랍니다.\n\n202호는 현재 신규 입주민 맞이를 위한 최종 집기 정리 및 정돈 작업이 진행 중입니다.\n입주가 예정되어 있는 만큼, 건물 내 보안 및 사생활 보호 수칙은 이전보다 더욱 엄격하게 유지될 예정이니 식구 여러분의 적극적인 협조 부탁드립니다.\n\n다시 한번 전산 관리 미흡으로 불편을 드려 죄송합니다.`,
    comments: [
      { writer: "문해주", date: "09.01 11:20", text: "임무시 다른 거처 관련해 추후 문의드리겠습니다." },
      { writer: "김서현", date: "09.01 10:15", text: "리모델링 및 정산 비용은 원(元) 쪽 경비 계좌로 처리해 두었습니다. 수고많으셨습니다." },
      { writer: "윤도현", date: "09.01 11:02", text: "아 202호 누워서 폰 보기 딱 좋았는데 아쉽네 ㅋㅋㅋ" },
      { writer: "박상철", date: "09.01 11:20", text: "@윤도현 니네 숙소 두고 왜 남의 빌라에 와서 자꾸 자빠져 자냐?" }
    ]
  },
  4: {
    id: 2,
    category: "proposal",
    title: "[제안] 스포츠 데이터 분석 관련 서적 공유하실 분",
    writer: "이태규",
    date: "2019.09.04",
    viewCount: 12,
    content: `해외 축구/야구 데이터 통계 관련 서적 3권 보유중입니다.\n\n원서 번역본이라 가볍게 읽기 좋습니다. 데이터 분석이나 리그 흐름 파악에 관심 있으신 분은 201호로 올라오시거나 연락 주십쇼. 대여 가능합니다.`,
    comments: [
      { writer: "박상철", date: "09.04 09:05", text: "그거 읽으면 이번 주 승무패 맞출 수 있냐? ㅋㅋㅋ" },
      { writer: "이태규", date: "09.04 09:30", text: "@박상철 넌 감부터 잡아라." }
    ]
  },
  5: {
    id: 3,
    category: "etc",
    title: "오늘 저녁에 족발 시키실 분 붙으셈",
    writer: "윤도현(실가)",
    date: "2019.09.03",
    viewCount: 18,
    content: `족발 대자 시켜서 101호에서 먹을 건데 뿜빠이할 사람 붙으셈.\n야식 겸 저녁. 본가 쪽 사람도 환영함.\n\n오늘 퇴근길에 들를 사람 댓글 달아라.`,
    comments: [
      { writer: "이시환", date: "09.03 18:03", text: "아아아아왜맨날집말고거기가서처먹는데ㅔㅔㅔㅔ!!!!!!!!!" },
      { writer: "윤도현", date: "09.03 18:03", text: "@이시환 ㅋㅋ걍" },
      { writer: "박상철", date: "09.03 18:12", text: "지아 퇴근하고 오면 한소리 들을 텐데 감당 가능하냐?" },
      { writer: "정지아", date: "09.03 18:30", text: "족발 뼈 쓰레기봉투에 안 넣고 뼈째로 일반 쓰레기에 버리면 다 버린 사람 입에 집어넣습니다." },
      { writer: "윤도현", date: "09.03 18:45", text: "@정지아 지아 누님 깔끔하게 정리하겠습니다 충성 ^^7" },
      { writer: "김서현", date: "09.03 19:10", text: "나도 갈게! 콜라 큰 거 사 들고 간다~" }
    ]
  },
  6: {
    id: 4,
    category: "share",
    title: "원목 소형 협탁 나눔합니다!",
    writer: "김서현(수뇌)",
    date: "2019.09.02",
    viewCount: 15,
    content: `방 정리하다가 상태 아주 좋은 원목 협탁 하나 나왔어요!\n침대 옆에 두고 쓰기 딱 좋습니다.\n\n필요하신 분 댓글 남겨주시면 101호 앞으로 가져다드릴게요~ 😊`,
    comments: [
      { writer: "윤서우", date: "09.02 20:10", text: "사일런트 쿨러나 장비 올릴 정도 크기 되나요?" },
      { writer: "김서현", date: "09.02 20:30", text: "@윤서우 서우야 쿨러 올리기엔 조금 작고 가로세로 40cm 정도 돼! 올려둘 수 있긴 한데 나중에 구경하러 가도 됨?" },
      { writer: "윤서우", date: "09.02 20:45", text: "…아니에요. 걍 두세요." }
    ]
  },
  7: {
    id: 5,
    category: "etc",
    title: "[기타] 202호 수리하면서 뺀 야전침대 주인 찾음",
    writer: "박상철",
    date: "2019.08.30",
    viewCount: 21,
    content: `202호 내부 정리하면서 밖으로 뺀 3단 접이식 야전침대 누구 거냐?\n\n실가 애들 인천 현장 지원 나왔을 때 두고 간 것 같은데 101호 앞 복도에 치워뒀으니까 보시는 대로 가져가라. 걸리적거린다.`,
    comments: [
      { writer: "최현우(실가)", date: "08.30 14:20", text: "아 제가 지난달 지원 갔을 때 두고 간 겁니다. 저녁에 찾으러 갈게요!" },
      { writer: "박상철", date: "08.30 15:00", text: "@최현우 오올 때 박카스 한 박스 사 와라." }
    ]
  }
};

// =========================================================
// 2. DOM 로드 후 초기화
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("user-theme") || "dark";

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.documentElement.classList.add("light-theme");
      document.documentElement.setAttribute("data-darkmode", "false");
      document.body.setAttribute("darkmode", "off");
      if (themeToggle) themeToggle.checked = true;
    } else {
      document.body.classList.remove("light-theme");
      document.documentElement.classList.remove("light-theme");
      document.documentElement.removeAttribute("data-darkmode");
      document.body.removeAttribute("darkmode");
      if (themeToggle) themeToggle.checked = false;
    }
  }

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const nextTheme = themeToggle.checked ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("user-theme", nextTheme);
    });
  }

  const sidebar = document.getElementById("cafe-sidebar");
  const btnToggle = document.getElementById("btn-sidebar-toggle");
  const btnClose = document.getElementById("btn-sidebar-close");
  const overlay = document.getElementById("sidebar-overlay");

  function openSidebar() {
    if (sidebar && overlay) {
      sidebar.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeSidebar() {
    if (sidebar && overlay) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (btnToggle) btnToggle.addEventListener("click", openSidebar);
  if (btnClose) btnClose.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePost();
      closeSidebar();
    }
  });

  renderBoard();
});

// =========================================================
// 3. 게시판 자동 렌더링
// =========================================================
function renderBoard(categoryFilter = "all") {
  const boardBody = document.getElementById("board-body");
  const totalCountEl = document.getElementById("total-count");
  if (!boardBody) return;

  const posts = Object.values(boardData).sort((a, b) => {
    const aIsNotice = a.category === "notice";
    const bIsNotice = b.category === "notice";

    if (aIsNotice && !bIsNotice) return -1;
    if (!aIsNotice && bIsNotice) return 1;
    return b.id - a.id;
  });

  let renderedCount = 0;

  const html = posts.map(post => {
    if (categoryFilter !== "all" && post.category !== categoryFilter) {
      return "";
    }

    renderedCount++;
    const isNotice = post.category === "notice";
    const rowClass = isNotice ? 'class="row-notice"' : '';
    const catBadge = isNotice 
      ? '<span class="tag-notice">공지</span>' 
      : getCategoryName(post.category);

    return `
      <tr ${rowClass} data-id="${post.id}">
        <td class="col-cat">${catBadge}</td>
        <td class="col-title">
          <a href="#" onclick="openPost(event, ${post.id})">
            ${escapeHtml(post.title)}
            <span class="count-badge">[${post.comments.length}]</span>
          </a>
        </td>
        <td class="col-writer">${escapeHtml(post.writer)}</td>
        <td class="col-date">${post.date}</td>
        <td class="col-views">${post.viewCount}</td>
      </tr>
    `;
  }).join("");

  boardBody.innerHTML = html;
  if (totalCountEl) totalCountEl.textContent = renderedCount;
}

// =========================================================
// 4. 카테고리 필터링
// =========================================================
function filterBoard(category, event) {
  if (event) {
    event.preventDefault();
  }

  const buttons = document.querySelectorAll(".btn-filter-tab");
  buttons.forEach(btn => btn.classList.remove("active"));

  if (event && event.target && event.target.classList.contains("btn-filter-tab")) {
    event.target.classList.add("active");
  }

  renderBoard(category);
}

// =========================================================
// 5. 게시글 모달 및 댓글
// =========================================================
function openPost(event, postId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const post = boardData[postId];
  if (!post) return;

  post.viewCount += 1;
  const viewCell = document.querySelector(`#board-body tr[data-id="${postId}"] .col-views`);
  if (viewCell) viewCell.textContent = post.viewCount;

  const modal = document.getElementById("post-view-modal");
  const modalBody = document.getElementById("modal-post-body");

  if (!modal || !modalBody) return;

  let commentsHtml = post.comments.map(c => `
    <div class="comment-item">
      <div class="comment-meta">
        <strong>${escapeHtml(c.writer)}</strong>
        <span class="comment-date">${c.date}</span>
      </div>
      <div class="comment-text">${escapeHtml(c.text)}</div>
    </div>
  `).join("");

  modalBody.innerHTML = `
    <div class="post-detail-header">
      <span class="post-cat-badge">[${getCategoryName(post.category)}]</span>
      <h2 class="post-detail-title">${escapeHtml(post.title)}</h2>
      <div class="post-detail-info">
        <span>작성자: <strong>${escapeHtml(post.writer)}</strong></span> | 
        <span>작성일: ${post.date}</span> | 
        <span>조회: ${post.viewCount}</span>
      </div>
    </div>
    <hr class="post-divider">
    <div class="post-detail-content">
      ${escapeHtml(post.content).replace(/\n/g, '<br>')}
    </div>
    <hr class="post-divider">
    <div class="comments-section">
      <h3>💬 댓글 (${post.comments.length})</h3>
      <div class="comments-list" id="comments-list-${post.id}">
        ${commentsHtml}
      </div>
      <div class="comment-write-box">
        <input type="text" id="comment-writer-input" placeholder="이름 (예: 202호 입주민)" value="202호 입주민">
        <textarea id="comment-text-input" placeholder="댓글을 입력하세요..." rows="2"></textarea>
        <button type="button" onclick="addComment(${post.id})">댓글 등록</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function closePost() {
  const modal = document.getElementById("post-view-modal");
  if (modal) modal.classList.add("hidden");
}

function addComment(postId) {
  const writerInput = document.getElementById("comment-writer-input");
  const textInput = document.getElementById("comment-text-input");

  const writer = writerInput ? writerInput.value.trim() : "202호 입주민";
  const text = textInput ? textInput.value.trim() : "";

  if (!text) {
    alert("댓글 내용을 입력해 주세요.");
    return;
  }

  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const dateStr = `${month}.${day} ${hours}:${minutes}`;

  boardData[postId].comments.push({
    writer: writer || "202호 입주민",
    date: dateStr,
    text
  });

  openPost(null, postId);
}

// =========================================================
// 6. 유틸리티 함수
// =========================================================
function getCategoryName(cat) {
  const names = {
    notice: "공지",
    proposal: "제안",
    share: "나눔",
    etc: "기타"
  };
  return names[cat] || "일반";
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

window.onclick = function(event) {
  const modal = document.getElementById("post-view-modal");
  if (event.target === modal) {
    closePost();
  }
};
