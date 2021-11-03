const Menu = ({idx,index,value}) => {

   var style=null;

   if(idx===index){
       console.log(`${idx} selected`);

    style={
        backgroundColor: 'darkblue',
        color: 'white',
        width: '150px',
        height: '40px',
        marginLeft: '20px',
        paddingTop: '10px'
    }
   }

    return (
        <div className="menu" style={style} >
           {value} 
        </div>
    )
}

export default Menu;
