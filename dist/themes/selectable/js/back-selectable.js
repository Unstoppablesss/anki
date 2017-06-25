// var sequential = ["'7'", "<i>7</i>", "Syntax Error", "<i>Nan</i>"]; //to comment for Anki
// var result = [3]; //to comment for Anki
/*=================================================
=            DIVIDE BY ( "|") FOR TEST            =
=================================================*/
// var examples = $("#selectbox")[0];
// //result.length = sequential.length;
// function divide(target) {
// 	var re = /\s*\|\s*/;
// 	var choices = target.innerHTML;
// 	// boxes = choices.split(re); //to uncomment for Anki
// 	// boxes = shuffle(boxes);    //to uncomment for Anki
// 	boxes = sequential;
// 	var list = "";
// 	list = list + '<ul id="selectable">';
// 	for (var i = 0; i < boxes.length; i++) {
// 		list = list + '<li class="ui-widget-content">' + boxes[i] + '</li>';
// 	}
// 	list = list + "</ul>";
// 	target.innerHTML = list;
// }
/*=====  End of DIVIDE BY ( "|") FOR TEST  ======*/
var title = document.querySelector('.title');
// var toggle = document.getElementById('toggle');
var rightAnswers = document.querySelector('.right-answers');
var button = document.getElementsByTagName('button')[0];
// rightAnswers.style.display = 'none';

/*================================================
=            DIVIDE BY ( "|") TO ANKI            =
================================================*/
var examples = $("#selectbox")[0];
if (!result) {
	var result = [];
}

function divide(target) {
	var re = /\s*\|\s*/;
	var choices = target.innerHTML;
	var boxes = choices.split(re);
	boxes = shuffle(boxes);
	boxes = sequential;
	var list = "";
	list = list + '<ul id="selectable">';
	for (var i = 0; i < boxes.length; i++) {
		list = list + '<li class="ui-widget-content">' + boxes[i] + '</li>';
	}
	list = list + "</ul>";
	target.innerHTML = list;
}
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
var ok = true;
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
			$(".ui-widget-content")[newResult[i]].style.backgroundColor = "#2bb427";
			$(".ui-widget-content")[newResult[i]].style.color = "white";
			var m = i;
			ok = false;
		};
	}
	else if (italic === null && $(".ui-widget-content")[newResult[i]] !== undefined) {
		$(".ui-widget-content")[newResult[i]].style.backgroundColor = "#d52834";
		$(".ui-widget-content")[newResult[i]].style.color = "white";
	}
}

function sortRightAnwers() {
	for (var i = 0; i < result.length; i++) {
		if (result[i] !== correctArr[i] || result.length !== correct) {
			for (var i = 0; i < result.length; i++) {
				$(".ui-widget-content")[result[i]].style.backgroundColor = "#d52834";
				$(".ui-widget-content")[result[i]].style.color = "white";
			}
			ok = true;
		}
	}
}
if (result) {
	sortRightAnwers();
}

if (result && ok) {
	$("#selectbox.back")[0].classList.add('active');
	$("#selectbox.back")[0].addEventListener('click', function () {
		$("#selectbox.back")[0].style.border = "dashed 0.2em #d52834";
			if (this.className !== "back"){
				this.classList.toggle('active');
					for (var i = 0; i < $(".ui-widget-content").length; i++) {
						$(".ui-widget-content")[i].style.backgroundColor = null;
						$(".ui-widget-content")[i].style.color = "black";
				}
					for (var i = 0; i < correctArr.length; i++) {
						$(".ui-widget-content")[correctArr[i]].style.backgroundColor = "#2bb427";
						$(".ui-widget-content")[correctArr[i]].style.color = "white";
				}
		} else{
				for (var i = 0; i < $(".ui-widget-content").length; i++) {
						$(".ui-widget-content")[i].style.backgroundColor = null;
						$(".ui-widget-content")[i].style.color = "black";
					}
				sortRightAnwers();
				this.classList.toggle('active');
		}
	});
}
// var rightAnswer = [];
// for (var i = 0; i < correctArr.length; i++) {
// 	rightAnswer.push($(".ui-widget-content")[correctArr[i]].textContent);
// }
// var list2 = "";
// list2 += "<ul id='selectable'>";
// for (var i = 0; i < rightAnswer.length; i++) {
// 	list2 += "<li class='ui-widget-content'>" + rightAnswer[i] + '</li>';
// }
// list2 += "</ul>";
// if (lengthRe === 0) {
// 	toggle.style.display = "inline-block";
// 	rightAnswers.style.display = "block";
// }
// $(".right-answers")[0].innerHTML = list2;