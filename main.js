function dollar(){
    let input1 = Number(document.querySelector("#value").value);

    let result = input1 / 50;

    document.querySelector("#converted").value = result;
}

function euro(){
    let input1 = Number(document.querySelector("#value").value);

    let result = input1 / 60;

    document.querySelector("#converted").value = result;
}

function yen(){
    let input1 = Number(document.querySelector("#value").value);

    let result = input1 / 0.45;

    document.querySelector("#converted").value = result;
}

function minutes(){
    let input1 = Number(document.querySelector("#value").value);

    let result = input1 / 60;

    document.querySelector("#converted").value = result;
}

function hours(){
    let input1 = Number(document.querySelector("#value").value);

    let result = input1 / 3600;

    document.querySelector("#converted").value = result;
}

function days(){
    let input1 = Number(document.querySelector("#value").value);

    let result = input1 / 86400;

    document.querySelector("#converted").value = result;
}