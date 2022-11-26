
window.addEventListener('load', setNFL, false);
var long = document.getElementsByName("teams").length;
var team = document.getElementsByName("teams");
var i = 0;

for (i = 0; i < long; i++) {
    team[i].addEventListener('click', changeTeam, false);
}

function changeTeam() {
    var values = [];
    var data = this.value;
    values = data.split(';');

    document.body.style.background = values[2];
    document.body.style.color = values[1];

    document.getElementById('imageholder').innerHTML =
        '<img src=images/' + values[0] + '.png width="200" height="200" alt="Go ' + values[0] + ' !" title="Go ' + values[0] + '!">';
}
function setNFL() {
    document.body.style.background = "#fff";
    document.body.style.color = '#000';
    document.getElementById('imageholder').innerHTML = '<img src="images/nfl.png" width="200" height="200" alt="This is the NFL">';
}