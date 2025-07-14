# 🛍️ HDDFS 프로모션 페이지 퍼블리셔 과제


브랜드 별 사은행사, 기획전, 세일 등 모바일 이벤트 페이지 퍼블리싱

HTML, CSS, JavaScipt 만으로 구현

---

## 📂 프로젝트 구성

```
hddfs/
├── assets/
│ └── images/ # 각종 아이콘 및 제품 이미지
├── css/
│ ├── global.css # 공통 스타일
│ ├── header.css, footer.css
│ └── event_templateN.css # 각 템플릿별 스타일
├── js/
│ ├── common.js # 공통 인터랙션 스크립트
│ └── event_templateN.js # 각 템플릿별 개별 스크립트 (필요 시)
├── event_template1.html ~
└── README.md
```

---

## 🧱 HTML 구조 설계의 핵심 고려 사항

- 시맨틱 태그(`header`, `main`, `section`, `footer`) 활용
- 기능별 섹션 구조 분리 (메인 비주얼, 브랜드 탭, 상품 영역 등)
- BO 설정값을 반영하기 위해 `data-bg`, `data-title-color` 등 `data-*` 속성 사용
- 레이어 팝업, 탭 콘텐츠 등 구조적 의미에 맞는 마크업 적용
- 접근성을 고려한 버튼 구조와 alt 속성 제공

---

## 🎨 CSS 네이밍 규칙

- **기능 단위 클래스 분리**: `.main_visual`, `.tab_prd`, `.cart_alert` 등
- **하위 요소는 `__` 또는 `_` 조합**: `.prd_basic_box .prd_img`, `.brand_section > ul > li`
- **상태 클래스 분리**: `.active`, `.dn`, `.disabled` 등 UI 상태별 관리
- 네이밍은 모두 소문자 + 언더스코어로 일관성 유지

---

## ⚙️ JavaScript 인터랙션 개요

- **탭 UI**  
  `.tab_prd li > a` 클릭 시 `.tabcnt_prdN` 영역 show/hide 및 active 클래스 토글  
- **스크롤 탭 자동 활성화**  
  `.main_section_tab` 앵커 클릭 시 smooth scroll + 현재 위치 기반 자동 활성화 처리
- **레이어 팝업 열기/닫기**  
  `.layer_wrapper`는 `transform: translateY()`로 자연스럽게 올라오도록 구현
- **장바구니 수량 조절**  
  `.qty_box` 내 수량 증감 버튼 (`최소값 0`)
- **장바구니 담기 알림**  
  `.set_cart_btn` 클릭 시 `.cart_alert` 2초간 노출
- **카테고리 탭 슬라이드**  
  `Swiper.js`로 구성한 `.layer_sort_slide` 탭 전환 → 해당 ul 뷰 토글

> 모든 로직은 공통 JS 파일로 분리하여, 해당 요소가 없는 경우에도 오류 없이 동작합니다.

---

## 📦 설치 및 실행 방법

별도의 빌드 툴 없이 HTML/CSS/JS로 구성된 정적 페이지입니다.

### event_template1.html ~  event_template6.html 파일을 더블 클릭 또는 Live Server 실행

---
