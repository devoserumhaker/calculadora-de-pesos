var weight = [35,38,42,45,43,34,36,41,48,32];


function media (){
  var opa = 0

  for (var i =0; i<weight.length; i++){
    opa = opa + weight[i]
  }
  var mediadospesos = opa/weight.length
  console.log (mediadospesos)
}
media()

function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

