import React from "react";
import { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import '../stylesheets/Trips.css'
import Kashmir_card from "./assets/images/Kashmir_card.jpg";
import Meghalaya_card from "./assets/images/Meghalaya_card.jpg";
import Kerala_card from "./assets/images/Kerala_card.jpg";
import Goa_card from "./assets/images/Goa_card.jpg";
import Gujarat_card from "./assets/images/Gujarat_card.jpg";
import Uttarakhand_card from "./assets/images/Uttarakhand_card.jpg";
import CarouselComp from "./CarouselComp";
import { Redirect } from "react-router";



class Trips extends Component{
    constructor() {
        super();
        this.state={
          redirect:false
        }
        const kashmir = {
          "name": "Kashmir",
          "image": Kashmir_card,
          "description": ""
        }
        const meghalaya = {
            "name": "Meghalaya",
            "image": Meghalaya_card,
            "description": ""
        }
        const kerala = {
            "name": "Kerala",
            "image": Kerala_card,
            "description": ""
          }
          const goa = {
            "name": "Goa",
            "image": Goa_card,
            "description": ""
          }
          const uttarakhand = {
            "name": "Uttarakhand",
            "image": Uttarakhand_card,
            "description": ""
          }
          const gujarat = {
            "name": "Gujarat",
            "image": Gujarat_card,
            "description": ""
          }
        this.placeArr = [kashmir,meghalaya,kerala,goa,gujarat,uttarakhand]
      }
        generateJSX(){
            return(
                this.placeArr.map(place => {
                    return(<div className="card border-dark text-white bg-dark" id='card_item_custom'>
                    <img className="card-img-top" src={place.image} height="350" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{place.name}</h5>
                        <p className="card-text">
                            <span>{place.description}</span><br />
                        </p>
                        <button type="button" className="btn btn-light btn-block" onClick={()=>{this.setState({redirect:true})}}>Explore</button>
                    </div>
                    </div>)
                })
            )
        
    }

    render(){
      if(this.state.redirect){
        return <Redirect to='/explore'/>
      }
        
        return(
            <Fragment>
              <CarouselComp/>
                <div className='container-fluid text-center'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3 >Lets's plan the trip of your dreams...</h3>

                </div>
                <br/>
                <div className='container-fluid'>
                <div className='card-deck' id='card_deck_custom'>
                        {
                            this.generateJSX()                          

                        }
                </div>
                </div>
                
                      
                        
            </Fragment>

        )
    }
}

export default Trips;