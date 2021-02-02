//Add Note
$("#submit").click(function(){
    var notes = $("#notes").val();
    var itemCount = $("#output div").length;   
 
    $("#output").append("<div class='noteItem' id=" + ++itemCount + ">" + 
    "<p> Note: " + itemCount + "</p>" +
    "<p class='limit-2'>" + notes + "</p>" +
    "<button href='#' class='removeItem' onClick='removeNote(" + itemCount + ")'>Delete</button>" +
    "<button href='#' class='removeItem' onClick='viewDetail(" + itemCount + ")'>Detail</button></div>"
    );    
});

//Remove Note
function removeNote(itemID){
    $("#" + itemID).remove();    
}


//Update Task
function updateTask(checkboxID){
    var checkBox = document.getElementById(checkboxID);
    var itemID = checkboxID.split('-')[1];
    if(checkBox.checked == true){
        $("#" + itemID).css("color", "green");
    }
    else{
        $("#" + itemID).css("color", "black");
    }
}


//View Detail
function viewDetail(itemID){
    $("#" + itemID + " .limit-2").removeClass("limit-2");
}