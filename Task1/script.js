function FindUnvisitedRooms(jsonObj) {
	var rooms = [];
	for (var i = 0; i < jsonObj.length; i++) {
		let person = jsonObj[i];
		for (var j = 0; j < jsonObj[i].rooms.length; j++) {
			let roomName = Object.keys(person.rooms[j])[0];
			if (rooms[j] === undefined) { rooms[j] = {}; rooms[j][roomName] = false; }
			
			if (person.present && !rooms[j][roomName])
				rooms[j][roomName] = (rooms[j][roomName] || person.rooms[j][roomName]);
		}
	}
	console.log(rooms);
	
	// if needed...
	ShowUnvisitedRooms(rooms);
}

function ShowUnvisitedRooms(rooms) {
	let div = document.getElementById("result");
	while (div.firstChild)
		div.removeChild(div.firstChild);
	
	for (var i = 0; i < rooms.length; i++) {
		let roomName = Object.keys(rooms[i])[0];
		if (!rooms[i][roomName]) {
			var p = document.createElement("p");
			var t = document.createTextNode(roomName);
			p.appendChild(t);
			div.appendChild(p);
		}
	}
}