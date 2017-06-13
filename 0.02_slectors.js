$(()=>{
	$('#example-one').addClass('highlight');
	$('.example-two').css('border','4px solid gray');
	$('h5').click(()=>{$('h5').fadeOut('slow','linear');return false;});
	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();
	$('li:contains("sad")').on('click',e=>{$(e.target).hide();return false;});
});