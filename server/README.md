## 초기 세팅

패키지 설치<br>

```bash
$ npm install
```

데이터베이스 세팅<br>

```bash
$ npx sequelize db:create
$ npx sequelize db:migrate

```

더미데이터 불러오기<br>

```bash
$ npx sequelize-cli db:seed:all
```

서버 실행<br>

```bash
$ npm run start
```

서버 실행 (nodemon)<br>

```bash
$ npm run start:dev
```

## .env 설정

DATABASE_USERNAME= mysql username<br>
DATABASE_PASSWORD= mysql password<br>
DATABASE_NAME= mysql database name<br>
FAUCET_ADDRESS= server 계정에 eth를 전송해 줄 계정<br>
FAUCET_SECRET= 해당 계정의 비밀 키<br>
