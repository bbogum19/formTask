let userFormDOM = document.querySelector("#userForm");
let alertDOM = document.querySelector("#alert");

userFormDOM.addEventListener("submit", formHandler);

const alertFunction = (color, title, message) => {
    alertDOM.innerHTML = `
    <div class="alert alert-${color} alert-dismissible fade show" role="alert">
            <strong>${title}!</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
}

function formHandler(event) {
    event.preventDefault();
    let USER_NAME = document.querySelector("#username");
    let SCORE = document.querySelector("#score");
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value);
        alertFunction("success", "GİRİŞ BAŞARILI", " Bilgileriniz listeye eklendi.");
    } else if (USER_NAME.value == "" && SCORE.value) {
        alertFunction("warning", "GİRİŞ BAŞARISIZ", " Lütfen kullanıcı adınızı giriniz.");
    } else if (USER_NAME.value && SCORE.value == "") {
        alertFunction("warning", "GİRİŞ BAŞARISIZ", " Lütfen skorunuzu giriniz.");
    } else if (!USER_NAME.value && !SCORE.value) {
        alertFunction("danger", "GİRİŞ BAŞARISIZ", " Lütfen hem adınızı hem skorunuz giriniz.");
    }
    USER_NAME.value = "";
    SCORE.value = "";
}

let listGroupDOM = document.querySelector("#listGroup");

const addItem = (userName, score) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `
    <span> ${userName} </span>
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
    listGroupDOM.appendChild(liDOM);
}
