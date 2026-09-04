/**
 * 한빛빌라 입주민 누리집 - 메인 인터렉션 & 데이터 제어
 */

// =========================================================
// 1. 게시글 및 댓글 데이터베이스
// =========================================================
const boardData = {
  1: {
    id: 1,
    category: "notice",
    title: "[안내] 누리집 이용 수칙 및 카테고리 안내",
    writer: "오재현(관리)",
    date: "2012.03.15",
    viewCount: 45,
    content: `한빛빌라 누리집에 오신 것을 환영합니다.\n\n본 공간은 주안4동 한빛빌라 입주민 및 관련 식구 전용 소통 채널입니다.\n\n- 공지: 건물 관리 및 중요 변경사항\n- 제안: 공유 자료 및 건의사항\n- 나눔: 입주민 간 물품 나눔\n- 기타: 잡담 및 일상 소통\n\n타인에 대한 비방이나 불필요한 마찰은 자제해 주시기 바랍니다.`,
    comments: [
      { writer: "김서현", date: "08.25 14:10", text: "확인했습니다! 게시판 깔끔하네요." }
    ]
  },
  2: {
    id: 2,
    category: "notice",
    title: "[공지] 한빛빌라 거처 기본 생활 수칙 안내 (반드시 숙지 바랍니다)",
    writer: "정지아",
    date: "2013.07.11",
    viewCount: 38,
    content: `101호 정지아입니다.\n\n공동주택 특성상 기본 질서가 지켜지지 않으면 입주민 간 불필요한 마찰이 발생합니다.\n신규 입주 및 오가는 식구분들이 늘어남에 따라 기본 거처 수칙을 정리해 올리니 반드시 숙지해 주시기 바랍니다.\n\n1. 우편함 관리 및 장기 방치 금지\n- 우편물과 전단지는 3일 이상 쌓이지 않도록 주기적으로 수거하십시오.\n- 명의 불분명 우편물이나 안내문은 무단 개봉하지 마시고 101호로 전달 바랍니다.\n\n2. 야간 세탁기 및 청소기 사용 자제\n- 22:00 이후 가전제품 사용에 따른 진동과 소음은 층간소음의 주원인입니다.\n- 야간 가전 사용은 엄격히 금하며, 불가피한 사정이 있을 경우 미리 양해를 구하십시오.\n\n3. 복도 및 계단 정숙\n- 공용 공간은 소리가 크게 울립니다. 복도 이동 시 고성방가 및 대화 자제 바랍니다.\n- 공용 계단에 개인 물품을 적재하여 통행을 방해하는 행위는 금지합니다.\n\n4. 외부 방문객 및 야간 체류 제한\n- 외부 방문객의 24시간 이상 장기 체류 및 야간 숙박은 사전에 동의를 구해야 합니다.\n- 입주민 외 출입자의 동선과 보안 관리를 위한 조치이니 협조 부탁드립니다.\n\n5. 지하 공실 및 옥상 출입 금지\n- 지하 관리 공간 및 옥상은 안전사고 예방을 위해 지정된 관리인 외 출입을 엄격히 금합니다.\n- 이상 소음이나 시설 점검이 필요한 경우 직접 확인하지 마시고 101호나 관리인(오재현)에게 즉시 알리십시오.\n\n기본 수칙을 준수하여 조용하고 안정된 주거 환경을 유지할 수 있도록 협조 바랍니다.\n수칙 위반 시 별도로 말씀드리겠습니다.`,
    comments: [
      { writer: "박상철", date: "09.02 13:00", text: "확인~ 고생했다!" },
      { writer: "윤서우", date: "09.02 13:00", text: "확인했습니다." },
      { writer: "이태규", date: "09.02 13:00", text: "확인." }
    ]
  },
  3: {
    id: 3,
    category: "notice",
    title: "[공지] 202호 공실 대여 안내",
    writer: "오재현(관리)",
    date: "2019.09.01",
    viewCount: 24,
    content: `주민 및 식구 여러분 안녕하십니까. 온누리부동산 오재현입니다.\n\n우선, 온누리부동산 내부 전산 시스템 처리 과정에서 발생한 심각한 오류에 대해 심심한 사죄의 말씀 드립니다.\n최근 202호의 내부 리모델링 작업을 마무리한 뒤 온누리부동산 측에서 해당 세대에 대한 '식구 임시 대여' 등록 절차를 진행하던 중, 전산 입력 상의 착오로 인해 해당 매물이 외부 부동산망에 전체 공개 매물로 오등록되는 사고가 발생했습니다.\n이 과정에서 정식 임대차 계약 신청 및 입주 수속이 전산상으로 승인되어 버리는 일이 일어났습니다.\n\n건물주이신 정지아 님과 박상철 님께서 상황을 전달받으신 후 해당 계약건을 수용해 주시어, 202호는 예정과 달리 일반 신규 입주민을 정식으로 맞이하는 방향으로 결정되었습니다.\n이에 따라, 그동안 인천 현장 지원이나 대기 목적으로 202호를 임시 이용하시던 식구분들께서는 금일부터 당분간 다른 거처를 이용해 주시기 바랍니다.\n\n202호는 현재 신규 입주민 맞이를 위한 최종 집기 정리 및 정돈 작업이 진행 중입니다.\n입주가 예정되어 있는 만큼, 건물 내 보안 및 사생활 보호 수칙은 이전보다 더욱 엄격하게 유지될 예정이니 식구 여러분의 적극적인 협조 부탁드립니다.\n\n다시 한번 전산 관리 미흡으로 불편을 드려 죄송합니다.`,
    comments: [
      { writer: "문해주", date: "09.01 11:20", text: "임무시 다른 거처 관련해 추후 문의드리겠습니다." },
      { writer: "김서현", date: "09.01 10:15", text: "리모델링 및 정산 비용은 원(元) 쪽 경비 계좌로 처리해 두었습니다. 수고많으셨습니다." },
      { writer: "윤도현", date: "09.01 11:02", text: "아 202호 누워서 폰 보기 딱 좋았는데 아쉽네 ㅋㅋㅋ" },
      { writer: "박상철", date: "09.01 11:20", text: "@윤도현 니네 숙소 두고 왜 남의 빌라에 와서 자꾸 자빠져 자냐?" }
    ]
  },
  4: {
    id: 4,
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
    id: 5,
    category: "etc",
    title: "오늘 저녁에 족발 시키실 분 붙으셈",
    writer: "윤도현",
    date: "2019.09.03",
    viewCount: 18,
    content: `족발 대자 시켜서 101호에서 먹을 건데 뿜빠이할 사람 붙으셈.\n야식 겸 저녁. 본가 쪽 사람도 환영함.\n오늘 퇴근길에 들를 사람 댓글 달아라.`,
    comments: [
      { writer: "이시환", date: "09.03 18:03", text: "아아아아왜맨날집말고거기가서처먹는데ㅔㅔㅔㅔ!!!!!!!!!" },
      { writer: "윤도현", date: "09.03 18:03", text: "@윤도현 ㅋㅋ걍" },
      { writer: "박상철", date: "09.03 18:12", text: "지아 퇴근하고 오면 한소리 들을 텐데 감당 가능하냐?" },
      { writer: "정지아", date: "09.03 18:30", text: "족발 뼈 쓰레기봉투에 안 넣고 뼈째로 일반 쓰레기에 버리면 다 버린 사람 입에 집어넣습니다." },
      { writer: "윤도현", date: "09.03 18:45", text: "@정지아 지아 누님 깔끔하게 정리하겠습니다 충성 ^^7" },
      { writer: "김서현", date: "09.03 19:10", text: "나도 갈게! 콜라 큰 거 사 들고 간다~" }
    ]
  },
  6: {
    id: 6,
    category: "share",
    title: "원목 소형 협탁 나눔합니다!",
    writer: "김서현",
    date: "2019.09.02",
    viewCount: 15,
    content: `방 정리하다가 상태 아주 좋은 원목 협탁 하나 나왔어요!\n침대 옆에 두고 쓰기 딱 좋습니다.\n필요하신 분 댓글 남겨주시면 101호 앞으로 가져다드릴게요~ 😊`,
    comments: [
      { writer: "윤서우", date: "09.02 20:10", text: "사일런트 쿨러나 장비 올릴 정도 크기 되나요?" },
      { writer: "김서현", date: "09.02 20:30", text: "@윤서우 쿨러 올리기엔 조금 작고 가로세로 40cm 정도 돼! 올려둘 수 있긴 한데 나중에 구경하러 가도 됨?" },
      { writer: "윤서우", date: "09.02 20:45", text: "…아니에요. 걍 두세요." }
    ]
  },
  7: {
    id: 7,
    category: "etc",
    title: "[기타] 202호 수리하면서 뺀 야전침대 주인 찾음",
    writer: "박상철",
    date: "2019.08.30",
    viewCount: 21,
    content: `202호 내부 정리하면서 밖으로 뺀 3단 접이식 야전침대 누구 거냐?\n실가 애들 인천 현장 지원 나왔을 때 두고 간 것 같은데 101호 앞 복도에 치워뒀으니까 보시는 대로 가져가라. 걸리적거린다.`,
    comments: [
      { writer: "최현우(실가)", date: "08.30 14:20", text: "아 제가 지난달 지원 갔을 때 두고 간 겁니다. 저녁에 찾으러 갈게요!" },
      { writer: "박상철", date: "08.30 15:00", text: "@최현우 오올 때 박카스 한 박스 사 와라." }
    ]
  },
  8: {
    id: 8,
    category: "notice",
    title: "[공지] 옥상 및 공용 계단 인터넷 배선 교체 작업 안내",
    writer: "정지아",
    date: "2019.09.08",
    viewCount: 31,
    content: `101호 정지아입니다.\n\n금일 14:00 ~ 17:00 사이 건물 내 공용 배선반 및 인터넷 신호 안정화 작업이 진행될 예정입니다.\n\n102호 윤서우 주민 및 201호 이태규 주민과 사전협의 후 직접 진행하는 점검 작업이며, 작업 시간 동안 잠시 인터넷 신호 끊김 현상이 발생할 수 있습니다.\n\n복도에 작업 도구가 노출될 수 있으니 통행 시 주의 바라며, 외부 기사 방문은 없으니 안심하시기 바랍니다.\n\n문의사항은 101호나 102호로 전달해주십시오.`,
    comments: [
      { writer: "오재현(관리)", date: "09.08 10:12", text: "건물 관리에 신경 써주셔서 감사합니다. 필요 재료비 전산 청구 부탁드립니다." },
      { writer: "윤도현", date: "09.08 11:30", text: "어쩐지 서우 아침부터 연장 가방 들고 돌아다니더라 ㅋㅋㅋ 수고해라!" },
      { writer: "박상철", date: "09.08 12:05", text: "오 태규야 작업 끝나고 201호 내려가서 공유기 설정 좀 다시 봐줘라" },
      { writer: "이태규", date: "09.08 12:40", text: "@박상철 아까 말했잖아. 아메리카노 사놓으면 감." }
    ]
  },
  9: {
    id: 9,
    category: "proposal",
    title: "[제안] 빌라 단체 구매 아이템 공유 (모니터 암 / 고전력 멀티탭)",
    writer: "윤서우",
    date: "2019.09.12",
    viewCount: 19,
    content: `장비 정리하면서 고하중 모니터 암 2개랑 과전류 차단 멀티탭(8구) 수량 맞춰서 묶음 주문하려고 합니다.\n\n배송비 절감 및 대량 구매 할인 적용 가능합니다.\n빌라 내 기기 환경 개선 필요하신 분은 오늘 저녁 8시 전까지 댓글 남겨주세요.\n\n단, 수량 확정 후 취소 불가합니다.`,
    comments: [
      { writer: "이태규", date: "09.12 14:00", text: "멀티탭 8구짜리 2개 승인. 201호로 청구해라." },
      { writer: "김서현", date: "09.12 15:20", text: "서우야! 본가 사무실에도 멀티탭 3개 필요한데 혹시 같이 주문 가능할까? 경비로 올려줄게!" },
      { writer: "윤서우", date: "09.12 15:45", text: "@김서현 가능합니다. 모델명 메신저로 보내드릴게요." },
      { writer: "박상철", date: "09.12 16:10", text: "야 101호 안방 모니터 거치대도 들어가냐? 지아한테 물어보고 알려줌" },
      { writer: "정지아", date: "09.12 16:25", text: "@정지아 필요 없습니다. 제 책상 규격에 안 맞습니다." }
    ]
  },
  10: {
    id: 10,
    category: "share",
    title: "방한용 문풍지 및 문풍 가스켓 나눔합니다",
    writer: "오재현(관리)",
    date: "2019.09.18",
    viewCount: 16,
    content: `온누리부동산 오재현입니다.\n\n월동 준비 겸 한빛빌라 및 주변 거처 보수용으로 단열재와 문풍지를 여유 있게 확보했습니다.\n현관문 하부 소음 차단 및 외풍 차단용 고무 가스켓 필요하신 가구는 말씀해 주시면 방문해서 직접 붙여드리겠습니다.\n\n복도 소음 감소 효과도 있으니 필요하시면 편하게 요청하세요.`,
    comments: [
      { writer: "정지아", date: "09.18 09:10", text: "101호 현관 하부용으로 하나 부탁드립니다. 감사합니다." },
      { writer: "오재현(관리)", date: "09.18 09:40", text: "@정지아 네, 오늘 퇴근길에 들러서 깔끔하게 작업해 두겠습니다." },
      { writer: "한수진(정가)", date: "09.18 11:05", text: "재현 아저씨 저희 숙소 방문도 소리 나는데 남아있으면 받아갈 수 있을까요?" },
      { writer: "오재현(관리)", date: "09.18 11:30", text: "@한수진 네, 수진 씨. 수량 넉넉하니 정가 측 숙소분도 같이 챙겨두겠습니다." }
    ]
  },
  11: {
    id: 11,
    category: "etc",
    title: "101호 냉장고에 캔커피 사둔 거 누구냐",
    writer: "박상철",
    date: "2019.09.22",
    viewCount: 27,
    content: `101호 냉장고 첫 번째 칸에 레쓰비 한 박스 들어있던데 이거 도현이 너냐?\n마셔도 되는 건지 써놓지도 않고 던져두고 갔길래 일단 두 캔 마셨다.\n\n임자 없으면 나랑 지아가 계속 마신다?`,
    comments: [
      { writer: "윤도현", date: "09.22 13:00", text: "ㅋㅋㅋㅋㅋㅋㅋㅋ 형님 그거 제 거 맞는데 드시라고 사다 놓은 겁니다!" },
      { writer: "윤도현", date: "09.22 13:01", text: "대신 다음에 101호 갈 때 고기 사주셈" },
      { writer: "정지아", date: "09.22 13:15", text: "남의 집 냉장고에 말도 없이 물건 두고 가지 마세요. 박스째 넣으면 다른 식재료 자리가 부족합니다." },
      { writer: "박상철", date: "09.22 13:40", text: "혼날 줄 알았다 ㅋㅋㅋ 수고해라" },
      { writer: "윤도현", date: "09.22 14:02", text: "@정지아 죄송합니다 누님 다음엔 꺼내서 예쁘게 정리해둘게요..." }
    ]
  },
  12: {
    id: 12,
    category: "share",
    title: "서류 보관용 스틸 파일박스 필요하신 분 (정리품)",
    writer: "김서현",
    date: "2019.09.27",
    viewCount: 14,
    content: `서류함 교체하면서 상태 깨끗한 A4 스틸 파일박스(블랙) 5개 정도 남았습니다!\n\n잠금장치도 정상 작동하고 문서 수납하기 엄청 튼튼해요.\n기록 보관이나 개인 서류 정리에 유용합니다.\n\n필요하신 분 댓글 남겨주시면 전달해 드릴게요.\n없으면 101호나 흥신소 쪽으로 넘기겠습니다~`,
    comments: [
      { writer: "정지아", date: "09.27 17:05", text: "2개 수령하겠습니다. 101호 서재 보관용으로 적합해 보입니다." },
      { writer: "이태규", date: "09.27 17:30", text: "흥신소에 3개 다 가져다주십쇼. 사건 파일 분류할 때 쓰겠습니다." },
      { writer: "김서현", date: "09.27 18:00", text: "네! 지아 언니 2개, 태규 씨 3개 배정 완료~ 내일 퇴근길에 전달할게!" }
    ]
  },
  13: {
    id: 13,
    category: "etc",
    title: "아 해주형 진짜 잔소리 존나 심하네 ㅋㅋㅋ",
    writer: "윤도현",
    date: "2019.10.02",
    viewCount: 35,
    content: `현장 나가기 전에 커피 한 잔 마셨다고 30분 동안 설교 들음.\n사람이 좀 낙천적으로 살아야지 맨날 각 잡고 사니까 머리가 빠지지 형 ㅋㅋㅋ\n\n이 글 보면 101호로 내려와라 아메리카노 하나 사줌.`,
    comments: [
      { writer: "문해주", date: "10.02 19:03", text: "커피가문제가아니라작업시간10분전에도착해서커피쳐빨고있는게문제라고몇번을말해야듣겠니?" },
      { writer: "윤도현", date: "10.02 19:05", text: "@문해주 ㅋㅋㅋㅋㅋㅋㅋ 잡히면 ㅈ된다~ㅠㅠ" },
      { writer: "박상철", date: "10.02 19:20", text: "고생이 많다... 내가 쟤 꿀밤 한 대 때려줄게" },
      { writer: "정지아", date: "10.02 19:40", text: "게시판 내 비속어 사용 자제하십시오." }
    ]
  }
};

