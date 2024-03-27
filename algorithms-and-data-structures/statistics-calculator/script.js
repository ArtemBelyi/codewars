const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    document.querySelector("#mean").textContent = getMean(numbers);
}
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;