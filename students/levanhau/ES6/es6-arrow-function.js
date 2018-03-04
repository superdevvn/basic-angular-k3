function test() {
	this.a = "A Test";
	//old
		var that = this;
//		$("#btn").onclick(function(){
//			console.log('a');
//			alert(that.a);
//			
//		});
	$( "#btn" ).click(function() {
		console.log('a');
  alert( "Handler for .click() called." );
});
	//new
//	$("#btn").click(() => {
//		alert(this.a);
//	});
}

//function test2() {
//	var names = ["Nghia", "Peter"];
//	//old
//	//	var msg = names.map(function(name){
//	//		return "Hello "+name;
//	//	});
//
//	//new
//	var msg = names.map((name) => "Hello " + name);
//map = ánh xạ... Giống vòng for loop
//
//	alert(msg[0]);
//	alert(msg[1]);
//}
//
//var sum = function (a, b) {
//	return
//}
//
////old
//var sum = (a, b) => a + b;
//test2();
//alert(sum(1, 2));
test();