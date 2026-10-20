
function hideSections() {
    const sectionIds = [
        "branchesSection",
        "departmentInfo",
        "yearsSection",
        "rollSection",
        "otherYearSection",
        "introSection"
    ];

    sectionIds.forEach(function(id) {
        document.getElementById(id).classList.add("hidden");
    });
}

function toggleDepartments() {
    document.getElementById("departments").classList.toggle("hidden");
}

function showDepartment(name) {
    hideSections();

    document.getElementById("departmentName").textContent =
        name + " Department";

    document.getElementById("departmentInfo").classList.remove("hidden");
}

function showBranches() {
    hideSections();
    document.getElementById("branchesSection").classList.remove("hidden");
}

function showYears(branch) {
    hideSections();

    document.getElementById("branchName").textContent =
        branch + " - Select Year";

    document.getElementById("yearsSection").classList.remove("hidden");
}

function showOtherYear(year) {
    hideSections();

    document.getElementById("otherYearName").textContent = year;
    document.getElementById("otherYearSection").classList.remove("hidden");
}

function showRollNumbers() {
    hideSections();

    const section = document.getElementById("rollSection");
    const container = document.getElementById("rollNumbers");

    container.replaceChildren();

    for (let number = 1; number <= 71; number++) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "roll-box";
        button.textContent = number;
        button.setAttribute("aria-label", "Roll number " + number);

        button.addEventListener("click", function() {
            if (number === 8) {
                showIntroduction();
            } else {
                alert("You selected roll number " + number);
            }
        });

        container.appendChild(button);
    }

    section.classList.remove("hidden");
}

function showIntroduction() {
    hideSections();
    document.getElementById("introSection").classList.remove("hidden");
}
