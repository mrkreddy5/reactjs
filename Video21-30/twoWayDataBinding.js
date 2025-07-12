import {useState} from 'react';

function TwoWayDataBinding() {
    let [text,updtext] = useState('');
    return(
        <>
            <p>Text : {text}</p>
            <input type='text' onChange={(e)=>{
                updtext(e.target.value);
            }}/>
        </>
    )
}

export default TwoWayDataBinding;