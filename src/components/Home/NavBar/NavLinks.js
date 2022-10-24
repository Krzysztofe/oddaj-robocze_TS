import {HashLink} from "react-router-hash-link";
import {Link} from 'react-router-dom'
import {auth} from '../../Libraries/FireBaseConfig';
import {motion} from 'framer-motion'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useNavigate} from "react-router";

const NavLinks = ({handleCloseMenu, open}) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const propsCloseMenu = () => {
        if (typeof handleCloseMenu === 'function') {
            return handleCloseMenu()
        }
    }

    const handleLogout = () => {
        auth.signOut();
        navigate('/wylogowano');
        propsCloseMenu();
    }

    return (
        <>
            <ul className='listItems'>

                <Link to='/'
                      className='link'>
                    <motion.li onClick={propsCloseMenu}
                               initial={{opacity: 0, y: 0}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 0.1}}>
                        strona główna
                    </motion.li>
                </Link>


                <HashLink smooth to='#simpleSteps'
                          className='link'>
                    <motion.li onClick={propsCloseMenu}
                               initial={{opacity: 0, y: -40}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 0.2}}>
                        o co chodzi
                    </motion.li>
                </HashLink>


                <HashLink smooth to='#aboutUs'
                          className='link'>
                    <motion.li onClick={propsCloseMenu}
                               initial={{opacity: 0, y: -40}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 0.3}}>
                        o nas
                    </motion.li>
                </HashLink>


                <HashLink smooth to='#whoWeHelp'
                          className='link'>
                    <motion.li onClick={propsCloseMenu}
                               initial={{opacity: 0, y: -40}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 0.4}}>
                        fundacja i organizacje
                    </motion.li>
                </HashLink>


                <HashLink smooth to='#contact'
                          className='link'>
                    <motion.li onClick={propsCloseMenu}
                               initial={{opacity: 0, y: -40}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 0.5}}>
                        kontakt
                    </motion.li>
                </HashLink>

            </ul>
            {user?.email
                ?
                <ul className='logItems'>

                    <Link to=''
                          className='link link--log'>
                        <motion.li initial={{opacity: 0, y: -40}}
                                   animate={{opacity: 1, y: 0}}
                                   transition={{delay: 0.6}}>
                            cześć {user?.email}
                        </motion.li>
                    </Link>

                    <Link to='oddaj'
                          className='link link--log'>
                        <motion.li onClick={propsCloseMenu}
                                   initial={{opacity: 0, y: -40}}
                                   animate={{opacity: 1, y: 0}}
                                   transition={{delay: 0.7}}>
                            oddaj rzeczy
                        </motion.li>
                    </Link>

                    <motion.li className='link link--log'
                               onClick={handleLogout}
                               initial={{opacity: 0, y: -40}}
                               animate={{opacity: 1, y: 0}}
                               transition={{delay: 0.8}}>
                        wyloguj
                    </motion.li>

                </ul>
                :
                <ul className='logItems'>

                    <Link to="/logowanie"
                          className='link link--log'>
                        <motion.li onClick={propsCloseMenu}
                                   initial={{opacity: 0, y: -40}}
                                   animate={{opacity: 1, y: 0}}
                                   transition={{delay: 0.6}}>
                            zaloguj się
                        </motion.li>
                    </Link>

                    <Link to="/rejestracja"
                          className='link link--log'>
                        <motion.li onClick={propsCloseMenu}
                            initial={{opacity: 0, y: -40}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.7}}>
                            załóż konto
                        </motion.li>
                    </Link>

                </ul>
            }
        </>
    );
};

export default NavLinks;