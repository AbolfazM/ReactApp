import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return(
        <div className="spacefl-x-1 flex flex-row-reverse mobile:hidden tablet:hidden">
            <div className="pr-40 pt-7">
                <Link to="/" className="headerlinks hover:bg-blue-600 hover:text-white">خانه</Link>
            </div>
            <div className="a">
                <Link to="/AllCourses" className="headerlinks hover:bg-blue-600 hover:text-white">دوره ها</Link>
            </div>
            <div className="a">
                <Link to="/Articles" className="headerlinks hover:bg-blue-600 hover:text-white">مقالات</Link>
            </div>
            <div className="a">
                <Link to="/About" className="headerlinks hover:bg-blue-600 hover:text-white">درباره من</Link>
            </div>
        </div>
    );
}

export default Links;