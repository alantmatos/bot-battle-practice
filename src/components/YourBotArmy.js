import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botsArmy, removeFromArmy, deleteBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            botsArmy.map(bot => ( <BotCard key={bot.id} bot={bot} addToBotArmy={removeFromArmy} deleteBot={deleteBot}/>))
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
