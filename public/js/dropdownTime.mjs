var timeData = [
    ["per-question", "5"],
    ["per-question", "10"],
    ["per-question", "15"],
    ["per-question", "20"],
    ["per-question", "25"],
    ["total-time", "25"],
    ["total-time", "30"],
    ["total-time", "35"],
    ["total-time", "40"],
    ["total-time", "50"],
    ["total-time", "60"]
];

function makeDropdownForTimeLimit(timeData, level1Filter) {
    const filteredData = timeData.filter(item => item[0] === level1Filter);

    const uniqueValues = new Set();
    filteredData.forEach(r => uniqueValues.add(r[1]));

    const uniqueList = Array.from(uniqueValues);
    const dropdown = document.getElementById("time-limit");
    dropdown.innerHTML = ""; // Clear existing options

    uniqueList.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        dropdown.appendChild(option);
    });
}

function applyDropDownTimer() {
    const selectLevel1 = document.getElementById("timer-type").value;
    makeDropdownForTimeLimit(timeData, selectLevel1);
}

document.getElementById("timer-type").addEventListener("change", applyDropDownTimer);
applyDropDownTimer(); 