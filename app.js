window.addEventListener("keydown", (e) => {
    const code = document.getElementById("code");
    const key = document.getElementById("key");
    const which = document.getElementById("which");

    code.textContent = e.code;
    key.textContent = e.key;
    which.textContent = e.which;
});