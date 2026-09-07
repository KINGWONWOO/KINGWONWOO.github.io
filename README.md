<h1 align="center">강원우 &middot; Game Client Programmer Portfolio</h1>

<p align="center">
  Unreal Engine 5 · C++ 기반 게임 클라이언트 개발자 <b>강원우</b>의 포트폴리오 사이트입니다.<br/>
  <a href="https://kingwonwoo.github.io">https://kingwonwoo.github.io</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/-Unreal%20Engine%205-05122A?style=flat&logo=unrealengine"/>
  <img src="https://img.shields.io/badge/-C++-05122A?style=flat&logo=cplusplus&logoColor=00599C"/>
  <img src="https://img.shields.io/badge/-Unity-05122A?style=flat&logo=unity"/>
  <img src="https://img.shields.io/badge/-Blender-05122A?style=flat&logo=blender&logoColor=E87D0D"/>
  <img src="https://img.shields.io/badge/-GitHub%20Pages-05122A?style=flat&logo=github"/>
</p>

---

## 소개

멀티플레이어 네트워크, VR 시뮬레이션, 실시간 VFX를 직접 구현해 온 게임 클라이언트 개발자입니다.
이 저장소는 그 작업들을 정리한 정적 포트폴리오 사이트이며, GitHub Pages로 배포됩니다.

## 수록 프로젝트

| 프로젝트 | 기술 스택 | 담당 |
|---|---|---|
| **Noob : Multiplayer Battle** | UE5 · C++ · Steam SDK | 서버-클라이언트 리플리케이션, 어빌리티 시스템 설계 |
| **Capstone VR Training** | UE5 · OpenXR · Meta Quest | VR 상호작용 시스템, 모바일 GPU 최적화 |
| **Persona** | UE5 · LLM API · AnimBP | 비동기 NPC 대화 파이프라인 |
| Side Projects | Unity / Blender / Python / React | VFX 연구, 3D 에셋 제작, 영상 처리 등 |

## 사이트 구성

```
index.html          메인 페이지
css/style.css       템플릿 원본 스타일 (수정하지 않음)
css/portfolio.css   ★ 커스텀 스타일 — 디자인은 이 파일만 고치면 됩니다
js/main.js          projectData(프로젝트) · learningData(책/강의) 및 인터랙션
images/             프로젝트 썸네일, 배경 영상, 히어로 포스터
```

**섹션 순서**

`Hero → About → Skills → Projects → Learning(책·강의) → Background(학력·자격) → Contact`

## 내용 수정 방법

- **프로젝트 상세 내용** : `js/main.js` 상단의 `projectData` 객체를 수정합니다.
  각 항목은 `title / tech / role / period / team / img / links / content` 로 구성되며,
  `content`는 **문제 상황 → 내가 맡은 일 → 해결 방법 → 결과 → 배운 점** 순서로 작성합니다.
- **프로젝트 카드** : `index.html` 의 `#projects-section` 영역을 수정합니다.
- **스킬** : `index.html` 의 `#skills-section` 영역. 블루프린트 노드 형태이며
  `.bp-tier` (티어) → `.bp-node` (개별 기술) 구조입니다. 노드 하단의 `.bp-datapin` 이 사용 프로젝트입니다.
  숙련도 클래스는 `core` / `work` / `sub` 세 가지입니다.
- **책 · 강의 목록** : `js/main.js` 맨 아래의 `learningData` 를 수정합니다.

  ```js
  { title:"제목", author:"저자 또는 플랫폼", year:"2025",
    status:"done",          // done(완독/수료) | doing(진행 중) | plan(예정)
    tag:"분류",              // 예: C++, 네트워크, VFX
    note:"무엇을 얻었는지 한두 문장",
    apply:"어디에 써먹었는지" }   // ← 면접관이 가장 눈여겨보는 항목
  ```
- **디자인(색·여백·폰트)** : `css/portfolio.css` 최상단의 CSS 변수를 바꾸면 전체 톤이 함께 바뀝니다.

  테마는 **Unreal Editor Dark** 를 기준으로 잡았습니다.

  | 변수 | 용도 |
  |---|---|
  | `--ue-bg` / `--ue-panel` / `--ue-panel-2` | 배경 계층 (바탕 → 패널 → 카드) |
  | `--ue-header` | 패널 헤더 · 탭 바 · 툴바 |
  | `--ue-border` / `--ue-line` | 요소 테두리 / 패널 경계선 |
  | `--ue-accent` | 포인트 컬러 (UE5 선택 블루) |
  | `--ue-text` / `--ue-text-dim` / `--ue-text-mute` | 본문 / 보조 / 라벨 |
  | `--pf-mono` | 라벨·메타에 쓰는 고정폭 글꼴 |

### ⚠️ 배포 전 반드시 확인할 것

1. **`<em class="ph">○○</em>` 로 표시된 자리를 실제 수치로 교체**하세요.
   (분홍색 점선으로 강조되어 있어 화면에서 바로 눈에 띕니다. 남아 있으면 감점 요인입니다.)
