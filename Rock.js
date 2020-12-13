class Rock{

    constructor(x,y,radius){

        var options = {
            isStatic:false
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);

    }

    display(){

        image(this.image,this.body.position.x,this.body.position.y,50,50);

    }

}

// remember to do this.body.setAngle for box