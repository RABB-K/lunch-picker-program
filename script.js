function addLunchToEnd(lunches,theString){
let newArray;
newArray = lunches.push(theString);

console.log(`${theString} added to the end of the lunch menu.`);

return lunches ;

}

/*function that takes an array as the first argument and a string as the second argument and add the string to the start of the array */

function addLunchToStart(lunches, theString){
  let newArray;
  newArray = lunches.unshift(theString);
  console.log(`${theString} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches){

if(lunches.length !== 0 ){
let remouvedLunch;
remouvedLunch = lunches.pop();
console.log(`${remouvedLunch} removed from the end of the lunch menu.`);
}
else if(lunches.length === 0){
  console.log("No lunches to remove.");
}
return lunches;
}

/*Remove the first element from the array by certain conditions */

function removeFirstLunch(lunches){
  
  if(lunches.length !==0){
    let removedLunch;
    removedLunch = lunches.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
  }
  else if(lunches.length === 0){
    console.log("No lunches to remove.");
  }
  return lunches;
}


function getRandomLunch(lunches){
  
  if(lunches.length !== 0){
    let randomLunch;
    randomLunch = Math.floor(Math.random()*(lunches.length));
    console.log(`Randomly selected lunch: ${lunches[randomLunch]}`);
  }
  else if(lunches.length === 0){
    console.log("No lunches available.");
  }
}


function showLunchMenu(lunches){

  if(lunches.length !== 0){
    let showedMenu = lunches. join(", ");
    console.log(`Menu items: ${showedMenu}`);
  }
  else if (lunches.length === 0){
    console.log("The menu is empty.");
  }
  
}