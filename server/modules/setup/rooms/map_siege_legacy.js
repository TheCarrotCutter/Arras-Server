let { bossSpawn:   b  , atmg:  A  , outside:   o  } = require('../tiles/siege.js'),
    { wall: WALL, nestNoBoss:  n, normal:   _  } = require('../tiles/misc.js'),
	{ base1:   s  } = require('../tiles/tdm.js'),

room = [
    [  o ,  o ,WALL,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,WALL,  o ,  o ],
    [  o ,  A ,WALL,  o ,  o ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  o ,  o ,WALL,  A ,  o ],
    [WALL,WALL,WALL,  o ,  o ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  o ,  o ,WALL,WALL,WALL],
    [  b ,  o ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  o ,  b ],
    [  b ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  b ],
    [  b ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  b ],
    [  b ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  b ],
    [  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  b ],
    [  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  b ],
    [  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  s ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  b ],
    [  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  b ],
    [  b ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  b ],
    [  b ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  b ],
    [  b ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  b ],
    [  b ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  b ],
    [  b ,  o ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  o ,  b ],
    [WALL,WALL,WALL,  o ,  o ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  o ,  o ,WALL,WALL,WALL],
    [  o ,  A ,WALL,  o ,  o ,  o ,  o ,  _ ,  _ ,  _ ,  _ ,  _ ,  o ,  o ,  o ,  o ,WALL,  A ,  o ],
    [  o ,  o ,WALL,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,  b ,WALL,  o ,  o ],
];

module.exports = room;
