import Ipod from '../utils/Ipod';
import './screen.css';
import SecondScreen from './SecondScreen';
import SideImage from './SideImage';
const Screen = ({index,items,newItems}) => {

    return (
        
        <div id="screen">
            <div className="side1">
            <h3>Ninja iPod</h3>

           { newItems.length>0? <SecondScreen 
           newItems={newItems}/> :

            items.map((value,idx)=>{
              return( <Ipod
               idx={idx}
               index={index}
               value={value} />)
           })}

            </div>
            {
            newItems.length<=0? <SideImage/>: null
            }
            
        </div>
    )
}

export default Screen;
