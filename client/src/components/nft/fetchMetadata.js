import axios from 'axios';

// ipfs 링크로부터 메타데이터받아와서 파싱하기
const fetchMetadata = async (ipfs) => {
  const res = await axios.get(ipfs);
  const meta = {
    name: String(res.data.name),
    description: String(res.data.description),
    attributes: res.data.attributes,
    image: 'http://ipfs.io/ipfs/' + String(res.data.image).split('://')[1]
  }

  return meta;
}

export default fetchMetadata;