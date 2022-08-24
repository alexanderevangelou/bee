namespace SpriteKind {
    export const home = SpriteKind.create()
    export const homeFood = SpriteKind.create()
    export const exit = SpriteKind.create()
    export const video = SpriteKind.create()
    export const queen = SpriteKind.create()
    export const exit2 = SpriteKind.create()
}
namespace StatusBarKind {
    export const pollen = StatusBarKind.create()
    export const ammo = StatusBarKind.create()
}
function create_level () {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        bbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccc55555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55
        cccccccccccccccccccccccccccccccccccccccccccccc55555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555
        cccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555
        ccccccccccccccccccccccccccccccccccccccc55555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555
        cccccccccccccccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555
        cccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555
        cccccccccccccccccccccccccc55555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555
        cccccccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555
        cccccccccccccccccccc5555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555
        ccccccccccccccccc55555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555
        ccccccccccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccccccccccc5cccccccccccccc555555555555555
        cccccccccc55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccccccccccccc555555555555cc5555555555555555555
        ccccc555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccccccccccccccccc55555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `)
    bee_hive.destroy()
    flower.destroy()
    flower_two.destroy()
    flower_three.destroy()
    flower_four.destroy()
    flower_five.destroy()
    honny_bee.setPosition(82, 13)
    pollen1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pollen1.setPosition(randint(0, 160), randint(85, 100))
    pollen2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pollen2.setPosition(randint(0, 160), randint(85, 100))
    pollen3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pollen3.setPosition(randint(0, 160), randint(85, 100))
    pollen4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pollen4.setPosition(randint(0, 160), randint(85, 100))
    pollen5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    pollen5.setPosition(randint(0, 160), randint(85, 100))
    Exit = sprites.create(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.exit)
    Exit.setPosition(80, 0)
    Exit.setKind(SpriteKind.exit)
    spider = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e . . . . . . . . . . . . 
        . . . e . . e e 1 e 1 e e . e e 
        . e e e . e e 1 . 1 . 1 e e e . 
        . . . e e . e e e e e e e e e e 
        . e e e e e e . . . . . . e . . 
        . . . . e e e . . . . . . e e e 
        . e e e e e e . . . . . . e . . 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    spider.sayText("IM GOING TO EAT YOU BEE!", 2000, true)
    spider.setPosition(randint(30, 120), randint(80, 100))
    pause(1500)
    spider.follow(honny_bee, 80)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.queen, function (sprite, otherSprite) {
    if (statusbar.value >= 100) {
        game.splash("HONEY BALL!!!")
        statusbar2.value = 100
    } else {
        honny_bee.sayText("YAY!!!", 2000, true)
    }
    info.changeScoreBy(statusbar.value / 20)
    statusbar.value = 0
})
function animation2 () {
    animation.runImageAnimation(
    animaton,
    [img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444444444444444444444444444444444444444444e444444444444444444444444444444eeeee4444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb44444444444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb444444444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb444444444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb4444444444444444444444444444444444e444444444444444444444444444eeee44444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb4444444444444444444444444444444444eeeeee4444444444444444444444e44444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb4444444444444444444444444444444444444444e4444444444444444444444e44444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb4444444444444444444444444444444444444444e4444444444444444444444e44444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb4444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb444444444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee44444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb4444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb4444444444444444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e44444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb4444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb44444444444444444444444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb44444444444444444444444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff4444444444444444444444444444444444444eeeeeeee44444444444444444444eeee44444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff5555554444444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff44444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444eee444444444444444444444444444444eeeeee444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555
        5555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555
        5555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555
        5555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555
        5555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555444444444555555555555555555555555555
        5555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444455555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555544444444444444444444444444444444444444444444555544444444444555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555544444444444444444444444444444444444455555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444e444444444444444444444444444444eeeee444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444e444444444444444444444444444eeee4444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb444444444444444444444444444444444eeeeee4444444444444444444444e4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb44444444444444444444444444444444444444e4444444444444444444444e4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb44444444444444444444444444444444444444e4444444444444444444444e4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb4444444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee4444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb44444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb444444444444444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e4444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb44444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb444444444444444444444444444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444445555554444444444444444444444444444444444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff444444444444444444444444444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444eeeeeeee44444444444444444444eeee4444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff4444444444444444eee444444444444444444444444444444eeeeee44444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444455555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444445555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444445
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444455
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444455555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb444444444444444444444444444444e444444444444444444444444444444eeeee4444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb444444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb4444444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb4444444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb44444444444444444444444444444444e444444444444444444444444444eeee44444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb44444444444444444444444444444444eeeeee4444444444444444444444e44444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb4444444444444444444444444444444444444e4444444444444444444444e44444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb44444444444444444444444444444444444444e4444444444444444444444e44444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb44444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb444444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee44444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb44444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb44444444444444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e44444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb4444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff44444444444444444444eeeeeeee44444444444444444444eeee44444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff44444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444eee444444444444444444444444444444eeeeee444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444445555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444455555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4445555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4455555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455
        5555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555
        5555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555
        5555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555
        5555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555
        5555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555
        5555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444455555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444445555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444445555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb44444444444444444444444444444e444444444444444444444444444444eeeee44444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb444444444444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb444444444444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb4444444444444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb4444444444444444444444444444444e444444444444444444444444444eeee444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb4444444444444444444444444444444eeeeee4444444444444444444444e444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb4444444444444444444444444444444444444e4444444444444444444444e444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb4444444444444444444444444444444444444e4444444444444444444444e444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb4444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb444444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb4444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb4444444444444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444445555554444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff4444444444444444444444444444444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff5555554444444444444444444444444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff44444444444444444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff44444444444444444eeeeeeee44444444444444444444eeee444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff4444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff4444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff4444444444444eee444444444444444444444444444444eeeeee4444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444445555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444455555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444445555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444445555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444455555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444445555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444
        4444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444
        4444444444444444444444444455555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444
        4444444444444444444444455555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444
        4444444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444
        4444444444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444
        4444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444
        4444444444444455555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444
        4444444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444
        4444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444
        4444444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444
        4444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444
        4444445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444
        4444455555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444
        4445555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444e444444444444444444444444444444eeeee444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb444444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb444444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb444444444444444444444444444444e444444444444444444444444444eeee4444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb4444444444444444444444444444444eeeeee4444444444444444444444e4444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb444444444444444444444444444444444444e4444444444444444444444e4444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb444444444444444444444444444444444444e4444444444444444444444e4444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb4444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb44444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee4444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444445555554444444444444444444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e4444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff555555444444444444444444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff4444444444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff44444444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444eeeeeeee44444444444444444444eeee4444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff44444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff444444444444eee444444444444444444444444444444eeeeee44444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444445555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444445555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4445555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4455555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444455555
        5555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444445555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444445555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb4444444444444444444444444444e444444444444444444444444444444eeeee4444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb4444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb44444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb44444444444444444444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb44444444444444444444444444444e444444444444444444444444444eeee44444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb444444444444444444444444444444eeeeee4444444444444444444444e44444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb44444444444444444444444444444444444e4444444444444444444444e44444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb44444444444444444444444444444444444e4444444444444444444444e44444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb4444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee44444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb44444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e44444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff4444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff444444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444e44444444444444444444e44444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff44444444444444eeeeeeee44444444444444444444eeee44444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff44444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff4444444444444e444444444444444444444444444444e44444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444eee444444444444444444444444444444eeeeee444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555555555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555555555
        4444444444444444444444444444444444444555555555555555444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555
        4444444444444444444444444444444555555555555555555555555444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555
        4444444444444444444445555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555
        4444444444444444555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444445555555555555555555555555555555555555555555555555
        4444444555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555
        4444455555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444455555555555555555555555555555555555555555555555555555555555
        4445555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444455555555555555555555555555555555555555555555555555555555555555
        4555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444455555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555544444444444445555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb444444444444444444444444444e444444444444444444444444444444eeeee44444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb4444444444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb4444444444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb4444444444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb44444444444444444444444444444e444444444444444444444444444eeee444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb44444444444444444444444444444eeeeee4444444444444444444444e444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb4444444444444444444444444444444444e4444444444444444444444e444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb44444444444444444444444444444444444e4444444444444444444444e444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb44444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444455555544444444444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff4444444444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff555555444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff44444444444444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff444444444444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff44444444444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff4444444444444eeeeeeee44444444444444444444eeee444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff4444444444eee444444444444444444444444444444eeeeee4444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4544444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555554444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445
        5555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455
        5555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444555
        5555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444445555
        5555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444455555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444445555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444445555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444445555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444455555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444445555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb444444444444444444444444444e444444444444444444444444444444eeeee444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb4444444444444444444444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb4444444444444444444444444444e444444444444444444444444444eeee4444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb4444444444444444444444444444eeeeee4444444444444444444444e4444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb4444444444444444444444444444444444e4444444444444444444444e4444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb4444444444444444444444444444444444e4444444444444444444444e4444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb4444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee4444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff444444444444444444444444444444444444eeeeeeeeeeeeeeeeeeeeee4444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff555555444444444444444444444444444444ee1e1eeeeeeeeeeeee1e1e4444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff44444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff4444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff4444444444444444444e44444444444444444444e4444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff44444444444eeeeeeee44444444444444444444eeee4444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444e444444444444444444444444444444e4444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff444444444eee444444444444444444444444444444eeeeee44444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555
        5555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555555
        5555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb4444444444444444444444e444444444444444444444444444444eeeee44444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb44444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb44444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb44444444444444444444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb444444444444444444444444e444444444444444444444444444eeee444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb444444444444444444444444eeeeee4444444444444444444444e444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb44444444444444444444444444444e4444444444444444444444e444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444e4444444444444444444444e444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444eeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff555555444444444444444444eeeeeeeeee1e1eeeeeeeeeee1e1ee444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff5555554fffffff44444444444444444eeeeeeeeeeeeeeeeeeeeee444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555fffffffffff444444444444444ee1e1eeeeeeeeeeeee1e1e444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555fffffffffffff44444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff555fffffffffff1fff4444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff555fffffffffffffff4444444444444e44444444444444444444e444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff444444eeeeeeee44444444444444444444eeee444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff444444e444444444444444444444444444444e444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff555555fffffff555fffffffffffffff4444eee444444444444444444444444444444eeeeee4444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff555555fffffff555fffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff555555fffffff5555fffffffffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff55555fffffffffff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffff555555fffffff5555554fffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555
        4444444555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555
        5555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555
        5555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555
        5555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555
        5555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555
        5555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555
        5555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444445555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `,img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444444444444444bb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444bccbb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bcccb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444444444bccb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bb44444444444bccb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbbb444444444bccb444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bccbbbbbbbb44bcb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444bbccccccccbbbbcb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444bcccccccccbbcb4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444444444bccccccccbbb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444bbbbcccccbb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444444444444444444444bbbbbbbb44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444e444455555544444444444444444444eeeee44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444444444444444e4444555555fffffff4444444444444e444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444feffff555555fffffff5555554444444e444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444555555feffff555555fffffff5555554ffffffe444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555feffff555555fffffff55555fffffeeeeff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555feeeeee55555fffffff5555ffffffeffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555ffffffe55555fffffff5555ffffffeffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffffe55555fffffff555fffffffefff1fff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeefff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555feeeeeeeeee1e1eeeeeeeeeee1e1eefffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555ffffff55eeeeeeeeeeeeeeeeeeeeeefffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444ffffffffff5555fffff555555ffffff55ee1e1eeeeeeeeeeeee1e1efffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444ffffffff5555fffff555555feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444ffffff5555fffff555555ffffff55e555fffffff555fffffffefffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444ffff5555fffff555555ffffff55e555fffffff5555ffffffeffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444ff5555fffff555555ffffff55e555fffffff5555ffffffeffffff444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555feeeeeeee555fffffff55555fffffeeeeff4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444445555fffff555555feffff555555fffffff5555554ffffffe444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        44444444444444444fffff555555feffff555555fffffff5555554444444e444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        444444444444444444444455555eeeffff555555fffffff5555554444444eeeeee4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444ffffff555555fffffff55555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555fffffff44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        5555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445
        5555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555
        5555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555
        5555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555
        5555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555
        5555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555
        5555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555
        5555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555555
        5555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445555555555555555555
        5555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555
        5555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555555555555
        5555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444444455555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444444444455555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444444444444444444444444444455555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555554444444444444444444444444444444444444444444444444444444444455555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444444444444444444444445555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444444444444444444444444444555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555544444444444444444444444444444555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555444444444444444445555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        `],
    100,
    false
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
	
})
function gravity () {
    honny_bee.y += 0.5
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.exit, function (sprite, otherSprite) {
    Exit.destroy()
    setScene()
    pollen1.destroy()
    pollen2.destroy()
    pollen3.destroy()
    pollen4.destroy()
    pollen5.destroy()
    spider.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.home, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.homeFood)
    insideHive()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.homeFood, function (sprite, otherSprite) {
    create_level()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar2.value >= 20) {
        honnyBall = sprites.createProjectileFromSprite(img`
            5 5 5 5 5 5 
            5 4 4 4 4 5 
            5 4 5 5 4 5 
            5 4 5 5 4 5 
            5 4 4 4 4 5 
            5 5 5 5 5 5 
            `, honny_bee, 80, 0)
        honnyBall.setKind(SpriteKind.Projectile)
        statusbar2.value += -20
    } else {
    	
    }
})
function insideHive () {
    scene.setBackgroundImage(img`
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555555555555555555555bbb5555555555555554555555555555555555555555555555555554
        45555555555555555555555555555555555545555555555555555555555555555555555555555455555555555555555555555555bbcb5555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555bcccb5555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555bbbbbbb55bcccb5555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555bbcccccbbbcccb5555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555555555555bbccccbbccbb5555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555bbcccbccbb55555555555555554555555555555555555555555555555555554
        45555555555555555555555555555555555545555555555555555555555555555555555555555455555555555555555555bbcbbbbb555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555ff55fbbfffff555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555ff55ff5ffffff55555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555555ff55ff55ff5ffff1f55555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555fffff55ff55ff5ffffff55555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555555ff55ff55ff5ffffff55555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555ff55ff5ffffff55555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555ff55ff5fffff555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555555555555555555555555555555555555555455555555555555555555555bbb5555555554
        45555555555555555555555555555555555545555555555555555555555555555555555555555455555555555555555555555555555555555555555555545555555555555555555555bbcb5555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555bcccb5555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555555555555555555555555555555555555555455555555555bbbbbbbb55bcccb5555555554
        455555555555555555555555555555555555455555555555555555555555555555555555555554555555555555555555555555555555555555555555555455555555555bbccccccbbbcccb5555555554
        455555555555555555555555555555555555455555555555555555555555555bbb55555555555455555555555555555555555555555555555555555555545555555555555bbcccccbcccbb5555555554
        45555555555555555555555555555555555545555555555555555555555555bbcb555555555554555555555555555555555555555555555555555555555455555555555555bbccccbccbb55555555554
        4555555555555555555555555555555555554555555555555555555555555bcccb5555555555545555555555555555555555555555555555555555555554555555555555555bbcbbbbbb555555555554
        4555555555555555555555555555555555554555555555555555bbbbbb555bcccb555555555554555555555555555555555555555555555555555555555455555555555ff55fbbfffff5555555555554
        4555555555555555555555555555555555554555555555555555bbccccbbbbccbb555555555554555555555555555555555555555555555555555555555455555555555ff55ff5ffffff555555555554
        455555555555555555555555555555555555455555555555555555bbcccbcccbb555555555555455555555555555555555555555555555555555555555545555555ff55ff55ff5fff1ff555555555554
        4555555555555555555555555555555555554555555555555555555bbccbbbbb5555555555555455555555555555555555555555555555555555555555545555fffff55ff55ff5ffffff555555555554
        455555555555555555555555555555555555455555555555555ff55fbbfffff55555555555555455555555555555555555555555555555555555555555545555555ff55ff55ff5ffffff555555555554
        455555555555555555555555555555555555455555555555555ff55ff5ffffff55555555555554555555555555555555555555555555555555555555555455555555555ff55ff5ffffff555555555554
        45555555555555555555555555555555555545555555555ff55ff55ff5fff1ff55555555555554555555555555555555555555555555555555555555555455555555555ff55ff5fffff5555555555554
        455555555555555555555555555555555555455555555ffff55ff55ff5ffffff555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        45555555555555555555555555555555555545555555555ff55ff55ff5ffffff555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555ff55ff5ffffff555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        455555555555555555555555555555555555455555555555555ff55ff5fffff5555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4555555555555555555555555555555555554555555555555555555555555555555555555555545555555555555555555555555555555555555555555554555555555555555555555555555555555554
        4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `)
    honny_bee.setPosition(78, 24)
    bee_hive.destroy()
    queenBee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . 5 5 f f 5 5 . . . . 
        . . . . . f 5 5 f f 5 5 f f f f 
        . . . f f f 5 5 f f 5 5 f f d f 
        f f f f f f 5 5 f f 5 5 f f f f 
        . . . f f f 5 5 f f 5 5 f f f f 
        . . . . . f 5 5 f f 5 5 f f f f 
        . . . . . . 5 5 f f 5 5 . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.queen)
    queenBee.setPosition(30, 37)
    exit2 = sprites.create(img`
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.exit2)
    exit2.setPosition(88, 2)
}
function setScene () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
        9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
        999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
        9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
        99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
        99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
        999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
        9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
        9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
        999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
        99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
        99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
        999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
        999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
        99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
        99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
        9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
        999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
        9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
        999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
        999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
        999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
        99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
        999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
        99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
        999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
        99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
        99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99cc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993999999999999999993399999999999
        99999999999999999999999399999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933393333999999999999999933939997779c9
        99999c99999999999999933393999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933333393399999999999993333339999799cc
        9999cc93399999999993333333999999999999999999999999999999993399999999999999999999999999999999999999999999999999999999999999993335333999999999999933333b339977799c
        99c9933333cc9999999333333399999999999999999999999999999993333399999999999999999999999999999999999999999999999999999999999993335553339999999999993333553339779999
        9cc93333333399999993335333339999999999999999cc99999ccc99933333399cc999999999999999999999999999999999cc999999999cc99999999993335533339999999999999335553339777999
        cc9c9335333377999993355533399999cc9999999999cc99999999933355333999999999cc9cc999999cc99999999c999999cc9999c9999ccc99999999999333333999999c9999993333533799777779
        c99cc35553397799c93333533333c999cc99cc9999999999999999933353333999999999c999c99999999999c9999c999999999999c9999c9999999cccc9333333377999ccc999993333337777777779
        97793333333997799933333333399999999cc999999c999999cc999333333399999999c9999999999cc99999cc999997999c9cc9999cc99999ccc99cccc97333739779999cc999999333333777777999
        9777333333397799999933333399999cc999999997999999999999933333339c9cc999c99c9999999cc9999999c9997799999999999cc9999999c999cc997777779979999cc999cc9999793997797799
        7777797733977799997797777799999cc9999999979999999a9999993933339999c999999c99c999999999cc9cc99979997799999999999999999999999977777999779999c999cc9997777997797799
        779977777997979997779777799999999aa7979977999777aa9977779773777779999979999cc9999997799c9aa997799977977999997977977777aa979997779997779999c999997797777997797799
        777977777977777797977777779777799a77977977797777aaaaa77797777777779977799779997797977779a6a9777799779779999979779777779a97779779777777777799977a7aa7777799777799
        9777977779777a777777777977977779aaa777777777777777777777777777777777777777777777777777777aa777777777777777aa777777777aa7aa777777777777777777997a7a77799797779779
        9779977777777aa77777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777aa77777777777777777777777777a77777777779779
        777777777777777777777777777777a777777777777777777777777777a777777777777777777777aa7777777777777777777aa777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777a77777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777777a777777777777777777777777777
        7777777777777777777777777777777777777777aa7777777777777777a7777777777777777777777777777777777a77777777777777777777777777777777777777a777777777777777777777777777
        77777777777777777aa777777777777777777777aa77777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777a777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777a7777777777777777777777777777aa777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa777777777777777777777777777777777aa77777777777777777777777777777777777
        77777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777777777777777777
        777777aa77777777777777777aa777777777a7777777aa777777777777a77777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777777777777
        777777aa7777777777777777777777777777a777777777777777777777aa777777777777777777777777777777777777777777aa777777777777777777777777777777777aa777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa77777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777aa7777777
        77777777777777777777777777777777777777777777777777777777777777777aa7777777777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777aa777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777aa777777777777777777777a7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777a777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    bee_hive = sprites.create(img`
        ....................
        ..........5.........
        .........5f5........
        ........5f5f5.......
        .......5f5f5f5......
        ......5f5f4f5f5.....
        .....5f5f4f4f5f5....
        ....5f5f4f4f4f5f5...
        ...5f5f4f4f4f4f5f5..
        ..5f5f4f4f2f4f4f5f5.
        .5f5f4f4f2f2f4f4f5f5
        ..5f4f4f2f2f2f4f4f5.
        ...4f4f2f2f2f2f4f4..
        ....4f2f2f2f2f2f4...
        .....2f2f2f2f2f2....
        ......2f2f2f2f2.....
        .......2f2f2f2......
        ........2f2f2.......
        .........2f2........
        ..........2.........
        `, SpriteKind.home)
    bee_hive.setPosition(16, 74)
    flower = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . 5 5 5 5 5 f f f 5 5 5 5 5 . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `, SpriteKind.homeFood)
    flower.setPosition(133, 97)
    flower_two = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . 5 5 5 5 5 f f f 5 5 5 5 5 . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.homeFood)
    flower_two.setPosition(73, 91)
    flower_three = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . 5 5 5 5 5 f f f 5 5 5 5 5 . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.homeFood)
    flower_three.setPosition(103, 89)
    flower_four = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . 5 5 5 5 5 f f f 5 5 5 5 5 . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.homeFood)
    flower_four.setPosition(20, 103)
    flower_five = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . 8 8 8 f f f 8 8 8 . . . . 
        . 8 8 8 8 8 f f f 8 8 8 8 8 . . 
        . . . 8 8 8 f f f 8 8 8 . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.homeFood)
    flower_five.setPosition(53, 87)
    animation.runImageAnimation(
    flower,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . 5 5 5 5 5 f f f 5 5 5 5 5 . . 
        . . . 5 5 5 f f f 5 5 5 . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 5 . . . . . . . . . . . 5 . . 
        . . 5 . . . . . . . . . 5 . . . 
        . . . 5 5 5 . . . 5 5 5 . . . . 
        . . . 5 5 5 . . . 5 5 5 . . . . 
        . . . 5 5 5 . . . 5 5 5 . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . 5 5 5 . 6 . 5 5 5 . . . . 
        . . . 5 5 5 . 6 . 5 5 5 . . . . 
        . . . 5 5 5 . 6 . 5 5 5 . . . . 
        . . 5 . . . . 6 . . . . 5 . . . 
        . 5 . . . . . 6 . . . . . 5 . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `],
    100,
    true
    )
    animation.runImageAnimation(
    flower_two,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . 3 3 3 f f f 3 3 3 . . . . 
        . 3 3 3 3 3 f f f 3 3 3 3 3 . . 
        . . . 3 3 3 f f f 3 3 3 . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 3 . . . . . . . . . . . 3 . . 
        . . 3 . . . . . . . . . 3 . . . 
        . . . 3 3 3 . . . 3 3 3 . . . . 
        . . . 3 3 3 . . . 3 3 3 . . . . 
        . . . 3 3 3 . . . 3 3 3 . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . 3 3 3 . 6 . 3 3 3 . . . . 
        . . . 3 3 3 . 6 . 3 3 3 . . . . 
        . . . 3 3 3 . 6 . 3 3 3 . . . . 
        . . 3 . . . . 6 . . . . 3 . . . 
        . 3 . . . . . 6 . . . . . 3 . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `],
    200,
    true
    )
    animation.runImageAnimation(
    flower_three,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . 4 4 4 f f f 4 4 4 . . . . 
        . 4 4 4 4 4 f f f 4 4 4 4 4 . . 
        . . . 4 4 4 f f f 4 4 4 . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 4 . . . . . . . . . . . 4 . . 
        . . 4 . . . . . . . . . 4 . . . 
        . . . 4 4 4 . . . 4 4 4 . . . . 
        . . . 4 4 4 . . . 4 4 4 . . . . 
        . . . 4 4 4 . . . 4 4 4 . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . 4 4 4 . 6 . 4 4 4 . . . . 
        . . . 4 4 4 . 6 . 4 4 4 . . . . 
        . . . 4 4 4 . 6 . 4 4 4 . . . . 
        . . 4 . . . . 6 . . . . 4 . . . 
        . 4 . . . . . 6 . . . . . 4 . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `],
    300,
    true
    )
    animation.runImageAnimation(
    flower_four,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . a a a f f f a a a . . . . 
        . a a a a a f f f a a a a a . . 
        . . . a a a f f f a a a . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . a . . . . . . . . . . . a . . 
        . . a . . . . . . . . . a . . . 
        . . . a a a . . . a a a . . . . 
        . . . a a a . . . a a a . . . . 
        . . . a a a . . . a a a . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . a a a . 6 . a a a . . . . 
        . . . a a a . 6 . a a a . . . . 
        . . . a a a . 6 . a a a . . . . 
        . . a . . . . 6 . . . . a . . . 
        . a . . . . . 6 . . . . . a . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `],
    400,
    true
    )
    animation.runImageAnimation(
    flower_five,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . 8 8 8 f f f 8 8 8 . . . . 
        . 8 8 8 8 8 f f f 8 8 8 8 8 . . 
        . . . 8 8 8 f f f 8 8 8 . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 8 . . . . . . . . . . . 8 . . 
        . . 8 . . . . . . . . . 8 . . . 
        . . . 8 8 8 . . . 8 8 8 . . . . 
        . . . 8 8 8 . . . 8 8 8 . . . . 
        . . . 8 8 8 . . . 8 8 8 . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . 8 8 8 . 6 . 8 8 8 . . . . 
        . . . 8 8 8 . 6 . 8 8 8 . . . . 
        . . . 8 8 8 . 6 . 8 8 8 . . . . 
        . . 8 . . . . 6 . . . . 8 . . . 
        . 8 . . . . . 6 . . . . . 8 . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        `],
    500,
    true
    )
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 1000)
    otherSprite.destroy(effects.fire, 1000)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    honny_bee.destroy()
    animaton = sprites.create(img`
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
        `, SpriteKind.video)
    animaton.setPosition(8, 6)
    animation2()
    pause(5000)
    game.splash("the spider got you! so you are the spider's lunch ")
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.exit2, function (sprite, otherSprite) {
    exit2.destroy()
    setScene()
    queenBee.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 20
    otherSprite.destroy()
})
let exit2: Sprite = null
let queenBee: Sprite = null
let honnyBall: Sprite = null
let animaton: Sprite = null
let spider: Sprite = null
let Exit: Sprite = null
let pollen5: Sprite = null
let pollen4: Sprite = null
let pollen3: Sprite = null
let pollen2: Sprite = null
let pollen1: Sprite = null
let flower_five: Sprite = null
let flower_four: Sprite = null
let flower_three: Sprite = null
let flower_two: Sprite = null
let flower: Sprite = null
let bee_hive: Sprite = null
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let honny_bee: Sprite = null
game.showLongText("hello heidi and lydia if you are playing!", DialogLayout.Full)
game.showLongText("Welcome to HONEY BEE!  Goal: get all of the pollen and go to the hive to give it to the queen if you get 5 pollen and give is to the queen then you will get a honey ball", DialogLayout.Full)
game.showLongText("One day there was a hive of Honey Bees that could speak English and they were poor. you have to give them the Honey get 20 pollen to WIN!", DialogLayout.Full)
game.showLongText("Controls are: d = right, a = left, w = forwards, s = backwards, a = shoot honey ball", DialogLayout.Full)
info.setLife(1)
honny_bee = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . b b b . . . . . b b . . . 
    . . . b d d b b . . b d d . . . 
    . . . b d d d b b b d d b . . . 
    . . . . b d d b f b d b . . . . 
    . . . . . b 5 5 f f 5 5 . . . . 
    . . . . . b b 5 f f 5 5 f f f f 
    . . . f f f b b b f 5 5 f f d f 
    f f f f f f 5 5 f f 5 5 f f f f 
    . . . f f f 5 5 f f 5 5 f f f f 
    . . . . . f 5 5 f f 5 5 f f f f 
    . . . . . . 5 5 f f 5 5 . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
