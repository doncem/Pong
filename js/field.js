var Field = function(width, height){
	this.width = width;
	this.height = height;
	this.x = 0;
	this.y = 0;
};

Field.prototype.redraw = function(ctx){
	ctx.save();  
	ctx.clearRect(0,0,this.width,this.height);  
	ctx.strokeStyle = '#c0c0c0';  
	ctx.beginPath();  
	ctx.moveTo(this.x,this.y);  
	ctx.lineTo(this.width,this.y);  
	ctx.lineTo(this.width,this.height);  
	ctx.lineTo(this.x,this.height);  
	ctx.lineTo(this.x,this.y);  
	ctx.stroke(); 
	ctx.restore();  
};

Field.prototype.getBoundary = function(){
	return {top: this.field.x, bottom: (this.field.x + this.field.height)};
};