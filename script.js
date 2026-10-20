
let selectedDepartment = "";
let selectedBranch = "";
let selectedYear = 0;

function hideAllSections() {
    document.getElementById("allied-section").hidden = true;
    document.getElementById("year-section").hidden = true;
    document.getElementById("roll-section").hidden = true;
    document.getElementById("profile-section").hidden = true;
    document.getElementById("message").textContent = "";
}

function selectMainDepartment(department) {
    hideAllSections();
    selectedDepartment = department;
    selectedBranch = "";
    selectedYear = 0;

    if (department === "Allied") {
        document.getElementById("allied-section").hidden = false;
        document.getElementById("message").textContent =
            "Choose CAD, AML, or CSM.";
    } else {
        document.getElementById("message").textContent =
            department + " selected. Student profile details are not available here.";
    }
}

function selectAlliedBranch(branch) {
    hideAllSections();
    selectedBranch = branch;

    if (branch !== "CAD") {
        document.getElementById("message").textContent =
            branch + " selected. The personal introduction is available only under CAD, Third Year, Roll Number 8.";
        return;
    }

    document.getElementById("year-section").hidden = false;
    document.getElementById("year-heading").textContent =
        "CAD - Select Academic Year";

    document.getElementById("message").textContent =
        "Choose your academic year.";
}

function selectYear(year) {
    hideAllSections();
    selectedYear = year;

    if (selectedBranch !== "CAD" || year !== 3) {
        document.getElementById("message").textContent =
            "The personal introduction is available only for CAD, Third Year, Roll Number 8.";
        return;
    }

    document.getElementById("roll-section").hidden = false;

    const rollGrid = document.getElementById("roll-grid");
    rollGrid.innerHTML = "";

    for (let number = 1; number <= 71; number++) {
        const button = document.createElement("button");
        button.className = "roll";
        button.textContent = "Roll Number " + number;
        button.addEventListener("click", function () {
            selectRollNumber(number);
        });

        rollGrid.appendChild(button);
    }

    document.getElementById("message").textContent =
        "Select your roll number.";
}

function selectRollNumber(number) {
    document.getElementById("profile-section").hidden = true;

    if (
        selectedDepartment === "Allied" &&
        selectedBranch === "CAD" &&
        selectedYear === 3 &&
        number === 8
    ) {
        document.getElementById("roll-section").hidden = true;
        document.getElementById("profile-section").hidden = false;
        document.getElementById("message").textContent = "";
    } else {
        document.getElementById("message").textContent =
            "No personal introduction is available for this selection.";
    }
}

function goBackToRollNumbers() {
    document.getElementById("profile-section").hidden = true;
    document.getElementById("roll-section").hidden = false;
    document.getElementById("message").textContent =
        "Select a roll number.";
}