let currentCategory = "all";

// =========================================================
// 2. DOM 로드 후 안전한 초기화
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  // 다크모드
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("user-theme") || "dark";

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      if (themeToggle) themeToggle.checked = true;
    } else {
      document.body.classList.remove("light-theme");
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

  // 사이드바 버튼
  const btnToggle = document.getElementById("btn-sidebar-toggle");
  const btnClose = document.getElementById("btn-sidebar-close");
  const overlay = document.getElementById("sidebar-overlay");

  if (btnToggle) btnToggle.addEventListener("click", openSidebar);
  if (btnClose) btnClose.addEventListener("click", () => closeSidebar());
  if (overlay) overlay.addEventListener("click", () => closeSidebar());

  // 검색창 엔터키
  const sidebarSearchInput = document.querySelector(".sidebar-search input");
  if (sidebarSearchInput) {
    sidebarSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchFromSidebar();
    });
  }

  // 브라우저 뒤로가기 / 앞으로가기 제어
  window.addEventListener("popstate", () => {
    const viewport = document.getElementById("app-viewport");
    if (!viewport) return;

    if (location.hash === "#world") {
      viewport.classList.add("show-world");
    } else {
      viewport.classList.remove("show-world");
    }
  });

  // ESC 키
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePost();
      closeSidebar();
      closeWorldIntro();
    }
  });

  renderBoard();
});

