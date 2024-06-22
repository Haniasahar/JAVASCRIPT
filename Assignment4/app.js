let calculate = () => {
    let registers = document.querySelector('input[name="No of Registers"]').value;
    let books = document.querySelector('input[name="No of Books"]').value;
    let markers = document.querySelector('input[name="No of Markers"]').value;

    let registers_p=350;
    let books_p=280;
    let markers_p=60;

    let total=(registers*registers_p)+(books*books_p)+(markers*markers_p);

    document.querySelector("#total").innerHTML=total;
}

document.querySelector("button").addEventListener("click",calculate);