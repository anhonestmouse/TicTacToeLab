console.log("this is initializing the T^3 logic");
$(document).ready(function(){
// let initialize = function(){
	// clear board first, then:
	let clickCounter = 0;
	$('.box').click(function(){
		if(!($(this).hasClass('clicked'))){
			if(clickCounter%2===0){
				console.log('X');
				$(this).addClass('clicked X');
				$(this).text('X');
				$(this).css('background-color', '#8ff1ff');
				$(this).css('color','#ff1ff8');
			}
			else{
				console.log('O');
				$(this).addClass('clicked O');
				$(this).text('O');
				$(this).css('background-color', '#FFA970');
				$(this).css('color','#079AFF');
			}
			clickCounter+=1;
			// checkForWin();
		}else{
			alert('This has already been selected.  Please choose an empty cell!');
		}
	});
});

