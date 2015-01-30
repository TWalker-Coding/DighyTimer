var UI = require('ui');
var wind = new UI.Window();
var Vector2 = require('vector2');
var secsLeft = 180;
var Vibe = require('ui/vibe');
var startEd = 0;
var textfield2;
var minutes = 3;
var seconds = 0;
var secondsFix;
wind.show();

function update()
{
	wind.remove(textfield2);
	textfield2 = new UI.Text(
	{
		position: new Vector2(0, 60),
		size: new Vector2(144, 30),
		font: 'RESOURCE_ID_BITHAM_30_BLACK',
		text: String(minutes) + ":" + String(secondsFix),
		textAlign: 'center'
	});
	wind.add(textfield2);
	wind.show();
}
wind.on('click', 'select', function()
{
	if (startEd === 0)
	{
    timer();
		startEd++;
		setTimeout(timer(), 1000);
		console.log("Started Time");
	}
	else
	{
		console.log("Deflected!");
	}
});
wind.on('click', 'up', function()
{
	if (startEd === 1)
	{
		secsLeft = secsLeft + 1;
		seconds = seconds + 1;
		console.log("Added a Second");
		update();
	}
	else
	{
		console.log("Deflected!");
	}
});
wind.on('click', 'down', function()
{
	if (startEd === 1)
	{
		secsLeft = secsLeft - 1;
		seconds = seconds - 1;
		console.log("Subtracted a Second");
		update();
	}
	else
	{
		console.log("Deflected!");
	}
});

function timer()
{
	secsLeft = secsLeft - 1;
	minutes = Math.floor(secsLeft / 60);
	seconds = secsLeft - minutes * 60;
	secondsFix = seconds + "";
	if (secondsFix.length != 2)
	{
		secondsFix = "0" + secondsFix;
	}
	else
	{
		seconds = secondsFix;
	}
	viberateCheck();
	update();
  setTimeout(timer(), 1000);
	console.log(secsLeft + " " + minutes + " " + seconds);
}

function viberateCheck()
{
  if (secsLeft == 120)
	{
    //console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 90)
	{
     //  console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 60)
	{
    //  console.log("buzz");
		Vibe.vibrate('short');
	}
		if (secsLeft == 30)
	{
     // console.log("buzz");
    Vibe.vibrate('short');
	}
		if (secsLeft == 10)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 9)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 8)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 7)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 6)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 5)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 4)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 3)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 2)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft == 1)
	{
       // console.log("buzz");
		Vibe.vibrate('short');
	}
	if (secsLeft === 0)
	{ 
		Vibe.vibrate('double');
    console.log("Timer Halted");
    console.log("Im not supposted to fucking do this");
}
	}
var textfield = new UI.Text(
{
	position: new Vector2(0, 5),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: 'Time till Start:',
	textAlign: 'center'
});
var textfield2 = new UI.Text(
{
	position: new Vector2(0, 60),
	size: new Vector2(144, 30),
	font: 'RESOURCE_ID_BITHAM_30_BLACK',
	text: "3:00",
	textAlign: 'center'
});
wind.add(textfield);
wind.add(textfield2);
wind.show();