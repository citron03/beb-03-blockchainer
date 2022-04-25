import axios from 'axios';
import { useRef, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setToken } from '../Redux/tokenSlice';

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
  text-align: center !important;
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
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
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

  ::after {
    content: '|';
    align-items: center;
    color: grey;
  }

  :last-child::after {
    content: '';
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

const Login = () => {
  
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const errorMsg = [
    '로그인 성공',
    'username을 입력해주세요',
    '비밀번호를 입력해주세요',
    'username 또는 비밀번호를 잘못 입력했습니다',
  ];
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState();
  /*
    0: 로그인 성공,
    1: 로그인 실패,
    2: username 미입력,
    3: password 미입력
  */

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log('Login Clicked!');

    // 입력 여부 검사
    if (inputs.username === '') {
      setError(1);
      usernameRef.current.focus();
    } else if (inputs.password === '') {
      setError(2);
      passwordRef.current.focus();
    } else {
      // 백엔드로 로그인 요청 전송
      const url = "http://localhost:4000/auth/login";
      const payload = {
        username: inputs.username,
        password: inputs.password
      }
      axios.post(url, payload)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          // 로그인 성공
          const accessToken = res.data.data.accessToken;
          dispatch(setToken({
            accessToken: String(accessToken),
            username: inputs.username
          }));
          setError(0);
          localStorage.setItem('user', JSON.stringify({
            accessToken: String(accessToken),
            username: inputs.username
          }));
        }
      })
      .catch(() => {
        // 응답 결과에 따라 error 상태 저장
        setError(3);
      })
      
    }
  };

  return (
    <Main>
      {error === 0 ? <Redirect to="/" /> : null}
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>로그인</Title>
            </TitleDiv>
          </Div>
          <Div>
            <FormDiv>
              <h3>Username</h3>
              <Input
                type="text"
                name="username"
                placeholder="username"
                onChange={handleInputs}
                ref={usernameRef}
              />
              <MsgDiv>
                {error === 1 ? <Message>{errorMsg[1]}</Message> : null}
              </MsgDiv>
              <h3>Password</h3>
              <Input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleInputs}
                ref={passwordRef}
              />
              <MsgDiv>
                {error === 2 ? (
                  <Message>{errorMsg[2]}</Message>
                ) : error === 3 ? (
                  <Message>{errorMsg[3]}</Message>
                ) : null}
              </MsgDiv>
              <ButtonDiv>
                <Button type="button" onClick={handleLogin}>
                  로그인
                </Button>
              </ButtonDiv>
              <Ul>
                <Li>
                  <ALink to="/findusername">아이디 찾기</ALink>
                </Li>
                <Li>
                  <ALink to="/findpassword">비밀번호 찾기</ALink>
                </Li>
                <Li>
                  <ALink to="/register">회원가입</ALink>
                </Li>
              </Ul>
            </FormDiv>
          </Div>
        </Container>
      </Section>
      ;
    </Main>
  );
};

export default Login;
