function test() {
	this.a = "A Test"; 
	var that = this;
	//OLD
	// var that=this;
	// $("#btn").click(function() {
	// 	alert(this.a);
	// })

	//NEW
	$("#btn").click(()=>{
		alert(that.a)
	})
}

function test2()
{
	var names = ["Nghia", "Peter"];
	var messages = names.map(function(name){
		return "Hello " + name;
	});
	//NEW
	var messages = names.map((name)=> "Hello"+name);

	alert(messages[0]);
	alert(messages[1]);
}

var sum = (a,b) => a+b;

test();
alert(sum(1,2));