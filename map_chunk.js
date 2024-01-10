function map_chunk(x_coord, y_coord){
	
	this.x_coord = x_coord;
	this.y_coord = y_coord;
	
	this.x_position_on_screen = 0;
	this.y_position_on_screen = 0;
	
	this.chunk_width = 10;
	this.chunk_height = 8;//rip this from file
	this.tile_width = 16;
	this.tilesheet_width = 80;
	
	this.full_pixel_width = this.chunk_width * this.tile_width;
	this.full_pixel_height = this.chunk_height * this.tile_width;
	
	this.layers = new Array();
	
	this.seed = 1;
	this.unique_seed_random = function() {
		var x = Math.sin(this.seed++) * 10000;
		return x - Math.floor(x);
	}
	this.set_unique_seed_from_coord = function(x, y) {
		//console.log(x + ", " + y);
		this.seed = Math.pow(x, 3) + Math.pow((100*y - 3), 3); //magic
		//console.log(this.seed);
	}
	this.set_unique_seed_from_coord(x_coord, y_coord); 
	
	this.generate = function(){
		
		this.possible_chunks = new Array();
					
		this.possible_chunks[0] = TileMaps.chunk1;
		this.possible_chunks[1] = TileMaps.chunk2;
		this.possible_chunks[2] = TileMaps.chunk3;
		this.possible_chunks[3] = TileMaps.chunk4;
		
		var chosen_chunk = this.possible_chunks[Math.floor( this.unique_seed_random() * this.possible_chunks.length )]; //choose a chunk to modify
		
		for(var h = 0; h < chosen_chunk.layers.length; h++){
			this.layers[h] = new map_layer();
			var probability = chosen_chunk.layers[h].opacity * 100;
			for(var i = 0; i < chosen_chunk.layers[h].data.length; i++){
				if(Math.floor( this.unique_seed_random() * 100 ) + 1 > probability){
					//this.loaded_chunk.layers[h].data[i] = 0;
				} else {
					this.layers[h].data[i] = chosen_chunk.layers[h].data[i];
				}
			}
		}
	}
	this.generate();
	
	this.draw = function(pos_x, pos_y){
		this.x_position_on_screen = pos_x;
		this.y_position_on_screen = pos_y;
		if(!boxcollide(pos_x - cam_x, pos_y - cam_y, this.full_pixel_width, this.full_pixel_height, 0, 0, canvas.width, canvas.height)) return;
		for(var h = 0; h < this.layers.length; h++){
			for(var i = 0; i < this.layers[h].data.length; i++){
			
				var x = ( i % this.chunk_width ) * this.tile_width;
				var y = ( Math.floor( i / this.chunk_width) ) * this.tile_width;
				
				var tilesheet_x = ( this.layers[h].data[i] % this.tilesheet_width - 1 ) * this.tile_width;
				var tilesheet_y = ( Math.floor( this.layers[h].data[i] / this.tilesheet_width) ) * this.tile_width;
				
				if(tilesheet_y!=0){
					ctx.drawImage(
						gfx_tiles,
						tilesheet_x,
						tilesheet_y,
						this.tile_width,
						this.tile_width,
						x + pos_x - cam_x,
						y + pos_y - cam_y,
						this.tile_width,
						this.tile_width
					);
				}
			}
		}
		
		/*ctx.beginPath();
		ctx.lineWidth="1";
		ctx.strokeStyle="lime";
		ctx.rect(
			pos_x, 
			pos_y, 
			this.full_pixel_width, 
			this.full_pixel_height
		);
		ctx.stroke();
		ctx.fillStyle="lime";
		ctx.fillText("(" + this.x_coord + ", " + this.y_coord + "): " + this.seed,pos_x + 2, pos_y + 10);*/
	}
}
