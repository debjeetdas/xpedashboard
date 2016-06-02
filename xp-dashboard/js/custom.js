$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    // calibrateWidth();
});



// window.onload = function () {
//     var activeDefectData = [{x: 3, y: 10}, {x: 2, y: 10}, {x: 3, y: 10}, {x: 6, y: 10}, {x: 9, y: 10}];
    

// // Defect Closed Graph
// var defectClosed = new CanvasJS.Chart("defectClosed",
//     {
//         animationEnabled: true,
//         axisX:{      
//             interval: 3,
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         axisY:{      
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         toolTip:{
//             enabled: false
//         },
//         legend: {
//             verticalAlign: "bottom",
//             horizontalAlign: "center"
//         },

//         data: [
//         {        
//             markerSize: 2,
//             markerType: 'none',
//             type: "area",
//             dataPoints: [

//             {x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
//             {x:new Date(2013,0,1,01,00) , y: 10},
//             {x:new Date(2013,0,1,02,00) , y: 3},
//             {x:new Date(2013,0,1,03,00) , y: 5},
//             {x:new Date(2013,0,1,04,00) , y: 2},
//             {x:new Date(2013,0,1,05,00) , y: 1},
//             {x:new Date(2013,0,1,06,00) , y: 3},
//             {x:new Date(2013,0,1,07,00) , y: 6},
//             {x:new Date(2013,0,1,08,00) , y: 14},
//             {x:new Date(2013,0,1,09,00) , y: 15},
//             {x:new Date(2013,0,1,10,00) , y: 21},
//             {x:new Date(2013,0,1,11,00) , y: 24},         
//             {x:new Date(2013,0,1,12,00) , y: 28, label: "noon" },                
//             {x:new Date(2013,0,1,13,00) , y: 26},
//             {x:new Date(2013,0,1,14,00) , y: 17},
//             {x:new Date(2013,0,1,15,00) , y: 23},
//             {x:new Date(2013,0,1,16,00) , y: 28},
//             {x:new Date(2013,0,1,17,00) , y: 22},
//             {x:new Date(2013,0,1,18,00) , y: 10},
//             {x:new Date(2013,0,1,19,00) , y: 9},
//             {x:new Date(2013,0,1,20,00) , y: 6},
//             {x:new Date(2013,0,1,21,00) , y: 4},
//             {x:new Date(2013,0,1,22,00) , y: 12},
//             {x:new Date(2013,0,1,23,00) , y: 14}
//             ]
//         }
        
        
        
//         ]
//     });

// defectClosed.render();
// defectClosed = {};

// // New Defects Graph
// var newDefect = new CanvasJS.Chart("newDefect",
//     {
//         animationEnabled: true,
//         axisX:{      
//             interval: 3,
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         axisY:{      
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         toolTip:{
//             enabled: false
//         },
//         legend: {
//             verticalAlign: "bottom",
//             horizontalAlign: "center"
//         },

//         data: [
//         {        
//             markerSize: 2,
//             markerType: 'none',
//             type: "area",
//             dataPoints: [

//             {x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
//             {x:new Date(2013,0,1,01,00) , y: 10},
//             {x:new Date(2013,0,1,02,00) , y: 3},
//             {x:new Date(2013,0,1,03,00) , y: 5},
//             {x:new Date(2013,0,1,04,00) , y: 2},
//             {x:new Date(2013,0,1,05,00) , y: 1},
//             {x:new Date(2013,0,1,06,00) , y: 3},
//             {x:new Date(2013,0,1,07,00) , y: 6},
//             {x:new Date(2013,0,1,08,00) , y: 14},
//             {x:new Date(2013,0,1,09,00) , y: 15},
//             {x:new Date(2013,0,1,10,00) , y: 21},
//             {x:new Date(2013,0,1,11,00) , y: 24},         
//             {x:new Date(2013,0,1,12,00) , y: 28, label: "noon" },                
//             {x:new Date(2013,0,1,13,00) , y: 26},
//             {x:new Date(2013,0,1,14,00) , y: 17},
//             {x:new Date(2013,0,1,15,00) , y: 23},
//             {x:new Date(2013,0,1,16,00) , y: 28},
//             {x:new Date(2013,0,1,17,00) , y: 22},
//             {x:new Date(2013,0,1,18,00) , y: 10},
//             {x:new Date(2013,0,1,19,00) , y: 9},
//             {x:new Date(2013,0,1,20,00) , y: 6},
//             {x:new Date(2013,0,1,21,00) , y: 4},
//             {x:new Date(2013,0,1,22,00) , y: 12},
//             {x:new Date(2013,0,1,23,00) , y: 14}
//             ]
//         }
        
        
        
//         ]
//     });

// newDefect.render();
// newDefect = {};

// // SEV1/SEV2 Graph
// var sev1Sev2 = new CanvasJS.Chart("sev1Sev2",
//     {
//         animationEnabled: true,
//         axisX:{      
//             interval: 3,
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         axisY:{      
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         toolTip:{
//             enabled: false
//         },
//         legend: {
//             verticalAlign: "bottom",
//             horizontalAlign: "center"
//         },

//         data: [
//         {        
//             markerSize: 2,
//             markerType: 'none',
//             type: "area",
//             dataPoints: [

//             {x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
//             {x:new Date(2013,0,1,01,00) , y: 10},
//             {x:new Date(2013,0,1,02,00) , y: 3},
//             {x:new Date(2013,0,1,03,00) , y: 5},
//             {x:new Date(2013,0,1,04,00) , y: 2},
//             {x:new Date(2013,0,1,05,00) , y: 1},
//             {x:new Date(2013,0,1,06,00) , y: 3},
//             {x:new Date(2013,0,1,07,00) , y: 6},
//             {x:new Date(2013,0,1,08,00) , y: 14},
//             {x:new Date(2013,0,1,09,00) , y: 15},
//             {x:new Date(2013,0,1,10,00) , y: 21},
//             {x:new Date(2013,0,1,11,00) , y: 24},         
//             {x:new Date(2013,0,1,12,00) , y: 28, label: "noon" },                
//             {x:new Date(2013,0,1,13,00) , y: 26},
//             {x:new Date(2013,0,1,14,00) , y: 17},
//             {x:new Date(2013,0,1,15,00) , y: 23},
//             {x:new Date(2013,0,1,16,00) , y: 28},
//             {x:new Date(2013,0,1,17,00) , y: 22},
//             {x:new Date(2013,0,1,18,00) , y: 10},
//             {x:new Date(2013,0,1,19,00) , y: 9},
//             {x:new Date(2013,0,1,20,00) , y: 6},
//             {x:new Date(2013,0,1,21,00) , y: 4},
//             {x:new Date(2013,0,1,22,00) , y: 12},
//             {x:new Date(2013,0,1,23,00) , y: 14}
//             ]
//         }
        
        
        
//         ]
//     });

// sev1Sev2.render();
// sev1Sev2 = {};

// // Planned Executed
// var plannedExecuted = new CanvasJS.Chart("plannedExecuted",
//     {
//         animationEnabled: true,
//         axisX:{      
//             interval: 3,
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         axisY:{      
//             gridThickness: 0,
//             tickThickness: 0
//             // labelAngle : 30,
//             // valueFormatString: "HHmm'hrs'"

//         },
//         toolTip:{
//             enabled: false
//         },
//         legend: {
//             verticalAlign: "bottom",
//             horizontalAlign: "center"
//         },

//         data: [
//         {        
//             markerSize: 2,
//             markerType: 'none',
//             type: "area",
//             dataPoints: [

//             {x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
//             {x:new Date(2013,0,1,01,00) , y: 10},
//             {x:new Date(2013,0,1,02,00) , y: 3},
//             {x:new Date(2013,0,1,03,00) , y: 5},
//             {x:new Date(2013,0,1,04,00) , y: 2},
//             {x:new Date(2013,0,1,05,00) , y: 1},
//             {x:new Date(2013,0,1,06,00) , y: 3},
//             {x:new Date(2013,0,1,07,00) , y: 6},
//             {x:new Date(2013,0,1,08,00) , y: 14},
//             {x:new Date(2013,0,1,09,00) , y: 15},
//             {x:new Date(2013,0,1,10,00) , y: 21},
//             {x:new Date(2013,0,1,11,00) , y: 24},         
//             {x:new Date(2013,0,1,12,00) , y: 28, label: "noon" },                
//             {x:new Date(2013,0,1,13,00) , y: 26},
//             {x:new Date(2013,0,1,14,00) , y: 17},
//             {x:new Date(2013,0,1,15,00) , y: 23},
//             {x:new Date(2013,0,1,16,00) , y: 28},
//             {x:new Date(2013,0,1,17,00) , y: 22},
//             {x:new Date(2013,0,1,18,00) , y: 10},
//             {x:new Date(2013,0,1,19,00) , y: 9},
//             {x:new Date(2013,0,1,20,00) , y: 6},
//             {x:new Date(2013,0,1,21,00) , y: 4},
//             {x:new Date(2013,0,1,22,00) , y: 12},
//             {x:new Date(2013,0,1,23,00) , y: 14}
//             ]
//         }
        
        
        
//         ]
//     });

// plannedExecuted.render();
// plannedExecuted = {};

// // Defect Age
// var defectAge = new CanvasJS.Chart("defectAge",
// {
//     animationEnabled: true,
//     axisX:{      
//         interval: 3,
//         gridThickness: 0,
//         tickThickness: 0
//         // labelAngle : 30,
//         // valueFormatString: "HHmm'hrs'"

//     },
//     axisY:{      
//         gridThickness: 0,
//         tickThickness: 0
//         // labelAngle : 30,
//         // valueFormatString: "HHmm'hrs'"

//     },
//     toolTip:{
//         enabled: false
//     },
//     legend: {
//         verticalAlign: "bottom",
//         horizontalAlign: "center"
//     },

//     data: [
//     {        
//         markerSize: 2,
//         markerType: 'none',
//         type: "area",
//         dataPoints: [

//         {x:new Date(2013,0,1,00,00) , label: "midnight", y: 12  },
//         {x:new Date(2013,0,1,01,00) , y: 10},
//         {x:new Date(2013,0,1,02,00) , y: 3},
//         {x:new Date(2013,0,1,03,00) , y: 5},
//         {x:new Date(2013,0,1,04,00) , y: 2},
//         {x:new Date(2013,0,1,05,00) , y: 1},
//         {x:new Date(2013,0,1,06,00) , y: 3},
//         {x:new Date(2013,0,1,07,00) , y: 6},
//         {x:new Date(2013,0,1,08,00) , y: 14},
//         {x:new Date(2013,0,1,09,00) , y: 15},
//         {x:new Date(2013,0,1,10,00) , y: 21},
//         {x:new Date(2013,0,1,11,00) , y: 24},         
//         {x:new Date(2013,0,1,12,00) , y: 28, label: "noon" },                
//         {x:new Date(2013,0,1,13,00) , y: 26},
//         {x:new Date(2013,0,1,14,00) , y: 17},
//         {x:new Date(2013,0,1,15,00) , y: 23},
//         {x:new Date(2013,0,1,16,00) , y: 28},
//         {x:new Date(2013,0,1,17,00) , y: 22},
//         {x:new Date(2013,0,1,18,00) , y: 10},
//         {x:new Date(2013,0,1,19,00) , y: 9},
//         {x:new Date(2013,0,1,20,00) , y: 6},
//         {x:new Date(2013,0,1,21,00) , y: 4},
//         {x:new Date(2013,0,1,22,00) , y: 12},
//         {x:new Date(2013,0,1,23,00) , y: 14}
//         ]
//     }
    
    
    
//     ]
// });

// defectAge.render();
// defectAge = {};


// // Test Progress Graph
// var plannedLastDate = new Date(2010,1,14);
// var executedLastDate = new Date(2010,1,23);
// var newPlannedDate;
// var newExecutedDate;

// var plannedValue;
// var executedValue;
// var dateVal = 15;


// // var test = 
// // console.log(test);
// // var currDayDate = new Date();
// // currDayDate.setDate(33);
// var plannedData = [
//     { x: new Date(2010,1,5), y: 10 },
//     { x: new Date(2010,1,6), y: 20 },
//     { x: new Date(2010,1,7), y: 15 },
//     { x: new Date(2010,1,8), y: 30 },
//     { x: new Date(2010,1,9), y: 50 },
//     { x: new Date(2010,1,10), y: 35 },
//     { x: new Date(2010,1,11), y: 25 },
//     { x: new Date(2010,1,12), y: 20 },
//     { x: new Date(2010,1,13), y: 40 },
//     { x: new Date(2010,1,14), y: 45 }
// ];
// var executedData = [
//     { x: new Date(2010,1,5), y: 5 },
//     { x: new Date(2010,1,7), y: 30 },
//     { x: new Date(2010,1,9), y: 40 },
//     { x: new Date(2010,1,11), y: 25 },
//     { x: new Date(2010,1,13), y: 58 },
//     { x: new Date(2010,1,15), y: 65 },
//     { x: new Date(2010,1,17), y: 43 },
//     { x: new Date(2010,1,19), y: 70 },
//     { x: new Date(2010,1,21), y: 10 },
//     { x: new Date(2010,1,23), y: 18 }
// ];
// var testProgress = new CanvasJS.Chart("testProgress",
//         {
//             animationEnabled: true,
//             axisX:{

//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 valueFormatString: "DD,MMM",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"

//             },
//             theme: "theme2",
//             axisY: {
//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 minimum: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"
//             },
//             legend:{
//                 verticalAlign: "bottom",
//                 horizontalAlign: "right"
//             },
//             data: [
//             {        
//                 type: "line",
//                 showInLegend: true,
//                 lineThickness: 2,
//                 name: "Planned",
//                 markerType: "none",
//                 color: "#01BFF3",
//                 legendMarkerType: "square",
//                 dataPoints: plannedData 
//             }//,
//             // {        
//             //     type: "line",
//             //     showInLegend: true,
//             //     name: "Executed",
//             //     color: "#8DC73F",
//             //     lineThickness: 2,
//             //     markerType: "none",
//             //     legendMarkerType: "square",
//             //     dataPoints: executedData
//             // }

            
//             ],
//           legend:{
//             cursor:"pointer",
//             itemclick:function(e){
//               if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//                 e.dataSeries.visible = false;
//               }
//               else{
//                 e.dataSeries.visible = true;
//               }
//               testProgress.render();
//             }
//           }
//         });

// testProgress.render();
// testProgress = {};

// var updateTestProgress = function() {
//     var yVal = Math.floor(Math.random() * 10) + 100;
//     newPlannedDate = new Date(plannedLastDate.getTime() + 86400000);
//     plannedLastDate = newPlannedDate;
//     plannedData.push({ x: newPlannedDate, y: yVal, });
//     testProgress.render();
// }


// setInterval(function() {
//     updateTestProgress();
// }, 2000);


// // Test Status defect
// var testStatus = new CanvasJS.Chart("testStatus",
//         {
//             animationEnabled: true,
//             axisX:{

//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 valueFormatString: "MMM",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"

//             },
//             theme: "theme2",
//             axisY: {
//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 minimum: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"
//             },
//             legend:{
//                 verticalAlign: "bottom",
//                 horizontalAlign: "right"
//             },
//             data: [
//                 {        
//                     type: "spline",
//                     showInLegend: true,
//                     lineThickness: 2,
//                     name: "All",
//                     markerType: "none",
//                     color: "#4ac9c3",
//                     dataPoints: [
//                     { x: new Date(2010,1,5), y: 700 },
//                     { x: new Date(2010,2,7), y: 710 },
//                     { x: new Date(2010,3,9), y: 658 },
//                     { x: new Date(2010,4,11), y: 734 },
//                     { x: new Date(2010,5,13), y: 963 },
//                     { x: new Date(2010,6,15), y: 847 },
//                     { x: new Date(2010,7,17), y: 853 },
//                     { x: new Date(2010,8,19), y: 869 },
//                     { x: new Date(2010,9,21), y: 943 },
//                     { x: new Date(2010,10,23), y: 970 }
//                     ]
//                 },
//                 {        
//                     type: "spline",
//                     showInLegend: true,
//                     name: "Sev1",
//                     color: "#ffd34e",
//                     lineThickness: 2,
//                     markerType: "none",

//                     dataPoints: [
//                     { x: new Date(2010,1,5), y: 560 },
//                     { x: new Date(2010,2,7), y: 540 },
//                     { x: new Date(2010,3,9), y: 558 },
//                     { x: new Date(2010,4,11), y: 544 },
//                     { x: new Date(2010,5,13), y: 693 },
//                     { x: new Date(2010,6,15), y: 657 },
//                     { x: new Date(2010,7,17), y: 663 },
//                     { x: new Date(2010,8,19), y: 639 },
//                     { x: new Date(2010,9,21), y: 673 },
//                     { x: new Date(2010,10,23), y: 660 }
//                     ]
//                 },
//                 {        
//                     type: "spline",
//                     showInLegend: true,
//                     name: "Sev2",
//                     color: "#ff2d00",
//                     lineThickness: 2,
//                     markerType: "none",

//                     dataPoints: [
//                     { x: new Date(2010,1,5), y: 123 },
//                     { x: new Date(2010,2,7), y: 345 },
//                     { x: new Date(2010,3,9), y: 456 },
//                     { x: new Date(2010,4,11), y: 567 },
//                     { x: new Date(2010,5,13), y: 678 },
//                     { x: new Date(2010,6,15), y: 789 },
//                     { x: new Date(2010,7,17), y: 890 },
//                     { x: new Date(2010,8,19), y: 946 },
//                     { x: new Date(2010,9,21), y: 990 },
//                     { x: new Date(2010,10,23), y: 1100 }
//                     ]
//                 }
//             ],
//           legend:{
//             cursor:"pointer",
//             itemclick:function(e){
//               if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//                 e.dataSeries.visible = false;
//               }
//               else{
//                 e.dataSeries.visible = true;
//               }
//               testStatus.render();
//             }
//           }
//         });

// testStatus.render();
// testStatus = {};

// // Closed VS Active
// var closedActive = new CanvasJS.Chart("closedActive",
//         {
//             animationEnabled: true,
//             axisX:{

//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 includeZero: false,
//                 lineColor: "#E6E5EB",

//             },
//             theme: "theme2",
//             axisY: {
//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 minimum: 0,
//                 includeZero: false,
//                 lineColor: "#E6E5EB",
//             },
//             legend:{
//                 verticalAlign: "bottom",
//                 horizontalAlign: "right"
//             },
//             data: [{        
//             name: "Closed Defects",
//             showInLegend: true,
//             legendMarkerType: "square",
//             type: "area",
//             markerSize: 8,
//             color:'#76dc89',
//             markerColor: '#91e3a1',
//             fillOpacity: .3,
//             lineThickness: 2,
            
//             dataPoints: [
//             {x:new Date(2013,0,1,00,00) , y: 7 },
//             {x:new Date(2013,0,1,01,00) , y: 8},
//             {x:new Date(2013,0,1,02,00) , y: 5},
//             {x:new Date(2013,0,1,03,00) , y: 7},
//             {x:new Date(2013,0,1,04,00) , y: 6},
//             {x:new Date(2013,0,1,05,00) , y: 8},
//             {x:new Date(2013,0,1,06,00) , y: 12},
//             {x:new Date(2013,0,1,07,00) , y: 24},
//             {x:new Date(2013,0,1,08,00) , y: 36},
//             {x:new Date(2013,0,1,09,00) , y: 35},
//             {x:new Date(2013,0,1,10,00) , y: 37},
//             {x:new Date(2013,0,1,11,00) , y: 29},         
//             {x:new Date(2013,0,1,12,00) , y: 34},                
//             {x:new Date(2013,0,1,13,00) , y: 38},
//             {x:new Date(2013,0,1,14,00) , y: 23},
//             {x:new Date(2013,0,1,15,00) , y: 31},
//             {x:new Date(2013,0,1,16,00) , y: 34},
//             {x:new Date(2013,0,1,17,00) , y: 29},
//             {x:new Date(2013,0,1,18,00) , y: 14},
//             {x:new Date(2013,0,1,19,00) , y: 12},
//             {x:new Date(2013,0,1,20,00) , y: 10},
//             {x:new Date(2013,0,1,21,00) , y: 8},
//             {x:new Date(2013,0,1,22,00) , y: 13},
//             {x:new Date(2013,0,1,23,00) , y: 11} 
//             ]
//         },
//         {        
//             name: "Active Defects",
//             legendMarkerType: 'square',
//             showInLegend: true,
//             type: "area",
//             markerSize: 8,
//             color:'#7da2f5',
//             markerColor: '#7da2f5',
//             lineThickness: 2,
//             fillOpacity: .3,
//             dataPoints: [

//             {x:new Date(2013,0,1,00,00) , y: 12  },
//             {x:new Date(2013,0,1,01,00) , y: 10},
//             {x:new Date(2013,0,1,02,00) , y: 3},
//             {x:new Date(2013,0,1,03,00) , y: 5},
//             {x:new Date(2013,0,1,04,00) , y: 2},
//             {x:new Date(2013,0,1,05,00) , y: 1},
//             {x:new Date(2013,0,1,06,00) , y: 3},
//             {x:new Date(2013,0,1,07,00) , y: 6},
//             {x:new Date(2013,0,1,08,00) , y: 14},
//             {x:new Date(2013,0,1,09,00) , y: 15},
//             {x:new Date(2013,0,1,10,00) , y: 21},
//             {x:new Date(2013,0,1,11,00) , y: 24},         
//             {x:new Date(2013,0,1,12,00) , y: 28},                
//             {x:new Date(2013,0,1,13,00) , y: 26},
//             {x:new Date(2013,0,1,14,00) , y: 17},
//             {x:new Date(2013,0,1,15,00) , y: 23},
//             {x:new Date(2013,0,1,16,00) , y: 28},
//             {x:new Date(2013,0,1,17,00) , y: 22},
//             {x:new Date(2013,0,1,18,00) , y: 10},
//             {x:new Date(2013,0,1,19,00) , y: 9},
//             {x:new Date(2013,0,1,20,00) , y: 6},
//             {x:new Date(2013,0,1,21,00) , y: 4},
//             {x:new Date(2013,0,1,22,00) , y: 12},
//             {x:new Date(2013,0,1,23,00) , y: 14}
//             ]
//         }
        
        
        
//         ],
//           legend:{
//             cursor:"pointer",
//             itemclick:function(e){
//               if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//                 e.dataSeries.visible = false;
//               }
//               else{
//                 e.dataSeries.visible = true;
//               }
//               closedActive.render();
//             }
//           }
//         });

// closedActive.render();
// closedActive = {};


// // Active Defects
// var activeDefects = new CanvasJS.Chart("activeDefects",
//         {
//             animationEnabled: true,
//             axisX:{

//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 valueFormatString: "MMM",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"

//             },
//             theme: "theme2",
//             axisY: {
//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 minimum: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"
//             },
//             legend:{
//                 verticalAlign: "bottom",
//                 horizontalAlign: "right"
//             },
//             data: [
//               {        
//                 type: "line",
//                 markerType: "none",
//                 color: '#1cbbb4',
//                 name: 'Monthly',
//                 showInLegend: true,
//                 dataPoints: [
//                         { x: new Date(2012, 00, 1), y: 0 },
//                         { x: new Date(2012, 01, 1), y: 414 },
//                         { x: new Date(2012, 02, 1), y: 520 },
//                         { x: new Date(2012, 03, 1), y: 460 },
//                         { x: new Date(2012, 04, 1), y: 450 },
//                         { x: new Date(2012, 05, 1), y: 500 },
//                         { x: new Date(2012, 06, 1), y: 480 },
//                         { x: new Date(2012, 07, 1), y: 480 },
//                         { x: new Date(2012, 08, 1), y: 410 },
//                         { x: new Date(2012, 09, 1), y: 500 },
//                         { x: new Date(2012, 10, 1), y: 480 },
//                         { x: new Date(2012, 11, 1), y: 510 }
//                     ]
//                 },
//                 {        
//                 type: "line",
//                 markerType: "none",
//                 color: '#f26e7e',
//                 name: 'Daily',
//                 showInLegend: true,
//                 dataPoints: [
//                         { x: new Date(2012, 00, 1), y: 0 },
//                         { x: new Date(2012, 01, 1), y: 144 },
//                         { x: new Date(2012, 02, 1), y: 250 },
//                         { x: new Date(2012, 03, 1), y: 640 },
//                         { x: new Date(2012, 04, 1), y: 540 },
//                         { x: new Date(2012, 05, 1), y: 590 },
//                         { x: new Date(2012, 06, 1), y: 840 },
//                         { x: new Date(2012, 07, 1), y: 900 },
//                         { x: new Date(2012, 08, 1), y: 140 },
//                         { x: new Date(2012, 09, 1), y: 580 },
//                         { x: new Date(2012, 10, 1), y: 360 },
//                         { x: new Date(2012, 11, 1), y: 150 }
//                     ]
//                 },
//                 {        
//                 type: "line",
//                 markerType: "none",
//                 name: 'New Defect',
//                 showInLegend: true,
//                 color: '#a864a8',
//                 dataPoints: [
//                         { x: new Date(2012, 00, 1), y: 0 },
//                         { x: new Date(2012, 01, 1), y: 250 },
//                         { x: new Date(2012, 02, 1), y: 400 },
//                         { x: new Date(2012, 03, 1), y: 470 },
//                         { x: new Date(2012, 04, 1), y: 390 },
//                         { x: new Date(2012, 05, 1), y: 520 },
//                         { x: new Date(2012, 06, 1), y: 840 },
//                         { x: new Date(2012, 07, 1), y: 700 },
//                         { x: new Date(2012, 08, 1), y: 640 },
//                         { x: new Date(2012, 09, 1), y: 750 },
//                         { x: new Date(2012, 10, 1), y: 830 },
//                         { x: new Date(2012, 11, 1), y: 900 }
//                     ]
//                 }
//             ],
//           legend:{
//             cursor:"pointer",
//             itemclick:function(e){
//               if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//                 e.dataSeries.visible = false;
//               }
//               else{
//                 e.dataSeries.visible = true;
//               }
//               activeDefects.render();
//             }
//           }
//         });

// activeDefects.render();
// activeDefects = {};

// // CLOSED DEFECTS
// var closedDefects = new CanvasJS.Chart("closedDefects",
//         {
//             animationEnabled: true,
//             axisX:{

//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 valueFormatString: "MMM",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"

//             },
//             theme: "theme2",
//             axisY: {
//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 minimum: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"
//             },
//             legend:{
//                 verticalAlign: "bottom",
//                 horizontalAlign: "right"
//             },
//             data: [
//             {        
//                 type: "spline",
//                 showInLegend: true,
//                 lineThickness: 2,
//                 name: "All",
//                 markerType: "none",
//                 color: "#4ac9c3",
//                 dataPoints: [
//                 { x: new Date(2010,1,5), y: 700 },
//                 { x: new Date(2010,2,7), y: 710 },
//                 { x: new Date(2010,3,9), y: 658 },
//                 { x: new Date(2010,4,11), y: 734 },
//                 { x: new Date(2010,5,13), y: 963 },
//                 { x: new Date(2010,6,15), y: 847 },
//                 { x: new Date(2010,7,17), y: 853 },
//                 { x: new Date(2010,8,19), y: 869 },
//                 { x: new Date(2010,9,21), y: 943 },
//                 { x: new Date(2010,10,23), y: 970 }
//                 ]
//             },
//             {        
//                 type: "spline",
//                 showInLegend: true,
//                 name: "Sev1",
//                 color: "#ffd34e",
//                 lineThickness: 2,
//                 markerType: "none",

//                 dataPoints: [
//                 { x: new Date(2010,1,5), y: 560 },
//                 { x: new Date(2010,2,7), y: 540 },
//                 { x: new Date(2010,3,9), y: 558 },
//                 { x: new Date(2010,4,11), y: 544 },
//                 { x: new Date(2010,5,13), y: 693 },
//                 { x: new Date(2010,6,15), y: 657 },
//                 { x: new Date(2010,7,17), y: 663 },
//                 { x: new Date(2010,8,19), y: 639 },
//                 { x: new Date(2010,9,21), y: 673 },
//                 { x: new Date(2010,10,23), y: 660 }
//                 ]
//             },
//             {        
//                 type: "spline",
//                 showInLegend: true,
//                 name: "Sev2",
//                 color: "#ff2d00",
//                 lineThickness: 2,
//                 markerType: "none",

//                 dataPoints: [
//                 { x: new Date(2010,1,5), y: 123 },
//                 { x: new Date(2010,2,7), y: 345 },
//                 { x: new Date(2010,3,9), y: 456 },
//                 { x: new Date(2010,4,11), y: 567 },
//                 { x: new Date(2010,5,13), y: 678 },
//                 { x: new Date(2010,6,15), y: 789 },
//                 { x: new Date(2010,7,17), y: 890 },
//                 { x: new Date(2010,8,19), y: 946 },
//                 { x: new Date(2010,9,21), y: 990 },
//                 { x: new Date(2010,10,23), y: 1100 }
//                 ]
//             },
//             {        
//                 type: "spline",
//                 showInLegend: true,
//                 name: "Sev3",
//                 color: "#a59fa3",
//                 lineThickness: 2,
//                 markerType: "none",

//                 dataPoints: [
//                 { x: new Date(2010,1,5), y: 234 },
//                 { x: new Date(2010,2,7), y: 290 },
//                 { x: new Date(2010,3,9), y: 350 },
//                 { x: new Date(2010,4,11), y: 400 },
//                 { x: new Date(2010,5,13), y: 450 },
//                 { x: new Date(2010,6,15), y: 500 },
//                 { x: new Date(2010,7,17), y: 550 },
//                 { x: new Date(2010,8,19), y: 600 },
//                 { x: new Date(2010,9,21), y: 650 },
//                 { x: new Date(2010,10,23), y: 700 }
//                 ]
//             }

            
//             ],
//           legend:{
//             cursor:"pointer",
//             itemclick:function(e){
//               if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//                 e.dataSeries.visible = false;
//               }
//               else{
//                 e.dataSeries.visible = true;
//               }
//               closedDefects.render();
//             }
//           }
//         });

// closedDefects.render();
// closedDefects = {};

// // CLOSED DEFECTS
// var ageDefects = new CanvasJS.Chart("ageDefects",
//         {
//             animationEnabled: true,
//             axisX:{

//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 valueFormatString: "MMM",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"

//             },
//             theme: "theme2",
//             axisY: {
//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 minimum: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//                 lineDashType: "dash"
//             },
//             legend:{
//                 verticalAlign: "bottom",
//                 horizontalAlign: "right"
//             },
//             data: [
//               {
//                     color: "#f4d654",
//                     name: "Age of Defects",
//                     showInLegend: true,
//                     dataPoints: [
//                         {  y: 135305 , label: "USA"},
//                         {  y: 107922, label: "Russia" },
//                         {  y: 52300, label: "China" },
//                         {  y: 40060, label: "India" },
//                         {  y: 39900, label: "Australia"},
//                         {  y: 0, label: "SA"}
//                     ]
//                 }
//             ],
//           legend:{
//             cursor:"pointer",
//             itemclick:function(e){
//               if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//                 e.dataSeries.visible = false;
//               }
//               else{
//                 e.dataSeries.visible = true;
//               }
//               ageDefects.render();
//             }
//           }
//         });

// ageDefects.render();
// ageDefects = {};


// // DEFECTS TYPE
// var defectsType = new CanvasJS.Chart("defectsType",
//         {
//             animationEnabled: true,
//             axisX:{

//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 0,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",

//             },
//             theme: "theme2",
//             axisY: {
//                 gridColor: "#EAEAEC",
//                 tickColor: "silver",
//                 gridThickness: 1,
//                 lineThickness: 1,
//                 tickThickness: 0,
//                 minimum: 0,
//                 includeZero: false,
//                 gridDashType: "dash",
//                 lineColor: "#E6E5EB",
//             },
//             legend:{
//                 verticalAlign: "bottom",
//                 horizontalAlign: "right"
//             },
//             data: [
//                 {
//                     type: "stackedColumn",
//                     color: "#18c0ed",
//                     showInLegend: true,
//                     name: "Code Defect",
//                     dataPoints: [
//                         {  y: 111338 , label: "USA"},
//                         {  y: 49088, label: "Russia" },
//                         {  y: 62200, label: "China" },
//                         {  y: 90085, label: "India" },
//                         {  y: 38600, label: "Australia"},
//                         {  y: 48750, label: "SA"}
//                     ]
//                 },  {
//                     type: "stackedColumn",
//                     color: "#f471a0",
//                     name: "Environment",
//                     showInLegend: true,
//                     dataPoints: [
//                         {  y: 135305 , label: "USA"},
//                         {  y: 107922, label: "Russia" },
//                         {  y: 52300, label: "China" },
//                         {  y: 40060, label: "India" },
//                         {  y: 39900, label: "Australia"},
//                         {  y: 0, label: "SA"}
//                     ]
//                 }
//             ],
//           legend:{
//             cursor:"pointer",
//             itemclick:function(e){
//               if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//                 e.dataSeries.visible = false;
//               }
//               else{
//                 e.dataSeries.visible = true;
//               }
//               defectsType.render();
//             }
//           }
//         });

// defectsType.render();
// defectsType = {};
// }

// setTimeout(function(){ 
//     calibrateWidth();    
// }, 500);

setInterval(function(){ 
    var contWidth = $('.data-status-cont').width();
    $('#activeDefect .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
    $('#defectClosed .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
    $('#newDefect .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
    $('#sev1Sev2 .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
    $('#plannedExecuted .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
    $('#defectAge .canvasjs-chart-container > canvas').css({ width: contWidth + 60 + 'px', left: '-55px' });

    contWidth = $('.graph-cont').width();
    $('#testProgress .canvasjs-chart-container > canvas').css({ width: contWidth + 'px'});
}, 300);

// function calibrateWidth() {
//     var contWidth = $('.data-status-cont').width();
//     $('#activeDefect .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
//     $('#defectClosed .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
//     $('#newDefect .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
//     $('#sev1Sev2 .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
//     $('#plannedExecuted .canvasjs-chart-container > canvas').css({ width: contWidth + 55 + 'px', left: '-35px' });
//     $('#defectAge .canvasjs-chart-container > canvas').css({ width: contWidth + 60 + 'px', left: '-55px' });

//     contWidth = $('.graph-cont').width();
//     $('#testProgress .canvasjs-chart-container > canvas').css({ width: contWidth + 'px'});
//     //$('#testStatus .canvasjs-chart-container > canvas').css({ width: contWidth + 'px'});
// }