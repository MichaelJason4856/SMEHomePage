let answer1 = document.getElementById("answer");

function whosDoingNextQuestion(names) {
    var names = ["Michael", "George", "Shivani", "Chuck", "Mark", "Ben"];
    var numberOfPersons = names.length; 
    var randomPersonPosition = Math.floor(Math.random()* numberOfPersons);
    var randomPerson = names[randomPersonPosition];

    let prevName = randomPerson;
    while (true) {
        newName = Math.floor(Math.random() * numberOfPersons)
        if (newName != prevName){
            break;
        }
    }
    prevName = newName;
    

    answer1.textContent = randomPerson + " is going to the next question of the day."

    console.log(prevName);
}