// =========================================================
// 3. UI 및 모달/페이지 제어 함수
// =========================================================
function openSidebar() {
  const sidebar = document.getElementById("cafe-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (sidebar && overlay) {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("cafe-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (sidebar && overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
}

// 세계관 페이지로 슬라이드 이동
function openWorldIntro() {
  const viewport = document.getElementById("app-viewport");
  if (viewport) {
    viewport.classList.add("show-world");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.hash !== "#world") {
      history.pushState({ page: "world" }, "", "#world");
    }
  }
}

// 메인 페이지로 슬라이드 복귀
function closeWorldIntro(useHistory = true) {
  const viewport = document.getElementById("app-viewport");
  if (viewport) {
    viewport.classList.remove("show-world");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (useHistory && location.hash === "#world") {
    history.back();
  }
}

function renderBoard(categoryFilter = "all", searchQuery = "") {
  const boardBody = document.getElementById("board-body");
  const totalCountEl = document.getElementById("total-count");
  if (!boardBody) return;

  const posts = Object.values(boardData).sort((a, b) => b.id - a.id);
  let renderedCount = 0;
  const query = searchQuery.trim().toLowerCase();

  const html = posts.map(post => {
    if (categoryFilter !== "all" && post.category !== categoryFilter) return "";
    if (query !== "") {
      const matchTitle = post.title.toLowerCase().includes(query);
      const matchWriter = post.writer.toLowerCase().includes(query);
      if (!matchTitle && !matchWriter) return "";
    }

    renderedCount++;
    const catBadge = getCategoryName(post.category);

    return `
      <tr>
        <td class="col-cat">${catBadge}</td>
        <td class="col-title">
          <a href="#" onclick="openPost(event, ${post.id})">${escapeHtml(post.title)}</a>
        </td>
        <td class="col-writer">${escapeHtml(post.writer)}</td>
        <td class="col-date">${post.date}</td>
        <td class="col-views">${post.viewCount}</td>
      </tr>
    `;
  }).join("");

  boardBody.innerHTML = html || `<tr><td colspan="5" style="text-align:center; padding: 30px;">게시물이 없습니다.</td></tr>`;
  if (totalCountEl) totalCountEl.textContent = renderedCount;
}

function filterBoard(category, event) {
  if (event && event.preventDefault) event.preventDefault();
  currentCategory = category;

  document.querySelectorAll(".btn-filter-tab").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick")?.includes(`'${category}'`)) btn.classList.add("active");
  });

  renderBoard(category);
  closeSidebar();
}

