//Add Expense
$("#addExpense").click(function(){
    var name = $("#expenseName").val();
    var date = $("#expenseDate").val();
    var amount = $("#expenseAmount").val();
    var itemCount = $("#output tbody tr").length;  

    $("#output tbody").append(
    "<tr id=" + ++itemCount + ">" +
    "<td>" + name + "</td>" +
    "<td>" + date + "</td>" +
    "<td>" + amount + "</td>" +
    "<td><a href='#' class='removeItem' onClick='removeExpense(" + itemCount + ")'>X</a></td>" +
    "</tr>"
    );
    
    //Removing the "no expense added" row
    $("#0").remove();
});

//Remove Expense
function removeExpense(itemID){
    $("#" + itemID).remove();    

    addNoExpense();
}


//If No Expense exists then display not exists row
function addNoExpense(){
    if($("#output tbody tr").length < 1){
        $("#output tbody").append(
        "<tr id='0'><td colspan='4'>No Expense Added!!!</td></tr>"
        );  
    }
}
addNoExpense();