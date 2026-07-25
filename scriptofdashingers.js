let proved = '';
let feminitiv = '';

function vivodotcheta() {
let gameusers = '';
let storyusers = '';
const timee = document.getElementById('timeofcall').value;
const dea1 = document.querySelector('input[name="deatelnost1"]:checked').value;
const idofvzalgive = document.getElementById('idofvzal').value;
const story = document.getElementById('idofprovodstory').value;
const game = document.getElementById('idofprovodgame').value;
const gameuser = document.getElementById('idofusergame').value.split(' ');
const storyuser = document.getElementById('idofuserstory').value.split(' ');
const idofvipolwork = document.getElementById('idofvipol').value;
storyuser.forEach((item) => {
    storyusers += `[link${item}] [${item}], `;
})
storyusers = storyusers.slice(0, storyusers.length - 2);
for (let i = 0; i < gameuser.length; i += 2) {
    gameusers += `[link${gameuser[i]}] [${gameuser[i]}] — ${gameuser[i + 1]} баллов, `
}
gameusers = gameusers.slice(0, gameusers.length - 2);
if (document.getElementById('citty').checked) {
    feminitiv = 'а';
}
else {
    feminitiv = ''
}
if (document.querySelector('input[name="deatelnost2"]:checked').value == 'игры'){
    proved = `[link${game}] [${game}] провел${feminitiv} игры в [b]${timee}[/b].
Участники: ${gameusers}.`;
}
else if (document.querySelector('input[name="deatelnost2"]:checked').value == 'вечер сказок'){
    proved = `[link${story}] [${story}] провел${feminitiv} Вечер Сказаний в [b]${timee}[/b].
Участники: ${storyusers}.`;
}
const numberof = document.getElementById('numberofzakaz').value;
let otchet1 = `[link${idofvzalgive}] [${idofvzalgive}] - беру проведение ${dea1} в [b]${timee}[/b].`;
let otchet2 = `${proved}`;
let otchet3 = `[link${idofvipolwork}] [${idofvipolwork}] #готово №${numberof}`;
const path1 = {
    "give": otchet1,
    "provedenie": otchet2,
    "works": otchet3
}

document.getElementById('one').value = path1[document.querySelector('input[name="otchetsDS"]:checked').value];

}

document.querySelectorAll('input[type="radio"][name="deatelnost2"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll(".vtor").forEach(lol => {
            if (lol.id == radio.value) {
            lol.style.display = "block";
        }
        else {
            lol.style.display = "none";
        }
    });})});

document.querySelectorAll('input[type="radio"][name="otchetsDS"]').forEach(radio => {
    radio.addEventListener('change', () => {
    document.querySelectorAll(".pathblock").forEach(lol => {
    if (lol.id == radio.value) {
    lol.style.display = "block";
}
else {
    lol.style.display = "none";
}
if (radio.value == 'works') {
    document.querySelectorAll('.hz').forEach(hz => {
        hz.style.display = "none";
    })
}
else {
    document.querySelectorAll('.hz').forEach(hz => {
        hz.style.display = "block";
    })
}})});});
