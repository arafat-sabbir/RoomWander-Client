import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon,selected }) => {
  const [params, setParams] = useSearchParams();
  params.get("category");
  const navigate = useNavigate();
  const handleclick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const upDatedQuery = { ...currentQuery, category: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: upDatedQuery,
      });
      navigate(url);
    }
  };

  return (
    <div
      onClick={handleclick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected?"border-b-neutral-800 text-neutral-800":""}`}
    >
      <h1 className="text-sm font-medium">{label}</h1>
      <div className="">
        <Icon size={26} />
      </div>
    </div>
  );
};

export default CategoryBox;
