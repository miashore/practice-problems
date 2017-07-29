/*
	Write a function that takes one parameter
	Parameter 1 - An array of anything
	The function should output an array that is in reverse order from the input array
	Example:
	var myArray = ['hello', 45, 'Bob', 'what', '23'];
	arrayReverse(myArray);
	Output - ['23', 'what', 'Bob', 45, 'hello']
*/

	// things I know: where the array starts and ends, and the length of it.
	// I could create a whole new array or I can preserve the original, either way I can loop through it
	// loop through input, if a comma comes up, the letters/numbers before comma go into new array. 
	// assign them to their own variables to check if they are letters or numbers

	//var array = ['hello', 45, 'Bob', 'what', 23];

	function arrayReverse(sampleArr){
		var newArr = [];
		var newArray = null;
		if(sampleArr){
			if(!sampleArr.isArray){
				if(sampleArr.indexOf(',') > -1){
					newArray = sampleArr.split(',');
					for(var i = newArray.length - 1; i >= 0; i--){
						newArr.push(newArray[i]);
					}
				}
			} else {
				for(var j = sampleArr.length - 1; j >= 0; j--){
					newArr.push(newArray[j]);
				}
			}
			return newArr;
		} else {
			return "Enter a list of words and numbers";
		}
	}

	function handleSubmit(){
		var input = document.getElementsByTagName('input')[0];
		var submit = document.getElementsByTagName('button')[0];
		if(submit){
			submit.addEventListener('click', function(){
				var response = arrayReverse(input.value);
				input.value = '';
				var displayedResp = document.getElementsByClassName('response');
				var content = document.getElementsByClassName('content');
				if(displayedResp.length >= 1){
					displayedResp[0].remove();
					showResponse(response);
				} else {
					showResponse(response);
				}
			});
		}
	}

	function showResponse(result){
		var span = document.createElement('span');
		span.className = "response";
		var response = document.createTextNode('Reversed Array: ['+result+']');
		var content = document.getElementsByClassName('content')[0];
		span.appendChild(response);
		content.appendChild(span);			
	}
	