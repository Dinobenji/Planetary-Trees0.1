var gameData = {
    Trees: 0,
    TreesPerClick: 1,
    TreesPerClickCost: 10,
  }
  
function plantTree() {
    gameData.Trees += gameData.TreesPerClick
    document.getElementById("Trees Planted").innerHTML = gameData.Trees + " Trees Planted"
    
  }
  function buyGoldPerClick() {
    if (gameData.Trees >= gameData.TreesPerClickCost) {
      gameData.Trees -= gameData.TreesPerClickCost
      gameData.TreesPerClick += 1
      gameData.TreesPerClickCost *= 2
      document.getElementById("TreesPlanted").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Planter (Currently Level " + gameData.TreesPerClick + ") Cost: " + gameData.TreesPerClickCost + " Trees"
    }
  }

  var mainGameLoop = window.setInterval(function() {
    plantTree()
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("planetaryTreesSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("planetaryTreesSave"))
if (savegame !== null) {
  gameData = savegame
}