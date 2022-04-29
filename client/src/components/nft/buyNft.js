import axios from 'axios';

const buyNft = async (nftId, username) => {
  const url = 'http://localhost:4000/nft/getnft'
  const payload = {
    id: nftId,
    username: username
  }
  const res = await axios.post(url, payload); 
  console.log(res);
  return res;
}

export default buyNft;