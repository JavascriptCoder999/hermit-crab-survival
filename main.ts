info.onCountdownEnd(function () {
    info.stopCountdown()
    game.splash("Controls:")
    game.splash("Use arrows or wasd to move,")
    game.splash("Use A to pick up objects")
    game.splash("And Finally, hit B to drop objects.")
    game.splash("Objective:")
    game.splash("Survive a week in the wild")
    game.splash("As a HERMIT CRAB!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    score += randint(50, 100)
    otherSprite.destroy()
})
let score = 0
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Food)
info.setScore(0)
tiles.setWallAt(tiles.getTileLocation(0, 0), true)
let mySprite = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
    . f f 5 c 6 c 5 f f 6 3 3 3 c c 
    . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
    . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
    b 5 4 b 4 4 4 4 b b 5 c b b . . 
    c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 65, 65)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.setPosition(77, 108)
pause(1000)
mySprite.sayText("Welcome to Hermit Crab Survival!")
pause(2000)
mySprite.sayText("Instructions will begin in 3 seconds...")
pause(1000)
mySprite.sayText("")
info.startCountdown(3)
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 3000, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        scene.cameraShake(8, 500)
        tiles.setCurrentTilemap(tilemap`level1`)
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        scene.cameraShake(8, 100)
        tiles.setCurrentTilemap(tilemap`level2`)
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        scene.cameraShake(8, 100)
        tiles.setCurrentTilemap(tilemap`level3`)
    }
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        scene.cameraShake(8, 10)
        tiles.setCurrentTilemap(tilemap`level4`)
    }
})