honny_bee,
[img`
    . . . . . . . . . . . . . . . . 
    . . . b b b . . . . . b b b . . 
    . . . b d d b b . . b d d b . . 
    . . . b d d d b b b d d b b . . 
    . . . . b d d b f b d b . . . . 
    . . . . . b 5 5 f f 5 5 . . . . 
    . . . . . b b 5 f f 5 5 f f f f 
    . . . f f f b b b f 5 5 f f d f 
    f f f f f f 5 5 f f 5 5 f f f f 
    . . . f f f 5 5 f f 5 5 f f f f 
    . . . . . f 5 5 f f 5 5 f f f f 
    . . . . . . 5 5 f f 5 5 . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . b b b . . . . . b b b . . 
    . . . b d d b b b b b d d b . . 
    . . . b d d d b f b d d b b . . 
    . . . . b d d b f f d b . . . . 
    . . . . . b b 5 f f 5 5 f f f f 
    . . . f f f b b b f 5 5 f f d f 
    f f f f f f 5 5 f f 5 5 f f f f 
    . . . f f f 5 5 f f 5 5 f f f f 
    . . . . . f 5 5 f f 5 5 f f f f 
    . . . . . . 5 5 f f 5 5 . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
statusbar2 = statusbars.create(20, 4, StatusBarKind.ammo)
statusbar2.value = 100
statusbar2.attachToSprite(honny_bee, -25, 0)
statusbar = statusbars.create(20, 4, StatusBarKind.pollen)
statusbar.value = 0
statusbar.attachToSprite(honny_bee, -20, 0)
controller.moveSprite(honny_bee, 110, 110)
honny_bee.setStayInScreen(true)
setScene()
game.onUpdate(function () {
    gravity()
    if (honny_bee.y > 112) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.showLongText("you were out of control because you didn't know how to fly", DialogLayout.Bottom)
        game.over(false, effects.splatter)
    }
})
forever(function () {
    music.playMelody("B A B A B A G - ", 250)
    music.playMelody("A C5 A B A B A - ", 250)
    music.playMelody("A - A - A G B A ", 250)
    music.playMelody("B A B A G - G - ", 250)
    music.playMelody("G F - E F G - - ", 250)
    music.playMelody("G F - F G A - - ", 250)
})
forever(function () {
    if (statusbar.value == 100) {
        honny_bee.sayText("time to go back to the hive!", 2000, false)
    }
})
forever(function () {
    if (info.score() == 30) {
        game.showLongText("you have collected all the pollen that the hive needs. the queen bee can lay and support hundreds of bees. you were rewarded with honey  ", DialogLayout.Full)
        game.over(true)
    }
})