function searchFromSidebar() {
  const searchInput = document.querySelector(".sidebar-search input");
  if (searchInput) renderBoard(currentCategory, searchInput.value);
  closeSidebar();
}

function openPost(event, postId) {
  if (event && event.preventDefault) event.preventDefault();

  const post = boardData[postId];
  if (!post) return;

  post.viewCount += 1;
  renderBoard(currentCategory);

  const modal = document.getElementById("post-view-modal");
  const modalBody = document.getElementById("modal-post-body");
  if (!modal || !modalBody) return;

  let commentsHtml = post.comments.map(c => `
    <div class="comment-item" style="border-top:1px solid var(--border-color); padding:8px 0;">
      <strong>${escapeHtml(c.writer)}</strong> <small style="color:var(--text-sub);">${c.date}</small>
      <div>${escapeHtml(c.text)}</div>
    </div>
  `).join("");

  modalBody.innerHTML = `
    <h2>${escapeHtml(post.title)}</h2>
    <p><small>작성자: ${escapeHtml(post.writer)} | 작성일: ${post.date} | 조회: ${post.viewCount}</small></p>
    <hr>
    <div style="padding:15px 0;">${escapeHtml(post.content).replace(/\n/g, '<br>')}</div>
    <hr>
    <h3>댓글 (${post.comments.length})</h3>
    <div>${commentsHtml}</div>
    <div style="margin-top:15px; display:flex; gap:6px;">
      <input type="text" id="comment-writer-input" placeholder="이름" value="202호 입주민" style="width:100px;">
      <input type="text" id="comment-text-input" placeholder="댓글 내용" style="flex:1;">
      <button type="button" onclick="addComment(${post.id})">등록</button>
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

  if (!writerInput || !textInput || !writerInput.value || !textInput.value) {
    alert("작성자와 내용을 입력해 주세요.");
    return;
  }

  const today = new Date();
  const dateStr = `${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')} ${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;

  boardData[postId].comments.push({
    writer: writerInput.value,
    date: dateStr,
    text: textInput.value
  });

  openPost(null, postId);
}

function getCategoryName(cat) {
  const names = { notice: "공지", proposal: "제안", share: "나눔", etc: "기타" };
  return names[cat] || "일반";
}

function escapeHtml(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
