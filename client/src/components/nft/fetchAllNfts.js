import axios from 'axios';

// 모든 NFT 데이터 가져오기
const fetchAllNfts = async () => {
  const url = "http://localhost:4000/nft/allnfts";
  const res = await axios.get(url);
  return res.data.data;
}

export default fetchAllNfts;