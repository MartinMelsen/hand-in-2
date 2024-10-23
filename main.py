def on_up_pressed():
    animation.run_image_animation(Spiller, assets.animation("""
        up
    """), 500, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def Key():
    global Nøgle
    Nøgle = sprites.create(assets.image("""
        key
    """), SpriteKind.food)
    tiles.place_on_random_tile(Nøgle, sprites.dungeon.dark_ground_south_west0)
    animation.run_image_animation(Nøgle,
        [img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """)],
        500,
        True)

def on_left_pressed():
    animation.run_image_animation(Spiller, assets.animation("""
        left
    """), 500, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile(sprite, location):
    pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

def on_right_pressed():
    animation.run_image_animation(Spiller, assets.animation("""
        right
    """), 500, True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    animation.run_image_animation(Spiller, assets.animation("""
        down
    """), 500, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite2, otherSprite):
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    info.change_score_by(1)
    sprites.destroy(otherSprite2)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

Nøgle: Sprite = None
Spiller: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level0
"""))
Spiller = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Spiller)
tiles.place_on_tile(Spiller, tiles.get_tile_location(1, 1))
scene.camera_follow_sprite(Spiller)
info.set_life(4)
Key()