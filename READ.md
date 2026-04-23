# 📚 Beyond Insight - 온라인 강의 플랫폼 프로젝트

> "구독 한 번으로 모든 강의를 무제한 수강! 트렌드 그 이상의 클래스, 비욘드 인사이트"
> PC부터 모바일 환경까지 완벽하게 지원하는 반응형 온라인 강의 웹사이트 퍼블리싱 프로젝트입니다.

## 🔗 Live Demo (배포 주소)
- **Netlify 배포 링크:**   
<a href="https://beyound-online.netlify.app/" target="_blank">메인 보기</a>  
<a href="https://beyound-online.netlify.app/html/member-register.html" target="_blank">회원가입 보기</a>  
<a href="https://beyound-online.netlify.app/html/category-main.html" target="_blank">카테고리 메인 보기</a>  
<a href="https://beyound-online.netlify.app/html/class-detail.html" target="_blank">카테고리 상세 보기</a>  
<a href="https://beyound-online.netlify.app/html/class-detail.html" target="_blank">장바구니 보기</a>   
<br>

## 🛠 Tech Stack (기술 스택)
### 1. Markup & Style
* **HTML5**: 
    * 웹 표준을 준수하는 **Semantic Markup** 설계 (`<section>`, `<article>`, `<header>`, `<footer>` 등)
    * Open Graph 프로토콜을 활용한 SNS 공유 최적화 및 SEO 설정
* **SCSS (Sass)**: 
    * **7-1 Pattern 기반 모듈화**: `_variables`, `_mixin`, `_reset`, `_fonts` 등으로 파일을 세분화하여 유지보수성 극대화
    * **Custom Mixins**: Flexbox 레이아웃, 말줄임 처리(Ellipsis), 모달 센터 정렬, 아이콘 삽입 등을 Mixin으로 제작하여 코드 중복 최소화
    * **Responsive Design**: 미디어 쿼리를 활용해 Mobile(767px), Tablet(1024px), Desktop(1160px) 3단계의 완벽한 반응형 레이아웃 구현
* **CSS3**:
    * `Keyframes` 애니메이션을 활용한 하트 찜하기(`heart-bounce`) 및 인터랙티브 UI 효과 구현
    * `Position: sticky`를 활용한 정보 사이드바 및 네비게이션 고정 레이아웃 구현

### 2. Script (JavaScript & Library)
* **JavaScript (ES6+) / jQuery (v3.5.1)**:
    * **Component Include**: jQuery `.load()` 메소드를 사용하여 Header/Footer 등 공통 모듈을 동적으로 호출, 작업 효율 개선
    * **DOM Manipulation**: 아코디언 메뉴(FAQ, 커리큘럼), 탭 메뉴, 비밀번호 표시 토글 등 다양한 인터랙티브 UI 구현
    * **Window Event Handling**: 스크롤 위치에 따른 헤더 활성화 및 `Go to Top` 버튼 제어, 브라우저 리사이징에 따른 모바일/PC 메뉴 분기 처리
    * **Cookie Management**: '오늘 그만 보기' 팝업 기능을 위해 자바스크립트 쿠키(Cookie) 생성 및 읽기 로직 직접 구현

### 3. Plugins & Libraries
* **Slick Slider**: 메인 비주얼 배너 및 '포커스 클래스' 섹션에 적용. 디바이스 크기에 따라 슬라이드 노출 개수(`slidesToShow`)를 유연하게 변경하는 반응형 옵션 적용
* **The Final Countdown**: 얼리버드 이벤트 페이지의 타임 세일 기능을 위해 활용. `strftime` 메소드를 커스터마이징하여 일, 시, 분, 초 단위의 역동적인 타이머 UI 구현

### 4. Fonts & Icons
* **Typography**: `Pretendard`, `SpoqaHanSansNeo`, `Raleway` 등 다중 폰트 스택 구성을 통한 디자인 완성도 향상
* **Icons**: `Bootstrap Icons`를 SCSS 믹스인(`@include bs-icon`)과 결합하여 가상 요소(`::before`)로 효율적인 관리

<br>

