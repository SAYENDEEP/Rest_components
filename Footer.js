import React from "react";
import { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import '../stylesheets/Footer.css'
import logo from './assets/svg2.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import youtube from './assets/youtube.svg'



class Footer extends Component{
    render(){
        return(
            <Router>

                    <div className="container-fluid bg-dark text-light">
                        <br/>
                        
                            <div className="row">
  
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div>
                                    <span style={{marginLeft: 4}} id='nav_logo_text'> <h2>Been There</h2></span>
                                    <span><img src={logo} alt="" width="100" height="100" class="d-inline-block align-text-top"/> </span>
                                        
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">

                                    <div>
                                        <br/>
                                        <h5>Contact Us:<span></span></h5>
                                            <Link style={{color:"white"}} to="/contact">
                                               beenThere@customerCare.com
                                            </Link>
                                            <br/>
                                            <ul id="foot">
                                                <br/>
                                            <li id='foot'>
                                                <Link>
                                                <img alt="YouTube" width="35" height="35" src={youtube} id='logo_img'></img>&nbsp;&nbsp;<span>YOUTUBE</span>
                                                </Link>
                                            </li>
                                        
                                            <br/>
                                            <li id='foot'>
                                                <Link>
                                                <img alt="Facebook" width="35" height="35" src={facebook}></img>&nbsp;&nbsp;<span>FACEBOOK</span>
                                                </Link>
                                            </li>
                                            <br/>
                                            <li id='foot'>
                                                <Link>
                                                <img alt="Instagram" width="35" height="35" src={instagram}></img>&nbsp;&nbsp;<span>INSTAGRAM</span>
                                                </Link>
                                            </li>
                                            </ul>
                                    </div>
                                </div>

                            
                        </div>
                        <br/>
                    </div>
                    <div className="container-fluid text-light" style={{backgroundColor:"black"}}>
                    <div className="row">
                    <div className="col-md-12 text-center">
                    <p>Copyright Been There © 2021. All rights reserved.</p>
                    </div>
                    </div>
                    </div>
                    
            </Router>
        )
    }
}

export default Footer