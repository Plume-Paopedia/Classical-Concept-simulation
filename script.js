const shapes = ["BRYRYRBBRBYY", "YYBYBRRBYBRR", "YYBYBYRBRBRR", "RBRYBYRBYRBY", "YBYYBRYBRRBR", "YRYBBBYRRRBY", "YBYBRRYRBYBR", "YBRYRYBBBYRR", "BRBYYYRYRBRB", "YRBYBYRBRBRY",
    "RBYRBYRBRYBY", "YYBRBBRYRYRB"
];
const answers = ["10020670500008340", "06020581000007430", "06020580001407030", "03014080072000056", "04023080001067050", "00823070401000056", "40803070001060205", "43000080601057200",
    "10620500000408307", "05620000071408030", "34000072001058060", "06520000301408007"
]
let previousFunctions = [];
//0-11
function myfunction() {
    const randomNumber = Math.floor(Math.random() * 11)
    const debuff = Math.floor(Math.random() * 8) + 1

    document.querySelector("#result").innerHTML = ""

    const colors = ["first", "second", "third", "fourth"].map(line => {
        const lineElement = document.querySelector(`#${line}`)
        return lineElement.value
    })
    const debuffName = [colors[0] + " Alpha", colors[0] + " Beta", colors[1] + " Alpha", colors[1] + " Beta", colors[2] + " Alpha", colors[2] + " Beta", colors[3] + " Alpha", colors[3] + " Beta"]
    if (debuff % 2 == 0) {
        console.log(debuff)
        var img = document.createElement("img");
        img.src = "./beta.png";
        var src = document.getElementById("theDebuffIcon");
        document.getElementById("theDebuffIcon").innerHTML = "";
        src.appendChild(img);
    } else {
        console.log(debuff)
        var img = document.createElement("img");
        img.src = "./alpha.png";
        var src = document.getElementById("theDebuffIcon");
        document.getElementById("theDebuffIcon").innerHTML = "";
        src.appendChild(img);
    }
    if (debuff == 1 || debuff == 2) {
        coloring(0)
    } else if (debuff == 3 || debuff == 4) {
        coloring(1)
    } else if (debuff == 5 || debuff == 6) {
        coloring(2)
    } else if (debuff == 7 || debuff == 8) {
        coloring(3)
    }

    function coloring(color) {
        var img = document.createElement("img");
        switch (colors[color]) {
            case "Blue - Cross":
                console.log("Blue - Cross")
                img.src = "https://images-ext-2.discordapp.net/external/qboqd5UwYRA9OCkyDXs42WvKGiq6ekrkITS3KbVjnN0/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrX.png"
                break;
            case "Purple - Square":
                console.log("Purple - Square")
                img.src = "https://images-ext-1.discordapp.net/external/2CKcT2DhCduwDFWiW47V5b55cvbeRYsd1DX1x5ogaWc/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrSquare.png"
                break;
            case "Red - Circle":
                console.log("Red - Circle")
                img.src = "https://images-ext-2.discordapp.net/external/TgQY5pDhamTp40WlTUnLYUMrdNKFpaFcU90BwQyM3Fs/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrO.png"
                break;
            case "Green - Triangle":
                console.log("Green - Triangle")
                img.src = "https://images-ext-1.discordapp.net/external/2iOdgkZbeswGYTA7hwhneBTcvf2BHWS2DlrB4FC97DY/https/ff14.toolboxgaming.space/assets/images/presets/markers/dsrTriangle.png"
                break;
        }
        var src = document.getElementById("theDebuffIcon");
        src.appendChild(img);
    }
    document.querySelector("#theDebuff").innerHTML = "Debuff: " + debuffName[debuff - 1]
    const shape = shapes[randomNumber]
    const letters = [...shape]
    letters.forEach((letter, index) => {
        document.querySelector(`#s${index}`).style.backgroundImage = `url(./shapes/${letter}.png)`;
    })

    const answer = answers[randomNumber]
    const numbers = [...answer]
    numbers.forEach((number, index) => {
        const mirrored = document.querySelector('#mirrored').checked;
        const chainIndex = mirrored ? 16 - index : index;
        document.querySelector(`#c${chainIndex}`).setAttribute("data-value", number)
    })

    const chainElements = document.querySelectorAll(".chain")
    let timer;
    chainElements.forEach((chainElement, index) => {
        function checkOnClick() {
            chainElements.forEach(chainElement => {
                chainElement.removeEventListener("click", chainElement.previousFunction)
            })
            cancelAnimationFrame(timer)
            const value = chainElement.getAttribute("data-value")
            if (debuff == value) {
                document.querySelector("#result").innerHTML = "Good job"
                chainElement.style.backgroundColor = "green"
            } else {
                document.querySelector("#result").innerHTML = "Wrong"
                chainElement.style.backgroundColor = "red"
                document.querySelector(`[data-value="${debuff}"]`).style.backgroundColor = "green"
            }
        }
        if (chainElement.previousFunction) chainElement.removeEventListener("click", chainElement.previousFunction)
        chainElement.previousFunction = checkOnClick
        chainElement.style.backgroundColor = "rgb(135, 57, 199)"
        chainElement.addEventListener("click", checkOnClick)
    })

    const startTime = Date.now()

    function updateTime() {
        const currentTime = Date.now()
        document.querySelector("#timer").innerHTML = "Timer: " + formatTime(currentTime - startTime) + "s"
        timer = requestAnimationFrame(updateTime)
    }
    timer = requestAnimationFrame(updateTime)

}

function divmod(dividend, divisor) {
    return [
        Math.floor(dividend / divisor),
        dividend % divisor
    ];
}

function formatTime(time) {
    const [seconds, milliseconds] = divmod(time, 1000);
    return [`${seconds}`.padStart(2, '0'), `${milliseconds}`.padStart(3, '0')].join(':');
}
//1 - Blue Alpha
//2 - Blue Beta
//3 - Green Alpha
//4 - Green Beta
//5 - O Alpha
//6 - O Beta
//7 - Purple Alpha
//8 - Purple Beta
//BPOG, OBGP

//0C1C2C3
//C C C C
//4C5C6C7
//C C C C
//8C9C10C11

//11 12 13 14
//11 12 13 14
//31 32 33 34