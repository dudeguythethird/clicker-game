$(document).ready(function() {
    var score = 0;

    $(".get-stuff").click(function() {
        score = score + 1;
        $(".total-stuff-amount").text(score);
    })
})