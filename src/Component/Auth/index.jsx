import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const Authentification = () => {
    const [action, setAction] = useState("Register")
    return (
        <div className='container'>
            <div className='header'>
                <div>{action}</div>
            </div>
            <div className='form'>
                {action === "Login" ?
                    <>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" placeholder='User Name .. ' />
                        </div>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" placeholder='Password .. ' />
                        </div>
                    </> :
                    <>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" placeholder='User Name .. ' />
                        </div>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" placeholder='Password .. ' />
                        </div>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="email" placeholder='Email .. ' />
                        </div>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faPhone} />
                            <input type="text" placeholder='Phone .. ' />
                        </div>
                        <div className='inputs'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <input type="text" placeholder='Adress .. ' />
                        </div>
                        <div className='input-img'>
                            <FontAwesomeIcon icon={faImage} />
                            <input type="file" />
                        </div>
                    </>
                }

            </div>
            <div className='buttons'>
                {action === "Register" ?
                    <></> :
                    <div>
                        <div className="forgot-password">Forgot Password</div>
                        {/* <div className='underline'></div> */}
                    </div>
                }
                <div className='submits'>
                    <div className={action === "Login" ? "state" : "submit"} onClick={() => { setAction("Register") }}>Register</div>
                    <div className={action === "Register" ? "state" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default Authentification;
