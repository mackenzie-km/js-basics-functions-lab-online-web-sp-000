// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  let distance = Math.abs((42 - block));
  return distance
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, destination) {
  let distance = Math.abs(start - destination) * 264;
  return distance
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
      } else if (distance > 2500) {
        return "cannot travel that far";
      } else if (distance >= 2000) {
        return ((distance-400) * 0.02 + 25);
      } else {
        return (distance-400) * 0.02;
    }
}
