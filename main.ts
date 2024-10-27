namespace SpriteKind {
    export const Kiste = SpriteKind.create()
    export const key = SpriteKind.create()
}
function Padlock3 () {
    pin = game.askForNumber("Hvad er koden!?", 2)
    if (pin == 12) {
        game.splash("TAAAAK! Det' velfortjent", "Videre til sidste level")
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(Spiller, tiles.getTileLocation(1, 1))
        info.changeScoreBy(1)
        animation.runImageAnimation(
        kistelvl1,
        assets.animation`kisteanimation2`,
        200,
        false
        )
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        sprites.destroy(kistelvl1)
        Spiller.sayText("Hvilken kiste?", 2000, false)
        chest4()
        Key4()
    } else {
        game.splash("forkert kode noob!")
        tiles.placeOnTile(Spiller, tiles.getTileLocation(13, 14))
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`up`,
    500,
    true
    )
})
function chest3 () {
    if (info.score() == 4) {
        kistelvl1 = sprites.create(assets.image`LukketKiste`, SpriteKind.Kiste)
        tiles.placeOnRandomTile(kistelvl1, sprites.dungeon.chestClosed)
    }
}
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    if (info.score() == 2) {
        Padlock2()
    } else if (info.score() == 3) {
        Padlock2()
    } else if (info.score() == 4) {
        Padlock3()
    } else if (info.score() == 5) {
        Padlock3()
    } else if (info.score() == 6) {
        padlock4()
    } else if (info.score() == 7) {
        padlock4()
    } else {
    	
    }
})
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
function Key4 () {
    if (info.score() == 6) {
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
function Spøgelse1 () {
    spøgelse1 = sprites.create(assets.image`spøgelse`, SpriteKind.Enemy)
    spøgelse1.setVelocity(-50, 0)
    spøgelse1.setBounceOnWall(true)
    tiles.placeOnTile(spøgelse1, tiles.getTileLocation(14, 14))
    tiles.placeOnTile(spøgelse1, tiles.getTileLocation(7, 1))
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
function chest4 () {
    if (info.score() == 6) {
        kistelvl1 = sprites.create(assets.image`LukketKiste`, SpriteKind.Kiste)
        tiles.placeOnRandomTile(kistelvl1, sprites.builtin.forestTiles0)
    }
}
function Spøgelse2 () {
    spøgelse1 = sprites.create(assets.image`spøgelse`, SpriteKind.Enemy)
    spøgelse1.setVelocity(0, -50)
    spøgelse1.setBounceOnWall(true)
    tiles.placeOnTile(spøgelse1, tiles.getTileLocation(14, 1))
}
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
    } else if (info.score() == 5) {
        game.splash("Koden er den karakter.", "du giver os :)")
        animation.runImageAnimation(
        kistelvl1,
        assets.animation`kisteanimation`,
        200,
        false
        )
    } else if (info.score() == 7) {
        game.splash("Nu står den i", "matematikkens tegn")
        game.splash("Klar på det?", navn)
        game.splash("Koden er", "100000000 i binær")
        game.splash("omregnet til", "decimaltal")
    } else {
        game.splash("Find lige nøglen først ffs!!")
    }
    pause(2000)
})
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
function Spøgelse3 () {
    spøgelse1 = sprites.create(assets.image`spøgelse`, SpriteKind.Enemy)
    spøgelse1.setVelocity(-50, 0)
    spøgelse1.setBounceOnWall(true)
    tiles.placeOnTile(spøgelse1, tiles.getTileLocation(14, 14))
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    padlock1()
})
function padlock4 () {
    pin = game.askForNumber("Hvad er koden!?", 3)
    if (pin == 256) {
        game.splash("tillyke! Du har vundet ", "en havenisse")
        game.gameOver(true)
    } else {
        game.splash("forkert kode noob!")
        if (info.score() == 6) {
            tiles.placeOnTile(Spiller, tiles.getTileLocation(1, 12))
        } else {
        	
        }
    }
}
function Padlock2 () {
    pin = game.askForNumber("Hvad er koden!?", 3)
    if (pin == 387) {
        game.splash("tillyke! Du klarede level 1, ", navn)
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(Spiller, tiles.getTileLocation(1, 1))
        info.changeScoreBy(1)
        animation.runImageAnimation(
        kistelvl1,
        assets.animation`kisteanimation2`,
        200,
        false
        )
        sprites.destroy(kistelvl1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        Key3()
        chest3()
    } else {
        game.splash("forkert kode noob!")
        tiles.placeOnTile(Spiller, tiles.getTileLocation(7, 14))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
function Key3 () {
    if (info.score() == 4) {
        Nøgle = sprites.create(assets.image`nøglee`, SpriteKind.key)
        tiles.placeOnTile(Nøgle, tiles.getTileLocation(3, 8))
        animation.runImageAnimation(
        Nøgle,
        assets.animation`nøgleanimation`,
        200,
        true
        )
    }
}
function padlock1 () {
    pin = game.askForNumber("Hvad er koden!?", 3)
    if (pin == 248) {
        game.setDialogCursor(assets.image`nøgle`)
        game.splash("tillyke! Du klarede level 0, ", navn)
        tiles.setCurrentTilemap(tilemap`level 1`)
        tiles.placeOnTile(Spiller, tiles.getTileLocation(1, 1))
        sprites.destroy(Kiste2)
        Key2()
        info.changeScoreBy(1)
        chest2()
    } else {
        game.splash("forkert kode noob!")
        if (info.score() < 2) {
            tiles.placeOnTile(Spiller, tiles.getTileLocation(2, 14))
        } else {
        	
        }
    }
}
function Flagermus () {
    Flagermus1 = sprites.create(assets.image`flagermusen`, SpriteKind.Projectile)
    tiles.placeOnRandomTile(Flagermus1, sprites.dungeon.chestClosed)
    Flagermus1.setBounceOnWall(true)
    for (let index = 0; index < 500; index++) {
        Flagermus1.setVelocity(randint(-70, 70), randint(-50, 50))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let Flagermus1: Sprite = null
let Kiste2: Sprite = null
let zombie: Sprite = null
let spøgelse1: Sprite = null
let Nøgle: Sprite = null
let navn = ""
let kistelvl1: Sprite = null
let pin = 0
let Spiller: Sprite = null
Titlescreen()
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
game.showLongText("Find nøglen", DialogLayout.Bottom)
game.splash("Du bevæger dig med", "W, A, S og D")
Key()
chest()
game.onUpdateInterval(5000, function () {
    if (info.score() == 2) {
        Zombie()
    } else if (info.score() == 4) {
        Zombie()
        Flagermus()
    } else if (info.score() == 6) {
        Zombie()
        Flagermus()
        Spøgelse1()
        Spøgelse3()
        Spøgelse2()
    } else {
    	
    }
})
