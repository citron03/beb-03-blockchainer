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
