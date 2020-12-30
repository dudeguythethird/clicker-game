$(document).ready(function () {

    //The core logic for this game came from the following youtube tutorial: https://www.youtube.com/watch?v=d-AbDEwpp6g&t=1161s&ab_channel=TanktotGames

    //I have adapted and altered much of it to suit my needs. For example, I am using jQuery and the tutorial is not. Additionally, I have simplified the addToScore function and included .click event handlers in this JS file (the tutorial shows inline code).

    var score = 0;
    var stuffGetterCost = 15;
    var stuffGetters = 0;
    var factoryCost = 100;
    var factories = 0;

    function addToScore() {
        score++;
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

    function buyFactory() {
        if (score >= factoryCost) {
            score = score - factoryCost;
            factories = factories + 1;
            factoryCost = Math.round(factoryCost * 1.15);
            $("#total-stuff-amount").text(score);
            $("#factory-cost").text(factoryCost);
            $("#factory-value").text(factories);
        }
    }

    setInterval(function(){
        score = score + stuffGetters;
        score = score + factories * 5;
        $("#total-stuff-amount").text(score);
    }, 1000) //1000ms = 1 second

    //I learnt the following method here: https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery

    setInterval(function(){
    if (score >= stuffGetterCost ) {
        $("#auto-buy").removeClass("buy-inactive");
    }}, 100);

    setInterval(function(){
    if (score <= stuffGetterCost) {
        $("#auto-buy").addClass("buy-inactive");
    }}, 100);

    setInterval(function(){
    if (score >= factoryCost ) {
        $("#factory-buy").removeClass("buy-inactive");
    }}, 100);

    setInterval(function(){
    if (score <= factoryCost) {
        $("#factory-buy").addClass("buy-inactive");
    }}, 100);
    
    $(".get-stuff").click(addToScore);
    $("#auto-buy").click(buyStuffGetter);
    $("#factory-buy").click(buyFactory);
})

