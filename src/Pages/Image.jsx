import React, { useEffect, useState } from 'react'
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { Main } from '../Layout/Main';

export const Images = () => {
    // const navigate = useNavigate()
    const [getData, setData] = useState([]);
    const [getRefresh, setRefresh] = useState(false);

  useEffect(() => {
    const getMeme = async () => {
      // setLoad(true)
      const response = await fetch(
        "https://candaan-api.vercel.app/api/image/random"
      );
      const { data } = await response.json();
      setData(data);
    //   setRefresh(false)
      // console.table(data)
    };
    getMeme();
  }, [getRefresh]);
  
  return (
  <Main>
    <div className="flex justify-center items-center min-h-screen flex-col justify-items-start">
      <Card
          isFooterBlurred
          radius="lg"
          className="border-none block"
      >
          <Image
              className="object-cover"
              height={300}
              src={getData.url}
              width={300} />
      </Card>

      <div className="flex justify-between mt-10 w-56">
        {/* <Button onClick={() => setRefresh(!getRefresh)}>meme lain</Button> */}
        <Button size="md" onClick={() => setRefresh(!getRefresh)}>refresh</Button>
        <Link to={'/'} >
          <Button>kembali</Button>
        </Link>
      </div>
    </div>
  </Main>
  );
};

export default Images;
