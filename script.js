const shapes = ["BRYRYRBBRBYY", "YYBYBRRBYBRR", "YYBYBYRBRBRR", "RBRYBYRBYRBY", "YBYYBRYBRRBR", "YRYBBBYRRRBY", "YBYBRRYRBYBR", "YBRYRYBBBYRR", "BRBYYYRYRBRB", "YRBYBYRBRBRY", "RBYRBYRBRYBY", "YYBRBBRYRYRB"];
const answers = ["10020670500008340", "06020581000007430", "06020580001407030", "03014080072000056", "04023080001067050", "00823070401000056", "40803070001060205", "43000080601057200", "10620500000408307", "05620000071408030", "34000072001058060", "06520000301408007"];
let previousFunctions = [];

function myfunction() {
    const randomNumber = Math.floor(Math.random() * 11);
    const debuff = Math.floor(Math.random() * 8) + 1;
    document.querySelector("#result").innerHTML = "";
    const colors = ["first", "second", "third", "fourth"].map(line => document.querySelector(`#${line}`).value);
    const debuffName = [colors[0] + " Alpha", colors[0] + " Beta", colors[1] + " Alpha", colors[1] + " Beta", colors[2] + " Alpha", colors[2] + " Beta", colors[3] + " Alpha", colors[3] + " Beta"];
    var img = document.createElement("img");
    img.src = debuff % 2 == 0 ? "./beta.png" : "./alpha.png";
    var src = document.getElementById("theDebuffIcon");
    src.innerHTML = "";
    src.appendChild(img);
    if (debuff <= 2) coloring(0);
    else if (debuff <= 4) coloring(1);
    else if (debuff <= 6) coloring(2);
    else coloring(3);

    function coloring(color) {
        var img = document.createElement("img");
        switch (colors[color]) {
            case "Blue - Cross":
                img.src = "https://images-ext-2.discordapp.net/external/qboqd5UwYRA9OCkyDXs42WvKGiq6ekrkITS3KbVjnN0/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrX.png";
                break;
            case "Purple - Square":
                img.src = "https://images-ext-1.discordapp.net/external/2CKcT2DhCduwDFWiW47V5b55cvbeRYsd1DX1x5ogaWc/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrSquare.png";
                break;
            case "Red - Circle":
                img.src = "https://images-ext-2.discordapp.net/external/TgQY5pDhamTp40WlTUnLYUMrdNKFpaFcU90BwQyM3Fs/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrO.png";
                break;
            case "Green - Triangle":
                img.src = "https://images-ext-1.discordapp.net/external/2iOdgkZbeswGYTA7hwhneBTcvf2BHWS2DlrB4FC97DY/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrTriangle.png";
                break;
        }
        document.getElementById("theDebuffIcon").appendChild(img);
    }
    document.querySelector("#theDebuff").innerHTML = "Debuff: " + debuffName[debuff - 1];
    [...shapes[randomNumber]].forEach((letter, index) => document.querySelector(`#s${index}`).style.backgroundImage = `url(./shapes/${letter}.png)`);
    [...answers[randomNumber]].forEach((number, index) => document.querySelector(`#c${document.querySelector('#mirrored').checked ? 16 - index : index}`).setAttribute("data-value", number));
    const chainElements = document.querySelectorAll(".chain");
    let timer;
    chainElements.forEach((chainElement, index) => {
        function checkOnClick() {
            chainElements.forEach(chainElement => chainElement.removeEventListener("click", chainElement.previousFunction));
            cancelAnimationFrame(timer);
            const value = chainElement.getAttribute("data-value");
            document.querySelector("#result").innerHTML = debuff == value ? "Good job" : "Wrong";
            chainElement.style.backgroundColor = debuff == value ? "green" : "red";
            if (debuff != value) document.querySelector(`[data-value="${debuff}"]`).style.backgroundColor = "green";
        }
        if (chainElement.previousFunction) chainElement.removeEventListener("click", chainElement.previousFunction);
        chainElement.previousFunction = checkOnClick;
        chainElement.style.backgroundColor = "rgb(135, 57, 199)";
        chainElement.addEventListener("click", checkOnClick);
    });
    const startTime = Date.now();

    function updateTime() {
        document.querySelector("#timer").innerHTML = "Timer: " + formatTime(Date.now() - startTime) + "s";
        timer = requestAnimationFrame(updateTime);
    }
    timer = requestAnimationFrame(updateTime);
}

function divmod(dividend, divisor) {
    return [Math.floor(dividend / divisor), dividend % divisor];
}

function formatTime(time) {
    const [seconds, milliseconds] = divmod(time, 1000);
    return [`${seconds}`.padStart(2, '0'), `${milliseconds}`.padStart(3, '0')].join(':');
}