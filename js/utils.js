function randomNumber(min,max){
  var min= Math.ceil(min);
  var max=Math.floor(max);
  return Math.floor((Math.random()*(max-min))+min);
}


function findScale(canvasHeight,canvasWidth){
  let yScale = window.innerHeight / canvasHeight;
  let xScale = window.innerWidth / canvasWidth;
  if(xScale < yScale) return xScale
  else return yScale;
}