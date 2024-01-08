import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  return (
    <div>
      {/* Category Section */}
      <Categories></Categories>
    {/* Rooms Section */}
    <Rooms/>
    </div>
  )
}

export default Home