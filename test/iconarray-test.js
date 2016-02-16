var tape = require("tape"),
    iconArray = require("../").iconArray;

tape("check empty layout", function(test) {
	var myArray = iconArray();
	test.equal( myArray([]).length, 0 );
	test.end();
});

tape("check 10x10 layout", function(test) { // a nice neat 10x10
	var myArray = iconArray()
		.width(10)
		.height(10);

	var layout = myArray(getTestData(100));

	test.equal( layout.length, 100 );
	test.equal( layout[0].position.x, 0);
	test.equal( layout[0].position.y, 0);
	test.equal( layout[10].position.x, 0);
	test.equal( layout[10].position.y, 1);

	test.equal( myArray.position(25).x, 5);
	test.equal( myArray.position(25).y, 2);
	test.equal( myArray.width(), 10);
	test.equal( myArray.height(), 10);
	test.end();
});

tape("check 10x? layout", function(test){
	var myArray = iconArray()
		.width(10);

	var layout = myArray(getTestData(900));
	test.equal( layout.length, 900 );
	test.equal( myArray.position(320).x, 0);
	test.equal( myArray.position(320).y, 32);
	test.equal( myArray.width(), 10);
	test.equal( myArray.height(), 90);
	test.end();
});


function getTestData(n){
	var a = [];
	for(var i=0; i<n; i++){
		a.push(i);
	}
	return a;
}