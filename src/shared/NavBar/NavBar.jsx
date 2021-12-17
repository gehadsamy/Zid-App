import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.scss';
import logo from "../../images/zid-logo.png";


function NavBar (){
      return (

        <>
        <Navbar className='navbar mb-5' >
          <Container className='navbar__container'>
          <Navbar.Brand href="#home">
              <img className="w-100" src={logo} alt='logo'></img>
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">الرئيسية</Nav.Link>
            <Nav.Link href="#features">التصنيفات</Nav.Link>
            <Nav.Link href="#pricing">التطبيقات</Nav.Link>
            <Nav.Link href="#pricing">طور تطبيق</Nav.Link>

          </Nav>
          </Container>
        </Navbar>
   
        
      </>

    )
}
export default NavBar ;