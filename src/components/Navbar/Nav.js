// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// // import '../Navbar/Nav.css';

// function Nav() {

//     const [nav, setnav] = useState(false);

//     const changeBackground = () => {
//         if (window.scrollY >= 50) {
//             setnav(true);
//         }
//         else {
//             setnav(false);
//         }
//     }
//     window.addEventListener('scroll', changeBackground);

//     return (
//         <div className='gifadd'>
//             <nav className={nav ? 'nav active' : 'nav'}>
//                 <NavLink to='/' className='rightnav' >
//                     {/* <img src={ } alt='' /> */}techFEST'21
//                 </NavLink>
//                 <input type='checkbox' className='menu-btn' id='menu-btn' />
//                 <label className='menu-icon' for='menu-btn'>
//                     <span className='nav-icon'></span>
//                 </label>
//                 <ul className='navlist'>
//                     <li><NavLink to='/pr-intern'>PR Intern</NavLink></li>
//                     <li><NavLink to='/register'>Register</NavLink></li>
//                     <li><NavLink to='/nav'><FaBars /></NavLink></li>


//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Nav

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        techFEST'21
                    </Typography>


                    <Button color="inherit">PR Intern</Button>
                    <Button color="inherit">Register</Button>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}
