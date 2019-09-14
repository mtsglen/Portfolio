import React from "react";
import { Link } from "react-router-dom"; 

const NotFound = () => (
  <div>
    <h2>Apologies!!</h2>
    <h3>The page you were looking for was not found.</h3>
    <h3>Click the button below to be taken back to the hoem page.</h3>
    <Link to='/' className="btn btn-primary">Home</Link>
  </div>
);

export default NotFound;