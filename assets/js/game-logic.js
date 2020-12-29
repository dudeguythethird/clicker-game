$(document).ready(function () {

    var score = 0;

    addToScore(1000)

    function addToScore(amount) {
        score = score + amount;
        //document.getElementById("total-stuff-amount").innerHTML = score;
        $("#total-stuff-amount").text(score);
    }

    $(".get-stuff").click(a)
})