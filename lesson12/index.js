//trỏ vào thẻ input
const inputEles = document.getElementById("taskInput");

//trỏ đến nút bấm "add task"
const addEles = document.getElementById("addTask");

//trỏ vào thẻ ul "tasklist"
const showText = document.getElementById("taskList");

//tạo sự kiện khi click vào "add task" thì sẽ sinh ra 1 li mới
addEles.addEventListener("click", () => {
    if (inputEles.value !== "") {
        //tạo 1 thẻ li mới
        const inputText = document.createElement("li");
        inputText.innerText = inputEles.value;
        showText.appendChild(inputText);
        let arr = [];
        arr = JSON.parse(localStorage.getItem('info')) || [];
        arr.push(inputEles.value.trim());
        localStorage.setItem('info', JSON.stringify(arr));
    }
})

