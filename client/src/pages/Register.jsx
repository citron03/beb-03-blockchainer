import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from "styled-components";

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

const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
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

const Message = styled.h3`
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

const InputP = styled.p`
  color: #8f8d8d;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  margin-left: 1rem;
`;

const Register = () => {
  const errorMsg = ['', 'empty email', 'wrong email', 'empty username', 'invalid username',
    'empty password', 'invalid password', 'incorrect repeat password'];
  const invalidUsername = /[^a-z0-9]/g;
  const invalidPassword = /[+ㄱ-ㅎ가-힣]/g;
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: ""
  })
  const [error, setError] = useState();
  /* 
    0: 기본값, 에러 없음. 
    1: empty username.
    2: empty password.
    3: invalid username.
    4: invalid password.
    5: incorrect repeat password.
  */

  const handleInputs = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    console.log("clicked");
    if (inputs.email === "") {
      setError(1);
    } else if (!regEmail.test(inputs.email)) {
      setError(2);
    } else if (inputs.username === "") {
      setError(3);
    } else if (invalidUsername.test(inputs.username) || inputs.username.length > 12 || inputs.username.length < 8) {
      setError(4);
    } else if (inputs.password === "") {
      setError(5);
    } else if (invalidPassword.test(inputs.password) || inputs.password.length < 8) {
      setError(6);
    } else if (inputs.password !== inputs.repeatPassword) {
      console.log(inputs.password, inputs.repeatPassword);
      setError(7);
    } else {
      console.log('폼 입력 성공');
      
      // 백엔드로 요청 전송
      // const url = "http://localhost:4000/register";
      // const payload = {
      //   email: inputs.email,
      //   username: inputs.username,
      //   password: inputs.password
      // }
      // axios.post(url, payload)
      // .then((res) => {
      //   // 이미 존재하는 회원일 경우, username이 이미 존재할 경우 error 설정

      //   // 회원가입 성공
      //   setError(0);
      // })
      
    }
  }

  return (
    <Main>
      {error === 0 ? <Redirect to="/" /> : null}
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>회원가입</Title>
            </TitleDiv>
          </Div>
          <Div>
            <FormDiv>
              <InputDiv>
                <h3>Email</h3>
              </InputDiv>
              <Input type="email" name="email" placeholder='이메일을 입력해주세요' onChange={handleInputs} />
              {error === 1 ? (<MsgDiv><Message>{errorMsg[1]}</Message></MsgDiv>) : (
                error === 2 ? (<MsgDiv><Message>{errorMsg[2]}</Message></MsgDiv>) : null
              )}
              <InputDiv>
                <h3>Username</h3>
                <InputP>아이디는 6-12자의 영문, 숫자</InputP>
              </InputDiv>
              <Input type="text" name="username" placeholder='username을 입력해주세요' onChange={handleInputs} />
              {error === 3 ? (<MsgDiv><Message>{errorMsg[3]}</Message></MsgDiv>) : (
                error === 4 ? (<MsgDiv><Message>{errorMsg[4]}</Message></MsgDiv>) : null
              )}
              <InputDiv>
                <h3>Password</h3>
                <InputP>비밀번호는 8자 이상, 영문/숫자/기호 사용가능</InputP>
              </InputDiv>
              <Input type="password" name="password" placeholder='password를 입력해주세요' onChange={handleInputs} />
              {error === 5 ? (<MsgDiv><Message>{errorMsg[5]}</Message></MsgDiv>) : (
                error === 6 ? (<MsgDiv><Message>{errorMsg[6]}</Message></MsgDiv>) : null
              )}
              <InputDiv>
                <h3>Repeat Password</h3>
                <InputP>비밀번호를 재입력해주세요</InputP>
              </InputDiv>
              <Input type="password" name="repeatPassword" placeholder='password를 입력해주세요' onChange={handleInputs} />
              {error === 7 ? (<MsgDiv><Message>{errorMsg[7]}</Message></MsgDiv>) : null}
              <MsgDiv>
                {/* 이미 회원가입이 되어있는 메일일 경우, username이 존재할 경우 메세지 출력 */}
              </MsgDiv>
              <ButtonDiv>
                <Button type="button" onClick={handleSubmit}>회원가입</Button>
              </ButtonDiv>
            </FormDiv>
          </Div>
        </Container>
      </Section>
    </Main>
  );
}

export default Register;