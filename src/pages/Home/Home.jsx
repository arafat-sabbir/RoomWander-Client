import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  return (
    <div>
      <Helmet><title>StayVista | Vacation Homes & Condo Rentals</title></Helmet>
      {/* Category Section */}
      <Categories></Categories>
    {/* Rooms Section */}
    <Rooms/>
    </div>
  )
}

export default Home
