# [CEOS 23rd Week2] - React Todo

캘린더를 기준으로 날짜별 할 일을 관리하고, 오늘과 이번 달 진행 상황을 함께 확인할 수 있는 [React Todo](https://react-todo-23rd-eta.vercel.app/) 프로젝트입니다.

[Vanilla Todo](https://vanilla-todo-23rd.vercel.app/)를 React 기반으로 마이그레이션한 버전입니다.

## 주요 기능

- 날짜 선택 기반 Todo 추가, 완료, 삭제
- 월간 캘린더에서 날짜 이동 및 선택
- 오늘/월별 Todo 통계 제공
- `localStorage` 기반 데이터 저장

## 폴더 구조

```text
src/
├─ components/            # 컴포넌트
│  ├─ Calendar/           # 캘린더 영역 컴포넌트
│  │  ├─ CalendarDay.tsx
│  │  ├─ CalendarGrid.tsx
│  │  ├─ CalendarHeader.tsx
│  │  └─ CalendarSection.tsx
│  ├─ Common/             # 공통 컴포넌트
│  │  └─ Button.tsx
│  ├─ Stats/              # 통계 영역 컴포넌트
│  │  ├─ MonthStats.tsx
│  │  └─ TodayStats.tsx
│  └─ Todo/               # 할 일 영역 컴포넌트
│     ├─ TodoInputArea.tsx
│     ├─ TodoItem.tsx
│     ├─ TodoList.tsx
│     └─ TodoSection.tsx
├─ hooks/                 # 캘린더와 할 일 로직을 관리하는 커스텀 훅
│  ├─ useCalendar.ts
│  └─ useTodoStore.ts
├─ pages/                 # 화면 단위 페이지 컴포넌트
│  └─ TodoPage.tsx        # 메인 Todo 페이지
├─ types/                 # 타입 정의
│  └─ todo.ts
├─ constants/             # 상수
│  └─ date.ts
├─ utils/                 # 유틸 함수
│  └─ date.ts
├─ App.tsx                # 최상위 App 컴포넌트
├─ main.tsx               # React 앱 마운트 진입점
└─ index.css              # 글로벌 스타일
```

## 기술 스택

| 구분       | 기술                                                                                                                                                                   | 사용 이유                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Framework  | <img src="https://img.shields.io/badge/react-20232A.svg?style=for-the-badge&logo=react&logoColor=61DAFB" />                                                            | 컴포넌트 기반으로 UI를 구성하고, 상태 변화에 따라 화면을 효율적으로 렌더링하기 위해 사용 |
| Language   | <img src="https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" />                                                   | Todo 데이터와 props를 명확한 타입으로 관리해, 개발 중 오류를 줄이기 위해 사용            |
| Build Tool | <img src="https://img.shields.io/badge/vite-9135FF.svg?style=for-the-badge&logo=vite&logoColor=FFD62E" />                                                              | 빠른 개발 서버와 간단한 빌드 환경으로 개발 효율을 높이기 위해 사용                       |
| Styling    | <img src="https://img.shields.io/badge/tailwindcss-06B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" />                                                 | 유틸리티 클래스 기반으로 스타일을 빠르고 일관되게 적용하기 위해 사용                     |
| Linting    | <img src="https://img.shields.io/badge/eslint-4B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white" />                                                           | 코드 스타일을 일정하게 유지하고, 잠재적인 실수를 미리 찾기 위해 사용                     |
| Formatting | <img src="https://img.shields.io/badge/prettier-1A2B34.svg?style=for-the-badge&logo=prettier&logoColor=F7B93E" />                                                      | 코드 포맷을 자동으로 통일해, 가독성과 유지보수성을 높이기 위해 사용                      |
| Git Hooks  | <img src="https://img.shields.io/badge/husky-2E2E2E.svg?style=for-the-badge" /> <img src="https://img.shields.io/badge/lint--staged-4B5563.svg?style=for-the-badge" /> | 커밋 전에 린트와 포맷 검사를 자동화해, 코드 품질을 안정적으로 유지하기 위해 사용         |
| Deploy     | <img src="https://img.shields.io/badge/vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />                                                           | 배포 후 실제 동작을 빠르게 확인하고 결과를 바로 테스트하기 위해 사용                     |

## 실행 방법

```bash
git clone -b waldls https://github.com/waldls/react-todo-23rd.git
cd react-todo-23rd
npm install
npm run dev
```
