import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className=" w-full mt-5 p-8 text-center font-bold ">
        <ul className="md:flex grid grid-cols-3 flex-wrap md:flex-row items-center justify-center gap-10">
          <li className="border-solid border-2 p-2 rounded-xl border-cyLinkn-800">
            <Link to="/">General</Link>
          </li>
          <li className="border-solid border-2 p-2 rounded-xl border-cyLinkn-800">
            <Link to="/business">Business</Link>
          </li>
          <li className="border-solid border-2 p-2 rounded-xl border-cyLinkn-800">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="border-solid border-2 p-2 rounded-xl border-cyLinkn-800">
            <Link to="/health">Health</Link>
          </li>
          <li className="border-solid border-2 p-2 rounded-xl border-cyLinkn-800">
            <Link to="/science">Science</Link>
          </li>
          <li className="border-solid border-2 p-2 rounded-xl border-cyLinkn-800">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="border-solid border-2 p-2 rounded-xl border-cyLinkn-800">
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Categories;
