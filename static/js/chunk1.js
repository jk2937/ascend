(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("chunk1",
{ "height":8,
 "layers":[
        {
         "data":[4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4848, 4848, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4848, 4848, 4848, 4848, 4848, 4848, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928, 4928],
         "height":8,
         "name":"bg",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 5504, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5494, 0, 5250, 0, 0, 3022, 0, 0, 0, 0, 5574, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5574, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5574, 0, 0, 0, 0, 6864, 0, 5250, 5251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":8,
         "name":"bg2",
         "opacity":0.46000000834465,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4682, 4684, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4682, 4683, 4683, 4683, 4683, 4684, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4763, 4763, 4763, 4763, 4763, 4763, 4763, 4763, 4763, 4763],
         "height":8,
         "name":"fg",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "image":"monsterboy_assets.png",
         "imageheight":1456,
         "imagewidth":1280,
         "margin":0,
         "name":"monsterboy_assets",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":16,
         "tilewidth":16
        }],
 "tilewidth":16,
 "version":1,
 "width":10
});