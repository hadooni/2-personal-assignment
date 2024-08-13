# 프로젝트 명 : Olympic Medal Tracker

2024 파리 올림픽에서 각 나라가 획득한 메달 수를 추적하는 메달 트래커 입니다.

## 프로젝트 구조
- Vite로 React 프로젝트 셋업
- index.html 하나의 파일안에 id 값이 root 인 div 태그에 요소들 연결
- index.html 파일에서는 main.jsx 파일을 사용하고, main.jsx 파일에서는 App.jsx 파일을 불러와 사용

## 구현 기능
- 제출 폼 UI 구현
- 매달 집계 CRUD 구현
- **Create**: 새로운 나라와 그 나라가 획득한 메달 수를 추가합니다.
- **Read**: 나라별 메달 집계 리스트를 보여줍니다.
- **Update**: 기존에 추가된 나라의 메달 수를 수정할 수 있습니다.
- **Delete**: 나라 정보를 삭제할 수 있습니다.
- 금메달 수를 기준으로 메달 집계 내림차순 정렬

## 개발 환경
- HTML,CSS
- React js
- Vite

## 앱 구성
<img width="1387" alt="image" src="https://github.com/user-attachments/assets/0cfccfd0-abf6-4db5-b398-a2fd3767b419">

- 국가명, 금메달, 은메달, 동메달 각 인풋 창에 값을 입력하고 국가추가 버튼을 클릭하면 아래에 입력값을 출력합니다.
- 국가명을 입력하지 않고 추가버튼 클릭 시 입력을 요청하는 alert 창이 조회됩니다.
  
<img width="1406" alt="image" src="https://github.com/user-attachments/assets/c91c72ce-e74d-4a5a-a84b-d4afcbc6477b">

- 이미 추가된 국가와 동일한 국가의 메달 수를 입력하여 업테이트 버튼 클릭 시 새로 입력한 값으로 변경이 됩니다.
- 리스트에 여러 나라들이 있을 때 금메달 수를 기준으로 내림차순 정렬하여 화면에 표시됩니다.
- 삭제버튼 클릭 시 해당 국가는 삭제됩니다.
