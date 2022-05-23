window.addEventListener("keydown", (e) => {
    const firstPage = document.getElementById("first-page");
    const secondPage = document.getElementById("second-page");

    firstPage.style.display = "none"
    secondPage.style.display = "flex"

    const code = document.getElementById("code");
    const key = document.getElementById("key");
    const which = document.getElementById("which");
    const log = document.getElementById("heading");

    log.textContent = `${e.key.toUpperCase()} was pressed!`;

    code.textContent = e.code;
    key.textContent = e.key;
    which.textContent = e.which;
});