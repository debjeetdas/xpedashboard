// Planned vs Executed Graph
window.onload = function () {
    var plannedExecuted = new CanvasJS.Chart("plannedExecuted",
    {
        animationEnabled: true,
        axisX:{      
            interval: 3,
            gridThickness: 0,
            tickThickness: 0
            // labelAngle : 30,
            // valueFormatString: "HHmm'hrs'"

        },
        axisY:{      
            gridThickness: 0,
            tickThickness: 0
            // labelAngle : 30,
            // valueFormatString: "HHmm'hrs'"

        },
        toolTip:{
            enabled: false
        },
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },

        data: [
        {        
            markerSize: 2,
            markerType: 'none',
            type: "area",
            dataPoints: [

            {x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
            {x:new Date(2013,0,1,01,00) , y: 10},
            {x:new Date(2013,0,1,02,00) , y: 3},
            {x:new Date(2013,0,1,03,00) , y: 5},
            {x:new Date(2013,0,1,04,00) , y: 2},
            {x:new Date(2013,0,1,05,00) , y: 1},
            {x:new Date(2013,0,1,06,00) , y: 3},
            {x:new Date(2013,0,1,07,00) , y: 6},
            {x:new Date(2013,0,1,08,00) , y: 14},
            {x:new Date(2013,0,1,09,00) , y: 15},
            {x:new Date(2013,0,1,10,00) , y: 21},
            {x:new Date(2013,0,1,11,00) , y: 24},         
            {x:new Date(2013,0,1,12,00) , y: 28, label: "noon" },                
            {x:new Date(2013,0,1,13,00) , y: 26},
            {x:new Date(2013,0,1,14,00) , y: 17},
            {x:new Date(2013,0,1,15,00) , y: 23},
            {x:new Date(2013,0,1,16,00) , y: 28},
            {x:new Date(2013,0,1,17,00) , y: 22},
            {x:new Date(2013,0,1,18,00) , y: 10},
            {x:new Date(2013,0,1,19,00) , y: 9},
            {x:new Date(2013,0,1,20,00) , y: 6},
            {x:new Date(2013,0,1,21,00) , y: 4},
            {x:new Date(2013,0,1,22,00) , y: 12},
            {x:new Date(2013,0,1,23,00) , y: 14}
            ]
        }
        
        
        
        ]
    });

plannedExecuted.render();
plannedExecuted = {};

    var defectAge = new CanvasJS.Chart("defectAge",
    {
        animationEnabled: true,
        axisX:{      
            interval: 3,
            gridThickness: 0,
            tickThickness: 0
            // labelAngle : 30,
            // valueFormatString: "HHmm'hrs'"

        },
        axisY:{      
            gridThickness: 0,
            tickThickness: 0
            // labelAngle : 30,
            // valueFormatString: "HHmm'hrs'"

        },
        toolTip:{
            enabled: false
        },
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },

        data: [
        {        
            markerSize: 2,
            markerType: 'none',
            type: "area",
            dataPoints: [

            {x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
            {x:new Date(2013,0,1,01,00) , y: 10},
            {x:new Date(2013,0,1,02,00) , y: 3},
            {x:new Date(2013,0,1,03,00) , y: 5},
            {x:new Date(2013,0,1,04,00) , y: 2},
            {x:new Date(2013,0,1,05,00) , y: 1},
            {x:new Date(2013,0,1,06,00) , y: 3},
            {x:new Date(2013,0,1,07,00) , y: 6},
            {x:new Date(2013,0,1,08,00) , y: 14},
            {x:new Date(2013,0,1,09,00) , y: 15},
            {x:new Date(2013,0,1,10,00) , y: 21},
            {x:new Date(2013,0,1,11,00) , y: 24},         
            {x:new Date(2013,0,1,12,00) , y: 28, label: "noon" },                
            {x:new Date(2013,0,1,13,00) , y: 26},
            {x:new Date(2013,0,1,14,00) , y: 17},
            {x:new Date(2013,0,1,15,00) , y: 23},
            {x:new Date(2013,0,1,16,00) , y: 28},
            {x:new Date(2013,0,1,17,00) , y: 22},
            {x:new Date(2013,0,1,18,00) , y: 10},
            {x:new Date(2013,0,1,19,00) , y: 9},
            {x:new Date(2013,0,1,20,00) , y: 6},
            {x:new Date(2013,0,1,21,00) , y: 4},
            {x:new Date(2013,0,1,22,00) , y: 12},
            {x:new Date(2013,0,1,23,00) , y: 14}
            ]
        }
        
        
        
        ]
    });

defectAge.render();
defectAge = {};
}