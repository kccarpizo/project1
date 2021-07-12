import React from "react";
import '../assets/css/bootstrap.css';
  
const Footer = () => {
  return (
    <div className="box">
      <div className="con">
        <div className="row">
          <div className="col">
            <div className="heading">Watch</div>
            <span>Movie</span>
            <span>TV</span>
            <span>Free</span>
          </div>
          <div className="col">
            <div className="heading">My Account</div>
                <span>Account</span>
                <span>Settings</span>
                <span>My Devices</span>
            </div>
          <div className="col">
            <div className="heading">Features</div>
                <span>List</span>
                <span>Family</span>
                <span>InstaWatch</span>
                <span>Gift Cards</span>
            </div>
          <div className="col">
            <div className="heading">Help</div>
                    <span>About Us</span>
                    <span>Devices</span>
                    <span>Support</span>
                    <span>Forums</span>
                    <span>Contact US</span>
                    <span>Jobs</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;