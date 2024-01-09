import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singRoom = data.find((room) => room._id === id);
        setRoom(singRoom);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <div className="">
        <div className="flex flex-col gap-6">{"header"}</div>
          <div> room info </div>
          Calender
      </div>
    </Container>
  );
};

export default RoomDetails;
