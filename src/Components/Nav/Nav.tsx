import classes from './Nav.module.scss'
import logo from '../../img/logo.png'
import Search from "../Search/Search";

const Nav = () => {
    return (
        <div className={classes.Nav}>
            <div className={classes.logo}>
                <img src={logo} alt="Covid logo"/>
                <span>STATISTIC</span>
            </div>
            <Search/>
        </div>
    )
}
export default Nav