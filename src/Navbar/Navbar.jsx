import React from "react";
import { Link} from "react-router-dom";



const Navbar = () => (

<div className="navbar" >
    <Link to="/" >Films Popular </Link>
    <Link to="/TopRatedMovies" >Top Rated Movies </Link>
    <Link to="/TVShows"  >TV Shows </Link>
    
</div>

)

export default Navbar;