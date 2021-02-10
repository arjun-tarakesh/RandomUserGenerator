import {useState, useEffect} from "react"
import './App.css';
import {Container,
Row,
Col,
Card} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios"
import MYCards from "./Card"



function App() {
  
const [details, setDetails] = useState({})
// the root of an api must be an object
const fetchDetails = async () => {
  const {data} = await Axios.get("https://randomuser.me/api/");
  console.log("Response :", data);

  const details = data.results[0]
  setDetails(details);

};

useEffect(() => {
  fetchDetails()
}, [])


  return (
    <div className="App">
      
      <Container fluid className="p-4  App">
      <h1 style={{display:"flex", justifyContent:"center", color:"white", fontWeight:"700"}}>RANDOM USER GENERATOR</h1>
        <Row>
          <Col className="col">
            
            <MYCards details={details} />
            
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
