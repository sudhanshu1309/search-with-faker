import { useState } from "react";
import "../../styles/home.scss";
import Logo from "./Logo";
import Search from "./Search";

const Home = () => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <>
      <Logo />
      <Search />
    </>
  );
};

export default Home;
