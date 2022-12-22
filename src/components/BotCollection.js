import React from "react";
import BotCard from "./BotCard"

function BotCollection({botsArray, addToBotArmy, deleteBot}) {
  //console.log(botsArray)
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          botsArray.map(bot => ( <BotCard key={bot.id} bot={bot} addToBotArmy={addToBotArmy} deleteBot={deleteBot}/>))
        }
        
      </div>
    </div>
  );
}

export default BotCollection;
