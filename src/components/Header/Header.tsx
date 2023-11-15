import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate= useNavigate();

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={()=> navigate('/')}> <img src="src/assets/images/LogoNombre.svg" width="261" height="48" alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
                        <Nav.Link onClick={()=> navigate('/componentes')}>Componentes</Nav.Link>
                        <Nav.Link onClick={()=> navigate('/administracion')}>Administracion de Domicilio</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}
export default Header;