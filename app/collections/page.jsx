import React from "react";
import {  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button} from "@/app/ClientImports";
import "./collection.css";
import { getDataCollections } from "../ServerRequests";
// import { useDispatch, useSelector } from "react-redux";
// import { getClollections } from "../redux-system/slices/collectionsSlice";

const page = async () => {
  const {data} = await getDataCollections() 
  
  return (
    <div className="px-5 flex flex-col justify-center items-center w-full mt-[10em]">
      <h1 className="text-2xl mt-[2em] tracking-widest font-thin">
        ALL COLLECTIONS
      </h1>
      <div className="flex flex-wrap	gap-[2em] justify-center items-center w-full mt-[3em]">
        {data.map((card, index)=>(
            <Card
            key={index}
            shadow={false}
            className="relative grid h-[45rem] w-full max-w-[23rem] rounded-none items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 bg-top m-0 h-full w-full rounded-none bg-[url('https://thahab.com/cdn/shop/files/8027993243829_9a0cff92-d0e7-462a-9089-b90b5bd00d10_750x960.jpg?v=1727689412')] bg-cover"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="absolute w-full bottom-0 py-14 px-6 md:px-12 flex justify-end flex-col">
              <div
                variant="h5"
                className="mb-4 absolute bottom-[6rem] text-white text-2xl left-[-3rem] w-full"
              >
                <p>{card.category_description.name}</p>
              </div>
              <div className="absolute bottom-6 w-full left-[-3rem]">
                <Button className="btn">
                  View Products
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <hr className="w-full mt-[2em]"/>
    </div>
  );
};

export default page;
