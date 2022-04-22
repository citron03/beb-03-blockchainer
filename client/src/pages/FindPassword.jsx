import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';

const Main = styled.main`
  margin-top: 90px;
  display: block;
`;

const Section = styled.section`
  scroll-margin-top: 70px;
  padding: 40px 0;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TitleDiv = styled.div`
  text-align: center!important;
  flex: 0 0 auto;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
  color: var(--color-black);
`;

const FormDiv = styled.div`
  box-shadow: 0 0 30px rgba(var(--color-black-rgb), 0.1);
  padding: 30px;
  background: white;
  width: 40%;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  padding: 10px 14px;
  border-radius: 0;
  box-shadow: none;
  font-size: 15px;
`;

const MsgDiv = styled.div`
  margin-top: 1rem!important;
  margin-bottom: 1rem!important;
`;

const Message = styled.p`
  color: red;
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button`
  background: #212529;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
`;

const Ul = styled.ul`
  padding: 20px 0 35px;
  text-align: center;
  list-style: none;
  margin-top: 3rem;
`;

const Li = styled.li`
  display: inline-block;
  position: relative;

  ::after{
    content: "|";
    align-items: center;
    color: grey;
  }

  :last-child::after{
    content: "";
  }
`;

const ALink = styled(Link)`
  display: inline-block;
  font-size: 1rem;
  line-height: 17px;
  text-decoration: none;
  color: #888;
  margin: 0 1rem;
`;

const Board = styled.div`
  width: 100%;
  border-radius: 2rem!important;
  border: solid 1px #e6e6e6;
  background-color: white;
  padding: 1rem 2rem;
  margin-top: 2rem;
`;

const FindPassword = () => {
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  const errorMsg = ['', 'Email을 입력해주세요', 'Email 형식이 아닙니다', 'username을 입력해주세요', '회원 정보가 존재하지 않습니다']
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    createdAt: ""
  });

  const handleuser = (e) => {
    const { name, value } = e.target;

    if (error === 0) {
      setError();
    }

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleClick = async () => {
    if (user.email === "") {
      emailRef.current.focus();
      setError(1);
    } else if (!regEmail.test(user.email)) {
      emailRef.current.focus();
      setError(2);
    } else if (user.username === "") {
      usernameRef.current.focus();
      setError(3);
    } else {
      // 백엔드로 요청 전송
      const url = "http://localhost:4000/account/findpassword";
      const payload = {
        email: user.email,
        username: user.username
      };
      await axios.post(url, payload)
      .then((res) => {
        console.log(res);
        // password, createdAt 설정
        // 비밀번호 앞 3자리 빼고 가리기
        if (res.status === 200) {
          let str = res.data.data.password;
          let replace = '';
          for (let i = 3; i < str.length; i++) {
            replace += '*';
          }
          setUser({
            ...user,
            password: str.substring(0, 3).concat(replace),
            createdAt: res.data.data.createdAt.split('T')[0]
          });
          setError(0);  
        }
      })
      .catch((e) => {
        // 존재하지 않는 회원일 때
        setError(4);
      })
    }
  }

  return (
    <Main>
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>비밀번호 찾기</Title>
            </TitleDiv>
          </Div>
          <Div>
            <FormDiv>
              <h3>Email</h3>
              <Input type="email" name="email" placeholder="가입한 email을 입력해주세요" onChange={handleuser} ref={emailRef} />
              <MsgDiv>
                {error === 1 ? (<Message>{errorMsg[1]}</Message>) : (
                  error === 2 ? (<Message>{errorMsg[2]}</Message>) : null
                )}
              </MsgDiv>
              <h3>Username</h3>
              <Input type="text" name="username" placeholder="가입한 username을 입력해주세요" onChange={handleuser} ref={usernameRef}/>
              <MsgDiv>
                {error === 3 ? (<Message>{errorMsg[3]}</Message>) : (
                  error === 4 ? (<Message>{errorMsg[4]}</Message>) : null
                )}
              </MsgDiv>
              <ButtonDiv>
                <Button type="button" onClick={handleClick}>비밀번호 찾기</Button>
              </ButtonDiv>
              {error === 0 ?
                (<Board>
                  <h4>회원가입 정보</h4>
                  <p>Email: {user.email}</p>
                  <p>Username: {user.username}</p>
                  <p>비밀번호: {user.password}</p>
                  <p>회원가입 날짜: {user.createdAt}</p>
                </Board>) : null}
              <Ul>
                <Li>
                  <ALink to="/login">
                    로그인
                  </ALink>
                </Li>
                <Li>
                  <ALink to="/findusername">
                    아이디 찾기
                  </ALink>
                </Li>
                <Li>
                  <ALink to="/register">
                    회원가입
                  </ALink>
                </Li>
              </Ul>
            </FormDiv>
          </Div>
        </Container>
      </Section>;
    </Main>
  );
}

export default FindPassword;