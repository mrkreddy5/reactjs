import {useReducer} from 'react';

function App(){

    const initialState = {
        name : "Ramakrishna",
        age : 21,
        mobile : "7780301094",
        balance : 25000
    }

    function accountUpdater(state, action){
        switch(action.type){
            case 'DEPOSIT': return {...state, balance : state.balance + action.payload};
            case 'WITHDRAW': return {...state, balance : state.balance - action.payload};
            case 'NAMEUPDATE': return {...state, name : action.payload};
            case 'MOBILEUPDATE': return {...state, mobile : action.payload};
            default : return state;
        }
    }

    const handleNameUpdate = () => {
        const newName = prompt("Enter new name");
        if(newName) {
            dispatch({type : 'NAMEUPDATE', payload : newName});
        }
    }

    const handleMobileUpdate = () => {
        const newMobile = prompt("Enter new Mobile");
        if(newMobile) {
            dispatch({type : 'MOBILEUPDATE', payload : newMobile});
        }
    }

    const [account, dispatch] = useReducer(accountUpdater, initialState);

    return(
        <div >
            <div>
                <h1>Account Details</h1>
                <h2>Name: {account.name} </h2>
                <h2>Age : {account.age}</h2>
                <h2>Mobile : {account.mobile} </h2>
                <h2>Balance : {account.balance} </h2>
            </div>

            <div>
                <button onClick={() => dispatch({type: 'DEPOSIT', payload: 1000})}>Deposit</button>
                <button onClick={() => dispatch({type: 'WITHDRAW', payload: 1000})}>Withdraw</button>
                <button onClick={() => handleNameUpdate()}>Update Name</button>
                <button onClick={() => handleMobileUpdate()}>Update Mobile</button>
            </div>
        </div>
    )
}

export default App;