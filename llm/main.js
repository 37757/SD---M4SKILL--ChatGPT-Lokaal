const button = document.getElementById("button");
const textInput = document.getElementById("textInput");

function klik() {
    sendMessage(textInput.value);
}

function makeLi(text) {
    let li = document.createElement("li");
    li.innerText = text;
    document.querySelector("#text").appendChild(li);
}

async function sendMessage(prompt) {
    makeLi(prompt);
    const url = "http://localhost:11434/api/generate";

    const options = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "phi3",
            prompt: prompt,
            stream: false
        })
    }
    const response = await fetch(url, options);
    const data = await response.json();
    makeLi(data.response);
    console.log(data.response);
}
sendMessage("hallo");