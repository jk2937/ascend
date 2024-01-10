(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("test",
{ "height":8,
 "layers":[
        {
         "data":[1, 2, 3, 4, 5, 6, 7, 8, 9, 107, 81, 82, 83, 84, 85, 86, 87, 88, 89, 187, 161, 162, 163, 164, 165, 166, 167, 168, 169, 267, 241, 242, 243, 244, 245, 246, 247, 248, 249, 347, 321, 322, 323, 324, 325, 326, 327, 328, 329, 427, 401, 402, 403, 404, 405, 406, 407, 408, 409, 507, 481, 482, 483, 484, 485, 486, 487, 488, 489, 587, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570],
         "height":8,
         "name":"Tile Layer 1",
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