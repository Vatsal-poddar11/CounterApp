const countValue = document.querySelector('#counter');

const increment = () => {
    // Getting the value as string and converting it into integer
    let value = parseInt(countValue.innerText);
    // Updating the value
    value = value + 1;
    // Setting the value back
    countValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};