2. `projectData` 의 `links` 항목에 **GitHub 저장소 / 플레이 영상 URL** 을 채워 넣으세요.
   `url: "#"` 인 항목은 화면에 `(준비 중)` 으로 표시됩니다.
3. **`learningData` 는 예시 데이터입니다.** 실제 읽은 책 · 수강한 강의로 교체한 뒤,
   `index.html` 의 `.sample-notice` 안내 박스(노란 배너)를 삭제하세요.
4. `images/resume.jpg` 파일을 추가하면 "이력서 미리보기" 버튼에서 이미지가 뜹니다.
   (없으면 PDF 링크 안내가 대신 표시됩니다.)

## 로컬 실행

```bash
git clone https://github.com/KINGWONWOO/KINGWONWOO.github.io.git
cd KINGWONWOO.github.io
python -m http.server 8000   # http://localhost:8000
```

## 미디어 파일 관리

배경 영상과 이미지는 **압축된 상태로 커밋**되어 있습니다. 원본으로 되돌리지 마세요.

| | 압축 전 | 압축 후 |
|---|---|---|
| `images/video.mp4` | 94 MB (1920×1080, 7.5 Mbps) | **4.2 MB** (1280×720, 24fps, CRF 36, 무음) |
| 이미지 전체 | 13 MB | **1.4 MB** |
| 첫 로드 (데스크톱) | 약 106 MB | **6.1 MB** |
| 첫 로드 (모바일) | 약 106 MB | **2.0 MB** (영상 미로드) |

영상을 교체할 때는 아래처럼 다시 인코딩하세요.

```bash
ffmpeg -i 원본.mp4 -an -vf "scale=1280:-2,fps=24" \
       -c:v libx264 -preset fast -crf 36 -pix_fmt yuv420p \
       -movflags +faststart images/video.mp4

# 포스터 (모바일·저속 회선에서 영상 대신 표시)
ffmpeg -ss 3 -i images/video.mp4 -frames:v 1 -q:v 6 images/hero-poster.jpg
```

영상은 **데스크톱에서만** 로드합니다. 모바일과 데이터 절약 모드에서는 `hero-poster.jpg` 한 장만 씁니다.

## 배포

`main` 브랜치에 push 하면 `.github/workflows/static.yml` 이 GitHub Pages로 자동 배포합니다. (최대 5분 소요)

### 미디어 파일 관리

배경 영상과 이미지는 **압축된 상태로 커밋**되어 있습니다. 원본으로 되돌리지 마세요.

| | 압축 전 | 압축 후 |
|---|---|---|
| `images/video.mp4` | 94 MB (1920×1080, 7.5 Mbps) | **4.2 MB** (1280×720, 24fps, CRF 36, 무음) |
| 이미지 전체 | 13 MB | **1.4 MB** |
| 첫 로드 (데스크톱) | 약 106 MB | **6.1 MB** |
| 첫 로드 (모바일) | 약 106 MB | **2.0 MB** (영상 미로드) |

영상을 교체할 때는 아래처럼 다시 인코딩하세요.

```bash
ffmpeg -i 원본.mp4 -an -vf "scale=1280:-2,fps=24" \
       -c:v libx264 -preset fast -crf 36 -pix_fmt yuv420p \
       -movflags +faststart images/video.mp4

# 포스터 (모바일·저속 회선에서 영상 대신 표시)
ffmpeg -ss 3 -i images/video.mp4 -frames:v 1 -q:v 6 images/hero-poster.jpg
```

영상은 **데스크톱에서만** 로드합니다. 모바일과 데이터 절약 모드에서는 `hero-poster.jpg` 한 장만 씁니다.

## 배포가 안 될 때 확인할 것

이 저장소는 `congchu/web-porfolio` 를 **포크**한 것이라, 과거에 아래 두 가지 문제로 배포가 멈춘 적이 있습니다.

1. **포크된 저장소는 Actions가 기본으로 꺼져 있습니다.**
   저장소 → **Actions** 탭 → `I understand my workflows, go ahead and enable them` 클릭.
2. **워크플로가 구버전 액션을 쓰면 실행이 거부됩니다.**
   `actions/upload-artifact` v3 등이 지원 종료되어 실패했었고, 현재는 아래 버전으로 갱신해 두었습니다.

   | 액션 | 버전 |
   |---|---|
   | `actions/checkout` | v4 |
   | `actions/configure-pages` | v5 |
   | `actions/upload-pages-artifact` | v3 |
   | `actions/deploy-pages` | v4 |

배포 상태는 **Actions** 탭에서 확인할 수 있고, 수동 실행은
Actions → `Deploy static content to Pages` → **Run workflow** 로 가능합니다.

## Contact

- Email : king_wonwoo@naver.com
- GitHub : [@KINGWONWOO](https://github.com/KINGWONWOO)

---

<sub>본 사이트는 <a href="https://github.com/congchu/web-porfolio">congchu/web-porfolio</a> 템플릿을 기반으로 구조와 콘텐츠를 재구성한 것입니다.</sub>
