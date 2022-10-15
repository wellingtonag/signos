const form = document.querySelector('.form');
const url = './dados/index.xml';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = document.querySelector('#birthDate');
    const value = data.value;
    const dateDay = new Date(value).getDate() + 1;
    const dateMonth = new Date(value).getMonth() + 1;

    if (!value) return;

    checkSigns(dateDay, dateMonth);
    const clear = document.querySelector('#text');
    clear.innerHTML = '';
});

const signs = (url, signo) => {
    $.ajax(url)
        .done(function (xml) {
            $(xml).find(signo).each(function () {
                $("#text")
                    .append(`<div class="card">
                                        <div class="imagem"><img src="${$(this).find("foto").text()}" class="image-card"></div>
                                        <h1 class="signoNome"> ${$(this).find("nome").text()}</h1>
                                        <p class="data">De ${$(this).find("data_nascimento").text()}</p>
                                        <p class="descricao"> ${$(this).find("caracteristicas").text()}
                                        </div>
                                        `);
            })
        })
        .fail(() => {
            alert('Erro na leitura do arquivo');
        })
};

const checkSigns = (dateDay, dateMonth) => {
    if (dateDay >= 21 && dateMonth === 3 || dateDay <= 20 && dateMonth === 4) {
        return signs(url, 'signo_aries');
    } else if (dateDay >= 21 && dateMonth === 4 || dateDay <= 20 && dateMonth === 5) {
        return signs(url, 'signo_touro');
    } else if (dateDay >= 21 && dateMonth === 5 || dateDay <= 20 && dateMonth === 6) {
        return signs(url, 'signo_gemeos');
    } else if (dateDay >= 21 && dateMonth === 6 || dateDay <= 22 && dateMonth === 7) {
        return signs(url, 'signo_cancer');
    } else if (dateDay >= 23 && dateMonth === 7 || dateDay <= 22 && dateMonth === 8) {
        return signs(url, 'signo_leao');
    } else if (dateDay >= 23 && dateMonth === 8 || dateDay <= 22 && dateMonth === 9) {
        return signs(url, 'signo_virgem');
    } else if (dateDay >= 23 && dateMonth === 9 || dateDay <= 22 && dateMonth === 10) {
        return signs(url, 'signo_libra');
    } else if (dateDay >= 23 && dateMonth === 10 || dateDay <= 21 && dateMonth === 11) {
        return signs(url, 'signo_escorpiao');
    } else if (dateDay >= 22 && dateMonth === 11 || dateDay <= 21 && dateMonth === 12) {
        return signs(url, 'signo_sagitario');
    } else if (dateDay >= 22 && dateMonth === 12 || dateDay <= 20 && dateMonth === 1) {
        return signs(url, 'signo_capricornio');
    } else if (dateDay >= 21 && dateMonth === 1 || dateDay <= 18 && dateMonth === 2) {
        return signs(url, 'signo_aquario');
    } else if (dateDay >= 19 && dateMonth === 2 || dateDay <= 20 && dateMonth === 3) {
        return signs(url, 'signo_peixes');
    } else {
        alert('Data invalida');
    }
};




