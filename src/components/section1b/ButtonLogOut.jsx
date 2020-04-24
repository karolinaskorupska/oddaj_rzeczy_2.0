import React from 'react';
import FirebaseConfig from '../../FirebaseConfig';

const ButtonLogOut = () => {

    const logout = (e)=>{
        e.preventDefault();
        return FirebaseConfig.auth().signOut();
    }
    return(
        <button className="BtnLogOut"
        onClick={logout}>Wyloguj</button>
    )
}

export default ButtonLogOut;