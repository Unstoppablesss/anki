var sequential = ["'7'", "<i>7</i>", "Syntax Error", "Nan"]; //to comment for Anki
var result = [1]; //to comment for Anki
/*=================================================
=            DIVIDE BY ( "/") FOR TEST            =
=================================================*/
var examples = $("#selectbox")[0];
//result.length = sequential.length;
function divide(target) {
	var re = /\s*\|\s*/;
	var choices = target.innerHTML;
	// boxes = choices.split(re); //to uncomment for Anki
	// boxes = shuffle(boxes);    //to uncomment for Anki
	boxes = sequential;
	var list = "";
	list = list + '<ul id="selectable">';
	for (var i = 0; i < boxes.length; i++) {
		list = list + '<li class="ui-widget-content">' + boxes[i] + '</li>';
	}
	list = list + "</ul>";
	target.innerHTML = list;
}
/*=====  End of DIVIDE BY ( "/") FOR TEST  ======*/
var title = document.querySelector('.title');
var toggle = document.getElementById('toggle');
var rightAnswers = document.querySelector('.right-answers');
var button = document.getElementsByTagName('button')[0];
// rightAnswers.style.display = 'none';
if (toggle) {
	toggle.addEventListener('click', function () {
		button.classList.toggle('active');
		rightAnswers.classList.toggle('active');
	});
}
/*================================================
=            DIVIDE BY ( "/") TO ANKI            =
================================================*/
// var examples = $("#selectbox")[0];
// if (!result) {
// 	var result = [];
// }

// function divide(target) {
// 	var re = /\s*\|\s*/;
// 	var choices = target.innerHTML;
// 	var boxes = choices.split(re);
// 	boxes = shuffle(boxes);
// 	boxes = sequential;
// 	var list = "";
// 	list = list + '<ul id="selectable">';
// 	for (var i = 0; i < boxes.length; i++) {
// 		list = list + '<li class="ui-widget-content">' + boxes[i] + '</li>';
// 	}
// 	list = list + "</ul>";
// 	target.innerHTML = list;
// }
/*=====  End of DIVIDE BY ( "/") TO ANKI  ======*/
divide(examples);
/*----------------------------*/
window.scrollTo(0, 0);
if (result !== undefined) {
	var lengthRe = result.length;
}
var value;
var counter = 0;
var newResult = [];
for (var z = 0; z < lengthRe; z++) {
	for (i = 0; i < sequential.length; i++, counter++) {
		value = result[z];
		if (value === i) {
			newResult[i] = i;
			console.log("hello");
		}
		else {
			console.log("by");
			if (typeof (newResult[i]) !== "number") newResult[i] = "";
		}
	}
}
divide(examples);
var correctArr = [];
var italic;
var correct = 0;
for (var i = 0; i < $(".ui-widget-content").length; i++) {
	italic = $(".ui-widget-content")[i].innerHTML.match(/\<([\/i]*)\>/);
	console.log("count");
	if (italic) {
		correct++;
		console.log("italic");
		correctArr.push(i);
		if (i === newResult[i]) {
			$(".ui-widget-content")[newResult[i]].style.backgroundColor = "#6bd382";
			$(".ui-widget-content")[newResult[i]].style.color = "white";
			var m = i;
			//				break;
		};
	}
	else if (italic === null && $(".ui-widget-content")[newResult[i]] !== undefined) {
		$(".ui-widget-content")[newResult[i]].style.backgroundColor = "#bc5476 ";
		$(".ui-widget-content")[newResult[i]].style.color = "white";
		toggle.style.display = "inline-block";
		rightAnswers.style.display = "block";
	}
}

function sortRightAnwers() {
	for (var i = 0; i < result.length; i++) {
		if (result[i] !== correctArr[i]) {
			for (var i = 0; i < result.length; i++) {
				$(".ui-widget-content")[result[i]].style.backgroundColor = "#bc5476 ";
				$(".ui-widget-content")[result[i]].style.color = "white";
				toggle.style.display = "inline-block";
				rightAnswers.style.display = "block";
			}
		}
	}
}
if (result) {
	sortRightAnwers();
}
var rightAnswer = [];
for (var i = 0; i < correctArr.length; i++) {
	rightAnswer.push($(".ui-widget-content")[correctArr[i]].textContent);
}
var list2 = "";
list2 += "<ul id='selectable'>";
for (var i = 0; i < rightAnswer.length; i++) {
	list2 += "<li class='ui-widget-content'>" + rightAnswer[i] + '</li>';
}
list2 += "</ul>";
if (lengthRe === 0) {
	toggle.style.display = "inline-block";
	rightAnswers.style.display = "block";
}
$(".right-answers")[0].innerHTML = list2;
//[newResult].length
//if (examples.length > 0 && $("#selectable>li")[0] === undefined) {
//}