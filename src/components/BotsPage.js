import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [botsArray, setBotsArray] = useState([]);
  const [botsArmy, setBotsArmy] = useState([])


  function doFetch() {
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => {
        setBotsArray(data)
      })
      .catch(error => console.log('Error',error)
        )
  };


  useEffect(() => doFetch(), [])


  function addToBotArmy(bot) {
    const botToArmy = botsArmy.findIndex(item => item.id === bot.id);
    if (botToArmy === -1) {
      setBotsArmy([...botsArmy, bot])
    } else {
    }
  }

  function deleteFromArmy(bot) {
    const removeBot = botsArmy.filter(item => item.id !== bot.id)
    setBotsArmy(removeBot)
  }

  function deleteDefinitely(bot) {

    fetch('http://localhost:8002/bots/' + bot.id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    doFetch()
    deleteFromArmy(bot)
  }




  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} removeFromArmy={deleteFromArmy} deleteBot={deleteDefinitely} />
      <BotCollection botsArray={botsArray} addToBotArmy={addToBotArmy} deleteBot={deleteDefinitely} />
    </div>
  )
}

export default BotsPage;
