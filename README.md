# 📸 포글모글 (PogleMogle)

모델과 사진기사를 쉽고 빠르게 연결해주는 **촬영 중개 플랫폼**입니다.  
사용자는 모델/사진작가 유형에 맞게 회원가입하고, 게시판을 통해 서로의 포트폴리오를 확인하며 자유롭게 소통할 수 있습니다.

<br>

## 🔗 Links  
- 🚀 **배포**: http://pogeulmogeul.crois.net/  
- 📂 **GitHub Repository**: https://github.com/eillen-yang/pogeulmogeul  

<br>

## 📅 프로젝트 개요
- 기간: **2025.06.23 ~ 2025.08.08**  
- 인원: **1인 개발**  
- 역할: **기획 + 디자인 + 프론트엔드 개발 전담**

<br>

---

## 🛠 기술 스택

**Frontend**
- Next.js  
- TypeScript  
- Tailwind CSS  

**State Management**
- Zustand  
- React Query  

**Etc**
- Axios  
- FormData 이미지 업로드  
- Vercel Deploy

<br>

---

## 🚀 주요 기능

### 🔐 분기형 회원가입
- 일반회원 → 모델/사진작가 2단계 확장 구조
- 이메일 중복 확인
- 자동 로그인 기능
- 보호 라우트 및 리다이렉트 처리

### 📝 게시판
- 게시글 작성/수정/삭제/조회  
- 대표 이미지 1장 + 상세 이미지 최대 10장 업로드  
- 카테고리별 분류(모델 / 사진 / 포토샵)

### ❤️ 좋아요 & 관심 글
- 게시글 좋아요  
- 마이페이지에서 내가 좋아요한 게시글 조회

### 👤 마이페이지
- 프로필 이미지/닉네임 수정  
- 내가 쓴 게시글 확인 및 관리  

<br>

---

## 🧩 담당 역할

- 전체 UI 구조 설계 및 공통 컴포넌트 구축 및 반응형
- 게시판 CRUD 및 이미지 업로드 개발  
- 로그인/회원가입/인증 흐름 전체 구현  
- 회원 타입별 분기 처리 + 온보딩 단계 UI 구축  
- 마이페이지 UX 및 상태 관리 설계(zustand)

<br>

---

## 📈 성과

### ✔ API 호출 코드 구조화  
- API 호출 로직을 `api/services` 폴더로 분리  
→ **중복 코드 제거 & 유지보수성 증가**

### ✔ 상태 관리 전략 확립  
- 전역 UI 상태 = Zustand  
- 서버 데이터 = React Query  
→ **책임 분리가 명확해져 구조 단순화 + 확장성 증가**

### ✔ 렌더링 최적화  
- 좋아요 버튼에 `memo`, `useMemo` 적용  
→ **불필요 렌더링 제거 → 반응 속도 향상**

<br>

---

## 🛠 트러블슈팅

### ⚠ 좋아요 리렌더링 이슈  
- props 변경 여부 계산  
- `memo`, `useMemo`로 메모이제이션  
→ **렌더링 횟수 감소**

### ⚠ 회원가입 2단계 타입 오류(400/500)  
- 모델/사진작가 타입 매핑 오류 수정  
- 각 단계 상태를 zustand로 관리  
→ **정확한 분기 + 새로고침 시 단계 유지**

### ⚠ 새로고침 시 회원가입 단계 초기화  
- zustand persist 적용  
→ **온보딩 단계 유지 성공**

<br>

---

## ☘️ 마무리
포글모글은 단순 CRUD 프로젝트가 아니라,<br/>
유저의 역할·상태·권한·단계에 따라 UI와 로직이 모두 분기되는 구조를 설계하고 구현한 프로젝트입니다.<br/>
특히 회원가입/로그인/게시판/마이페이지 등 실서비스 형태의 기능을 전부 혼자 구축하며<br/>
프론트엔드 전반 흐름을 탄탄하게 다질 수 있었습니다.

<br/>

---

## 📂 폴더 구조

```bash
app
 ┣ (auth)
 ┣ (route)
 ┣ _components
 ┃ ┣ fields
 ┃ ┣ ui
 ┣ _constants
 ┣ _providers
 ┣ api
 ┃ ┗ services
 ┣ hooks
 ┣ lib
 ┣ stores
 ┣ types
 ┣ utils
 ┣ favicon.ico
 ┣ globals.css
 ┣ layout.tsx
 ┣ not-found.tsx
 ┗ page.tsx
```

<br/>

---


## 🎬 데모 영상

### 🏠 Homepage
https://github.com/user-attachments/assets/878403e2-def4-45ec-8bd8-53789e4cf70e

### 👤 Me Page
https://github.com/user-attachments/assets/d825ad61-c889-41be-a140-05083e326a94

### 🔐 Sign In Page
https://github.com/user-attachments/assets/c32014c1-b3d0-4891-8395-f5c94135c04d

### ✏️ Write Page
https://github.com/user-attachments/assets/e86e73b9-a940-46cc-9be6-4a3f0717c65a

<br>

---
