function test(myChart,x,y,a11,a12,b11,b12) {
            //--------------------Generated Random data points that Lie on a circle ---------------------------------
            


    //-------------------------------------------------------------------------------------------------------

    a = [[a11,a12],[b11,b12]];
    M = [x, y]; 
    M = numeric.transpose(M);
    
    U = numeric.svd(a).U;
    S = numeric.svd(a).S;
    V = numeric.svd(a).V;
    S = numeric.diag(S);
    
    fin =  numeric.dot(M,a);
    fin = numeric.transpose(fin);
    
    var xFinal=[];
    var yFinal=[];
    for(var i=0;i<100;i++)
    {
        xFinal.push(fin[0][i]);
        yFinal.push(fin[1][i]);
    }
    var ctx = document.getElementById(myChart);
    var c = [];
    for(var i=0;i<100;i++)
    {
        var obj = {x:xFinal[i],y:yFinal[i]};
        c.push(obj);
    }
    //--------------------------------------------
    temp = numeric.dot(M,U);
temp = numeric.transpose(temp);
    var xtemp=[];
    var ytemp=[];
    for(var i=0;i<100;i++)
    {
        xtemp.push(temp[0][i]);
        ytemp.push(temp[1][i]);
    }
var cTemp = [];
    for(var i=0;i<100;i++)
    {
        var obj = {x:xtemp[i],y:ytemp[i]};
        cTemp.push(obj);
    }
    //------------------------------------------------
    temp1 = temp;
     temp1 = numeric.transpose(temp1);
temp1 = numeric.dot(temp1,S);
temp1 = numeric.transpose(temp1);
var x=[];
    var y=[];
    for(var i=0;i<100;i++)
    {
        x.push(temp1[0][i]);
        y.push(temp1[1][i]);
    }
    var cT = [];
    for(var i=0;i<100;i++)
    {
        var obj = {x:x[i],y:y[i]};
        cT.push(obj);
    }
    
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
            data: c

            
        },
        {
            label: '2',
            pointRadius: 4,
            //pointHoverRadius: 7,
            pointBorderColor: "#212121",
            //pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "#5D4037",
            data: cTemp

            
        },
        {
            label: '3',
            pointRadius: 4,
           // pointHoverRadius: 7,
            pointBorderColor: "#212121",
            //pointHoverBackgroundColor: "rgba(75,192,192,1)", 
            pointBackgroundColor: "#8fbc8f",
            data: cT

            
        }
        ]
    },
    options: {
        showLines:false,
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)',
                
            }
        },
        points:{
            radius: 9
        },
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'

            }]
        }
    }
});
    }