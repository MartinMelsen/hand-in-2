namespace SpriteKind {
    export const Chest = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`up`,
    500,
    true
    )
})
function Key () {
    Nøgle = sprites.create(assets.image`key`, SpriteKind.Food)
    tiles.placeOnRandomTile(Nøgle, sprites.dungeon.darkGroundSouthWest0)
    animation.runImageAnimation(
    Nøgle,
    assets.animation`keyanimation`,
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`right`,
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Spiller,
    assets.animation`down`,
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let Nøgle: Sprite = null
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
