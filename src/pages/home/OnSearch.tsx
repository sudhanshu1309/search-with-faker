import { Link } from "react-router-dom";
import Card from "./Card";

const OnSearch = () => {
  return (
    <>
      <div className="onsearch-container">
        <p className="onsearch-title">Latest Trends</p>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <p className="onsearch-title">Popular suggestions</p>
        <div className="suggested-list">
          <Link to={""} className="suggested-items">
            Striped shirt dress
          </Link>
          <Link to={""} className="suggested-items">
            Satin shirts
          </Link>
          <Link to={""} className="suggested-items">
            Denim jumpsuit
          </Link>
          <Link to={""} className="suggested-items">
            Leather dresses
          </Link>
          <Link to={""} className="suggested-items">
            Striped shirt dress
          </Link>
        </div>
      </div>
    </>
  );
};

export default OnSearch;
