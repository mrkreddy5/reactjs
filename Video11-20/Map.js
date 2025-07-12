
// function User(user){
//   return(
//     <>
//       <h1>User id : {user.id}</h1>
//       <h1>Name : {user.name}</h1>
//       <h1>Age : {user.age}</h1>
      
//     </>
//   )
// }

// export default User;




// import User from './User'

// function MapFun (){
//   let users = [
//     {
//       id:1,
//       name:"Ram",
//       age:25
//     },
//     {
//       id:2,
//       name:"Krishna",
//       age:26
//     },
//     {
//       id:3,
//       name:"RK",
//       age:27
//     }
//   ]
  
//   return (
//     <>
//     {                                            ----> {} has to be used as we are using named components
//       users.map(
//         (u)=>{
//           return <User key={u.id} id={u.id} name={u.name} age={u.age}/>     return has to be used as we wrote it as functional block
//         }
//       )
//     }
//     </>
//   );
// }

// export default MapFun;

// ------------------------------------------------------
// users.map(
//         (u)=>(
//            <User key={u.id} id={u.id} name={u.name} age={u.age}/>
//         )
//       )
