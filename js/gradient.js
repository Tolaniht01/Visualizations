function gradient(visualization){
A = [[3,2],[2,6]];	
b = [2,-8];
c = 0;



x1 = numeric.linspace(-4,6,11);
x2 = numeric.linspace(-4,6,11);



yfinal = [];
var f,f1,f2;

for(var i = 0; i < 11;i++){
var y = [];
for(var j = 0;j < 11;j++){


var x = [x1[i],x2[j]];
xTrans = [[x1[i]],[x2[j]]];


//y = 1/2*(x'Ax) - bx + c/////////////////
temp = numeric.dot(x,A);
f1 = (numeric.dot(temp,xTrans));
f1 = f1[0];
f1 = 1/2*f1;

f2 = numeric.dot(b,xTrans);
f2 = f2[0];

y.push((f1 + f2 + c));
///////////////////////////////////////////

}
yfinal.push(y); 
}
console.log(yfinal);

z = []; 
    cb = function(i,x,f,g,H) { z.push({i:i, x:x, f:f, g:g, H:H }); }; 
    sol = numeric.uncmin(function(x) { return ((1/2)*(((A[0][0])*x[0]*x[0]) + (A[0][1]*x[0]*x[1]) + (A[1][0]*x[0]*x[1]) + (A[1][1]*x[1]*x[1])) - b[0]*x[0] - b[1]*x[1] + c); },[1,1],1e-10,undefined,200,cb).solution;


var data = new vis.DataSet();
console.log("THe solution is");
console.log(sol);

for(var i = 0; i< numeric.dim(z)[0] ; i++){
console.log(z[i].x);
data.add([
  {id: i+1, text: 'point', x: z[i].x[0], y: z[i].x[1], z:0,style: x }
]);
}

 
var options = {
        width:  '500px',
        height: '552px',
        style: 'line',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5,
        axisColor:'#4D4D4D',
        backgrounColor:'gray',
    };

    // Instantiate our graph object.
    var container = document.getElementById(visualization);
    var graph3d = new vis.Graph3d(container, data, options);






    //------------------------------------------------------------

    var data1 = new vis.DataSet();
    // create some nice looking data with sin/cos
    var counter = 0;
    var steps = 40;  // number of datapoints will be steps*steps
    var axisMax = 150;
    var axisStep = axisMax / steps;
    for (var x = -100; x < axisMax; x+=axisStep) {
        for (var y = -100; y < axisMax; y+=axisStep) {
            var value = 1.5*x^2 + 2*x*y + 3*y^2 - 2*x + 8*y
            data1.add({id:counter++,x:x,y:y,z:value,style:value});
        }
    }
    //1.5*x^2 + 2*x*y + 3*y^2 - 2*x + 8*y

    // specify options
    var options1 = {
        width:  '500px',
        height: '552px',
        style: 'surface',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5
    };

    // Instantiate our graph object.
    var container1 = document.getElementById(visualization);
    var graph3d1 = new vis.Graph3d(container1, data1, options1);
}