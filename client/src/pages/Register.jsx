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
  const errorMsg = ['', 'empty username', 'empty password', 'invalid username', 'invalid password', 'incorrect repeat password'];
  const invalidUsername = /[^a-z0-9]/g;
  const invalidPassword = /[+ㄱ-ㅎ가-힣]/g;
  const [inputs, setInputs] = useState({
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
    if (inputs.username === "") {
      setError(1);
    } else if (inputs.password === "") {
      setError(2);
    } else if (invalidUsername.test(inputs.username) || inputs.username.length > 12 || inputs.username.length < 8) {
      setError(3);
    } else if (invalidPassword.test(inputs.password) || inputs.password.length < 8) {
      setError(4);
    } else if (inputs.password !== inputs.repeatPassword) {
      console.log(inputs.password, inputs.repeatPassword);
      setError(5);
    } else {
      console.log('폼 입력 성공');
      setError(0);
      // 백엔드로 요청 전송
    }
  }

  return (
    <Main>
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
                <h3>Username</h3>
                <InputP>아이디는 6-12자의 영문, 숫자</InputP>
              </InputDiv>
              <Input type="text" name="username" placeholder='username' onChange={handleInputs} />
              <InputDiv>
                <h3>Password</h3>
                <InputP>비밀번호는 8자 이상, 영문/숫자/기호 사용가능</InputP>
              </InputDiv>
              <Input type="password" name="password" placeholder='password' onChange={handleInputs} />
              <InputDiv>
                <h3>Repeat Password</h3>
                <InputP>비밀번호를 재입력해주세요</InputP>
              </InputDiv>
              <Input type="password" name="repeatPassword" placeholder='repeat password' onChange={handleInputs} />
              <MsgDiv>
                {error === 1 ? (<Message>{errorMsg[1]}</Message>): (
                  error === 2 ? (<Message>{errorMsg[2]}</Message>) : (
                    error === 3 ? (<Message>{errorMsg[3]}</Message>) : (
                      error === 4 ? (<Message>{errorMsg[4]}</Message>) :
                        error === 5 ? (<Message>{errorMsg[5]}</Message>) : (
                          error === 0 ? (<Redirect to="/login" />) : null
                        )
                    )
                  )
                )}
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