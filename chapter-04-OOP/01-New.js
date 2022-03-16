function createPoint(x, y) {
    this.getXAndY = () => { return `X:${x}\tY:${y}`}
    this.getX = () => { return x }
    this.setX = (new_x)  => { x = new_x}
    this.getY = () => { return y }
    this.setY = (new_y)  => { y = new_y}
    this.translate = (new_x, new_y)  => { x+=new_x; y+=new_y }
    this.scale = (add_value)  => { x+=add_value; y+=add_value }
}

let point = new createPoint(5, 3)
console.log(point)
point.setX(10)
console.log(point.getX())
point.translate(20, 5)
console.log(point.getXAndY())
point.scale(1000)
console.log(point.getXAndY())