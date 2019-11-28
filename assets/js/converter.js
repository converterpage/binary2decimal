var binaryArea = $("textarea[name*='binaryArea']");
var hexArea = $("textarea[name*='hexArea']");
var octalArea = $("textarea[name*='octalArea']");

$("button[name*='submitBtn1']").click(function(){
   
    // converting decimal to binary
    var binaryString = parseInt($("input[name*='decimalInput']").val()).toString(2);

    // Displaying the converted decimal to the textAreas
    binaryArea.val(binaryString);
});

$("button[name*='submitBtn2']").click(function(){
    //getting the value from the input
    var binary = document.getElementById("number").value;
   
    // converting binary to decimal
    var decimal = parseInt(binary, 2).toString(10)
    // Displaying the converted decimal to the textAreas
    binaryArea.val(decimal);
});
// Event listener for the reset button
$("button[name*='resetBtn']").click(function(){
    // resetting the value of all the textarea and input
    $("input[name*='decimalInput']").val("");
    binaryArea.val("");
});
