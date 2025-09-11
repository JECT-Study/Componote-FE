<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/aba1b55d-98b1-42bd-bf1b-8f718b2f481b" />

# 프로젝트 소개

> 컴포노트(Componote)는 **'디자이너와 개발자들을 위한 컴포넌트 위키'** 입니다.  
> 컴포넌트(Component)와 노트(Note)가 결합되어 '컴포넌트들에 대한 내용이 기록되어 있는 노트'라는 의미를 지니고 있습니다.  

컴포노트는 총 **61개의 컴포넌트와** **26개의 디자인 시스템** 콘텐츠 정보를 제공하고 있습니다.

프로젝트 개발 기간: 2024.12.17 ~ 2025.02.15 (8주)

# 팀원 소개

<table>
<th colspan="2">Frontend</th>
<tr>
    <td><img src="https://avatars.githubusercontent.com/u/106158901?v=4" width="300" /></td>
    <td><img src="https://avatars.githubusercontent.com/u/96512870?v=4" width="300" /></td>
</tr>
<tr>
    <td><a href="https://github.com/ccconac">@ccconac</a></td>
    <td><a href="https://github.com/jiyeeeah">@jiyeeeah</a></td>
</tr>
  <tr>
    <td>컴포넌트 페이지/디자인 시스템 페이지/컴포넌트 세부 페이지 구현<br/>README 작성</td>
    <td>회원가입&로그인/디자인 시스템 페이지 구현<br/>디자인 시스템 구축</td>
</tr>
</table>

# 기술 스택

<img width="1920" height="1080" alt="개발 내용 - 1" src="https://github.com/user-attachments/assets/c8f87513-da7e-4711-b2cb-787761d51c7e" />

<details>
  <summary>기술 사용 이유</summary>
  <br />

| 선택한 기술                | 사용 이유                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TypeScript**        | 정적 타입 지원을 통해 런타임 오류를 사전에 방지하고, 코드의 가독성과 유지보수성을 향상시키기 위해 채택. 안정적인 개발 환경을 보장할 수 있음.                                                                                                    |
| **Next.js**           | `SSR(Server-Side Rendering)`과 `SSG(Static Site Generation)`을 지원해 초기 로딩 속도를 개선하고 SEO 친화적인 페이지 제공이 가능함. 또한, `client-side navigation`으로 부드러운 페이지 전환 경험을 제공하며, 복잡한 설정 없이도 최적화된 성능을 확보할 수 있음. |
| **styled-components** | 컴포넌트 단위로 스타일과 동작을 함께 관리할 수 있어 유지보수가 용이함. CSS 문법 그대로 사용 가능해 진입 장벽이 낮고, props 기반의 동적 스타일링이 가능해 상황에 따른 UI 변화 처리가 편리함.                                                                            |
| **Storybook**         | 제작한 컴포넌트를 독립적으로 확인하고 테스트할 수 있어 협업 효율을 높임. prop 조작을 통한 시각적 테스트가 가능하므로 UI 품질 검증과 컴포넌트 관리에 유리함.                                                                                                  |
| **TanStack Query**    | 서버 상태 관리에 특화된 라이브러리로, 캐싱·동기화·무효화 로직이 자동화되어 반복적인 비동기 처리 코드를 줄일 수 있음. 서버 데이터 흐름을 일관성 있게 유지하고, 로딩·에러 상태를 직관적으로 관리할 수 있어 개발 속도와 안정성을 동시에 확보함.                                                     |
| **Zustand**           | 컴포넌트 수가 늘어나면서 발생하는 `props drilling` 문제를 해결하기 위해 채택. 보일러플레이트 코드가 적고 API가 단순해 러닝커브가 낮으며, 전역 상태를 가볍고 직관적으로 관리할 수 있음.                                                                             |
| **Vercel**            | Next.js와의 최적화된 호환성을 제공해 별도의 설정 없이도 손쉽게 배포 가능. 자동 SSL 인증, 커스텀 도메인 연결, Git 저장소 기반 CI/CD를 지원해 배포 프로세스를 단순화하고 안정적인 운영 환경을 구축할 수 있음.                                                               |

  <br />
