import { useState } from "react"; 


function MyName({name}){
    return <h1>Myname is {name ? name : 'no name'}!</h1>;
}

export default function Main(){
    return (
        <div>
            <MyName name= "koge"/>
        </div>
    );
}