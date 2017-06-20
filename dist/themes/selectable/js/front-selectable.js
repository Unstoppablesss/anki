window.scrollTo(0, 0);
/*--------------------DIVIDE BY ( "|")-------------------------*/
	function shuffle(array) {
		var currentIndex = array.length
			, temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
var sequential;	

var examples = $("#selectbox")[0];

function divide(target){
	var re = /\s*\|\s*/;
var choices = target.innerHTML;
	var boxes = choices.split(re);
	boxes = shuffle(boxes);
	sequential = boxes;
var list = "";
list = list + '<ul id="selectable">';
			for (var i = 0; i < boxes.length; i++) {
			list = list + '<li class="ui-widget-content">' + boxes[i] + '</li>';
		}
list = list + "</ul>";
target.innerHTML = list;
}

	divide(examples);

/*--------------------SELECTABLE-------------------------*/
	var result;
  var arrayNum;
	$(function () {
		$("#selectable").bind( "mousedown touchstart", function(e) {
			e.preventDefault();
			e.metaKey = true;
} ).selectable({
			filter: "li",
			stop: function () {
				result = $(".ui-selected", this).map(function () {
					return $( "li" ).index(this);
				}).get();
			}
		});
	});