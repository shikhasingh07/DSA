var countSeniors = function(details) {
    let count = 0;

    for (let s of details) {
        // Extract the age digits at index 11 and 12
        let age = parseInt(s[11] + s[12]);

        // Check if age is more than 60
        if (age > 60) {
            count++;
        }
    }

    return count;
};


console.log(countSeniors())