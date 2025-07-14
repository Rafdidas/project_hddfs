🧱 HTML 구조 설계의 핵심 고려 사항
시맨틱 태그(<header>, <main>, <section>, <footer>)를 활용하여 구조적 의미를 명확히 구분했습니다.

기능별 섹션을 블록 단위로 구성하여 유지보수성과 재사용성을 고려했습니다.

접근성을 높이기 위해 alt 텍스트, aria 속성 등을 고려하였고, 인터랙션 요소는 모두 <button> 또는 <a> 태그로 구현했습니다.

BO에서 설정하는 배경색, 텍스트색 등을 동적으로 반영하기 위해 data- 속성을 활용했습니다. (data-bg, data-title-color 등)

🎨 CSS 네이밍 규칙
블록 중심 구조로 구성하며, 의미 기반 네이밍을 적용했습니다.
예: .main_visual, .brand_section, .tab_prd, .qty_box, .cart_alert

하위 요소는 _ 또는 __ 조합으로 연결하여 구조를 명확히 구분했습니다.
예: .prd_basic_box .prd_img, .prd_basic_box .prd_name

상태 클래스는 .active, .dn, .disabled 등 별도로 분리해 UI 상태를 쉽게 제어할 수 있도록 했습니다.

전체 소문자 + 언더스코어 스타일로 일관된 클래스명을 유지하여 가독성과 협업 효율성을 높였습니다.

⚙️ Javascript 인터랙션 개요
탭 UI

.tab_prd li > a 클릭 시 해당 탭 콘텐츠 .tabcnt_prdN 노출

클릭한 탭에 .active 클래스 추가

스크롤 연동 탭

.main_section_tab a 클릭 시 앵커 이동

스크롤 위치에 따라 해당 탭 자동 활성화

모달 레이어

.layer_wrapper는 transform: translateY() 기반 슬라이드 애니메이션

iOS에서도 스크롤 차단을 위해 body에 .view_nav 클래스 적용 + position: fixed 방식 활용

카테고리 슬라이드

Swiper를 사용한 .layer_sort_slide 구성

클릭 시 해당 index로 이동 및 .active 클래스 부여

장바구니 알럿

.set_cart_btn 클릭 시 .cart_alert 일시 노출 → 2초 뒤 자동 사라짐

수량 조절

.qty_box의 + / – 버튼 클릭 시 input 수량 증감 (최소값 0 제한)

모든 이벤트 로직은 DOMContentLoaded 내에서 요소 존재 여부 확인 후 실행하여 페이지별 공통 적용을 안전하게 처리했습니다.
