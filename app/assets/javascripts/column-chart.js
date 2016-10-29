﻿window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title: {
			text: "Stacked Column Chart"
		},
		axisX: {
			interval: 10
		},
		data: [{
			type: "stackedColumn",
			dataPoints: [
			  { x: 10, y: 750 },
			  { x: 20, y: 714 },
			  { x: 30, y: 320 },
			  { x: 40, y: 560 },
			  { x: 50, y: 430 },
			  { x: 60, y: 500 },
			  { x: 70, y: 480 },
			  { x: 80, y: 280 },
			  { x: 90, y: 410 },
			  { x: 100, y: 500 }
			]
		}, {
			type: "stackedColumn",
			dataPoints: [
			  { x: 10, y: 250 },
			  { x: 20, y: 414 },
			  { x: 30, y: 919 },
			  { x: 40, y: 967 },
			  { x: 50, y: 678 },
			  { x: 60, y: 878 },
			  { x: 70, y: 787 },
			  { x: 80, y: 780 },
			  { x: 90, y: 803 },
			  { x: 100, y: 330 }
			]
		}, {
			type: "stackedColumn",
			dataPoints: [
			  { x: 10, y: 400 },
			  { x: 20, y: 917 },
			  { x: 30, y: 520 },
			  { x: 40, y: 804 },
			  { x: 50, y: 450 },
			  { x: 60, y: 969 },
			  { x: 70, y: 380 },
			  { x: 80, y: 839 },
			  { x: 90, y: 610 },
			  { x: 100, y: 850 }
			]
		}]
	});
	chart.render();
}