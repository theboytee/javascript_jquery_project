

$(document).ready(function(){
	
	var $grid = $(".grid");

	var clearGrid = function(){
		$(".grid").empty();
	};
	
	var createGrid = function(gridDimension){
		clearGrid();	
		
		var squareSize = 600/gridDimension; 

		for(var i=0; i<gridDimension; i++){
			$grid.append("<div class='square firstSquare' style='width:"+squareSize+"px; height:"+squareSize+"px;'></div>");
			
			for(var j=0; j<(gridDimension-1); j++){
				$grid.append("<div class='square' style='width:"+squareSize+"px; height:"+squareSize+"px;'></div>");	
			};		
			
		}
		
		
		$(".square").mouseenter(function(){
			// $(this).addClass("passed");
			
			var r = Math.floor(Math.random()*256);
			var g = Math.floor(Math.random()*256);
			var b = Math.floor(Math.random()*256);
			$(this).css('background', 'rgb('+r+','+g+','+b+')');
		});	
					
	};
	
	var resetGrid = function(){
		var gridDimension = prompt("How many rows/columns do you want in the new grid?","16");
		if(isNaN(gridDimension)){	
			alert("You entered an invalid value, try again!");
		}else{
			createGrid(gridDimension);
		}
		
	};
	
	createGrid(16);
	
	$("#reset").click(function(){
		resetGrid();
	});

});