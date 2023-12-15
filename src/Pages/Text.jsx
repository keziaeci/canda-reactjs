import React, { useEffect, useState } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import { Card, CardBody , Button, Textarea } from "@nextui-org/react";


export const Text = () => {
    const navigate = useNavigate()
    const [getData, setData] = useState([]);
    const [getRefresh, setRefresh] = useState(false);

  useEffect(() => {
    const getMeme = async () => {
      // setLoad(true)
      const response = await fetch(
        "https://candaan-api.vercel.app/api/text/random"
      );
      const { data } = await response.json();
      setData(data);
    //   setRefresh(false)
      // console.table(data)
    };
    getMeme();
  }, [getRefresh]);
  
  return (
    <div className="flex justify-center items-center min-h-screen flex-col mx-6 lg:m-0">
        {/* <Card className="block">
            <CardBody>
                <p>{getData}</p>
            </CardBody>
        </Card> */}

        <Textarea
      isReadOnly
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      value={getData}
      className="max-w-md"
    />
      <div className="flex justify-between mt-10 w-80">
        <Button onClick={() => setRefresh(!getRefresh)}>meme lain</Button>
        <Link to={'/'} >
          <Button>kembali</Button>
        </Link>
      </div>
        {/* <Button size="md" onClick={() => getMeme()}>p</Button> */}
        {/* <button className="b" onClick={() => getMeme()}>klik</button> */}
    </div>
  );
};
export default Text;
