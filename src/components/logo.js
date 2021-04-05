import { FaCog } from "react-icons/fa";
import './css-components/logo.css'

function Logo() {
    return (
        <div className="logo">
            <div className='symbol'>
                <div>
                    <FaCog className="cog1" ></FaCog>
                    <FaCog className="cog2"></FaCog>
                </div>   
                <FaCog className="cog3"></FaCog>
            </div>
            <div className="logo-letters">
                <div>Revelar.</div>
                <div className='global-logo'>Global</div>
            </div>
        </div>
    )
}

export default Logo
