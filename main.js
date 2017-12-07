console.log("this is initializing the T^3 logic");
$(document).ready(function(){
// let initialize = function(){
	// clear board first, then:
	let clickCounter = 0;
	let whoStarts = 0;
	function checkForWin(){
		console.log($('.X.leftColumn').length);
		console.log($('.X.leftColumn'));
		if(($('.X.leftColumn').length===3)||($('.X.middleColumn').length===3)||($('.X.rightColumn').length===3)||($('.X.topRow').length===3)||($('.X.middleRow').length===3)||($('.X.bottomRow').length===3)||($('.X.leftDiagonal').length===3)||($('.X.rightDiagonal').length===3)){
			// checks if there are any 3 x's in a row
			alert("X Wins!  WOOO!");
			$('.box').addClass('clicked');
		}else if(($('.O.leftColumn').length===3)||($('.O.middleColumn').length===3)||($('.O.rightColumn').length===3)||($('.O.topRow').length===3)||($('.O.middleRow').length===3)||($('.O.bottomRow').length===3)||($('.O.leftDiagonal').length===3)||($('.O.rightDiagonal').length===3)){
		// checks if there are any 3 x's in a row
		alert("O Wins!  WOOO!");
		$('.box').addClass('clicked');
		}else if(clickCounter ===9){
			alert("It's a Tie!  Players Switch");
		}
	}
	$('button').click(function(){
		$('.box').removeClass('X O clicked');
		$('.box').empty();
		$('.box').css('background-color','white');
		clickCounter = 0;
		if(whoStarts===0){
			whoStarts =1;
		}else{
			whoStarts = 0;
		}
	});

	$('.box').click(function(){
		if(!($(this).hasClass('clicked'))){
			if(clickCounter%2===whoStarts){
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
			checkForWin();
		}else{
			if($(this).hasClass('X')||$('this').hasClass('O')){
				alert('This has already been selected.  Please choose an empty cell!');
			}else{
				alert('The game is over.  Please push the restart button');
			}
		}
	});
});

