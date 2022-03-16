function createPoint(x, y) {
    
    return {
        getXAndY(){ return `X:${x}\tY:${y}`},
        getX(){ return x },
        setX(new_x) { x = new_x},
        getY(){ return y },
        setY(new_y) { y = new_y},
        translate(new_x, new_y) { x+=new_x; y+=new_y },
        scale(add_value) { x+=add_value; y+=add_value }
    }
    
    

}

let point = createPoint(5, 3)
console.log(point)
point.setX(10)
console.log(point.getX())
point.translate(20, 5)
console.log(point.getXAndY())
point.scale(1000)
console.log(point.getXAndY())