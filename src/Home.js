import React from "react";
import { Container, Row, Col } from "react-bootstrap";



export const Home = () => (
  <header className="item header margin-top-0">
  <div className="wrapper">
    <Container>
      <Row>
        <Col md={12} className="text-center">
          <div class="text-homeimage">
              <div className="maintext-image" data-scrollreveal="enter top over 1.5s after 0.1s">
                Increase Digital Sales
					</div>
              <div class="subtext-image" data-scrollreveal="enter bottom over 1.7s after 0.3s">
                Boost revenue with Scorilo
					</div>
            </div>
        </Col>
      </Row>
    </Container>
  </div>
  </header>
)

/*

<!-- HEADER =============================-->
<header class="item header margin-top-0">
<div class="wrapper">
	
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="text-homeimage">
					<div class="maintext-image" data-scrollreveal="enter top over 1.5s after 0.1s">
						 Increase Digital Sales
					</div>
					<div class="subtext-image" data-scrollreveal="enter bottom over 1.7s after 0.3s">
						 Boost revenue with Scorilo
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</header>*/