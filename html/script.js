
var players = [];
function player(id) {
	this.id = id;
	this.calls = 0;
	this.raises = 0;
	this.hands = 0;
}

function new_hand() {
	for (i = 0; i < 6; i++) {
		players[i].hands++;
		update_stats(i);
	}
}

function add_call(id) {
	players[id].calls++;
	update_stats(id);
}

function add_raise(id) {
	players[id].raises++;
	update_stats(id);
}

function reset_player(id) {
	players[id] = new player(id);
	document.getElementById("pt" + id).innerHTML = "Player " + (id + 1) + " VPIP: 0 PFR: 0\t";
}

function update_stats(id) {
	var text = document.getElementById("pt" + id);
	var vpip = (players[id].calls + players[id].raises) / players[id].hands;
	var pfr = players[id].raises / players[id].hands;
	text.innerHTML = "Player " + (id + 1) + " VPIP: " + vpip.toFixed(3) + " PFR: " + pfr.toFixed(3) + "\t";
}

function create_players() {
	var container = document.getElementById("container");
	for (i = 0; i < 6; i++) {
		players[i] = new player(i);
		// Create player container element
		var player_ele = document.createElement("div");
		player_ele.className = "player";
		player_ele.id = "p" + i;

		// Create player span element
		var player_span = document.createElement("span");
		player_span.id = "pt" + i;
		player_span.innerHTML = "Player " + (i + 1) + " VPIP: 0% PFR: 0%\t";
		player_ele.appendChild(player_span);

		// Create player add call button
		var player_call = document.createElement("span");
		player_call.innerHTML = "<button type='button' onclick='add_call(" + i + ")'>Call</button>";
		player_ele.appendChild(player_call);

		// Create player add raise button
		var player_raise = document.createElement("span");
		player_raise.innerHTML = "<button type='button' onclick='add_raise(" + i + ")'>Raise</button";
		player_ele.appendChild(player_raise);
		// Create player reset button
		var player_reset = document.createElement("span");
		player_reset.innerHTML = "<button type='button' onclick='reset_player(" + i + ")'>Reset</button>";
		player_ele.appendChild(player_reset);

		container.appendChild(player_ele);

		
	}
}

