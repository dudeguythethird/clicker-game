$(document).ready(function () {

    //The core logic for this game came from the following youtube tutorial: https://www.youtube.com/watch?v=d-AbDEwpp6g&t=1161s&ab_channel=TanktotGames

    //I have adapted and altered much of it to suit my needs. For example, I am using jQuery and the tutorial is not. Additionally, I have simplified the addToScore function and included .click event handlers in this JS file (the tutorial shows inline code and uses onclick attributes for the relevant elements in the HTML).

    //Basic Values

    var score = 0;
    var clickingPower = 1;

    //Shop Items and Costs

    var stuffGetterCost = 15;
    var stuffGetters = 0;
    var factoryCost = 100;
    var factories = 0;
    var bankCost = 1000;
    var banks = 0;

    //Shop Item Functions

    function buyStuffGetter() {
        if (score >= stuffGetterCost) {
            score = score - stuffGetterCost;
            stuffGetters = stuffGetters + 1;
            stuffGetterCost = Math.round(stuffGetterCost * 1.15);
            $("#total-stuff-amount").text(score);
            $("#auto-cost").text(stuffGetterCost);
            $("#stuff-getter-value").text(stuffGetters);
            updateStuffPerSecond();
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
            updateStuffPerSecond();
        }
    }

    function buyBank() {
        if (score >= bankCost) {
            score = score - bankCost;
            banks = banks + 1;
            bankCost = Math.round(bankCost * 1.15);
            $("#total-stuff-amount").text(score);
            $("#bank-cost").text(bankCost);
            $("#bank-value").text(banks);
            updateStuffPerSecond();
        }
    }

    //Clicking Functions

    function addToScore() {
            score= score + clickingPower;
            $("#total-stuff-amount").text(score);
        }
    
    //Total Stuff Per Second Function

    function updateStuffPerSecond(){
        stuffPerSecond = stuffGetters + factories * 5 + banks * 70;
        $("#sps-value").text(stuffPerSecond);
    }

    //Automatic Score Updating Function
    
    setInterval(function(){
        score = score + stuffGetters;
        score = score + factories * 5;
        score = score + banks * 70;
        $("#total-stuff-amount").text(score);

        document.title = score + " Stuff - Stuff Getter"
    }, 1000) //1000ms = 1 second

    //Shop Buy Button Active Status Toggles

    //I learnt the following methods here: https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery

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

    setInterval(function(){
    if (score >= bankCost ) {
        $("#bank-buy").removeClass("buy-inactive");
    }}, 100);

    setInterval(function(){
    if (score <= bankCost) {
        $("#bank-buy").addClass("buy-inactive");
    }}, 100);

    //Click Event Handlers for Game
    
    $(".get-stuff").click(addToScore);
    $("#auto-buy").click(buyStuffGetter);
    $("#factory-buy").click(buyFactory);
    $("#bank-buy").click(buyBank);
})