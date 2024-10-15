# 🙏 소원을 말해봐

![소원을 말해봐 이미지](https://github.com/user-attachments/assets/11e99e25-5275-49ed-a292-5b92f7d732f8)

## ✨ 프로젝트 소개

- 이 프로젝트는 `React`와 `TailwindCSS`를 사용해 간결한 UI를 구현하고, `json-server` 및 `json-server-auth`를 활용해 **CRUD 기능과 JWT 인증**을 통한 **회원가입 및 로그인 기능**을 구현한 **위시리스트 사이트**입니다. 이 프로젝트를 통해 **RESTful API와 JWT 인증** 흐름을 익혔습니다.

## 🛠 사용한 기술

- `React` `TailwindCSS` `json-server` `json-server-auth`

## 🚀 주요 기능

- **CRUD**: 아래 코드는 `axios`를 사용하여 인증 토큰을 포함하는 API 클라이언트를 설정하고, CRUD 기능을 구현한 주요 함수들을 포함하고 있습니다. `json-server-auth`의 기능을 활용하여, 조회는 누구나 가능하고, 쓰기는 로그인한 사용자만, 수정/삭제는 작성자만 할 수 있도록 기능을 구현했습니다.

`api.js`
![api-client](https://github.com/user-attachments/assets/60c5b93d-9de0-4467-b013-0ff9b435fe02)

`WishService.js`
![crud](https://github.com/user-attachments/assets/8fd8c172-c868-47df-b05c-945c7aa57afa)

- **JWT 로그인 및 회원가입**: JWT 기반의 로그인 및 회원가입 기능 구현했습니다, **사용자 인증 후 JWT 토큰을 저장하여 관리**했습니다.

![jwt](https://github.com/user-attachments/assets/78e7ba1d-20bc-41f5-8bff-0e550e4d8e1d)

- **검색 기능 debounce 처리**: 1초 동안 추가 입력이 없을 때만 검색 요청을 보내도록 **debounce를 적용하여 불필요한 API 호출을 감소**시켰습니다.

![debounce-fetch](https://github.com/user-attachments/assets/05f8db37-7767-4a78-94e6-c3e871f7c2f0)

- **Protected Route**: 로그인 상태에서만 페이지 접근 가능하도록, 비로그인 시 메인 페이지로 리다이렉트 하도록 기능을 구현했습니다.

![protected-route](https://github.com/user-attachments/assets/f840cf6a-d6cc-4749-b193-15a93af4fc5f)

- **Pagination**: 게시물 목록을 불러올 때 응답의 헤더에 있는 `x-total-count` 정보를 활용하여 페이지네이션 기능을 구현했습니다. 이를 통해 **전체 게시물 수를 기반으로 페이지 수를 계산**하고, 사용자가 효율적으로 게시물을 탐색할 수 있도록 했습니다.

## 🔔 실행 방법

1. 프로젝트를 다운로드한 후, 아래 명령어로 필요한 패키지를 설치합니다.

```bash
npm install
```

2. 터미널에서 아래 명령어로 서버를 실행합니다.

```bash
npm run db
```

3. 다른 터미널에서 아래 명령어로 클라이언트를 실행합니다.

```bash
npm run dev
```
