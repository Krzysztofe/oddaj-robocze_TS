import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

const NavBar = () => {
    return (
        <>
            <div className='wrapper wrapper--navigation'>
                <Navigation/>
            </div>
                <NavigationMobile/>
        </>

    );
};

export default NavBar;