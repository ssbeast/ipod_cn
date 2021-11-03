import './App.css';
import ZingTouch from 'zingtouch';
import { useState } from 'react';
import Screen from './components/Screen';
import Ring from './components/Ring';
import RingButton from './components/RingButton';

function App() {
  const [index,setIndex] = useState(0);
  var newScreen="one";
  const [newItems, setnewItems] = useState([]);

  const items =[
    'Message',
    'Music',
    'Games',
    'Movies',
    'Settings'
  ]

  const mouseInHandle = ()=>{

    var rot=0;
    let target = document.getElementById('interaction');
    var region = new ZingTouch.Region(target);
    var lastMenuIndex=0;
    var menuLength=6;
    var angle=25;

    region.bind(target, 'rotate', function(e) {    
      rot=e.detail.distanceFromOrigin;
    let newMenuIndex = (1) * Math.floor(rot / angle) + lastMenuIndex;
    newMenuIndex = newMenuIndex % menuLength;
    if(newMenuIndex < 0){
      newMenuIndex = menuLength + newMenuIndex
    }
    setIndex(((index+newMenuIndex)%5));
    });
  }

const   mouseOutHandle=(e)=>{
  let menu = document.querySelector('.touch-element');
  let target = document.getElementById('interaction');
  var region = new ZingTouch.Region(target);
  region.unbind(menu);
}

const clickHandler=()=>{
  if(index===0){
    newScreen="Message";
   }
   else if(index===1){
     newScreen="Music";
   }
   else if(index===2){
     newScreen="Games";
   }
   else if(index===3){
     newScreen="Movies";
   }
   else if(index===4){
     newScreen="Settings"
   }
   setnewItems([newScreen]);
}

  return (

    <div className="App">

     <Screen
     newScreen={newScreen}
     items={items}
     index={index}
     newItems={newItems}/>

     <Ring
     mouseInHandle={mouseInHandle}
     mouseOutHandle={mouseOutHandle}
     index={index}
     setnewItems={setnewItems}
     />

     <RingButton 
     clickHandler={clickHandler}/>
     
    </div>

  );
}

export default App;
