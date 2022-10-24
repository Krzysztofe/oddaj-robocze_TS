import {RiMenuFill} from 'react-icons/ri';
import {GrFormClose} from 'react-icons/gr';
import {useState} from "react";
import Tshirt from '../../../asets/IconTshirt.png';
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const handleCloseMenu = () => {
        setOpen(false)
    }

    return (
        <>
            {open
                ?
                <>
                    <nav className='navigationMobile'>
                        <div className="navigationMobile__top">
                            <img src={Tshirt} className='navigationMobile__tshirt'
                                 alt='T-shirt logo'/>
                            <GrFormClose className='iconCross'
                                         onClick={() => setOpen(!open)}/>
                        </div>
                        <NavLinks handleCloseMenu={handleCloseMenu}
                        open = {open}/>
                    </nav>


                </>


                :
                <nav className='navigationMobile'>
                    <div className="navigationMobile__top">
                        <img src={Tshirt} className='navigationMobile__tshirt'
                             alt='T-shirt logo'/>
                        <RiMenuFill className='iconHamburger'
                                    onClick={() => setOpen(!open)}/>
                    </div>
                </nav>
            }
        </>
    );
}

export default MobileNavigation;