## 사용법

패키지 설치<br>

```bash
$ npm install
```

데이터베이스 생성<br>

```bash
npx sequelize db:create
```

테이블 생성<br>

```bash
npx sequelize-cli db:migrate
```

더미데이터 가져오기<br>

```bash
npx sequelize-cli db:seed:all
```

서버 실행<br>

```bash
$ npm run start
```

서버 실행 (코드 변경시 자동으로 재실행)<br>

```bash
$ npm run start:dev
```
