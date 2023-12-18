import React, { useEffect, useState } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import { Card, CardBody , Button, Textarea } from "@nextui-org/react";
import { Main } from "../Layout/Main";


export const Text = () => {
    const navigate = useNavigate()
    const [getData, setData] = useState([]);
    const [getRefresh, setRefresh] = useState(false);

  useEffect(() => {
    const getMeme = async () => {
      const response = await fetch(
        "https://candaan-api.vercel.app/api/text/random"
      );
      const { data } = await response.json();
      setData(data);
    };
    getMeme();
  }, [getRefresh]);
  
  return (
    <Main>
      <div className="flex justify-center items-center min-h-screen flex-col mx-6 lg:m-0">
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
      </div>
    </Main>
  );
};
export default Text;
