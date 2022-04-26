import axios from 'axios';

// ipfs 링크로부터 메타데이터받아와서 파싱하기
const fetchMetadata = async (ipfs) => {
  const data = await axios.get(ipfs);
  const meta = {
    name: data.name,
    description: data.description,
    attributes: data.attributes,
    image: 'http://ipfs.io/ipfs/' + data.image.split('://')[1]
  }

  return meta;
}

export default fetchMetadata;