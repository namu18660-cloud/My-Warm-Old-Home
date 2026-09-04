/**
 * 한빛빌라 입주민 누리집 - 메인 인터렉션 & 게시글/댓글 데이터
 * 2020년 주안4동 한빛빌라 101호/102호/201호/202호 및 하나 본가/가지 식구들 데이터
 */

// 1. 샘플 게시글 및 댓글 데이터베이스
const boardData = {
  1: {
    id: 1,
    category: "notice",
    title: "[공지] 202호 공실 대여 안내",
    writer: "오재현(관리)",
    date: "2019.09.01",
    viewCount: 24,
    content: `주민 및 식구 여러분 안녕하십니까. 온누리부동산 오재현입니다.

우선, 온누리부동산 내부 전산 시스템 처리 과정에서 발생한 심각한 오류에 대해 깊이 사죄의 말씀 드립니다.

최근 202호의 내부 리모델링 작업을 마무리한 뒤 온누리부동산 측에서 해당 세대에 대한 '식구 임시 대여' 등록 절차를 진행하던 중, 전산 입력 상의 착오로 인해 해당 매물이 외부 부동산망에 전체 공개 매물로 오등록되는 사고가 발생했습니다.

이 과정에서 정식 임대차 계약 신청 및 입주 수속이 전산상으로 승인되어 버리는 일이 일어났습니다.

건물주이신 정지아 님과 박상철 님께서 상황을 전달받으신 후 해당 계약건을 수용해 주시어, 202호는 예정과 달리 일반 신규 입주민을 정식으로 맞이하는 방향으로 결정되었습니다.

이에 따라, 그동안 인천 현장 지원이나 대기 목적으로 202호를 임시 이용하시던 식구분들께서는 금일부터 당분간 다른 거처를 이용해 주시기 바랍니다.

202호는 현재 신규 입주민 맞이를 위한 최종 집기 정리 및 정돈 작업이 진행 중입니다. 
입주가 예정되어 있는 만큼, 건물 내 보안 및 사생활 보호 수칙은 이전보다 더욱 엄격하게 유지될 예정이니 식구 여러분의 적극적인 협조 부탁드립니다.

다시 한번 전산 관리 미흡으로 불편을 드려 죄송합니다.`,
    comments: [
      { writer: "문해주", date: "09.01 11:20", text: "임무시 다른 거처 관련해 추후 문의드리겠습니다." },
      { writer: "김서현", date: "09.01 10:15", text: "리모델링 및 정산 비용은 원(元) 쪽 경비 계좌로 처리해 두었습니다. 수고많으셨습니다." },
      { writer: "윤도현", date: "09.01 11:02", text: "아 202호 누워서 폰 보기 딱 좋았는데 아쉽네 ㅋㅋㅋ" },
      { writer: "박상철", date: "09.01 11:20", text: "@윤도현 니네 숙소 두고 왜 남의 빌라에 와서 자꾸 자빠져 자냐?" }
    ]
  },
  2: {
    id: 2,
    category: "proposal",
    title: "[제안] 스포츠 데이터 분석 관련 서적 공유하실 분",
    writer: "이태규",
    date: "2019.09.04",
    viewCount: 12,
    content: `해외 축구/야구 데이터 통계 관련 서적 3권 보유중입니다.

원서 번역본이라 가볍게 읽기 좋습니다. 데이터 분석이나 리그 흐름 파악에 관심 있으신 분은 201호로 올라오시거나 연락 주십쇼. 대여 가능합니다.`,
    comments: [
      { writer: "박상철", date: "09.04 09:05", text: "그거 읽으면 이번 주 승무패 맞출 수 있냐? ㅋㅋㅋ" },
      { writer: "이태규", date: "09.04 09:30", text: "@박상철 넌 감부터 잡아라." }
    ]
  },
  3: {
    id: 3,
    category: "etc",
    title: "오늘 저녁에 족발 시키실 분 붙으셈",
    writer: "윤도현(실가)",
    date: "2019.09.03",
    viewCount: 18,
    content: `족발 대자 시켜서 101호에서 먹을 건데 뿜빠이할 사람 붙으셈. 
야식 겸 저녁. 본가 쪽 사람도 환영함. 

오늘 퇴근길에 들를 사람 댓글 달아라.`,
    comments: [
      { writer: "박상철", date: "09.03 18:12", text: "지아 퇴근하고 오면 한소리 들을 텐데 감당 가능하냐?" },
      { writer: "정지아", date: "09.03 18:30", text: "족발 뼈 쓰레기봉투에 안 넣고 뼈째로 일반 쓰레기에 버리면 다 버린 사람 입에 집어넣습니다." },
      { writer: "윤도현", date: "09.03 18:45", text: "@정지아 지아 누님 깔끔하게 정리하겠습니다 충성 ^^7" },
      { writer: "김서현", date: "09.03 19:10", text: "나도 갈게! 콜라 큰 거 사 들고 간다~" }
    ]
  },
  4: {
    id: 4,
    category: "share",
    title: "원목 소형 협탁 나눔합니다!",
    writer: "김서현(수뇌)",
    date: "2019.09.02",
    viewCount: 15,
    content: `방 정리하다가 상태 아주 좋은 원목 협탁 하나 나왔어요!
침대 옆에 두고 쓰기 딱 좋습니다.

필요하신 분 댓글 남겨주시면 101호 앞으로 가져다드릴게요~ 😊`,
    comments: [
      { writer: "윤서우", date: "09.02 20:10", text: "사일런트 쿨러나 장비 올릴 정도 크기 되나요?" },
      { writer: "김서현", date: "09.02 20:30", text: "@윤서우 서우야 쿨러 올리기엔 조금 작고 가로세로 40cm 정도 돼! 올려둘 수 있긴 한데 나중에 구경하러 가도 됨?" },
      { writer: "윤서우", date: "09.02 20:45", text: "…아니에요. 걍 두세요." }
    ]
  },
  5: {
    id: 5,
    category: "etc",
    title: "[기타] 202호 수리하면서 뺀 야전침대 주인 찾음",
    writer: "박상철",
    date: "2019.08.30",
    viewCount: 21,
    content: `202호 내부 정리하면서 밖으로 뺀 3단 접이식 야전침대 누구 거냐?

실가 애들 인천 현장 지원 나왔을 때 두고 간 것 같은데 101호 앞 복도에 치워뒀으니까 보시는 대로 가져가라. 걸리적거린다.`,
    comments: [
      { writer: "최현우(실가)", date: "08.30 14:20", text: "아 상철 형님 저 지난달 지원 갔을 때 두고 간 겁니다 ㅋㅋㅋ 저녁에 찾으러 갈게요!" },
      { writer: "박상철", date: "08.30 15:00", text: "@최현우 오올 때 박카스 한 박스 사 와라." }
    ]
  }
};

