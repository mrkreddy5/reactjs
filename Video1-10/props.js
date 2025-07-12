// props" (short for properties) are a way to pass data from a parent component to a child component.


// function User (props) {              ==> instead of props (name) we can use whatever we want
//     return (
//         <h1>hello {props.name}</h1>
//     )
// }

// export default User;



// App.js

// import User from  "./User"

// function PropsHandling (){               ====> parent component , User is child component
//   return (
//     <User name="ram" age='20'/>     ===> Function calling , objects has to be passed as key and value
//   );
// }

// export default PropsHandling



// function User (props) {
//     console.log(props);                          ===> return entire object for n number of object calls
//     return (
//         <>
//             <h1>hello {props.name}</h1>
//             <h1>age {props.age}</h1>
//         </>
//     )
// }

// export default User;



// import User from  "./User"

// function PropsHandling (){
//   return (
//     <>
//       <User name="ram" age='20'/>
//       <User name="bheem" age='22'/>
//       <User name="krishna" age='21'/>
//     </>
//   );
// }

// export default PropsHandling


// --------------------------------------------------------------------------------------


// CLASS COMPONENTS

/*
same code in app.js                                 ---> parent is functional component, child is class component
the child component is class component

import React from 'react'

class User extends React.Component{
    constructor(props){}                                 ----> no need to mention this , by default this will be mentioned
    
    render(){ 
        console.log(this.props);
        return (
            <>
                <h1>hello {this.props.name}</h1>           ----> this indicates current object , if it is not used leads to error
                <h1>age {this.props.age}</h1>
                
            </>
        )
    }
}

export default User;



*/



/*

import React from 'react'

class User extends React.Component{
    constructor(props){
        super(props);        ------> here , in a class component that uses a constructor, you must call super(props) before accessing this.
    }                        -------> if constructor is not used , no problem at all
    render(){ 
        console.log(this.props);
        return (
            <>
                <h1>hello {this.props.name}</h1>
                <h1>age {this.props.age}</h1>
                
            </>
        )
    }
}


export default User;



*/