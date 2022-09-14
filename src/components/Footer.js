import { Container, Col, Row } from "react-bootstrap";
export default function Footer() {
    return (
        <Container style={{display:'flex', justifyContent:'center'}}>
            <Row>
                <Col md={20} >
                    <footer>
                     <p className="lead" id="creds"> &nbsp;&nbsp;&nbsp; Credits Saahil, David, TD, theo</p>
                     {/* <p id="copyright"> &copy; Saahil - 2022 </p>    */}
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}