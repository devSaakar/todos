import React from 'react'
import Login from './Login'
import {ProfileProps} from "./Profile";

interface PrivateProps{
    isLoggedIn: boolean;
    component: React.ComponentType<ProfileProps>
}

const Private = ({isLoggedIn,component:Component}:PrivateProps) => {
    if(isLoggedIn){
        return <Component name="Sakar" />
    }else{
        return <Login />

    }
}

export default Private