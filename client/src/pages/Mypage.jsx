import styled from "styled-components";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import profile from '../assets/images/profile.png';
import ListTable from '../components/mypage/ListTable';
import dummyNfts from '../assets/dymmydata/dummyNfts';
import ItemList from '../components/nft/ItemList';
import { fetchMyInfo, fetchMyPosts, fetchMyComments, fetchMyNfts } from '../components/mypage/fetchMypageData';
import { useEffect } from 'react';

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

  &.tabmenu {
    flex-direction: column;
    align-content: center;
  }

  &.profile {
    margin-top: 1rem;
    margin-bottom: 3rem;
    flex-direction: row;
  }
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

const TabMenu = styled.ul`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 60%;
  padding: 0 0;

  .focused {
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    background-color: black;
    color: white;
  }
`;

const TabLi = styled.li`
  padding: 0.5rem 1rem;
  background-color: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  width: 100%;
  text-align: center;

  :last-child {
    border-right: 1px solid black;
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 1rem 0;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const Profile = styled.p`

  &.username {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0; 
  }

  &.email {
    font-size: 1rem;
    font-weight: normal;
    margin-top: 0.3rem;
  }

  &.balance {
    margin-left: 3rem;
    font-size: 1rem;
    font-weight: normal;
    margin-top: 3.3rem;
  }
`;

const Mypage = () => {
  const tokenSelector = useSelector((state) => state.token);
  const username = tokenSelector.username;
  const [userInfo, setUserInfo] = useState({})
  const [currentTab, setCurrentTab] = useState(0);
  const [dataList, setDataList] = useState([[], [], []]);

  const menuArr = ['내가 쓴 글', '내가 쓴 댓글', 'NFT'];

  useEffect(() => {
    fetchMyInfo(username).then((info) => {
      setUserInfo(info);
    })

    fetchMyPosts(username).then((posts) => {
      let newDataList = [...dataList];
      newDataList[0] = posts;
      console.log(newDataList);
      setDataList(newDataList);
    })
  }, [])

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
    if (dataList[index].length === 0) {
      switch (index) {
        case 0:
          fetchMyPosts(username).then((posts) => {
            let newDataList = [...dataList];
            newDataList[0] = posts;
            console.log(newDataList);
            setDataList(newDataList);
          })
          break;
        case 1:
          fetchMyComments(username).then((comments) => {
            let newDataList = [...dataList];
            newDataList[1] = comments;
            console.log(newDataList);
            setDataList(newDataList);
          })
          break;
        case 2:
          fetchMyNfts(username).then((nfts) => {
            let newDataList = [...dataList];
            newDataList[2] = nfts;
            console.log(newDataList);
            setDataList(newDataList);
          })
          break;
      }
    }
  }


  return (
    <Main>
      {tokenSelector.accessToken === "" ? <Redirect to="/"></Redirect> : null}
      <Section>
        <Container>
          <Div>
            <TitleDiv>
              <Title>Mypage</Title>
            </TitleDiv>
          </Div>
          <Div className="profile">
              <Image src={profile}></Image>
              <div>
                <Profile className="username">{username}</Profile>
              <Profile className="email">{userInfo.email}</Profile>
              </div>
            <Profile className="balance">잔액:  {userInfo.balance} BCT</Profile>
          </Div>
          <Div className='tabmenu'>
            <TabMenu>
                {menuArr.map( (el, index) => {
                  let classText = 'submenu';
                  if (index === currentTab) {
                    classText += ' focused';
                  }
                  return <TabLi onClick={() => {selectMenuHandler(index)}} className={classText} key={index}>{el}</TabLi>
                })}
              </TabMenu>
          </Div>
          <Desc>
            {currentTab === 2 ?
              (<ItemList dataList={dataList[currentTab]}></ItemList>) :
              (<ListTable dataList={dataList[currentTab]} currentTab={currentTab}/>)}
          </Desc>
        </Container>
      </Section>
    </Main>
  );
}

export default Mypage;