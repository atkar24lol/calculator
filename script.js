let array = []
const display = document.getElementById('screen');
display.classList.add('result');

function btnNum(num) {
    array.push(num);
    updateDisplay();
}

function clearArray() {
    array = [];
    updateDisplay();
}

function delLastElemInArr() {
    array.pop();
    updateDisplay();
}

function calculate(arr) {
    const opIndex = arr.findIndex(item => typeof item === 'string');
    const op = arr[opIndex];
    const num1 = parseInt(arr.slice(0, opIndex).join(''));
    const num2 = parseInt(arr.slice(opIndex + 1).join(''));

    let result;
    switch (op) {
        case 'plus':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'division':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operator');
            return null;
    }

    array = [Number(result.toString())];
    console.log(array);
    updateDisplay();
}

function updateDisplay() {
    const operatorMap = {
        'plus': '+',
        'minus': '-',
        'multi': '×',
        'division': '÷'
    };
    const displayText = array.map(item => operatorMap[item] || item).join('');
    display.textContent = displayText;
}


// Кнопки 1, 2, 3, 4, 5, 6, 7, 8, 9
document.getElementById("one").addEventListener('click', () => { btnNum(1) })

document.getElementById("two").addEventListener('click', () => { btnNum(2) })

document.getElementById("three").addEventListener('click', () => { btnNum(3) })

document.getElementById("four").addEventListener('click', () => { btnNum(4) })

document.getElementById("five").addEventListener('click', () => { btnNum(5) })

document.getElementById("six").addEventListener('click', () => { btnNum(6) })

document.getElementById("seven").addEventListener('click', () => { btnNum(7) })

document.getElementById("eight").addEventListener('click', () => { btnNum(8) })

document.getElementById("nine").addEventListener('click', () => { btnNum(9) })

document.getElementById("zero").addEventListener('click', () => { btnNum(0) })

// Кнопка AC
document.getElementById("all-clear").addEventListener('click', () => { clearArray() })

// Кнопки операций + - * /
document.getElementById("plus").addEventListener('click', () => { btnNum("plus") })

document.getElementById('minus').addEventListener('click', () => { btnNum('minus') })

document.getElementById('multi').addEventListener('click', () => { btnNum('multi') })

document.getElementById('division').addEventListener('click', () => { btnNum('division') })

document.getElementById('equal').addEventListener('click', () => { calculate(array) })

// Кнопка Назад
document.getElementById('back').addEventListener('click', () => { delLastElemInArr() })

