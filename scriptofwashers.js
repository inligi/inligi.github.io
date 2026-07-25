//не трогайте апикей умоляю
const API_KEY = "1ca34fe449bc4503d2d083f208f8c262";
let mouse = '';
let prim = '';
let kyka = [{id: 0, name:`<input class="pricol sborka" type="text" name="0" id="vid0" value=''>
    <br id="probel0">`}];
let cooky = 1;
document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`;

function deletelocate(del) {
    kyka = kyka.filter(item => item.id !== del);
    document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`
}

function addlocate(){
    kyka.push({id: cooky, name:`<input class="pricol sborka" type="text" name="${cooky}" id="vid${cooky}" value="">
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="del${cooky}" onclick="deletelocate(${cooky})">Удалить</button>
    <br id="probel${cooky}">`});
    document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`;
    cooky += 1;

}

async function uploadImage(classes, am) {
    const fileInput = document.getElementById(`${classes}`);
    if (!fileInput) {
        alert("Элемент загрузки не найден");
        return;
    }
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
            document.getElementById(am).value = `${imageUrl}`;
        } else {
            alert("Ошибка загрузки: " + (data.error?.message || "неизвестная ошибка"));
        }
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Произошла ошибка при загрузке: " + error.message);
    }
}


function vivodotcheta() {
let users = '';
let locatesuborka = '';
const vidsboratrav = document.getElementById('vidsbora').value;
const idofvedWSpatrul = document.getElementById('idofvedWS').value;
const idofuser = document.getElementById("idofuserWS").value.split(" ");
const kolvoresovpatrul = document.getElementById('kolvoresov').value;
const mishi = document.getElementById('mishiandid').value.split(" ");
const idouseruborkaa = document.getElementById('idouseruborka').value;
const viduborkiuborka = document.getElementById('viduborki').value;
const ubrannoeuborka = document.getElementById('ubrannoe').value;
const sos1 = document.getElementById('ssilka1').value;
const sos2 = document.getElementById('ssilka2').value;
const idofkolvolizz = document.getElementById('idofkolvoliz').value;
const idofuchastniklizz = document.getElementById('idofuchastnikliz').value;
idofuser.forEach((item) => {
    users += `[link${item}] [${item}], `;
})
users = users.slice(0, users.length - 2);
if (document.getElementById('vidsbora').value == "мховник") {
    mouse = '\n[b]Количество пойманных мышей[/b]: ';
    for (let i = 0; i < mishi.length; i += 2) {
        mouse += `[link${mishi[i]}] [${mishi[i]}] [${mishi[i + 1]} мышей], `
    }
    mouse = mouse.slice(0, mouse.length - 2);
}
else {
    mouse = '';
}
for (let i = 0; i < kyka.length; i ++) {
    const id = kyka[i].id;
    const vidInput = document.getElementById(`vid${id}`);
    if (vidInput) {
        locatesuborka += `${vidInput.value}, `;
    }
}
locatesuborka = locatesuborka.slice(0, locatesuborka.length - 2);
if (document.getElementById('viduborki').value == "относка оффов") {
    prim = `было убрано [${ubrannoeuborka}] котов с локаций [${locatesuborka}].`;
}
else if (document.getElementById('viduborki').value == "чистка в КсД") {
    prim = `было убрано [${ubrannoeuborka}] падали.`;
}
else if (document.getElementById('viduborki').value == "уборка в Тихой чаще") {
    prim = `было убрано [${ubrannoeuborka}] предметов в Тихой чаще.`;
}
let otchet1 = `[b]Вид сбора[/b]: [${vidsboratrav}]
[b]Ведущий[/b]: [link${idofvedWSpatrul}] [${idofvedWSpatrul}]
[b]Участники[/b]: ${users}
[b]Количество собранных ресурсов[/b]: [${kolvoresovpatrul}]${mouse}`
let otchet2 = `[b]Вид уборки[/b]: [${viduborkiuborka}]
[b]Участник[/b]: [link${idouseruborkaa}] [${idouseruborkaa}]
[b]Примечание[/b]: ${prim} [url=${sos1}][доказательство][/url]`
let otchet3 = `[b]Участник[/b]: [link${idofuchastniklizz}] [${idofuchastniklizz}]
[b]Количество[/b]: [${idofkolvolizz}]. [url=${sos2}][доказательство][/url]`;
const path1 = {
    "patrul": otchet1,
    "uborka": otchet2,
    "liz": otchet3
}

document.getElementById('one').value = path1[document.querySelector('input[name="otchetsWS"]:checked').value];

}

document.querySelectorAll('input[type="radio"][name="otchetsWS"]').forEach(radio => {
    radio.addEventListener('change', () => {
    document.querySelectorAll(".pathblock").forEach(lol => {
    if (lol.id == radio.value) {
    lol.style.display = "block";
}
else {
    lol.style.display = "none";
}})});});

document.getElementById('vidsbora').addEventListener('change', () => {
    if (document.getElementById('vidsbora').value == "мховник") {
        document.querySelector('.mouses').style.display = 'block';
    }
    else {
        document.querySelector('.mouses').style.display = 'none';
    }
})

document.getElementById('viduborki').addEventListener('change', () => {
    if (document.getElementById('viduborki').value == "относка оффов") {
        document.querySelector('.locateuborka').style.display = 'block';
        document.querySelector('.probellocate').style.display = 'none';
    }
    else {
        document.querySelector('.locateuborka').style.display = 'none';
        document.querySelector('.probellocate').style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('sborka')) {
            const id = Number(e.target.name);
            const found = kyka.find(item => item.id === id);
            if (found) {
                const index = kyka.findIndex(item => item.id === id);
                if (found.id == 0) {
                    kyka[index].name = `<input class="pricol sborka" type="text" name="0" id="vid0" value='${document.getElementById("vid0").value}'>
    <br id="probel0">`;
                } else {
                    kyka[index].name = `<input class="pricol sborka" type="text" name="${id}" id="vid${id}" value="${document.getElementById(`vid${id}`).value}">
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="del${id}" onclick="deletelocate(${id})">Удалить</button>
    <br id="probel${id}">`;
                }
            }
        }
    });
});
