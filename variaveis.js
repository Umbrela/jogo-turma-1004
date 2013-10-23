var stage;
var container;
var queue;
	
var spriteSheet;
var map;
var collisionTiles = new Array();

var fisica = 
{
	horizontal: 250,
	vertical: 100,
	gravity: 600,
	jump: 1100
};
		
var player = 
{
	moveRight: false,
	moveLeft: false,
	moveUp: false,
	onGround: false,
	onWall: false,
	upAndLeft: false,
	upAndRight: false,
	lendWalkLeft: false,
	lendWalkRight: false,
	gravity: fisica.gravity,
	jump_energy: 0
};
//console.debug(player.upAndLeft);
//console.debug(player.upAndRight);
var enemy = 
{
	moveRight: true,
	moveLeft: false
};

var loading = 
{ 
	map:false,
	character: false,
	test: true,
	ready: function()
	{
		return this.map && this.character && this.test; 
	}
}
