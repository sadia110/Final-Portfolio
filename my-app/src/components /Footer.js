import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Footer() {

    return( 

        <footer className="mt-5">  
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={2} sm={10}>
                        Sadia Batool
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" sm={3}>
                        This site was made by Sadia Batool 2020.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;