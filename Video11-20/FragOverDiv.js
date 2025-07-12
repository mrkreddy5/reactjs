function Fun(){
  return(
    <div style= {{'display':'flex'}}>
      <FlexItems/>
    </div>
  )
}

export default Fun;


function FlexItems(){
  return (
    <>
      <div>This is div1</div>
      <div>This is div2</div>
      <div>This is div3</div>
    </>
  );
}



// output is : This is div1  This is div2   This is div3  , flex is applied each div is considered as a flex item



function FlexItems(props){
  return (
    <div>
      <div>This is div1</div>
      <div>This is div2</div>
      <div>This is div3</div>
    </div>
  );
}


/* output is : This is div1  
               This is div2   
               This is div3  , flex is not applied only outer div is considered as a flex item */
