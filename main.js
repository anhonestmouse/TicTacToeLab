console.log("this is initializing the T^3 logic");
$(document).ready(function(){

	let clickCounter = 0;
	let whoStarts = 0;
	let isGameOver=false;
	let xVictories = 0;
	let oVictories = 0;
	function checkForWin(){
		// console.log($('.X.leftColumn').length);
		// console.log($('.X.leftColumn'));
		if(($('.X.leftColumn').length===3)||($('.X.middleColumn').length===3)||($('.X.rightColumn').length===3)||($('.X.topRow').length===3)||($('.X.middleRow').length===3)||($('.X.bottomRow').length===3)||($('.X.leftDiagonal').length===3)||($('.X.rightDiagonal').length===3)){
			// checks if there are any 3 x's in a row
			alert("X Wins!  WOOO!");
			$('.box').addClass('clicked');
			++xVictories;
			$('#xWins').text(xVictories);
			isGameOver=true;
		}else if(($('.O.leftColumn').length===3)||($('.O.middleColumn').length===3)||($('.O.rightColumn').length===3)||($('.O.topRow').length===3)||($('.O.middleRow').length===3)||($('.O.bottomRow').length===3)||($('.O.leftDiagonal').length===3)||($('.O.rightDiagonal').length===3)){
		// checks if there are any 3 x's in a row
		alert("O Wins!  WOOO!");
		$('.box').addClass('clicked');
		++oVictories;
		$('#oWins').text(oVictories);
		isGameOver=true;
		}else if(clickCounter ===9){
			alert("It's a Tie!  Players Switch");
			isGameOver=true;
		}
	}
	// reset button alternates who starts
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
		isGameOver=false;
		// console.log(clickCounter);
	});
	$('.box').mouseover(function(){
		if(!$(this).hasClass('clicked')){
			if(clickCounter%2===whoStarts){
				$(this).text('X');
				$(this).css('background-color','rgba(143,241,255,.3)');
				$(this).css('color','rgba(255, 31, 248,.3)');
			}else{
				$(this).text('O');
				$(this).css('background-color','rgba(255,169,112,.3)');
				$(this).css('color','rgba(7, 154, 255,.3');
			}
		}
	});
	$('.box').mouseout(function(){
		if(!$(this).hasClass('clicked')){
			if(clickCounter%2===whoStarts){
				$(this).empty();
				$(this).css('background-color','white');
				$(this).css('color','#888888');
			}else{
				$(this).empty();
				$(this).css('background-color','white');
			}
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
			if(!isGameOver&&($(this).hasClass('X')||$(this).hasClass('O'))){
				alert('This has already been selected.  Please choose an empty cell!');

			}else{
				alert('The game is over.  Please push the restart button');
			}
		}
	});
});

