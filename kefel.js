(function(){

	var that =  this;
 
	kefel = function(html,rangeFrom,rangeTo, multiplication){
		var lineRangeTo = rangeTo > 10 ? rangeTo : "10";
		html += "<table>";
		for(num = rangeFrom; parseInt(num) <= rangeTo; num++){
			html += "<tr>";
			for(line=1; parseInt(line) <= lineRangeTo; line++){
				multiplication.push(line+" x "+num+ " = "+ line*num);
				html += "<td>" + parseInt(line*num) + "</td>";
			}
			html += "</tr>";
		}
		html += "</table>";
		
		html += multiplications(multiplication);
		return html;
	}

	validateKefel = function(html, fields){
		var rangeFromBigger = parseInt(fields[0]) > parseInt(fields[1]);
		for(i=0;i<=fields.length;i++){
			if((parseInt(fields[i]) && typeof(parseInt(fields[i]))) && fields[i] !== "" && !rangeFromBigger){
				if(fields[i] === fields[fields.length-1]){
					return true;
				}
			}else{
				if(rangeFromBigger){
					alert("טווח המספרים אינו יכול להיות שלילי");
				}else{
					alert("נא להכניס טווח מספרים בשני השדות כדי לראות כפולות של מספרים שלא בטווח 1-10");
				}
				return false;
			}
		}
	}

	multiplications = function(multiplication){
		var html2 = "<div class='multiplications'>";
		for(i=0;i<=multiplication.length-1;i++){
			if((i != 0) && i % 10 === 0){
				html2 += "</div><div class='multiplications'>";
			}
			html2 += multiplication[i] + "<br/>";
		}
		html2 += "</div>";

		return html2;
	}

	loadKefel = function(){
		var html = "",
			multiplication = [],
			rangeFrom = document.getElementById('rangeFrom').value,
			rangeTo = document.getElementById('rangeTo').value,
			output = document.getElementById('output'),
			fieldsToValidate = [rangeFrom,rangeTo];

			var isValid = that.validateKefel(html, fieldsToValidate);

			output.innerHTML = isValid ? kefel(html, rangeFrom, rangeTo, multiplication) : kefel(html, "1", "10", multiplication);
	
		}
	var el = document.getElementById('submit');
	el.addEventListener("click", loadKefel, false );
})();