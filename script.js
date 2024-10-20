function calculateAge() {
    const dob = document.getElementById("dob").value; // Get the date of birth input value
    
    if (dob === "") { // If no date of birth is provided, show an alert
        alert("Please enter your birthday");
        return; // Stop the function execution
    }

    const dobDate = new Date(dob); // Convert input value to a Date object
    const today = new Date(); // Get today's date
    
    let age = today.getFullYear() - dobDate.getFullYear(); // Calculate the year difference
    const monthDifference = today.getMonth() - dobDate.getMonth(); // Check the month difference
    const dayDifference = today.getDate() - dobDate.getDate(); // Check the day difference

    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Update the paragraph with the new calculated age
    document.getElementById("result").innerHTML = `Your age is ${age} years old`;
}
