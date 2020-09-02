new Chart(document.getElementById("pie-chart"), {
	type: "pie",
	data: {
		datasets: [
			{
				backgroundColor: ["#ffffff", "#42d8d8", "#3cba9f"],
				data: [150, 150, 300],
			},
		],
	},
	options: {
		title: {
			display: true,
		},
	},
});

new Chart(document.getElementById("pie-chart-two"), {
	type: "pie",
	data: {
		datasets: [
			{
				backgroundColor: ["#ffffff", "#42d8d8", "#3cba9f"],
				data: [150, 150, 300],
			},
		],
	},
	options: {
		title: {
			display: true,
		},
	},
});

new Chart(document.getElementById("mixed-chart"), {
	type: "bar",
	data: {
		labels: ["Feb", "May", "Aug", "Sept"],
		datasets: [
			{
				label: "Europe",
				type: "line",
				background: "transparent",
				borderColor: "#8e5ea2",
				data: [0, 5, 15, 20, 25],
				fill: false,
			},
		],
	},
	options: {
		title: {
			display: false,
		},
		legend: { display: false },
	},
});

new Chart(document.getElementById("mixed-chart-two"), {
	type: "bar",
	data: {
		labels: ["Feb", "May", "Aug", "Sept", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Europe",
				type: "line",
				background: "transparent",
				borderColor: "#ff6347",
				data: [10, 15, 20, 25, 10, 19, 17],
				fill: true,
			},
		],
	},
	options: {
		title: {
			display: false,
		},
		legend: { display: false },
	},
});

new Chart(document.getElementById("mixed-chart-three"), {
	type: "bar",
	data: {
		labels: ["Feb", "May", "Aug", "Sept", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Europe",
				type: "line",
				background: "transparent",
				borderColor: "#800080",
				data: [100, 200, 150, 250, 300, 450, 350],
				fill: true,
			},
		],
	},
	options: {
		title: {
			display: false,
		},
		legend: { display: false },
	},
});

new Chart(document.getElementById("mixed-chart-four"), {
	type: "bar",
	data: {
		labels: ["Feb", "May", "Aug", "Sept", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Europe",
				type: "line",
				background: "transparent",
				borderColor: "#ff0000",
				data: [100, 200, 150, 250, 300, 450, 350],
				fill: true,
			},
		],
	},
	options: {
		title: {
			display: false,
		},
		legend: { display: false },
	},
});

new Chart(document.getElementById("mixed-chart-five"), {
	type: "bar",
	data: {
		labels: ["Feb", "May", "Aug", "Sept", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Europe",
				type: "line",
				background: "transparent",
				borderColor: "#1e90ff",
				data: [100, 200, 150, 250, 300, 450, 350],
				fill: true,
			},
		],
	},
	options: {
		title: {
			display: false,
		},
		legend: { display: false },
	},
});

new Chart(document.getElementById("doughnut-chart"), {
	type: "doughnut",
	data: {
		datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["purple", "teal", "whitesmoke"],
				data: [2478, 5267, 734],
			},
		],
	},
});

new Chart(document.getElementById("bar-chart"), {
	type: "bar",
	data: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
		datasets: [
			{
				label: "Milestone completed",
				backgroundColor: [
					"tomato",
					"tomato",
					"tomato",
					"tomato",
					"tomato",
					"tomato",
					"tomato",
					"tomato",
					"tomato",
					"tomato",
				],
				data: [
					2000,
					1800,
					1550,
					2500,
					2200,
					2000,
					1700,
					1600,
					1800,
					2000,
				],
				fill: true,
			},
		],
	},
});

new Chart(document.getElementById("bar-chart-two"), {
	type: "bar",
	data: {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Statistics",
				backgroundColor: [
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
					"#1e90ff",
				],
				data: [
					3000,
					1900,
					2000,
					1800,
					1550,
					2500,
					2200,
					2000,
					1700,
					1600,
					1800,
					2000,
					2001,
					2020,
				],
				fill: true,
			},
		],
	},
});
