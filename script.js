$(function(){
	
function Button(text) {
	this.text = text  || 'Hello';
//	możliwość tworzenia obiektu bez podania argumentu, w takim przypadku domyślną wartością właściwości text naszych przycisków będzie 'Hello'.	
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
	});
	this.$element.appendTo($('body'));
	//lub $('body').append(this.$element);
	}
}
var btn1 = new Button('Hello!');
btn1.create();
var btn11 = new Button('Hola!');
btn11.create();
var btn111 = new Button();
btn111.create();
})
