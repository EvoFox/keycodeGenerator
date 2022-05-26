// Listen to every keypress on the window
window.addEventListener("keydown", (e) => {
    // Get the page divs loaded into memory
    const firstPage = document.getElementById("first-page");
    const secondPage = document.getElementById("second-page");

    // Change the display properties of the pages, to switch to the main page
    firstPage.style.display = "none"
    secondPage.style.display = "flex"

    // Load the second page elements into memory
    const code = document.getElementById("code");
    const key = document.getElementById("key");
    const which = document.getElementById("which");
    const log = document.getElementById("heading");
    const history = document.getElementById("history-table");

    // Set the main information displays according to the keystroke
    log.textContent = `${e.key.toUpperCase()} was pressed!`;
    code.textContent = e.code;
    key.textContent = e.key;
    which.textContent = e.which;

    // Create an empty row in the history table, and set its ID so that it can be found 
    let row = history.insertRow(0);
    row.setAttribute("id", "histRows")

    // If there are more than 15 rows on the table, remove the fifteenth row
    if (document.querySelectorAll("#histRows").length > 15) {
        document.querySelectorAll("#histRows")[15].remove()
    }

    // Create columns in the empty row
    let histCode = row.insertCell(0);
    let histKey = row.insertCell(1);
    let histWhich = row.insertCell(2);

    // Set the content of the columns
    histCode.textContent = `${e.code}`;
    histKey.textContent = `${e.key}`;
    histWhich.textContent = `${e.which}`;
});