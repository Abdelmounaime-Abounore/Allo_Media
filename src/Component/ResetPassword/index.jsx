import './index.css'
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate
    const tokenDot = token.replace(/-/g, '.');
    const [formData, setData] = useState({
        password: ""
    })

    const handelInputChange=(e)=>{
        console.log(e.target.value)
            setData({
                ...formData,
                [e.target.name]: e.target.value
            });
      }

    return (
        <div className="forgetPass">
            hhhhhhhhhhhhh
        </div>
    );
}

export default ResetPassword;