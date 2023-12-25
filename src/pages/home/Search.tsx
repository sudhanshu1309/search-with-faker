import seachIcon from "../../assets/search.svg";

const Search = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-box" />
        <img src={seachIcon} alt="seachIcon" className="search-icon" />
      </div>
    </>
  );
};

export default Search;
