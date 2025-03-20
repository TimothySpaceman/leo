function alertForm(e) {
    e.preventDefault();
    let result = "";
    for (const input of e.target) {
        if (input.type == "submit") {
            continue;
        }

        result += `${input.name} = ${input.value} `;
    }
    alert(result);
}

document.querySelector("form.login").addEventListener("submit", alertForm)
document.querySelector("form.subscribe").addEventListener("submit", alertForm)
