import React from "react";


// const Player = () => {
//     return (
//     <div>
//     <video width=”100%” height=”100%” controls>
//     <source src=http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 type=”video/mp4" />
//     </video>
//     </div>
//     )
//    }
   

const Player = ( ) => {
    return(
        <div>
            <video width='500px' height='500px' controls >
            <source src="https://www.youtube.com/watch?v=iEkXnYDwAtc&list=RDg_SMM83VchM&index=3" type="video/mp4"/>
            </video>
        </div>
    )
}
   export default Player;
