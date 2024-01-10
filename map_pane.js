function map_pane(x_coord, y_coord){
	
	this.x_coord = x_coord;
	this.y_coord = y_coord;

	this.width = 3;
	this.height = this.width; //we only work with squares at the moment :S
	
	this.chunks = new Array();
	
	for(var i = 0; i < this.width * this.width; i ++){
		var x = ( i % this.width ) ;
		var y = ( Math.floor( i / this.width) ) ;
		
		this.chunks[i] = new map_chunk(x_coord * this.width + x, y_coord * this.height + y);
	}
	
	this.full_pixel_width = this.chunks[0].full_pixel_width * this.width;
	this.full_pixel_height = this.chunks[0].full_pixel_height * this.height;
	
	this.draw = function(pos_x, pos_y){
		if(!boxcollide(pos_x - cam_x, pos_y - cam_y, this.full_pixel_width, this.full_pixel_height, 0, 0, canvas.width, canvas.height)) return;
		for(var i = 0; i < this.chunks.length; i ++){
		
			var x = ( i % this.width ) * this.chunks[0].full_pixel_width;
			var y = ( Math.floor( i / this.width) ) * this.chunks[0].full_pixel_height;
				
			this.chunks[i].draw(
				pos_x + x,
				pos_y + y 
			);
		}
		/*ctx.beginPath();
		ctx.lineWidth="1";
		ctx.strokeStyle="red";
		ctx.rect(
			pos_x - cam_x, 
			pos_y - cam_y, 
			this.full_pixel_width, 
			this.full_pixel_height
		);
		ctx.stroke();
		ctx.stroke();
		ctx.fillStyle="red";
		ctx.fillText("(" + this.x_coord + ", " + this.y_coord + ")",pos_x + 2 - cam_x, pos_y + 20 - cam_y);*/
	}
	
}