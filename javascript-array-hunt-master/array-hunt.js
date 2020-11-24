$(document).ready(function () {
    var australianAnimals = ["bandicoot", "crocodile", "dingo", "echidna",
        "frilled-dragon", "kangaroo", "koala", "ostrich", "platypus",
        "striped-possum", "tasmanian-devil", "wombat"];
    var chineseFood = ["bao", "chow-mein", "dumplings", "egg-rolls",
        "fortune-cookies", "fried-rice", "gyoza", "lo-mein", "mapo-tofu",
        "ramen", "shumai", "wonton-soup"];
    var dinosaurs = ["ankylosaurus", "brachiosaurus", "dilophosaurus",
        "pachycelphalosaurus", "pterodactyl", "stegosaurus",
        "styracosaurus", "triceratops", "tyrannosaurus-rex",
        "velociraptor"];
    var solarSystem = ["earth", "jupiter", "luna", "mars", "mercury",
        "neptune", "saturn", "sol", "uranus", "venus"];

    $("#imageSet").change(showAllImages);
    $("#huntButton").click(arrayHunt);

    showAllImages();

    function showAllImages() {
        // What image set was selected? This is the directory name
        var directoryName = $("#imageSet").val();
        // Based on the selection, use the correct array
        var arrayOfImagesNames = getSelectedArray();

        // Empty out any children from the div
        var imageDiv = $("#originalArray").empty();

        // Make two rows of images, half in each row
        var half = arrayOfImagesNames.length / 2;
        // How many images are in the current row?
        var count = 0;
        // The current <div class="row">
        var row;

        for (var fileName of arrayOfImagesNames) {
            // Time to make a new row?
            if (count === 0 || count >= half) {
                row = $("<div>").addClass("row");
                imageDiv.append(row);
                count = 0;
            }
            // append a <figure> with the image and its caption
            row.append(createImage(directoryName, fileName));
            count++;
        }

    }

    function createImage(directory, fileName) {
        // Create a div with a Bootstrap class
        var col = $("<div>").addClass("col");
        // Create a figure (can have a caption)
        var figure = $("<figure>").addClass("figure");
        col.append(figure);

        // Create the image itself
        var img = $("<img>");
        img.attr("src", `${directory}/${fileName}.png`);
        img.attr("alt", fileName);

        // Add the image to the figure
        figure.append(img);

        // Create a caption
        var caption = $(`<figcaption>${fileName}</figcaption>`)
            .addClass("figure-caption text-center");
        figure.append(caption);

        return col;
    }

    function getSelectedArray() {
        // Which image set was selected?
        var selection = $("#imageSet").val();

        // Return the array that corresponds to
        // the selected string
        if (selection === "chinese")
            return chineseFood;
        else if (selection === "solar")
            return solarSystem;
        else if (selection === "dinos")
            return dinosaurs;
        else if (selection === "aussie")
            return australianAnimals;
    }

    function arrayHunt() {
        var myArray = getSelectedArray();

        /*
        Find the first and last string in the array.
        Output them to td#firstLast
         */
 var first = myArray[0];
 var count = myArray.length
 var last= myArray[count-1];

 $("td#firstLast").text(first+" "+last);

        /*
        Find the first string that contains an 'n'.
        Output it to td#firstEnn
         */
var output =[];
$("td#firstEnn").text();
        /*
        Find all of the strings with less than 6 characters.
        Output them to td#lessThanSix
         */

$("td#lessThanSix").text();
        /*
        Find the longest string in the array.
        Output it to td#longName
         */

$("td#longName").text();
        /*
        Find all of the strings that do not contain the letter 's'.
        Output them to td#noEss
         */
var essAussie = australianAnimals(1,2,3,4,5,6,7,12);
var essChina = chineseFood(1,2,6,7,8,9,11);
var essDino = dinosaurs (5,10);
var essSolar = solarSystem (1,2,3,4,6);
$("td#noEss").text(essAussie essChina essDino essSolar);

        /*
        Output all of the strings, but with all of their vowels
        in uppercase, to td#upperVowels
         */
var stringArray =[];
for (var i of myArray){
    var iString =i.split ("");
    for (var j = 0; j = <iString.length; j++) {
        if (iString[j] === "a" || iString[j] === "e"  || iString[j] === "i" || iString[j] === "o") || iString[j] === "u";
   iString[j] = iString[j].toupperCase(); }
}
$("td#upperVowels").text(stringArray);

        /*
        Output all of the strings in reverse order and separated by
        ' - ' to td#reverseDash
         */
        var first = myArray[0];
        var count = myArray.length
        var last= myArray[count-1];
$("td#reverseDash").text(last+" "+first);
    }

});