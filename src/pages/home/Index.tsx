// import { useState } from "react";
import "../../styles/home.scss";
import Logo from "./Logo";
import Search from "./Search";
import OnSearch from "./OnSearch";

const Home = () => {
  // const [searchVal, setSearchVal] = useState("");

  return (
    <>
      <Logo />
      <Search />
      <OnSearch />
    </>
  );
};

export default Home;
