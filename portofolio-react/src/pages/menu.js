import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
class Menu extends Component{
    render(){
        return(
            <header className='header'>
                <ul>
                    <li><Link to="/">Beranda</Link></li>
                    <li><Link to="/galeri">Galeri Proyek</Link></li>
                </ul>
            </header>
        );
    }
}

export default Menu;
