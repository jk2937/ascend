function map_pane_manager(){
	this.current_pane_x = 0;
	this.current_pane_y = 0;
	
	this.reload_panes = function(){
		this.pane = new Array();
		this.pane[0] = new map_pane( this.current_pane_x, this.current_pane_y ); 
		this.pane[1] = new map_pane( this.current_pane_x+1, this.current_pane_y );
		this.pane[2] = new map_pane( this.current_pane_x, this.current_pane_y+1 ); 
		this.pane[3] = new map_pane( this.current_pane_x+1, this.current_pane_y+1 ); 
	}
	
	this.reload_panes();
	
	this.think = function(){
		var w = this.pane[0].full_pixel_width;
		var h = this.pane[0].full_pixel_height;
		if(cam_x < 0){
			player1.x += w;
			this.current_pane_x--;
			this.reload_panes();
		}
		if(cam_x > w){
			player1.x -= w;
			this.current_pane_x++;
			this.reload_panes();
		}
		if(cam_y < 0){
			player1.y += h;
			this.current_pane_y--;
			this.reload_panes();
		}
		if(cam_y > h){
			player1.y -= h;
			this.current_pane_y++;
			this.reload_panes();
		}
	}
	
	this.draw = function(){
		var w = this.pane[0].full_pixel_width;
		var h = this.pane[0].full_pixel_height;

		this.pane[0].draw(0, 0);
		this.pane[1].draw(w, 0);
		this.pane[2].draw(0, h);
		this.pane[3].draw(w, h);
	}
}