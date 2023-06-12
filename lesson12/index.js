//trỏ vào thẻ input
const inputEle = document.getElementById("taskInput");

//trỏ đến nút bấm "add task"
const addEles = document.getElementById("addTask");

//trỏ vào thẻ ul "tasklist"
const showText = document.getElementById("taskList");

//tạo sự kiện khi click vào "add task" thì sẽ sinh ra 1 li mới
addEles.addEventListener("click", () => {
    if (inputEle.innerText !== "") {
        //tạo 1 thẻ li mới
        const inputText = document.createElement("li");
        inputText.innerText = inputEle.value;
        showText.appendChild(inputText);
    }
})

