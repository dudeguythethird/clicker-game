//The core logic for this game came from the following youtube tutorial: https://www.youtube.com/watch?v=d-AbDEwpp6g&t=1161s&ab_channel=TanktotGames

//I have adapted and altered much of it to suit my needs. For example, I am using jQuery and the tutorial is not. Additionally, I have simplified the addToScore function, added a buyClickingPower function, added a buyGameVictory function, stored key values in value maps at the beggining of the code for easy maintainability, and included .click event handlers in this JS file (the tutorial shows JS included in between script tags in the main HTML file and uses onclick attributes for the relevant elements in said HTML).

var START_VALUES = {
    score: 0,
    clickingPower: 1,
    clickingPowerNext: 3,
    stuffGetters: 0,
    factories: 0,
    banks: 0,
    stuffPerSecond: 0
};

var COST_MAP = {
    getter: 15,
    factory: 100,
    bank: 1000,
    clickingPower: 100,
    victory: 1000000000
};

var ENTITY_MULTIPLIER = {
    factory: 5,
    bank: 70,
    clickingPower: 3
};

var PRICE_SCALING = {
    getter: 1.15,
    factory: 1.2,
    bank: 1.25,
    clickingPower: 3
};

$(document).ready(function () {

    //Basic Values
    var score = START_VALUES.score;
    var clickingPower = START_VALUES.clickingPower;
    var clickingPowerCost = COST_MAP.clickingPower;
    var clickingPowerNext = START_VALUES.clickingPowerNext;
  	var stuffPerSecond = START_VALUES.stuffPerSecond;

    //Shop Items and Costs

    var stuffGetterCost = COST_MAP.getter;
    var stuffGetters = START_VALUES.stuffGetters;
    var factoryCost = COST_MAP.factory;
    var factories = START_VALUES.factories;
    var bankCost = COST_MAP.bank;
    var banks = START_VALUES.banks;
    var gameVictoryCost = COST_MAP.victory;

    //Shop Item Functions

    function buyStuffGetter() {
        if (score >= stuffGetterCost) {
            score = score - stuffGetterCost;
            stuffGetters = stuffGetters + 1;
            stuffGetterCost = Math.round(stuffGetterCost * PRICE_SCALING.getter);
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
            factoryCost = Math.round(factoryCost * PRICE_SCALING.factory);
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
            bankCost = Math.round(bankCost * PRICE_SCALING.bank);
            $("#total-stuff-amount").text(score);
            $("#bank-cost").text(bankCost);
            $("#bank-value").text(banks);
            updateStuffPerSecond();
        }
    }

    function buyClickingPower() {
        if (score >= clickingPowerCost) {
            score = score - clickingPowerCost;
            clickingPower = clickingPower * ENTITY_MULTIPLIER.clickingPower;
            clickingPowerCost = Math.round(clickingPowerCost * PRICE_SCALING.clickingPower);
            clickingPowerNext = clickingPower * ENTITY_MULTIPLIER.clickingPower;
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
        score = score + clickingPower;
        $("#total-stuff-amount").text(score);
    }

    //Total Stuff Per Second Function

    function updateStuffPerSecond() {
        stuffPerSecond = stuffGetters + factories * ENTITY_MULTIPLIER.factory + banks * ENTITY_MULTIPLIER.bank;
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

    //The following group of functions load the game by reading the relevant values from the data stored in cookies (when a save game is present)
    
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
    

    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.which == 83) { //"83" is a code that refers to the key "s", the codes says if the the keys "ctrl + s" are pressed.
            event.preventDefault();
            saveGame();
        }
    });

    function resetGame() {
        if (confirm("Are you sure you want to reset your game?")) {
            var gameSave = {};
            localStorage.setItem("gameSave", JSON.stringify(gameSave)); //Creating and storing an empty save game.
            location.reload();
        }
    }

    setInterval(function(){
        saveGame();
    }, 3000);
    
    setInterval(function () { 
        
        //Automatic Score Updating Function

        score = score + stuffGetters;
        score = score + factories * ENTITY_MULTIPLIER.factory;
        score = score + banks * ENTITY_MULTIPLIER.bank;
        $("#total-stuff-amount").text(score);

        //Shop Buy Button Active Status Toggles

        if (score >= stuffGetterCost) {
            $("#auto-buy").removeClass("buy-inactive");
        }
        if (score <= stuffGetterCost) {
            $("#auto-buy").addClass("buy-inactive");
        }
        if (score >= factoryCost) {
            $("#factory-buy").removeClass("buy-inactive");
        }
        if (score <= factoryCost) {
            $("#factory-buy").addClass("buy-inactive");
        }
        if (score >= bankCost) {
            $("#bank-buy").removeClass("buy-inactive");
        }
        if (score <= bankCost) {
            $("#bank-buy").addClass("buy-inactive");
        }
        if (score >= clickingPowerCost) {
            $("#click-power-buy").removeClass("buy-inactive");
        }
        if (score <= clickingPowerCost) {
            $("#click-power-buy").addClass("buy-inactive");
        }
        if (score >= gameVictoryCost) {
            $("#victory-buy").removeClass("buy-inactive");
        }
        if (score <= gameVictoryCost) {
            $("#victory-buy").addClass("buy-inactive");
        }

        document.title = score + " Stuff - Stuff Getter";
    }, 1000); //1000ms = 1 second

    //Click Event Handlers for Game

    $("#scroll").click(function(){
        window.scrollBy(0,2000);
    });
    $(".get-stuff").click(addToScore);
    $("#auto-buy").click(buyStuffGetter);
    $("#factory-buy").click(buyFactory);
    $("#bank-buy").click(buyBank);
    $("#save").click(saveGame);
    $("#reset").click(resetGame);
    $("#click-power-buy").click(buyClickingPower);
    $("#victory-buy").click(buyGameVictory);
});