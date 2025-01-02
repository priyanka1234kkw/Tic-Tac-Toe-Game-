let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector(".new_btn");
let msgcontain = document.querySelector(".msg_container");
let message = document.querySelector("#msg");

let turno = true; // 'true' for O, 'false' for X

const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetboxes = () => {
    turno = true;
    enableBoxes();
    msgcontain.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    message.innerText = `Congratulations ${winner}, you win the game!`;
    msgcontain.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of winningpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Win the game...");
                showwinner(pos1val);
                return;
            }
        }
    }
};

newgame.addEventListener("click", resetboxes);
resetbtn.addEventListener("click", resetboxes);
