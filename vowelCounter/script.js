//Vowel Counter
$("#submit").click(function(){
    var inputText = $("#inputText").val();
    
    //Pattern variable contains is a RegExp 
    //what to find is written between two forward slashes
    // '|' is for 'or' condition i.e., match the next character if current one does not matches
    //'g' is for global search i.e., search till the end of string, do not stop at the 1st occurance
    //'i' is for case insensitive
    var pattern = /a|e|i|o|u/gi;
    
    var vowelCount = inputText.match(pattern).length;
    alert("Vowels count: " +vowelCount);
    
});


