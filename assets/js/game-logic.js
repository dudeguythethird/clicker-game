$(document).ready(function () {

    //The core logic for this game came from the following youtube tutorial: https://www.youtube.com/watch?v=d-AbDEwpp6g&t=1161s&ab_channel=TanktotGames

    //I have adapted and altered much of it to suit my needs. For example, I am using jQuery and the tutorial is not. Additionally, I have simplified the addToScore function, added a buyClickingPower function, added a buyGameVictory function, and included .click event handlers in this JS file (the tutorial shows JS included in between script tags in the main HTML file and uses onclick attributes for the relevant elements in said HTML).

    //Basic Values

    var score = 0;
    var clickingPower = 1;
    var clickingPowerCost = 100;
    var clickingPowerNext = 3;

    //Shop Items and Costs

    var stuffGetterCost = 15;
    var stuffGetters = 0;
    var factoryCost = 100;
    var factories = 0;
    var bankCost = 1000;
    var banks = 0;
    var gameVictoryCost = 1000000000;

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
            factoryCost = Math.round(factoryCost * 1.2);
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
            bankCost = Math.round(bankCost * 1.25);
            $("#total-stuff-amount").text(score);
            $("#bank-cost").text(bankCost);
            $("#bank-value").text(banks);
            updateStuffPerSecond();
        }
    }

    function buyClickingPower() {
        if (score >= clickingPowerCost) {
            score = score - clickingPowerCost;
            clickingPower = clickingPower * 3;
            clickingPowerCost = Math.round(clickingPowerCost * 3);
            clickingPowerNext = clickingPower * 3;
            $("#total-stuff-amount").text(score);
            $("#clicking-power-cost").text(clickingPowerCost);
            $("#click-power-next").text(clickingPowerNext);
            updateStuffPerSecond();
        }
    }

    function buyGameVictory() {
        if (score >= gameVictoryCost) {
            score = score - gameVictoryCost;
            alert("You have won the game! Please feel a sense of acomplishement. Also, feel free to keep getting more stuff.");
            $("#total-stuff-amount").text(score);
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

    //Save/Load Game Functions

    function loadGame() {
        var savedGame = JSON.parse(localStorage.getItem("gameSave"));
        // The following "if" functions check if a given value is stored in the gameSave object, before updating the working value to the one found in said object. This is in order to prevent errors, should it fail to find a value in the gameSave (perhaps due to a change you make to the code)
        if (typeof savedGame.score !== "undefined") score = savedGame.score;
        if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
        if (typeof savedGame.clickingPowerCost !== "undefined") clickingPowerCost = savedGame.clickingPowerCost;
        if (typeof savedGame.clickingPowerNext !== "undefined") clickingPowerNext = savedGame.clickingPowerNext;
        if (typeof savedGame.stuffGetterCost !== "undefined") stuffGetterCost = savedGame.stuffGetterCost;
        if (typeof savedGame.stuffGetters !== "undefined") stuffGetters = savedGame.stuffGetters;
        if (typeof savedGame.factoryCost !== "undefined") factoryCost = savedGame.factoryCost;
        if (typeof savedGame.factories !== "undefined") factories = savedGame.factories;
        if (typeof savedGame.bankCost !== "undefined") bankCost = savedGame.bankCost;
        if (typeof savedGame.banks !== "undefined") banks = savedGame.banks;
    }

    function saveGame() {
        var gameSave = {
            score: score,
            clickingPower: clickingPower,
            clickingPowerCost: clickingPowerCost,
            clickingPowerNext: clickingPowerNext,
            stuffGetterCost: stuffGetterCost,
            stuffGetters: stuffGetters,
            factoryCost: factoryCost,
            factories: factories,
            bankCost: bankCost,
            banks: banks
        };
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
    }

    window.onload = function(){
        loadGame();
        updateStuffPerSecond();
        $("#total-stuff-amount").text(score);
        $("#auto-cost").text(stuffGetterCost);
        $("#stuff-getter-value").text(stuffGetters);
        $("#click-power-next").text(clickingPowerNext);
        $("#clicking-power-cost").text(clickingPowerCost);
        $("#factory-cost").text(factoryCost);
        $("#factory-value").text(factories);
        $("#bank-cost").text(bankCost);
        $("#bank-value").text(banks);
    };

    setInterval(function() {
            saveGame();
        }, 30000) //30000ms = 30 seconds

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.which == 83) { //"83" is a code that refers to the key "s", the codes says if the the keys "ctrl + s" are pressed.
            event.preventDefault();
            saveGame();
        }
    })

    function resetGame() {
        if (confirm("Are you sure you want to reset your game?")){
            var gameSave = {}; 
            localStorage.setItem("gameSave", JSON.stringify(gameSave)); //Creating and storing an empty save game.
            location.reload();
        }
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
    if (score >= stuffGetterCost) {
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

    setInterval(function(){
    if (score >= clickingPowerCost ) {
        $("#click-power-buy").removeClass("buy-inactive");
    }}, 100);

    setInterval(function(){
    if (score <= clickingPowerCost) {
        $("#click-power-buy").addClass("buy-inactive");
    }}, 100);

    setInterval(function(){
    if (score >= gameVictoryCost ) {
        $("#victory-buy").removeClass("buy-inactive");
    }}, 100);

    setInterval(function(){
    if (score <= gameVictoryCost) {
        $("#victory-buy").addClass("buy-inactive");
    }}, 100);

    //Click Event Handlers for Game
    
    $(".get-stuff").click(addToScore);
    $("#auto-buy").click(buyStuffGetter);
    $("#factory-buy").click(buyFactory);
    $("#bank-buy").click(buyBank);
    $("#save").click(saveGame);
    $("#reset").click(resetGame);
    $("#click-power-buy").click(buyClickingPower);
    $("#victory-buy").click(buyGameVictory);
})