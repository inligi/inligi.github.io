//не трогайте апикей умоляю
const API_KEY = "f3c48b9efc28fc03cdbb2e2210b22c6a";
const sos1 = document.getElementById("ssilka1");
const sos2 = document.getElementById("ssilka2");
let kyka = [{id: 0, name:`<input class="pricol sborka" type="text" name="0" id="vid0" value=''>
    <input class="pricol sborka" type="number" name="0" id="kolvo0" style="width: 50px;" value=''>
    <br id="probel0">`}];
let cooky = 1;
document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`;

const inputDate = document.getElementById('dateofcall')

const maska1 = {
    mask: "00.00",
    lazy: false,
    placeholderChar: "0"
}

const mask1 = IMask(inputDate, maska1);

function deleteres(del) {
    kyka = kyka.filter(item => item.id !== del);
    document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`
}

function resursi(){
    kyka.push({id: cooky, name:`<input class="pricol sborka" type="text" name="${cooky}" id="vid${cooky}" value="">
    <input class="pricol sborka" type="number" name="${cooky}" id="kolvo${cooky}" style="width: 50px;" value="">
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="del${cooky}" onclick="deleteres(${cooky})">Удалить</button>
    <br id="probel${cooky}">`});
    document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`;
    cooky += 1;

}

async function uploadImage(classes) {
    const fileInput = document.getElementById(`${classes}`);
    const file = fileInput.files[0];
    if (!file) {
        alert("Скриншот не выбран");
        return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
        
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            const imageUrl = data.data.url;
            alert("Скриншот успешно выложен на ImgBB");
            sos1.value = `${imageUrl}`
            sos2.value = `${imageUrl}`;
        } else {
            alert("Ошибка загрузки: " + (data.error?.message || "неизвестная ошибка"));
        }
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Произошла ошибка при загрузке: " + error.message);
    }
}


function vivodotcheta() {
let hunterssbor = "";
let nosessbor = "";
let nonormasbor = "";
let rescall = "";
let kinmunkai = "";
const datee = document.getElementById("dateofcall").value;
const timee = document.getElementById("timeofcall").value;
const idofcallersbor = document.getElementById("idofcaller").value;
const idofvedsbor = document.getElementById("idofved").value;
const idofhunterssbor = document.getElementById("idofhunters").value.split(" ");
const idofnosessbor = document.getElementById("idofnoses").value.split(" ");
const idofnonormasbor = document.getElementById("idofnonorma").value.split(" ");
const idofhunterlonely = document.getElementById("idofhunter").value;
const kolvodichilonely = document.getElementById("kolvodichi").value;
const sos1 = document.getElementById("ssilka1").value;
const sos2 = document.getElementById("ssilka2").value;
idofhunterssbor.forEach((item) => {
hunterssbor += `[link${item}] [${item}], `;
})
idofnosessbor.forEach((item) => {
    nosessbor += `[link${item}] [${item}], `;
})
if (idofnonormasbor.length !== 0 & idofnonormasbor[0] !== "") {
idofnonormasbor.forEach((item) => {
    nonormasbor += `[link${item}] [${item}], `;
})}
else {
    nonormasbor = "—  ";
}
hunterssbor = hunterssbor.slice(0, hunterssbor.length - 2);
nosessbor = nosessbor.slice(0, nosessbor.length - 2);
nonormasbor = nonormasbor.slice(0, nonormasbor.length - 2);
const idofuchastnikcall = document.getElementById("idofuchastnik").value;
for (let i = 0; i < kyka.length; i ++) {
    const id = kyka[i].id;
    const vidInput = document.getElementById(`vid${id}`);
    const kolvoInput = document.getElementById(`kolvo${id}`);
    if (vidInput && kolvoInput) {
        rescall += `${vidInput.value} — [${kolvoInput.value}], `;
    }
}
rescall = rescall.slice(0, rescall.length - 2);
const idoforgkin = document.getElementById("idoforg").value;
const idofuchastnikkin = document.getElementById("idofuchasthikikin").value.split(" ");
for (let i = 0; i < idofuchastnikkin.length; i += 2) {
    kinmunkai += `[link${idofuchastnikkin[i]}] [${idofuchastnikkin[i]}] — [${idofuchastnikkin[i + 1]}], `
}
kinmunkai = kinmunkai.slice(0, kinmunkai.length - 2);
let otchet1 = `[b]Охотничий патруль, ${datee}, ${timee}[/b]
[b]Собирающий:[/b] [link${idofcallersbor}] [${idofcallersbor}]
[b]Ведущий:[/b] [link${idofvedsbor}] [${idofvedsbor}]
[b]Охотящиеся:[/b] ${hunterssbor}
[b]Носильщики:[/b] ${nosessbor}
[b]Не выполнили норму:[/b] ${nonormasbor}`
let otchet2 = `[b]Одиночная охота, ${datee}, ${timee}[/b]
[b]Охотящийся:[/b] [link${idofhunterlonely}] [${idofhunterlonely}]
[b]Количество пойманной дичи:[/b] [${kolvodichilonely}]
[b]Скриншот истории:[/b] [url=${sos1}][скриншот][/url]`
let otchet3 = `[b]Добыча ресурсов, ${datee}, ${timee}[/b]
[b]Участник:[/b] [link${idofuchastnikcall}] [${idofuchastnikcall}]
[b]Вид деятельности:[/b] ${document.querySelector('input[name="deatelnost"]:checked').value}
[b]Количество добытых ресурсов:[/b] ${rescall}
[b]Скриншот истории:[/b] [url=${sos2}][скриншот][/url]`
let otchet4 = `[b]Кин-мун-кай, ${datee}, ${timee}[/b]
[b]Организатор:[/b] [link${idoforgkin}] [${idoforgkin}]
[b]Участники и количество пойманной дичи:[/b] ${kinmunkai}`
const path1 = {
    "sbor": otchet1,
    "lonely": otchet2,
    "call": otchet3,
    "kin": otchet4
}

document.getElementById('one').value = path1[document.querySelector('input[name="otchetsJG"]:checked').value];

}

document.querySelectorAll('input[type="radio"][name="otchetsJG"]').forEach(radio => {
    radio.addEventListener('change', () => {
    document.querySelectorAll(".pathblock").forEach(lol => {
    if (lol.id == radio.value) {
    lol.style.display = "block";
}
else {
    lol.style.display = "none";
}})});});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('sborka')) {
            const id = Number(e.target.name);
            const found = kyka.find(item => item.id === id);
            if (found) {
                const index = kyka.findIndex(item => item.id === id);
                
                if (found.id == 0) {
                    kyka[index].name = `<input class="pricol sborka" type="text" name="0" id="vid0" value='${document.getElementById("vid0").value}'>
    <input class="pricol sborka" type="number" name="0" id="kolvo0" style="width: 50px;" value='${document.getElementById("kolvo0").value}'>
    <br id="probel0">`;
                } else {
                    kyka[index].name = `<input class="pricol sborka" type="text" name="${id}" id="vid${id}" value="${document.getElementById(`vid${id}`).value}">
    <input class="pricol sborka" type="number" name="${id}" id="kolvo${id}" style="width: 50px;" value="${document.getElementById(`kolvo${id}`).value}">
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="del${id}" onclick="deleteres(${id})">Удалить</button>
    <br id="probel${id}">`;
                }
            }
        }
    });
});
