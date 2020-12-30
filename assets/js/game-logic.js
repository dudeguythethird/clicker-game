$(document).ready(function () {

    var score = 0;
    var stuffGetterCost = 15;
    var stuffGetters = 0;

    function addToScore() {
        score++;
        //document.getElementById("total-stuff-amount").innerHTML = score;
        $("#total-stuff-amount").text(score);
    }

    function buyStuffGetter() {
        if (score >= stuffGetterCost) {
            score = score - stuffGetterCost;
            stuffGetters = stuffGetters + 1;
            stuffGetterCost = Math.round(stuffGetterCost * 1.15);
            $("#total-stuff-amount").text(score);
            $("#auto-cost").text(stuffGetterCost);
            $("#sps-value").text(stuffGetters);
        }
    }
    
    $(".get-stuff").click(addToScore);
    $("#auto-buy").click(buyStuffGetter);
})