    
//Register plugin :
    $trukture.addPlugin({
     	name: "Goget-from-github",
     	show : function(code){
     		return  ( !code.includes("\n") && ( code.includes("github.com") || code.split("/").length > 2 ) )
     	},
     	exec : function(code){
     			var formatstring = code.replace('"', '').replace('"', '').replace(/\s/g,'');
     		 	$trukture.exec("go get " + formatstring,function(success){
     		 		if (success !== false){
     		 			//	alert(formatstring + " fetched!")
     		 		} else {
     		 			alert("Error running commmand!")
     		 		}
     		 	})
     		   return  code + " //fetched :)";
     	}
     })