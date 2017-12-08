function timer(cb,seconds) {
    var intervalId = setInterval(function () {
        seconds--;
        if (seconds > 0) {
            console.log("You have " + seconds + " seconds left");
        } else {
            console.log("Time's UP!");
            cb();
            clearInterval(intervalId);
        }
    }, 1000)
}
