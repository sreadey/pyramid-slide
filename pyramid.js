
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function getHeight(val) {
    sym = document.getElementById("brick").value;

    // display the height determined by the slide bar
    //document.getElementById("height").innerHTML = height;
    // draw the pyramid with the given height
    drawPyramid(val, sym);
}
function getSymbol(sym) {
    //document.getElementById("symbol").innerHTML = sym;
    val = document.getElementById("height").innerHTML;
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
    height = parseInt(val);
    document.getElementById("height").innerHTML = height;

    // before drawing, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    if (sym)
        brick = sym;
    else
        brick = "#";
    var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "

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

        // create a text element with the string of characters
        //textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        //rowElem.appendChild(textElem);
        rowElem.innerHTML = rowStr;
        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
