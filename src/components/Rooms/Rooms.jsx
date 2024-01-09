import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Rooms = () => {
  // Set rooms to rooms state
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading,setloading] = useState(true)
  const category = params.get("category");

  // Get the rooms data from public folder
  useEffect(() => {
    setloading(true)
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setloading(false)
      });
  }, [category]);
  if(loading){
    return <Loader></Loader>
  }
  return (
    <Container>
     {
      rooms && rooms.length >0?( <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-8">
      {rooms.map((room) => (
        <Card room={room} key={room._id}></Card>
      ))}
    </div>):(<div className="flex items-center justify-center min-h-[calc(100vh-360px)]">
      <Heading center={true} title={"No Rooms Available In This Category"} subtitle={'Please Select Other Category'}></Heading>
    </div>)
     }
    </Container>
  );
};

export default Rooms;
