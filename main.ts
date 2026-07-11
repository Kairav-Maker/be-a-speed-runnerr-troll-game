controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = 300
    mySprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.setScore(info.getTimeElapsed())
    game.gameOver(false)
})
function Intro () {
    music.play(music.createSong(hex`0078000408030100001c00010a006400f40164000004000000000000000000000000000500000475000400080001220c0010000127100014000220271400180001201c002000021b2520002400012724002800011b28002c0001242c003000021b2430003400012a34003800021b2a3c004000021b2440004400021b244400480001244c005000021d2a50005400021d2a54005800021d2a58005c00011d`), music.PlaybackMode.LoopingInBackground)
    game.splash("Hi,Welcome to my GAME")
    game.splash("Let me tell you about this game ")
    game.splash("Here you can speed run in a huge tilemap")
    game.splash("This game is only for speed run no obejective")
    game.splash("You can make your HIGH SCORESS ")
    game.splash("And if you are playing on laptop or computer,for jump you only have to press space ")
    game.splash("My high score is 43 secs let's see who can beat this")
    game.splash("And if you don't know why this is a troll game,YOU WILL SEE or not because you are a")
    game.splash("PRO")
    music.stopAllSounds()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.setScore(info.getTimeElapsed())
    game.setGameOverScoringType(game.ScoringType.LowScore)
    game.gameOver(true)
})
let mySprite: Sprite = null
Intro()
info.startCountup()
game.setGameOverScoringType(game.ScoringType.LowScore)
tiles.placeOnRandomTile(mySprite, assets.tile`baseTransparency16`)
mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 e f f f b c . . . 
    e e 2 2 d f e c b 4 4 c . . . . 
    b 1 1 d e e c 4 1 1 4 c . . . . 
    . f f e e e e 4 4 4 4 c . . . . 
    . . f f d d e 4 4 4 b c . . . . 
    . . f f d d e c c c c d . . . . 
    . . . f f f f . . . . . . . . . 
    . . f f f e e e . . . . . . . . 
    . . f f f f e e e . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . . e e e f e e f f f f d c . 
    . . e e 2 2 d f c b 4 4 c b c . 
    . . e e 2 2 b c 4 1 1 4 c . . . 
    . . b 1 1 b e c 4 4 4 4 c . . . 
    . . f f f f d d 4 4 4 b c . . . 
    f f f f f f d d c c c c . . . . 
    f f f . f f f f c c c . . . . . 
    f f . . . . e e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . e e e f e 2 2 b f f f d c . 
    . e e 2 2 d f e 2 1 1 1 1 b c . 
    . e e 2 2 d f e e e c c c . . . 
    . b 1 1 e e 2 2 e e c . . . . . 
    . . f d d 2 2 2 f f f d d . . . 
    e e f d d e e e . f f d d . . . 
    e e e f f f f f . . . . . . . . 
    e e . . . . f f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    `],
500,
true
)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 500
tiles.placeOnRandomTile(mySprite, assets.tile`baseTransparency16`)
game.onUpdate(function () {
    scene.cameraFollowSprite(mySprite)
    mySprite.ay = 350
})
game.onUpdateInterval(500, function () {
    mySprite.setVelocity(100, 0)
})
