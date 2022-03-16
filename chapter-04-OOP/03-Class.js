class Point{
    constructor(x, y){
        this.x_coordinate = x
        this.y_coordinate = y
    }
    get xy(){ return `X:${this.x}\tY:${this.y}`}
    get x(){ return this.x_coordinate }
    set x(new_x) { this.x_coordinate = new_x}
    get y(){ return this.y_coordinate }
    set y(new_y) { this.y_coordinate = new_y}
    translate(new_x, new_y) { this.x_coordinate+=new_x; this.y_coordinate+=new_y }
    scale(add_value) { this.x_coordinate+=add_value; this.y_coordinate+=add_value }
}

let point = new Point(5, 3)
console.log(point)
point.x= 10
console.log(point.x)
point.translate(20, 5)
console.log(point.xy)
point.scale(1000)
console.log(point.xy)