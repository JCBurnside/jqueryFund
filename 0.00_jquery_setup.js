$(()=>{
	$('h1').click(()=>{$('body')[0].innerHTML+="<h2>Hello</h2>";
		$('h2').click(()=>{$('body')[0].innerHTML+="<h3>Um.....</h3>";
			$('h3').click(()=>alert("WHY!!!!!!"))
		})
	})
})