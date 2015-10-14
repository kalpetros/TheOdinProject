$(document).ready(function() {
	// Default grid values
	$('.etchbody').append('<table></table>');
	// Add table row
	for (i=1; i<=16; i++) {
		$('table').append('<tr></tr>');
	}
	// Add table data
	for (i=1; i<=16; i++) {
		$('tr').append('<td></td>');
	}
	sketchGrid();
	// Let user select the grid size
	$('.gridsize').on('click', function() {
		$('table').remove();
		$('tr').remove();
		$('td').remove();
		var gridsize = prompt("Enter a new grid size");
		// Add table, tr and td
		$('.etchbody').append('<table></table>');
		// Add table row
		for (i=1; i<=gridsize; i++) {
			$('table').append('<tr></tr>');
		}
		// Add table data
		for (i=1; i<=gridsize; i++) {
			$('tr').append('<td></td>');
		}
		sketchGrid();
	});
	// Styles
	// Default
	$('.default').on('click', function() {
		$('td').mouseover(function() {
			$(this).css("background-color", "white");
		});
	});
	// Generate a random color
	$('.random').on('click', function() {
		var randomColor = (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$('td').mouseover(function() {
			$(this).css("background-color", "#" + randomColor);
		});
	});
	// Generate a random color on each box
	$('.tutti').on('click', function() {
		$('td').mouseover(function() {
			var randomColor = (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
			$(this).css("background-color", "#" + randomColor);
		});
	});
	// Clear the sketch board
	$('.clear').on('click', function() {
		$('table').remove();
		$('tr').remove();
		$('td').remove();
	});
});
// Sketch on the grid
function sketchGrid() {
	$('td').mouseover(function() {
		$(this).css("background-color", "white");
	});
};