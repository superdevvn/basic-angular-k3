function test() {
	var house = "My House";
	var mouse = "Her Mouse";
	var sum = function (a, b) {
		alert(a + b);
	}
	//old
	var a = {
		house: house,
		mouse: mouse,
		sum: sum,
		hello: function () {
			alert("Hello A");
		}
	}
	alert(a.house);
	alert(a.mouse);
	a.sum(1, 2);
	a.hello();
	//new
	var b = {
		house,
		mouse,
		sum,
		hello() {
			alert("Hello B");
		}
	}
	alert(b.house);
	alert(b.mouse);
	b.sum(1, 2);
	b.hello();
}
test();