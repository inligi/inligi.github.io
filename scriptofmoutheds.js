//не трогайте апикей умоляю
const API_KEY = "1ca34fe449bc4503d2d083f208f8c262";
let kyka = [];
let cooky = 0;
let kykadozor = [];
let cookydozor = 0;
let otchetvaartum = '';
let otchetgrush = '';
let mestoofdozorstart = 'локации';
let mestoofdozorprovedenie = 'Локация';
let mesto = document.getElementById('vidlocate').value;
document.getElementById('mur').innerHTML = '<p><i><b>Нарушители отсутствуют</b></i></p>';
document.getElementById('murdozor').innerHTML = '<p><i><b>Нарушители отсутствуют</b></i></p>';

const inputDate = document.getElementById('dateofcall')

const maska1 = {
    mask: "00.00.00",
    lazy: false,
    placeholderChar: "0"
}

const mask1 = IMask(inputDate, maska1);

function deletenarushi(del) {
    kyka = kyka.filter(item => item.id !== del);
    if (kyka.length != 0) {
    document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`
}
    else {
        document.getElementById('mur').innerHTML = '<p><i><b>Нарушители отсутствуют</b></i></p>';
        document.querySelector('.spasite').style.display = "none";
    }
}

function deletenarushidozor(del) {
    kykadozor = kykadozor.filter(item => item.id !== del);
    if (kykadozor.length != 0) {
    document.getElementById("murdozor").innerHTML = `${kykadozor.map(ht => ht.name).join('\n')}`
}
    else {
        document.getElementById('murdozor').innerHTML = '<p><i><b>Нарушители отсутствуют</b></i></p>';
        document.querySelector('.spasitedozor').style.display = "none";
    }
}

function appnarushi(){
    kyka.push({id: cooky, name:`<h3>Нарушитель №${cooky + 1}</h3>
        <label for="${cooky}">ID нарушителя: </label>
        <input class="pricol sborka" type="number" name="${cooky}" id="vid${cooky}" value="" style='width: 80px;'>
     <h3>Вставка скриншота (ImgBB):</h3>
        <input type="file" id="imageInputNarush${cooky}" accept="image/*">
        <br><br>
      <div style="display: flex; justify-content: flex-start;">
        <button class="pricol" style="padding: 4px; cursor: pointer;" onclick="uploadImage('imageInputNarush${cooky}', 'ssilkaNarush${cooky}')">Загрузить на ImgBB</button>
    </div>
      <h3>Или вставка готовой ссылки:</h3>
      <input class="pricol sborka" type="text" name="${cooky}" id="ssilkaNarush${cooky}" value=''>
    <br><br>
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="del${cooky}" onclick="deletenarushi(${cooky})">Удалить нарушителя</button>
      <br>`});
    document.getElementById("mur").innerHTML = `${kyka.map(ht => ht.name).join('\n')}`;
    cooky += 1;
    if (kyka.length == 1) {
    document.querySelector('.spasite').style.display = "block";
    }

}


function appnarushidozor(){
    kykadozor.push({id: cookydozor, name:`<h3>Нарушитель №${cookydozor + 1}</h3>
        <label for="dozor${cookydozor}">ID нарушителя: </label>
        <input class="pricol sborkadozor" type="number" name="dozor${cookydozor}" id="iddozor${cookydozor}" value="" style='width: 80px;'>
     <h3>Вставка скриншота (ImgBB):</h3>
        <input type="file" id="imageInputNarushDozor${cookydozor}" accept="image/*">
        <br><br>
      <div style="display: flex; justify-content: flex-start;">
        <button class="pricol" style="padding: 4px; cursor: pointer;" onclick="uploadImage('imageInputNarushDozor${cookydozor}', 'ssilkaNarushDozor${cookydozor}')">Загрузить на ImgBB</button>
    </div>
      <h3>Или вставка готовой ссылки:</h3>
      <input class="pricol sborkadozor" type="text" name="dozor${cookydozor}" id="ssilkaNarushDozor${cookydozor}" value=''>
    <br><br>
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="deldozor${cookydozor}" onclick="deletenarushidozor(${cookydozor})">Удалить нарушителя</button>
      <br>`});
    document.getElementById("murdozor").innerHTML = `${kykadozor.map(ht => ht.name).join('\n')}`;
    cookydozor += 1;
    if (kykadozor.length == 1) {
    document.querySelector('.spasitedozor').style.display = "block";
    }

}

async function uploadImage(classes, num) {
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
            document.getElementById(`${num}`).value = `${imageUrl}`;
        } else {
            alert("Ошибка загрузки: " + (data.error?.message || "неизвестная ошибка"));
        }
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Произошла ошибка при загрузке: " + error.message);
    }
}


function vivodotcheta() {
let secondpatrul = '';
let uchastniki = '';
let narushi = '';
let narushidozor = '';
const datee = document.getElementById("dateofcall").value;
const timee = document.getElementById("timeofcall").value;
const idofchallengersbor = document.getElementById("idofchallenger").value;
const idofsborpatrul = document.getElementById("idofsbor").value;
const idofsecondpatrul = document.getElementById("idofsecond").value;
const idouchastnikipatrul = document.getElementById("idouchastniki").value.split(' ');
const sos1 = document.getElementById("ssilka1").value;
const idofdozornii = document.getElementById('idofdozorniistart').value;
const viddozor = document.getElementById("viddozora").value;
const timestartdozor = document.getElementById("timestart").value;
const timefinaldozor = document.getElementById("timefinal").value;
const idofgrushuyuschiidozor = document.getElementById("idofgrushuyuschii").value;
const idofbgdozor = document.getElementById("idofbg").value;
const idofmgdozor = document.getElementById("idofmg").value;
if (kyka.length !== 0) {
    for (let i = 0; i < kyka.length; i++) {
        const id = kyka[i].id;
        const vidInput = document.getElementById(`vid${id}`);
        const ssilkaNarushInput = document.getElementById(`ssilkaNarush${id}`);
        if (vidInput && ssilkaNarushInput) {
            narushi += `[link${vidInput.value}] — [url=${ssilkaNarushInput.value}][скриншот][/url], `;
        }
    }
    narushi = narushi.slice(0, narushi.length - 2);}
else {
    narushi = "—  ";
}
if (kykadozor.length !== 0) {
    for (let i = 0; i < kykadozor.length; i++) {
        const id = kykadozor[i].id;
        const vidInput = document.getElementById(`iddozor${id}`);
        const ssilkaNarushInput = document.getElementById(`ssilkaNarushDozor${id}`);
        if (vidInput && ssilkaNarushInput) {
            narushidozor += `[link${vidInput.value}] [${vidInput.value}] — [url=${ssilkaNarushInput.value}][скриншот][/url], `;
        }
    }
    narushidozor = narushidozor.slice(0, narushidozor.length - 2);}
else {
    narushidozor = "—  ";
}
if (idofsecondpatrul != '') {
    secondpatrul = `\n[b]Ведущий второй части[/b]: [link${idofsecondpatrul}];`;
}
idouchastnikipatrul.forEach((item) => {
    uchastniki += `[link${item}] [${item}], `;
})
uchastniki = uchastniki.slice(0, uchastniki.length - 2);
if (document.getElementById('startofvaartumdiv').style.display == "block") {
    otchetvaartum = `Я, [link${idofdozornii}] [${idofdozornii}], начинаю [b][i]${viddozor}[/i][/b] дозор на ${mestoofdozorstart} "${mesto}".`;
}
else if (document.getElementById('provedenieofvaartumdiv').style.display == "block") {
    otchetvaartum = `[b]Ваар-Тум[/b]
[b]Дата[/b]: ${datee};
[b]Время[/b]: ${timestartdozor} - ${timefinaldozor};
[b]Проводящий[/b]: [link${idofdozornii}] [${idofdozornii}];
[b]${mestoofdozorprovedenie}[/b]: ${mesto};
[b]Вид дозора[/b]: ${viddozor};
[b]Нарушения[/b]: ${narushidozor}`;
}
if (document.getElementById('dggrush').style.display == "block") {
    otchetgrush = `[b]Двойное грушевание[/b]
[b]Время[/b]: ${timestartdozor} - ${timefinaldozor}
[b]БГ[/b]: [link${idofbgdozor}] [${idofbgdozor}]
[b]МГ[/b]: [link${idofmgdozor}] [${idofmgdozor}]`;
}
else if (document.getElementById('oggrush').style.display == "block") {
    otchetgrush = `[b]Одиночное грушевание[/b]
[b]Время[/b]: ${timestartdozor} - ${timefinaldozor}
[b]Грушующий[/b]: [link${idofgrushuyuschiidozor}] [${idofgrushuyuschiidozor}]`;
}
let otchet1 = `Я, [link${idofchallengersbor}] [${idofchallengersbor}], соответствую требованиям и прошу провести испытание Горлодёров.
[url=${sos1}]Скриншот выполненных требований[/url].`
let otchet2 = `[b]Пай-Тхаан[/b]
[b]Дата[/b]: ${datee};
[b]Время[/b]: ${timee};
[b]Собирающий[/b]: [link${idofsborpatrul}];${secondpatrul}
[b]Участники[/b]: ${uchastniki};
[b]Нарушения[/b]: ${narushi}`
let otchet3 = `${otchetvaartum}`
let otchet4 = `${otchetgrush}`
const path1 = {
    "challenge": otchet1,
    "patrul": otchet2,
    "dozor": otchet3,
    "grush": otchet4
}

document.getElementById('one').value = path1[document.querySelector('input[name="otchetsMH"]:checked').value];

}

document.querySelectorAll('input[type="radio"][name="otchetsMH"]').forEach(radio => {
    radio.addEventListener('change', () => {
    document.querySelectorAll(".pathblock").forEach(lol => {
    if (lol.id == radio.value) {
    lol.style.display = "block";
}
else {
    lol.style.display = "none";
}
})
if (document.getElementById('patrul').style.display == "block") {
    document.querySelector('.dateandtime').style.display = "block";
    document.querySelector('.onlytime').style.display = 'inline-block';
    document.querySelector('.onlydate').style.display = 'inline-block';
    document.querySelector('.dozortime').style.display = 'none';
}
else if (document.getElementById('provedenieofvaartum').checked && document.getElementById('dozor').style.display == 'block') {
    document.querySelector('.dateandtime').style.display = "block";
    document.querySelector('.onlytime').style.display = 'none';
    document.querySelector('.onlydate').style.display = 'inline-block';
    document.querySelector('.dozortime').style.display = 'inline-block';
}
else if (document.getElementById('grush').style.display == 'block') {
    document.querySelector('.dateandtime').style.display = "block";
    document.querySelector('.onlytime').style.display = 'none';
    document.querySelector('.dozortime').style.display = 'inline-block';
    document.querySelector('.onlydate').style.display = 'none';
}
else {
    document.querySelector('.dateandtime').style.display = "none";
    document.querySelector('.onlytime').style.display = 'none';
    document.querySelector('.dozortime').style.display = 'none';
    document.querySelector('.onlytime').style.display = 'none';
}});});


document.querySelectorAll('input[type="radio"][name="grushi"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll(".grushblock").forEach(lol => {
        if (lol.id == `${radio.id}grush`) {
        lol.style.display = "block";
    }
    else {
        lol.style.display = "none";
    }
    })})
});

document.querySelectorAll('input[type="radio"][name="vaartumvid"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll(".vaartumvid").forEach(lol => {
        if (lol.id == `${radio.id}div`) {
        lol.style.display = "block";
    }
    else {
        lol.style.display = "none";
    }
    if (document.getElementById('provedenieofvaartum').checked) {
        document.querySelector('.dateandtime').style.display = "block";
        document.querySelector('.onlytime').style.display = 'none';
        document.querySelector('.dozortime').style.display = 'inline-block';
        document.querySelector('.onlydate').style.display = 'inline-block';
    }
    else {
        document.querySelector('.dateandtime').style.display = "none";
        document.querySelector('.dozortime').style.display = 'none';
        document.querySelector('.onlydate').style.display = 'none';
    }
    })})
});

document.getElementById('vidlocate').addEventListener('change', () => {
    mesto = document.getElementById('vidlocate').value;
})

document.getElementById('vidmarshruta').addEventListener('change', () => {
    mesto = document.getElementById('vidmarshruta').value;
})

document.getElementById('viddozora').addEventListener('change', () => {
    if (document.getElementById('viddozora').value == "пассивный") {
        document.getElementById('marshrutorlocate').style.display = 'none';
        document.getElementById('viborlocate').checked = true;
        document.getElementById('viborlocate').dispatchEvent(new Event('change'));
    }
    else if (document.getElementById('viddozora').value == "активный") {
        document.getElementById('marshrutorlocate').style.display = 'none';
        document.getElementById('vibormarshrut').checked = true;
        document.getElementById('vibormarshrut').dispatchEvent(new Event('change'));
    }
    else if (document.getElementById('viddozora').value == "ночной") {
        document.getElementById('marshrutorlocate').style.display = 'block';
    }
})

document.querySelectorAll('input[type="radio"][name="pomogite"]').forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('viborlocate').checked) {
        document.getElementById('dozorlocate').style.display = 'block';
        document.getElementById('dozormarshrut').style.display = 'none';
        mestoofdozorprovedenie = "Локация";
        mestoofdozorstart = "локации";
        mesto = document.getElementById('vidlocate').value;
        }
        else if (document.getElementById('vibormarshrut').checked) {
            document.getElementById('dozorlocate').style.display = 'none';
            document.getElementById('dozormarshrut').style.display = 'block';
            mestoofdozorprovedenie = "Маршрут";
            mestoofdozorstart = "маршруте";
            mesto = document.getElementById('vidmarshruta').value;
            }})});

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('sborka')) {
            const id = Number(e.target.name);
            const found = kyka.find(item => item.id === id);
            if (found) {
                const index = kyka.findIndex(item => item.id === id);
                kyka[index].name = `<h3>Нарушитель №${id + 1}</h3>
                <label for="${id}">ID нарушителя: </label>
                <input class="pricol sborka" type="number" name="${id}" id="vid${id}" value="${document.getElementById(`vid${id}`).value}" style='width: 80px;'>
     <h3>Вставка скриншота (ImgBB):</h3>
        <input type="file" id="imageInputNarush${id}" accept="image/*">
        <br><br>
      <div style="display: flex; justify-content: flex-start;">
        <button class="pricol" style="padding: 4px; cursor: pointer;" onclick="uploadImage('imageInputNarush${id}', 'ssilkaNarush${id}')">Загрузить на ImgBB</button>
    </div>
      <h3>Или вставка готовой ссылки:</h3>
      <input class="pricol sborka" type="text" name="${id}" id="ssilkaNarush${id}" value='${document.getElementById(`ssilkaNarush${id}`).value}'>
    <br><br>
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="del${id}" onclick="deletenarushi(${id})">Удалить нарушителя</button>
      <br>`;
            }
        }
        else if (e.target.classList.contains('sborkadozor')) {
            const id = Number(e.target.name.replace('dozor', ''));
            const found = kykadozor.find(item => item.id === id);
            if (found) {
                const index = kykadozor.findIndex(item => item.id === id);
                kykadozor[index].name = `<h3>Нарушитель №${id + 1}</h3>
                <label for="dozor${id}">ID нарушителя: </label>
                <input class="pricol sborkadozor" type="number" name="dozor${id}" id="iddozor${id}" value="${document.getElementById(`iddozor${id}`).value}" style='width: 80px;'>
     <h3>Вставка скриншота (ImgBB):</h3>
        <input type="file" id="imageInputNarushDozor${id}" accept="image/*">
        <br><br>
      <div style="display: flex; justify-content: flex-start;">
        <button class="pricol" style="padding: 4px; cursor: pointer;" onclick="uploadImage('imageInputNarushDozor${id}', 'ssilkaNarushDozor${id}')">Загрузить на ImgBB</button>
    </div>
      <h3>Или вставка готовой ссылки:</h3>
      <input class="pricol sborkadozor" type="text" name="dozor${id}" id="ssilkaNarushDozor${id}" value='${document.getElementById(`ssilkaNarushDozor${id}`).value}'>
    <br><br>
    <button class="pricol" style="padding: 4px; cursor: pointer;" id="deldozor${id}" onclick="deletenarushidozor(${id})">Удалить нарушителя</button>
      <br>`;
            }
        }
    });
});