</details>

# 기능 상세 소개

## 0. 온보딩 페이지

### 회원가입

https://github.com/user-attachments/assets/b31253ec-6403-445d-b747-cb3331246182

- **Google, GitHub, Naver 계정과 연동** 가능하고, 서비스에 필요한 기본 정보를 입력하면 회원 가입을 진행할 수 있습니다.
### 로그인

https://github.com/user-attachments/assets/0b236609-92fe-4233-8623-a2b30402c61e

- **Google, GitHub, Naver로** 간편하게 로그인할 수 있습니다.

### 내비게이션 바 검색

https://github.com/user-attachments/assets/0ec5e596-7c0d-4b1c-b3a2-52f3752ca067

- 로그인하지 않아도 빠르게 **컴포넌트와 디자인 시스템 정보를 검색할** 수 있습니다.
- 해당하는 컴포넌트/디자인 시스템을 클릭하면 **상세 페이지** 또는 **디자인 시스템 소개 페이지(외부)로** 이동합니다.

## 1. 컴포넌트 페이지

### 무한 스크롤

https://github.com/user-attachments/assets/1e15fb12-33ed-4ae5-be1c-cd9f584049d3

- 61개의 컴포넌트를 **무한 스크롤로** 탐색할 수 있습니다.

### 칩 필터링

https://github.com/user-attachments/assets/78900ed4-3bdb-4a06-b6f5-3904da4c0adb

- 칩을 클릭해 간편하게 컴포넌트를 **필터링할** 수 있습니다.
- 칩을 선택하지 않으면 기본적으로 전체 컴포넌트가 조회됩니다.
- 리셋 아이콘을 클릭하면 필터링 상태를 간편하게 초기화할 수 있습니다.

### 정렬

https://github.com/user-attachments/assets/b51687da-6327-49e4-9666-8c17918d15a1

- **이름/댓글/조회순으로** 컴포넌트 목록을 정렬할 수 있습니다.

## 2. 컴포넌트 상세 페이지

### 상세 페이지 이동

https://github.com/user-attachments/assets/e6738366-bb80-44ee-bfe9-b9d8a4023bc8

- 컴포넌트 카드를 클릭하면 해당 컴포넌트의 상세 페이지로 이동합니다.
- 상세 페이지에서는 배너, 설명, 간단 용례, 참고 자료 및 문헌을 소개합니다.

### 목차

https://github.com/user-attachments/assets/183f000c-30c6-4911-b828-5e770d30b6a8

- 목차를 클릭하면 해당하는 섹션으로 부드럽게 이동합니다. 

## 3. 디자인 시스템 페이지 

### 무한 스크롤

https://github.com/user-attachments/assets/6ff17b09-e0b8-4dfa-ac76-5b6bcbd56742

- 26개의 디자인 시스템을 **무한 스크롤로** 탐색할 수 있습니다.
- 디자인 시스템 카드의 플랫폼 아이콘을 클릭할 경우 **해당하는 외부 디자인 시스템 소개 페이지로** 이동합니다.

### 칩 필터링

https://github.com/user-attachments/assets/70c3dd50-e0a6-4eba-92b9-67fd336020d9

- 플랫폼/기술/콘텐츠/디바이스 필터 내부의 칩을 클릭해 간편하게 디자인 시스템을 **필터링할** 수 있습니다.
- 칩을 선택하지 않으면 기본적으로 전체 디자인 시스템이 조회됩니다.
- 리셋 아이콘을 클릭하면 필터링 상태를 간편하게 초기화할 수 있습니다.

### 정렬

https://github.com/user-attachments/assets/c0714c94-fc04-40f5-b4a2-8cefee8bcd22

- **이름/추천순으로** 디자인 시스템 목록을 정렬할 수 있습니다.

