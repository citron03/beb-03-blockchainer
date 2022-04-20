## 서버

mysql 에서 사용할 데이터베이스를 생성후
config.js 에서 생성한 데이터베이스 이름과 유저네임, 비밀번호 입력하시고 (저는 환경변수 사용)
npm run start 로 서버를 시작하면 필요한 테이블들이 생성되도록 코딩했습니다.

## 더미데이터

더미데이터가 필요한 경우 서버 실행 후 새 터미널에서

$ npx sequelize db:migrate
$ npx sequelize db:seed:all

로 작성해둔 더미데이터를 가져올 수 있습니다.