## 💡 Project Description (프로젝트 설명)
이 프로젝트는 실제 서비스되는 온라인 교육 플랫폼과 동일한 수준의 UI/UX를 구현하는 것을 목표로 제작되었습니다. 
SCSS를 활용하여 CSS 코드를 모듈화(`variables`, `mixin`, `reset` 등)하고 유지보수성을 극대화했으며, 미디어 쿼리를 통한 **PC, 태블릿, 모바일 3단계 반응형 웹**을 완벽하게 지원합니다. 
또한, jQuery를 활용해 메가 네비게이션, 장바구니 제어, 아코디언 메뉴, 쿠키 기반 팝업 등 다양한 동적 상호작용(Interaction)을 구현했습니다.

<br>

## ✨ Key Implementations (주요 구현 섹션)

### 1. Login & Modal System (로그인 및 모달 시스템)
- **모듈화된 모달 구조**: SCSS 믹스인(`@mixin modal-parent`, `@mixin modal-center`)을 제작하여 로그인 모달과 공유하기 모달 등 다양한 팝업 UI에 일관된 스타일을 적용했습니다.
- **동적 인터랙션**: jQuery의 `.fadeIn()`과 `.fadeOut()`을 활용하여 부드러운 팝업 등장 효과를 구현했습니다.
- **사용자 경험(UX) 최적화**: 모달이 활성화되었을 때 `body` 태그에 `overflow: hidden` 스타일을 부여하여 배경 스크롤을 방지하는 **Scroll Lock** 기능을 구현했습니다.
- **상태 변화 시뮬레이션**: 로그인 버튼 클릭 시 모달이 닫힘과 동시에 상단 헤더의 '로그인/회원가입' 버튼이 사라지고 '알림/아바타' UI가 나타나도록 상태 전환 로직을 구현했습니다.

### 2. Header & Mega Navigation (공통 모듈)
- **반응형 메뉴 분기**: PC 환경의 호버 드롭다운 메뉴와 모바일 환경의 오프캔버스(Off-canvas) 아코디언 메뉴를 미디어 쿼리와 jQuery 리사이즈 이벤트를 통해 완벽하게 분기 처리했습니다.

### 3. Main Page & Interaction
- **반응형 슬라이더**: `Slick Slider`를 활용하여 디바이스 크기에 따라 슬라이드 노출 개수가 조절되는 터치 친화적 UI를 구축했습니다.
- **쿠키 제어 배너**: 자바스크립트 쿠키 기능을 직접 구현하여 '오늘 하루 보지 않기' 설정을 지원합니다.

### 4. Class Detail & Shopping Cart
- **Sticky Layout**: 상세 페이지의 결제 사이드바에 `sticky`를 적용하여 긴 상세 내용 확인 중에도 결제 유도 버튼이 화면에 고정되도록 했습니다.
- **장바구니 로직**: '전체 선택/해제', '개별 및 전체 삭제' 기능을 구현하였으며, 아이콘 기반의 커스텀 체크박스 디자인을 적용했습니다.

<br>

## 📁 Folder Structure (폴더 구성)
```text
Beyond_Online_Class/
├── index.html               # 메인 페이지
├── html/                    # 서브 페이지 모음
│   ├── category-main.html   # 카테고리 리스트 페이지
│   ├── class-detail.html    # 클래스 상세 페이지
│   ├── take-course.html     # 수강신청(장바구니) 및 결제 페이지
│   └── member-register.html # 로그인/회원가입 페이지
├── include/                 # 공통 레이아웃 모듈
│   ├── header.html          
│   └── footer.html          
├── css/                     # 컴파일된 스타일시트
│   ├── style.css            
│   └── responsive-*.css     
├── scss/                    # SCSS 원본 파일
│   ├── style.scss           # 메인 SCSS 파일
│   ├── _variables.scss      # 색상, 폰트, z-index 등 변수 모음
│   ├── _mixin.scss          # flex, 말줄임 등 재사용 함수 모음
│   ├── _reset.scss          # 브라우저 기본 스타일 초기화
│   └── _responsive-*.scss   # 디바이스별 반응형 분기 파일
├── script/                  # 자바스크립트 및 라이브러리
│   ├── custom.js            # 메인 동작 스크립트(jQuery)
│   ├── jquery/              
│   ├── slick/               
│   └── the-final-coutdown/  
└── images/                  # 프로젝트 사용 이미지 및 아이콘