# 프로젝트 소개 발표 자료

<img width="1920" height="1080" alt="프로젝트 소개 - 1" src="https://github.com/user-attachments/assets/986e7b0e-4399-44d8-bcb5-278b77a012fb" />
<img width="1920" height="1080" alt="프로젝트 소개 - 2" src="https://github.com/user-attachments/assets/74c9d951-a786-4dee-95e3-c7338bd82dba" />
<img width="1920" height="1080" alt="프로젝트 소개 - 3" src="https://github.com/user-attachments/assets/2476e461-97ea-4ec3-8e9c-c75ece5b67e8" />

# 폴더 구조

```bash
📦 src
 ┣ 📂 api → API 요청 관련 코드 모음
 ┣ 📂 app → Next.js 라우트 (페이지)
 ┃ ┣ 📂 @modal → 라우트 모달
 ┃ ┃ ┃ ┣ 📂 (.)login → 로그인 모달 관리
 ┃ ┣ 📂 announce → 서비스 안내 페이지
 ┃ ┣ 📂 component → 컴포넌트 페이지
 ┃ ┃ ┃ ┣ 📂[componentId] → 컴포넌트 상세 페이지 
 ┃ ┣ 📂 designSystem → 디자인 시스템 페이지
 ┃ ┣ 📂 login → 로그인 페이지
 ┃ ┃ ┃ ┣ 📂 signup → 회원가입 페이지
 ┃ ┣ 📂 mybookmark → 북마크 페이지
 ┃ ┣ 📂 fonts → 폰트 관리
 ┃ ┣ 📂 profile → 프로필 페이지
 ┃ ┃ ┃ ┣ 📂 edit → 프로필 수정 페이지
 ┃ ┣ 📜 layout.tsx → 공통 레이아웃
 ┃ ┗ 📜 page.tsx → 메인 페이지
 ┣ 📂 components → 재사용 가능한 UI 컴포넌트 모음
 ┃ ┣ 📂 Accordion
 ┃ ┣ 📂 Avatar
 ┃ ┣ 📂 Badge
 ┃ ┣ 📂 Banner
 ┃ ┣ 📂 Button
 ┃ ┣ 📂 Callout
 ┃ ┣ 📂 Card
 ┃ ┣ 📂 Chip
 ┃ ┣ 📂 Comment
 ┃ ┣ 📂 ContextMenu
 ┃ ┣ 📂 Dialog
 ┃ ┣ 📂 Divider
 ┃ ┣ 📂 EmptyState
 ┃ ┣ 📂 Feed
 ┃ ┣ 📂 Footer
 ┃ ┣ 📂 IndexPanel
 ┃ ┣ 📂 InputField
 ┃ ┣ 📂 Interaction
 ┃ ┣ 📂 Layout
 ┃ ┣ 📂 Logo
 ┃ ┣ 📂 NavigationBar
 ┃ ┣ 📂 Pagination
 ┃ ┣ 📂 SocialAuth
 ┃ ┣ 📂 Tab
 ┃ ┣ 📂 Toast
 ┃ ┣ 📂 Toolbar
 ┃ ┣ 📂 Pages → 특정 페이지에서만 사용되는 컴포넌트 관리
 ┣ 📂 Icon
 ┃ ┣ 📂 icons → svg 아이콘 관리
 ┃ ┣ 📂 socialAuth → 소셜 로그인 이미지 관리
 ┣ 📂 constants → 상수 관리 (API, 에러 메시지, 시스템 메시지 등)
 ┣ 📂 hooks → custom hook 및 tanstack query를 사용한 서버 응답 상태 관리
 ┣ 📂 store → 전역 상태 관리를 위한 폴더 (zustand)
 ┣ 📂 styles → 디자인 시스템 관리
 ┣ 📂 stories → storybook 파일 관리
 ┣ 📂 types → 중복 사용되는 타입 관리
 ┗ 📂 utils → 재사용 가능한 함수 및 유틸리티
```
