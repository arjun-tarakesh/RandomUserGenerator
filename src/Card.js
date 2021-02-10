import React from "react"
import {Card, CardBody, CardTitle, CardText, Button} from "reactstrap"
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"

const myCards = ({details}) => {
    return(
        <div>
        <Card classname="cardB">
            <CardBody className="text-center " >
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-success" src={details.picture?.large}></img>
                <CardTitle >
                    <h1>
                        <span>{details.name?.title}. </span>
                        <span>{details.name?.first} </span>
                        <span>{details.name?.last} </span>
                    </h1>
                </CardTitle>
                <CardText>
                   <FaMapMarkedAlt />
                   <span>-{details.location?.city}</span>
                   
                </CardText>               
                <CardText>
                   <FaPhone />
                   <span>-{details.phone}</span>
                   
                </CardText>                
                <CardText>
                   <FaEnvelope />
                   <span> {details.email}</span>
                   
                </CardText>
                
            </CardBody>
        </Card>
        <div style={{display:"flex", justifyContent:"center"}}>
        <a href="https://randomuser.me/" target="_blank" ><button class="button">
            
            <span>API </span>
            
            
        </button></a> 
        <a href="https://github.com/arjun-tarakesh" target="_blank" ><button class="button">
            
            <span>Github </span>
            
            
        </button></a>
        </div>
        
        </div>
    )
}

export default myCards;