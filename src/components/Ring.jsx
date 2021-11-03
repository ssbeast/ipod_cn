import {ArrowDropDownCircle, FastForward } from "@material-ui/icons"

const Ring = ({mouseInHandle,mouseOutHandle,index,setnewItems}) => {

    const backHandle=()=>{
        setnewItems([]);
      }
      const styles={
         'font-size' : '2rem',
      }

    return (
        <>
        <div id="interaction" 
        onMouseEnter={mouseInHandle}
         onMouseLeave={mouseOutHandle}>
            <div className="back" onClick={backHandle}>
            <ArrowDropDownCircle style={styles}/>    
           </div>
        <div className="backward">
            <FastForward style={styles}/>
        </div>
          <div className="forward">
            <FastForward style={styles}/>
            </div> 
          </div>
      
          </>
    )
}

export default Ring
