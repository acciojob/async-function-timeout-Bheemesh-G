//your JS code here. If required.
var submitButton = document.getElementById('btn');
var message = document.getElementById('output');

submitButton.addEventListener(
	'click',()=>{
		const numberInput = parseInt(document.getElementById('delay').value);
		returnTime(numberInput);
	}
);

function getTime(numberInput)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			var textInput = document.getElementById('text').value;
			resolve(textInput);
		},numberInput)
	})
}

async function returnTime(numberInput)
{
	try{
		const ans = await getTime(numberInput);
		message.textContent = ans;
	}catch(error)
	{
		console.log(error);
	}
}

