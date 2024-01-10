function player(){
	this.width = 16;
	this.height = 16;
	
	this.trimmed_width = 12;
	this.trimmed_height = 12;
	
	this.x = 0;
	this.y = 0;
	this.old_x = 0;
	this.old_y = 0;
	
	this.xx = 0; //x velocity;
	this.yy = 0;
	
	this.face = 1;
	this.onground = false;
	this.canjump = false;
	this.health = 4;
	
	this.moveadd = 5;
	this.jumpadd = 13;
	this.groundfriction = 2;
	this.gravity = 2;//2
	
	this.max_xx_walk = 3;
	this.max_xx_sprint = 6;
	
	this.max_xx = 3;
	this.max_yy = 15;
	
	this.animation_timer = 0;
	
	this.move = function( key_left, key_right, key_up, key_sprint ){
		if( key_sprint ) this.max_xx = this.max_xx_sprint;
		else this.max_xx = this.max_xx_walk;
		/*if( this.jetpack = true ) this.onground = true;
		if( this.wings = true ) this.canjump = true;*/
		if( !(key_left && key_right) ){
			if( key_left ){
				this.xx -= this.moveadd;
			}
			else if( key_right ){
				this.xx += this.moveadd;
			}
		}
		
		if( this.onground && this.canjump && key_up ){
			this.yy =- this.jumpadd;
			this.onground = false;
			this.canjump = false;
		}
		if( !key_up ){
			/*if( this.onground )*/ this.canjump = true;
			if( !this.onground && this.yy < 0 ) this.yy = this.yy/2;
		}
		this.yy += this.gravity; //this.gravity;
		
		//if( this.onground ){
			if( this.xx > 0 ){
				if( this.xx - this.groundfriction < 0 ) this.xx = 0;
				else this.xx -= this.groundfriction;
			}
			if( this.xx < 0 ){
				if( this.xx + this.groundfriction > 0 ) this.xx = 0;
				else this.xx += this.groundfriction;
			}
		//}
		
		if( this.xx >= this.max_xx ) this.xx = this.max_xx;
		if( this.xx <= 0 - this.max_xx ) this.xx = 0 - this.max_xx;
		
		if( this.yy >= this.max_yy ) this.yy = this.max_yy;
		if( this.yy <= 0 - this.max_yy ) this.yy = 0 - this.max_yy;
		
		this.old_x = this.x;
		this.old_y = this.y;
		
		this.x += this.xx;
		this.y += this.yy;
		
		/*if( this.yy >= this.gravity + 1 ){
			this.onground = false;
			this.canjump = false;
		}*/
		
		/*if( this.x > canvas.width - this.width){
			this.x = canvas.width - this.width;
			this.xx = 0;
		}
		if( this.x < 0 ){
			this.x = 0;
			this.xx = 0;
		}
		if( this.y > canvas.height - this.height ){
			this.y = canvas.height - this.height;
			this.yy = 0;
			this.onground = true;
		}*/
		//this.onground = false;
	}
	
	this.chunk_collide = function( chunk ){
		if(!boxcollide(
				this.x,
				this.y,
				this.width,
				this.height,
				chunk.x_position_on_screen,
				chunk.y_position_on_screen,
				chunk.full_pixel_width,
				chunk.full_pixel_height
				) ) return;
		for( var i = 0; i < chunk.layers[2].data.length; i++ ){
			var map_x = i % chunk.chunk_width;
			var map_y = Math.floor( i / chunk.chunk_width);
			var tile = chunk.layers[2].data[i];
			var tile_x = map_x * chunk.tile_width + chunk.x_position_on_screen;
			var tile_y = map_y * chunk.tile_width + chunk.y_position_on_screen;
			var collidex = boxcollide( this.x, this.old_y, this.trimmed_width, this.trimmed_height, tile_x, tile_y, chunk.tile_width, chunk.tile_width );
			if( tile > 1 ){
				if( collidex ){
					if( this.xx > 0) this.x = tile_x - this.trimmed_width;
					if( this.xx < 0 ) this.x = tile_x + chunk.tile_width;
					this.xx = 0;
				}
			}
		}
		for( var i = 0; i < chunk.layers[2].data.length; i++ ){
			var map_x = i % chunk.chunk_width;
			var map_y = Math.floor( i / chunk.chunk_width);
			var tile = chunk.layers[2].data[i];
			var tile_x = map_x * chunk.tile_width + chunk.x_position_on_screen;
			var tile_y = map_y * chunk.tile_width + chunk.y_position_on_screen;
			var collidey = boxcollide( this.x, this.y, this.trimmed_width, this.trimmed_height, tile_x, tile_y, chunk.tile_width, chunk.tile_width );
			if( tile > 1 ){
				if( collidey ){
					if( this.yy > 0 ){
						this.y = tile_y - this.trimmed_height;
						this.onground = true;
					}
					if( this.yy < 0 ) this.y = tile_y + chunk.tile_width;
					this.yy = 0;
				}
			}
		}
		
		if( this.onground ){
			if( this.xx > 0 ) this.face = 1;
			if( this.xx < 0 ) this.face = 0;
		}
	}
	
	this.draw = function( ){
		var trim_x_diff = (this.width - this.trimmed_width) /2;
		var trim_y_diff = (this.height - this.trimmed_height) /2;
		this.animation_timer += 0.5;
		if( this.animation_timer > 3 ) this.animation_timer = 0;
		if(this.onground){
			 //no skid
			if( this.xx == 0 ){ //not moving
				ctx.drawImage(
					gfx_player,
					0,
					(1-this.face) * this.height,
					16,
					16,
					this.x - trim_x_diff - cam_x,
					this.y - trim_y_diff - cam_y,
					this.width,
					this.height
				);
			} else {
				ctx.drawImage(
					gfx_player,
					this.width * (2 + Math.floor( this.animation_timer ) ),
					(1-this.face) * this.height,
					16,
					16,
					this.x - trim_x_diff - cam_x,
					this.y - trim_y_diff - cam_y,
					this.width,
					this.height
				);
			}
		} else {	//in air
			ctx.drawImage(
				gfx_player,
				this.width * 6,
				(1-this.face) * this.height,
				16,
				16,
				this.x - trim_x_diff - cam_x,
				this.y - trim_y_diff - cam_y,
				this.width,
				this.height
			);
		}
	}
}