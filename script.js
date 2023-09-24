let button = document.getElementById("get-text-btn");

let txt = document.getElementById("my-text-area");

button.innerHTML = "Get data";
button.classList.add("click");
txt.before(button);





function Student(name, address, phone, course) {

    this.name = name;
    this.address = address;
    this.phone = phone;
    this.course = course;
}

Student.prototype.getInfo = function () {

    return "\n" +
        "Name: " + this.name + "\n" +
        "Address: " + this.address + "\n" +
        "Phone: " + this.phone + "\n" +
        "Course: " + this.course + "\n"
}

async function getData() {
    try {
        let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt');
        if (response.status !== 200) {
            throw new Error("Error while reading file.");
        }
        let text = await response.text();

        let info = text.split("\r\n");
        splitLine(info);

    } catch (err) {
        textArea.innerHTML = 'Fetch problem: ' + err.message;
    } finally {

    }
}

function splitLine(info) {
    while (info.length > 0) {
        let x = info.splice(0, 4);
        let students = new Student(x[0], x[1], x[2], x[3]);
        txt.innerHTML += students.getInfo();
    }
}

button.addEventListener("click", function () {
    getData();
    document.getElementById("txt").innerHTML = "";
});