import Header from "./components/Navbar/Navbar";
import {Container, Row, Col} from "react-bootstrap"
function App() {
  return (
    <div className="App">
      <Header category1={"Alquiler de Vehiculos"} category2={"Habitaciones"} category3={"Quienes Somos"}/>
      <main className="main-content">
        <Container>
          <Row className="my-5">
            <Col>
              <h1>Aca iria la Landing Page</h1>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
