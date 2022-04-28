## .env 설정

데이터베이스

DATABASE_USERNAME=<br>
DATABASE_PASSWORD=<br>
DATABASE_NAME=

인증

ACCESS_SECRET=

수수료를 보내 줄 가나슈 계정

FAUCET_SECRET=<br>
FAUCET_ADDRESS=

server account 정보

SERVER_ADDRESS=<br>
SERVER_SECRET=

배포한 컨트랙트

ERC721_CONTRACT=<br>
ERC20_CONTRACT=

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

# 사용 방법

post 요청 : /server/createaccount 로 서버 계정 생성<br>
post 요청 : /server/ethfaucet 으로 수수료로 사용할 이더리움 전송<br>
post 요청 : /token/deploytoken 으로 erc20 배포 및 서버 계정에 토큰 지급<br>
post 요청 : /nft/deploynft 로 erc7210 배포
