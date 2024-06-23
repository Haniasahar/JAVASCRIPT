let total_marks = 200;
let students = [
    {
        name: "Ali",
        scienceMarks: 90,
        englishMarks: 70,
    },

    {
        name: "Huzaifa",
        scienceMarks: 10,
        englishMarks: 40,
    },

    {
        name: "Asim",
        scienceMarks: 40,
        englishMarks: 60,
    },
];

function calculate_marks(n) {
    let total = n.scienceMarks + n.englishMarks;
    let percentage = (total / total_marks) * 100;
    return { percentage, total };
}

for (let index = 0; index < students.length; index++) {
    let result = calculate_marks(students[index]);

    console.log("-------------------");
    console.log("-------------------");
    console.log("Name: " + students[index].name);
    console.log("Science Marks: " + students[index].scienceMarks);
    console.log("English Marks: " + students[index].englishMarks);
    console.log("Total Marks: " + result.total);
    console.log("Percentage: " + result.percentage);

    result.percentage >= 40 ? console.log("PASSED") : console.log("FAILED");
}

