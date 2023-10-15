import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button, Card, CardGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar variant='dark'  expand="lg" bg='dark'>
          <Container className='bg-dark'>
            <Navbar.Brand href="#home">Express Travelers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#destination">Destination</Nav.Link>
                <Nav.Link href="#offers">Offer</Nav.Link>
                <Nav.Link href="#home">About</Nav.Link>
                {/* <Nav.Link href="#Destination">Destination</Nav.Link> */}
                <NavDropdown title="Social Links" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#insta/3.1">Instagram</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Facebook
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#Twitter/3.3">Twitter</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#whatsapp/3.4">
                    Whatsapp Channel
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px-4  my-5 ">
            <Col sm={7} >
              <Image
                src='https://picsum.photos/900/400'
                fluid
                rounded
              />
            </Col>{/*grid system total is always 12 */}
            <Col sm={3} >
              <h1 className=" fw-light">Family Vacation </h1>
              <p className=' mt-4'> Book Right now Travel With us Get 30% Discount Call Right Now! </p>
              <Button variant='outline-primary'>Call For Action</Button>
            </Col>
          </Row>
          <Row className='mx-1'>
            <Card className=' text-center bg-secondary text-white my-5 p-4 '>
              <Card.Body>
                fascinating travel destinations, choosing the perfect vacation spot can present a challenge. That's why U.S. News used expert opinions, reader votes and current trends – and evaluated sights, cultures, scenic beauty, food options and more – to compile this list of the world's best places to visit. Use these recommendations to craft your travel bucket list, and cast your vote below to help us determine next year's ranking.
              </Card.Body>
            </Card>
          </Row>

          <CardGroup>
            <Card className=' my-2 mx-2 rounded-3'  >
              <Card.Img variant="top" src="https://picsum.photos/id/238/320/200" />
              <Card.Body>
                <Card.Title>New York</Card.Title>
                <Card.Text>
                  New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.     </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>

            </Card>
            <Card className=' my-2 mx-2 rounded-3'  >
              <Card.Img variant="top" src="https://picsum.photos/id/236/320/200" />
              <Card.Body>
                <Card.Title>Norway</Card.Title>
                <Card.Text>
                  Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for notably at Lillehammer’s Olympic resort.
                </Card.Text>
                <Button className='m-1' variant="primary">Book Now</Button>
              </Card.Body>

            </Card>
            <Card className=' my-2 mx-2 rounded-3'  >
              <Card.Img variant="top" src="https://picsum.photos/id/228/320/200" />
              <Card.Body>
                <Card.Title>Taxes</Card.Title>
                <Card.Text>
                  its legendary cowboy culture, its large cities, its diverse landscapes, its delicious Tex-Mex cuisine, and its strong southern hospitality. It is also famous for its cattle and oil industry, its rodeos, its music, and its unique Texan culture
                </Card.Text>
                <Button className=' bottom-0' variant="primary">Book Now</Button>
              </Card.Body>

            </Card>
          </CardGroup>
        </Container>
      </main>
      <footer className=' py-5 mt-5 bg-dark '>
        <p class="text-center text-white">Copyright @ Vaibhav Gupta 2023</p>
      </footer>
    </div>
  );
}
export default App;
