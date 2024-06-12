let studentDatabase = {
    1: "Yash",
    2: "Aman",
    3: "Shivang",
    4: "Deepak",
    5: "Suryakanth",
    6: "Abishek",
    7: "Rahul",
    8: "Ayush",
    9: "sidharth",
    10: "Vinayak"
};

// Function to get student name based on their roll number
function getStudentName(rollNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (studentDatabase[rollNumber]) {
                resolve(studentDatabase[rollNumber]);
            } else {
                reject("Student not found");
            }
        }, 1000);
    });
}

document.getElementById("student").addEventListener("submit", function(event) {
    // console.log( event.preventDefault());
    event.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    const rollNumber = document.getElementById("RollNumber").value;
    const result = document.getElementById("result");

    result.innerHTML = "Fetching student name...";

    // Call Functon to print Student name based on their roll number
    getStudentName(rollNumber)
        .then((studentName) => {
            result.innerHTML =` Student Name: ${studentName}`;
        })
        .catch((error) => {
            result.innerHTML = `Error: ${error}`;
});
});