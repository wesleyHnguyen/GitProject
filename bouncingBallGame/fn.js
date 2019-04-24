function Ball(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 0.5;
    this.speedY = -0.5;

    this.isCollideTheVerticalBorders = function () {
        return (this.y < this.radius || this.y > canvas.height - this.radius);
    };

    this.isCollideTheHorizontalBorders = function () {
        return (this.x < this.radius || this.x > canvas.width - this.radius);
    };

    this.isCollideTheBar = function(bar){
        if (bar === undefined) return false;
        if (this.y >= bar.y - this.radius){
            if(this.x < bar.x){
                if(this.x + this.radius > bar.x)
                    return true;
            }else  if (this.x > bar.x + bar.width) {
                if(this.x - this.radius < bar.x + bar.width)
                    return  true;
            }

            if((this.x >= bar.x) &&(this.x <= bar.x +bar.width))
                return  true;
        }

        return false;
    };

}

function Bar(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 10;

    this.moveLeft = function () {
        if(this.x > 0)
            this.x = this.x - this.speed;
    };

    this.moveRight = function () {
        if(this.x + this.width < canvas.width)
            this.x = this.x + this.speed;
    };

}

function Brick(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}







