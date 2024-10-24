namespace SpriteKind {
    export const Kiste = SpriteKind.create()
    export const key = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`up`,
    500,
    true
    )
})
function Titlescreen () {
    scene.setBackgroundImage(assets.image`Haunted Village`)
    game.showLongText("Ikke for børn og sarte sjæle", DialogLayout.Bottom)
    game.showLongText("Lad os lige få det på det rene", DialogLayout.Bottom)
    navn = game.askForString("Hvad er dit navn?")
    game.showLongText("Velkommen, " + navn, DialogLayout.Bottom)
    scene.setBackgroundImage(assets.image`Haunted house`)
    game.splash("Træd nærmere det (måske) hjemsøgte hus ", navn)
    effects.smiles.endScreenEffect()
}
function Key () {
    Nøgle = sprites.create(assets.image`nøglee`, SpriteKind.key)
    tiles.placeOnRandomTile(Nøgle, sprites.dungeon.darkGroundSouthWest0)
    animation.runImageAnimation(
    Nøgle,
    assets.animation`nøgleanimation`,
    200,
    true
    )
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`left`,
    500,
    true
    )
})
function Zombie () {
    zombie = sprites.create(assets.image`zombie2`, SpriteKind.Enemy)
    zombie.follow(Spiller, 20)
    tiles.placeOnRandomTile(zombie, sprites.dungeon.floorDarkDiamond)
}
function chest () {
    Kiste2 = sprites.create(assets.image`LukketKiste`, SpriteKind.Kiste)
    tiles.placeOnRandomTile(Kiste2, sprites.dungeon.chestClosed)
}
function Key2 () {
    if (info.score() == 1) {
        Nøgle = sprites.create(assets.image`nøglee`, SpriteKind.key)
        tiles.placeOnTile(Nøgle, tiles.getTileLocation(14, 14))
        animation.runImageAnimation(
        Nøgle,
        assets.animation`nøgleanimation`,
        200,
        true
        )
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`right`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Kiste, function (sprite, otherSprite) {
    if (info.score() == 1) {
        animation.runImageAnimation(
        Kiste2,
        assets.animation`kisteanimation`,
        200,
        false
        )
        game.splash("Godt fundet! Koden er 248", "Find håndtaget!")
        game.setDialogCursor(assets.image`pad`)
    } else if (info.score() == 3) {
        animation.runImageAnimation(
        kistelvl1,
        assets.animation`kisteanimation`,
        200,
        false
        )
        game.splash("Det kører!", "Koden er 387")
    } else {
        game.splash("Find lige nøglen først ffs!!")
    }
    pause(2000)
})
function padlock () {
    pin = game.askForNumber("Hvad er koden!?", 3)
    if (pin == 248) {
        game.setDialogCursor(assets.image`nøgle`)
        åbendør = true
        game.splash("tillyke! Du klarede level 0, ", navn)
        tiles.setCurrentTilemap(tilemap`level 1`)
        tiles.placeOnTile(Spiller, tiles.getTileLocation(1, 1))
        sprites.destroy(Kiste2)
        Key2()
        info.changeScoreBy(1)
        chest2()
    } else {
        game.splash("forkert kode noob!")
        tiles.placeOnTile(Spiller, tiles.getTileLocation(2, 14))
    }
}
function chest2 () {
    if (info.score() == 2) {
        kistelvl1 = sprites.create(assets.image`LukketKiste`, SpriteKind.Kiste)
        tiles.placeOnRandomTile(kistelvl1, sprites.dungeon.chestClosed)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`down`,
    500,
    true
    )
})
function flagermus2 () {
    flagermus = sprites.create(assets.image`vampyr`, SpriteKind.Projectile)
    tiles.placeOnTile(flagermus, tiles.getTileLocation(randint(6, 7), randint(10, 13)))
    flagermus.setBounceOnWall(true)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    padlock()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let flagermus: Sprite = null
let åbendør = false
let pin = 0
let kistelvl1: Sprite = null
let Kiste2: Sprite = null
let zombie: Sprite = null
let Nøgle: Sprite = null
let navn = ""
let Spiller: Sprite = null
tiles.setCurrentTilemap(tilemap`level0`)
Spiller = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Spiller)
tiles.placeOnTile(Spiller, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(Spiller)
info.setLife(3)
Key()
chest()
game.showLongText("Find nøglen", DialogLayout.Bottom)
game.splash("Du bevæger dig med", "W, A, S og D")
game.onUpdateInterval(2000, function () {
    flagermus.setVelocity(randint(-70, 70), randint(-50, 50))
})
game.onUpdateInterval(10000, function () {
    if (info.score() == 2) {
        Zombie()
    } else if (info.score() == 4) {
    	
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
})
