import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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

const Message = styled.p`
  color: red;

  &.ok {
    color: #3065ba;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
`;

const Button = styled.button`
  background: #212529;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;

  &.check {
    margin: 0.7rem 1rem;
    border-radius: 3px;
    padding: 8px 10px;
  }
`;

const InputP = styled.p`
  color: #8f8d8d;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  margin-left: 1rem;
`;

const Register = () => {
  const inputRef = useRef([]);
  const errorMsg = ['', 'Email을 입력해주세요', 'Email 형식이 아닙니다', 'username을 입력해주세요', '잘못된 형식입니다',
    'username 중복 확인을 해주세요', '중복된 username입니다',
    '비밀번호를 입력해주세요', '잘못된 형식입니다', '비밀번호가 일치하지 않습니다', '이미 가입되어 있는 메일입니다'];
  const invalidUsername = /[^a-z0-9]/g;
  const invalidPassword = /[+ㄱ-ㅎ가-힣]/g;
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: ""
  })
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState();
  /* 
    0: 에러 없음.
    1: empty email.
    2: invalid email.
    3: empty username.
    4: invalid username.
    5: need to check username.
    6: username already exists.
    7: empty password.
    8: invalid username.
    9: incorrect repeat password.
  */

  const handleInputs = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    
    // 중복확인된 username을 변경했을 때 
    if (name === 'username' && isChecked === true) {
      setIsChecked(false);
      setError(5);
    }

    setInputs({
      ...inputs,
      [name]: value
    })
  }

  // username 중복 체크
  const handleCheck = (e) => {
    // setIsChecked(true);
    // setError();
    // username 유효성 검사
    if (inputs.username === "") {
      setError(3);
      inputRef.current[1].focus();
    } else if (invalidUsername.test(inputs.username) || inputs.username.length > 12 || inputs.username.length < 8) {
      setError(4);
      inputRef.current[1].focus();
    } else {
      // // 백엔드로 요청 전송
      // const url = "http://localhost:4000/auth/username";
      // const payload = { username: inputs.username };
      // axios.post(url, payload)
      // .then((res) => {
      //   // 사용 가능하면 isChecked 설정
      //   setIsChecked(true);
      //   setError();
      //   // 중복된 username이면 error 설정
      //   setError(6);
      // })
    }
  }

  const handleSubmit = (e) => {
    console.log("clicked");

    // 유효성 검사
    if (inputs.email === "") {
      setError(1);
      inputRef.current[0].focus();
    } else if (!regEmail.test(inputs.email)) {
      setError(2);
      inputRef.current[0].focus();
    } else if (inputs.username === "") {
      setError(3);
      inputRef.current[1].focus();
    } else if (invalidUsername.test(inputs.username) || inputs.username.length > 12 || inputs.username.length < 8) {
      setError(4);
      inputRef.current[1].focus();
    } else if (isChecked === false) {
      setError(5);
    } else if (inputs.password === "") {
      setError(7);
      inputRef.current[2].focus();
    } else if (invalidPassword.test(inputs.password) || inputs.password.length < 8) {
      setError(8);
      inputRef.current[2].focus();
    } else if (inputs.password !== inputs.repeatPassword) {
      console.log(inputs.password, inputs.repeatPassword);
      setError(9);
      inputRef.current[3].focus();
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
      //   setError(10);
      //   // 회원가입 성공
      //   setError(0);
      // })
      
    }
  }

  return (
    <Main>
      <Section>
        <Container>
          {error === 0 ?
            (<Div>
              <TitleDiv>
                <Title>회원가입 성공</Title>
              </TitleDiv>
              <Link to="/login">
                <Button type="button">로그인하러 가기</Button>
              </Link>
            </Div>) 
            : (<><Div>
                <TitleDiv>
                  <Title>회원가입</Title>
                </TitleDiv>
              </Div>
              <Div>
                <FormDiv>
                  <InputDiv>
                    <h3>Email</h3>
                  </InputDiv>
                  <Input type="email" name="email" placeholder='이메일을 입력해주세요'
                    onChange={handleInputs} ref={el => (inputRef.current[0] = el)}/>
                  {error === 1 ? (<MsgDiv><Message>{errorMsg[1]}</Message></MsgDiv>) : (
                    error === 2 ? (<MsgDiv><Message>{errorMsg[2]}</Message></MsgDiv>) : null
                  )}
                  <InputDiv>
                    <h3>Username</h3>
                    <InputP>아이디는 6-12자의 영문, 숫자</InputP>
                    <Button type="button" className='check' onClick={handleCheck}>중복 확인</Button>
                  </InputDiv>
                  <Input type="text" name="username" placeholder='username을 입력해주세요'
                    onChange={handleInputs} ref={el => (inputRef.current[1] = el)}/>
                  {error === 3 ? (<MsgDiv><Message>{errorMsg[3]}</Message></MsgDiv>) : (
                    error === 4 ? (<MsgDiv><Message>{errorMsg[4]}</Message></MsgDiv>) : (
                      error === 5 ? (<MsgDiv><Message>{errorMsg[5]}</Message></MsgDiv>) : (
                        error === 6 ? (<MsgDiv><Message>{errorMsg[6]}</Message></MsgDiv>) : null
                      )
                    )
                  )}
                  {isChecked === true ? (<MsgDiv><Message className="ok">사용가능한 username입니다.</Message></MsgDiv>) : null}
                  <InputDiv>
                    <h3>Password</h3>
                    <InputP>비밀번호는 8자 이상, 영문/숫자/기호 사용가능</InputP>
                  </InputDiv>
                  <Input type="password" name="password" placeholder='password를 입력해주세요'
                    onChange={handleInputs} ref={el => (inputRef.current[2] = el)}/>
                  {error === 7 ? (<MsgDiv><Message>{errorMsg[7]}</Message></MsgDiv>) : (
                    error === 8 ? (<MsgDiv><Message>{errorMsg[8]}</Message></MsgDiv>) : null
                  )}
                  <InputDiv>
                    <h3>Repeat Password</h3>
                    <InputP>비밀번호를 재입력해주세요</InputP>
                  </InputDiv>
                  <Input type="password" name="repeatPassword" placeholder='password를 입력해주세요'
                    onChange={handleInputs} ref={el => (inputRef.current[3] = el)}/>
                  {error === 9 ? (<MsgDiv><Message>{errorMsg[9]}</Message></MsgDiv>) : (
                    error === 10 ? (<MsgDiv><Message>{errorMsg[10]}</Message></MsgDiv>) : null
                  )}
                  <ButtonDiv>
                    <Button type="button" onClick={handleSubmit}>회원가입</Button>
                  </ButtonDiv>
                </FormDiv>
                </Div>
              </>)}
        </Container>
      </Section>
    </Main>
  );
}

export default Register;