function Header(){
  return(
    <div className='Header'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>                  
        {/* <li><Link to="user">User</Link></li> */}
         <li><a href="/contact">Contact Us using anchor tag</a></li>     {/* entire display page will be refreshed and reuploaded */}
      </ul>
    </div>
  )
}