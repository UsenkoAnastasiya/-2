import { useState } from "react";
export function Counter(){
    const [players, setPlayers] = useState([
        { id: 1, name: "Гравець 1", score: 0 },
        { id: 2, name: "Гравець 2", score: 0 },
        { id: 3, name: "Гравець 3", score: 0 }
    ]);
const  cange=(id)=>{
    setPlayers(prevplayer) => {

    }

}
return(
    <button onClick={()=>cange(players.id)} >Change</button>
);
}