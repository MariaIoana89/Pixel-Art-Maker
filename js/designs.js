// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  
//get table from html
const table=$("#pixel_canvas");
  
//define rows and columns
const rows=$("#input_height").val();
const cols=$("#input_width").val();

table.children().remove();
//create rows
for(let i=0;i<rows;i++) {
	table.append("<tr></tr>");
  
//create columns
	for(let j=0;j<cols;j++) {
		table.children().last().append("<td></td>");
	}
}
  
table.on("click","td", function() {
	const color=$('#colorPicker').val();
	$(this).css("background-color", color);
})
}

//create grid on button click
$('#sizePicker').submit(function(e) {
e.preventDefault();
makeGrid(); 
});


$("#pixel_canvas").on("dblclick","td", function() {
    $(this).css("background-color", "");
});

//clear the table
$("#clearGrid").on("click", function() {
  $("td").css("background-color", "")
});