// 2. 게시글 상세 열람 (모달 열기)
function openPost(event, postId) {
  if (event) event.preventDefault(); // 링크 이동 방지
  
  const post = boardData[postId];
  if (!post) return;

  const modal = document.getElementById("post-view-modal");
  const modalBody = document.getElementById("modal-post-body");

  // 댓글 목록 HTML 생성
  let commentsHtml = post.comments.map(c => `
    <div class="comment-item">
      <div class="comment-meta">
        <strong>${escapeHtml(c.writer)}</strong>
        <span class="comment-date">${c.date}</span>
      </div>
      <div class="comment-text">${escapeHtml(c.text)}</div>
    </div>
  `).join("");

  // 모달 내부 구조 구성
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
      <!-- 댓글 작성 폼 -->
      <div class="comment-write-box">
        <input type="text" id="comment-writer-input" placeholder="이름 (예: 202호 입주민)" value="202호 입주민">
        <textarea id="comment-text-input" placeholder="댓글을 입력하세요..." rows="2"></textarea>
        <button type="button" onclick="addComment(${post.id})">댓글 등록</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

// 3. 모달 닫기
function closePost() {
  const modal = document.getElementById("post-view-modal");
  if (modal) modal.classList.add("hidden");
}

// 4. 댓글 추가 기능
function addComment(postId) {
  const writerInput = document.getElementById("comment-writer-input");
  const textInput = document.getElementById("comment-text-input");

  const writer = writerInput.value.trim() || "202호 입주민";
  const text = textInput.value.trim();

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

  const newComment = { writer, date: dateStr, text };
  
  // 데이터에 추가
  boardData[postId].comments.push(newComment);

  // 화면 갱신
  openPost(null, postId);
}

// 5. 카테고리 탭 필터링
function filterBoard(category) {
  const buttons = document.querySelectorAll(".btn-filter-tab");
  buttons.forEach(btn => btn.classList.remove("active"));

  if (event && event.target) {
    event.target.classList.add("active");
  }

  const rows = document.querySelectorAll("#board-body tr");
  rows.forEach(row => {
    if (category === "all") {
      row.style.display = "";
    } else {
      const onclickAttr = row.querySelector("a")?.getAttribute("onclick") || "";
      const match = onclickAttr.match(/openPost\((?:event,\s*)?(\d+)\)/);
      if (match) {
        const postId = match[1];
        if (boardData[postId] && boardData[postId].category === category) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    }
  });
}

// 유틸리티 함수
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

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
  const modal = document.getElementById("post-view-modal");
  if (event.target === modal) {
    closePost();
  }
};
