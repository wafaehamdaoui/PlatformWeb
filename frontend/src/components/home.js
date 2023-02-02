import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
function Home() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src="ress2.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
        <Button href='/login' style={{backgroundColor:"rgba(1, 0, 0, 0.4)",fontSize:"40px",borderColor:"black", color:"lightgrey"}}>Se Connecter</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="gym.jpg"
          alt="Second slide"
        />
        
        <Carousel.Caption >
        <Button href='/login' style={{backgroundColor:"rgba(1, 0, 0, 0.4)",fontSize:"40px",borderColor:"black", color:"lightgrey"}}>Se Connecter</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="terr.jpg"
          alt="Third slide"
        />
        <Carousel.Caption >
        <Button href='/login' style={{backgroundColor:"rgba(1, 0, 0, 0.4)",fontSize:"40px",borderColor:"black", color:"lightgrey"}}>Se Connecter</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="salle.jpg"
          alt="fourist slide"
        />
        <Carousel.Caption >
        <Button href='/login' style={{backgroundColor:"rgba(1, 0, 0, 0.4)",fontSize:"40px",borderColor:"black", color:"lightgrey"}}>Se Connecter</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="biblio.jpg"
          alt="Five slide"
        />
        <Carousel.Caption >
        <Button href='/login' style={{backgroundColor:"rgba(1, 0, 0, 0.4)",fontSize:"40px",borderColor:"black", color:"lightgrey"}}>Se Connecter</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;