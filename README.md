# 프로젝트 명 : Olympic Medal Tracker

2024 파리 올림픽에서 각 나라가 획득한 메달 수를 추적하는 메달 트래커 입니다.

## 작업 기간
2024.08.08.(목) ~ 2024.08.14.(수)

## 프로젝트 구조
```
.
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Countries.jsx
│   │   └── InputForm.jsx
│   ├── index.css
│   └── main.jsx
├── vite.config.js
└── yarn.lock
```

## 주요 기능
### 1. 추가
<img width="1387" alt="image" src="https://github.com/user-attachments/assets/0cfccfd0-abf6-4db5-b398-a2fd3767b419">

- 국가명, 금메달, 은메달, 동메달 각 input 창에 값을 입력하고 국가추가 버튼을 클릭하여 입력값을 출력합니다.
- 국가명을 입력하지 않고 추가버튼 클릭 시 입력을 요청하는 alert 창이 조회됩니다.
- 동일한 국가를 입력할 시 "이미 추가된 국가입니다." alert 창이 조회되고 새로운 국가를 입력하면 국가가 추가됩니다.

### 2. 읽기
<img width="1379" alt="image" src="https://github.com/user-attachments/assets/ab55a0cc-08aa-487a-b311-95e30a12c92f">

- 입력한 국가명, 메달 개수들이 추가되어 보여줍니다.

### 3. 수정
<img width="1354" alt="image" src="https://github.com/user-attachments/assets/cae6e1dd-772c-4255-9308-da8ab2c5f972">

- 기존에 추가된 국가와 동일한 국가의 메달 개수를 업데이트 버튼을 클릭하여 수정할 수 있습니다.

### 4. 삭제
<img width="1354" alt="image" src="https://github.com/user-attachments/assets/c2a89862-6b9a-4d92-881f-4d8673798ee1">
<img width="1354" alt="image" src="https://github.com/user-attachments/assets/25128743-09a4-4120-a4ac-10990660db88">

- 삭제버튼 클릭 시 삭제 확인, 취소 경고창이 나타나며 확인을 클릭하면 해당 국가가 삭제됩니다.

### 5. 정렬
![image](https://github.com/user-attachments/assets/90152cd9-dd29-409a-a8cf-e308b2585327)

- 리스트에 여러 나라들이 있을 때 금메달 수를 기준으로 내림차순 정렬하여 화면에 표시됩니다.
  
