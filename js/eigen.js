function plotVector(myChart,a11, a12, a21, a22){
  

    var data,options,chart;
    var a = [[a11,a12],[a21,a22]];
    ev = numeric.eig(a);
    //var vec=" ";
    var vec=ev.E.x;
    //document.write(vec);
    //var name="Himanshu Tolani";
    //var sp=vec.split(",");
    //document.write(vec[1][0]);
    var v1=[{x:0,y:0}, {x:vec[0][0],y:vec[1][0]}];
    //$.plot($("#flot-placeholder"),[v1]);
    //document.write(v1);
    //document.write("\n");
    var w1=[[vec[0][0]],[vec[1][0]]];
    var w2=[[vec[0][1]],[vec[1][1]]];
    var v2=[{x:0,y:0},{x:vec[0][1],y:vec[1][1]}];
    
    //document.write(v2);
    
    


    var b= numeric.dot(a,a);
    var v21 =numeric.dot(b,w1);

    var v22 =numeric.dot(b,w2);
    var v3=[{x:0,y:0}, {x:v21[0][0],y:v21[1][0]}];
    var v4=[{x:0,y:0}, {x:v22[0][0],y:v22[1][0]}];

    //document.write(v3);
    var c=numeric.dot(b,a);
    var v31 =numeric.dot(c,w1);
    var v32 =numeric.dot(c,w2);
    //document.write(v31);
    var v5=[{x:0,y:0}, {x:v31[0][0],y:v31[1][0]}];
    var v6=[{x:0,y:0}, {x:v32[0][0],y:v32[1][0]}];
    var ctx = document.getElementById(myChart);
     var scatterChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: '1',
            pointRadius: 4,
            //pointHoverRadius: 7,
            pointBorderColor: "#212121",
            //pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "rgba(255, 0, 0, 1)",
            data: v1

            
        },
        {
            label: '2',
            pointRadius: 4,
            //pointHoverRadius: 7,
            pointBorderColor: "#212121",
           // pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "rgba(255, 0, 0, 1)",
            data: v2

            
        },
        {
            label: '3',
            pointRadius: 4,
            //pointHoverRadius: 7,
            pointBorderColor: "#212121",
            //pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "rgba(255, 0, 0, 1)",
            data: v3

            
        },
        {
            label: '4',
            pointRadius: 4,
            //pointHoverRadius: 7,
            pointBorderColor: "#212121",
           // pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "rgba(255, 0, 0, 1)",
            data: v4

            
        },
        {
            label: '5',
            pointRadius: 4,
            //pointHoverRadius: 7,
            pointBorderColor: "#212121",
           // pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "rgba(255, 0, 0, 1)",
            data: v5

            
        },
        {
            label: '6',
            pointRadius: 4,
            //pointHoverRadius: 7,
            pointBorderColor: "#212121",
           // pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "rgba(255, 0, 0, 1)",
            data: v6

            
        },
        ]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});


  
   









};