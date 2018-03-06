// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

/*$('#sizePicker').submit(function(event) {

})
*/
var rows=$("#input_height").val();
var cols=$("#input_width").val();
ourTable=$("#pixel_canvas");
ourTable.children().remove();

for(var i=0;i<rows;i++) {
	ourTable.append("<tr></tr>");
	for(var j=0;j<cols;j++) {
		ourTable.children().last().append("<td></td>");
	}
}
ourTable.on("click","td", function() {
	var color=$("input[type='color']").val();
	$(this).attr("bgcolor", color);
})
}

$("input[type='submit']").click(function(e) {
	e.preventDefault();
	makeGrid();
});
