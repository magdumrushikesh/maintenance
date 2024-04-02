

window.onload = function () {
// for double bar graph
var doubleBarGraph = new CanvasJS.Chart("chartContainer", {
    animationEnabled: false,
    title:{
        text: "Monthwise Maintenance Efforts(HRS)"
        ,fontFamily: "arial"
    },
    subtitles: [{
        text: ""
    }],
    toolTip: {
        shared: true
    },
    legend: {
        cursor: "pointer",
        itemclick: toggleDataSeries
    },
    data: [{
        type: "column",
        color: "#5C7BD9",
        name: "Breakdown",
        showInLegend: true,      
        yValueFormatString: "#,##0.# Units",
        dataPoints: [
            { label: "Jan",  y: 2.67 },
            { label: "Feb", y: 17 },
            { label: "Mar", y: 0 },
            { label: "April", y: 0 },
            { label: "May", y: 0 },
            { label: "Jun", y: 0 },
            { label: "Jul", y: 0 },
            { label: "Aug", y: 0 },
            { label: "Sept", y: 0 },
            { label: "Oct", y: 0 },
            { label: "Nove", y: 0 },
            { label: "Desc", y: 0 },
        ]
    },
    {
        type: "column",
        color: "#9FE080",
        name: "Preventive (Maintenance)",
        axisYType: "secondary",
        showInLegend: true,
        yValueFormatString: "#,##0.# ",
        dataPoints: [
            { label: "Jan", y: 0},
            { label: "Feb", y: 1 },
            { label: "March", y: 4 },
            { label: "April", y: 0 },
            { label: "May", y: 0 },
            { label: "Jun", y: 0 },
            { label: "Jul", y: 0 },
            { label: "Aug", y: 0 },
            { label: "Sept", y: 0 },
            { label: "Oct", y: 0 },
            { label: "Nove", y: 0 },
            { label: "Desc", y: 0 },
        ]
    }]
});
doubleBarGraph.render();


// pi chart 1
    var pieChart1 = new CanvasJS.Chart("chartContainerpi1", {
        animationEnabled: false,
        title: {
            text: "Breakdown Maintenanace",
            fontFamily: "arial"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 5, label: "Rejected" },
                {y: 10, label: "Completed"},
                {y: 11, label: "Verify"},
                {y: 46, label: "Assign" },
                {y: 22, label: "Resolve"}
                
            ]
        }]
    });
    pieChart1.render();


    // pi chart 2
    var pieChart2 = new CanvasJS.Chart("chartContainerpi2", {
        animationEnabled: false,
        title: {
            text: "Preventive Maintenance",
            fontFamily: "arial"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 5, label: "Rejected" },
                {y: 10, label: "Completed"},
                {y: 11, label: "Verify"},
                {y: 46, label: "Assign" },
                {y: 22, label: "Resolve"}
                
            ]
        }]
    });
    pieChart2.render();

    var basic1 = new CanvasJS.Chart("chartContainerbar1", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Machines by Breakdon efforts",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    basic1.render();

    var basic2 = new CanvasJS.Chart("chartContainerbar2", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Machines by preventive efferts",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    basic2.render();

    var basic3 = new CanvasJS.Chart("chartContainerbar3", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Breakdown Maintenance",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    basic3.render();

    var basic4 = new CanvasJS.Chart("chartContainerbar4", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Preventive Maintenance",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    basic4.render();

    // now this is for nav bar 

    var nav1 = new CanvasJS.Chart("chartContainernav2.1", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Breakdown Maintenance 2nd tab",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    nav1.render();

    var nav2 = new CanvasJS.Chart("chartContainernav2.2", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Preventive Maintenance",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    nav2.render();

    var nav3 = new CanvasJS.Chart("chartContainernav3.1", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Breakdown Maintenance 3rd Tab",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    nav3.render();

    var nav4 = new CanvasJS.Chart("chartContainernav3.2", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Preventive Maintenance",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    nav4.render();

    var nav5 = new CanvasJS.Chart("chartContainernav4.1", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Breakdown Maintenance 4th Tab",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    nav5.render();

    var nav6 = new CanvasJS.Chart("chartContainernav4.2", {
        animationEnabled: false,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top 10 Preventive Maintenance",
            fontFamily: "arial"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    nav6.render();
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }


    
    
    }

    // pi chart 1

//   Manual script for toggle tab


function showDiv(divId) {
    var allDivs = document.querySelectorAll('.pichart.show');
    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs[i].id === divId) {
            allDivs[i].style.display = 'block';
        } else {
            allDivs[i].style.display = 'none';
        }
    }
}
