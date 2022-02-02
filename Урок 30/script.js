// let Value = true;
// alert(typeof Value); // Boolean
// Value = String(Value);
// alert(typeof Value); // String

// alert("6" / "2"); // 3
// let str = "123";
// alert(typeof str); // String
// let num = Number(str);
// alert(typeof num); // Number

// let age = Number("asd;fasfla;gsfla");
// alert(typeof age);

// alert(Boolean(1)) // True
// alert(Boolean(0)) // False
// alert(Boolean("Lorem Ipsum")) // True
// alert(Boolean("")) // False

// while (true) {
//     let Question = prompt("Спроси у комп'ютера щось: ")
//     let Answers = ["Мабуть", "Точно", "Ні", "Не думаю так", "Точно ні"]
//     let Answer = Answers[Math.floor(Math.random() * Answers.length)]
//     alert(Answer)
// }

window.addEventListener("load", function() {
    let el = document.querySelector("h1");
    let btn = document.querySelector("button");
    btn.addEventListener("click", function() {
        el.style.color = "red";
    });
})