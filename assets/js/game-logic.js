$(document).ready(function () {

    var score = 0;

    $(".get-stuff").click(addToScore(1));

    function addToScore(amount) {
        score = score + amount;
        //document.getElementById("total-stuff-amount").innerHTML = score;
        $("#total-stuff-amount").text(score);
    }
})