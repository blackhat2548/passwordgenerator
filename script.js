document.getElementById("calculateBtn").addEventListener("click", function () {
    const dobInput = document.getElementById("dob");
    const resultDisplay = document.getElementById("result");

    const dob = new Date(dobInput.value);
    const today = new Date();

    if (isNaN(dob)) {
        resultDisplay.textContent = "Please enter a valid date.";
    } else {
        const ageInMillis = today - dob;
        const years = Math.floor(ageInMillis / (365 * 24 * 60 * 60 * 1000));
        const months = Math.floor((ageInMillis % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
        const days = Math.floor((ageInMillis % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

        resultDisplay.innerHTML = `
            <p class="age-result">${years} years, ${months} months, ${days} days</p>
            <p class="age-result">Happy ${years}th birthday!</p>
        `;
    }
});
