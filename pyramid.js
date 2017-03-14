
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "

function getHeight(val) {
    //sym = document.getElementById("brick").value;
    var sym = $('#brick').val();

    // display the height determined by the slide bar
    //document.getElementById("height").innerHTML = height;
    // draw the pyramid with the given height
    drawPyramid(val, sym);
}
function getSymbol(sym) {
    //document.getElementById("symbol").innerHTML = sym;
    //val = document.getElementById("height").innerHTML;
    var val = $('#height').html();
    // display the height determined by the slide bar
    //document.getElementById("height").innerHTML = height;
    // draw the pyramid with the given height
    drawPyramid(val, sym);
}
/**
* drawPyramid
*
* Renders, in the HTML document, a pyramid of the specified height
*/
function drawPyramid(val, sym) {
    if (val == "") val = 1;
    var height = parseInt(val);
    //document.getElementById("height").innerHTML = height;
    $('#height').html(height);
    // before drawing, clear the old content
    //document.getElementById("pyramid").innerHTML = "";
    $('#pyramid').empty();
    if (sym)
        brick = sym;
    else
        brick = "#";
//    var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;
        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        //rowElem = document.createElement("p");
        //rowElem.innerHTML = rowStr;
        //document.getElementById("pyramid").appendChild(rowElem);
        var rowElem = $("<p>").html(rowStr);
        $('#pyramid').append(rowElem);
    }
}
