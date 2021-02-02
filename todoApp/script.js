//Add Task
$("#submit").click(function(){
    var itemName = $("#itemName").val();
    var itemCount = $("#output ol li").length;   

    $("#output ol").append("<li id=" + ++itemCount + ">" +    
    itemName + 
    "<input type='checkbox' id='check-" + itemCount + "' onchange='updateTask(this.id)'></input>" + 
    "<a href='#' class='removeItem' onClick='removeTask(" + itemCount + ")'>X</a></li>");    
});

//Remove Task
function removeTask(itemID){
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