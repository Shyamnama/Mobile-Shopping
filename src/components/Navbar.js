import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../logo/logo.png';
 

class Navbar extends React.Component {
    
    state = { 
        search: ""
     }

    updateSearch = (e) =>{
        this.setState({
            search: e.target.value
        })
        console.log(this.state)
    }

    render() { 
        return(
            <nav className="nav-Wrapper">
                <div className="container">
                    <ul className="right">

                        <li className="hover">
                            <Link to="/" >Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="cartIcon" ><img src={logo} alt={logo}/></Link>
                        </li>
                        <li className="hover">
                            <Link to="/cart">My Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
    }
}


export default Navbar;