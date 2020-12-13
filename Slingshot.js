class Slingshot{

    constructor(bodyA, pointB){

        var options = {
            bodyA:bodyA,
            bodyB:pointB,
            stiffness:0.04,
            length:20
        }

        this.slingshot = Constraint.create(options);
        World.add(world,this,slingshot);

    }

    release(){
        this.slingshot.bodyA=null;
    }

    display(){

        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.pointB.position;

        if(this.slingshot.bodyA){

            stroke("lightblue");
            strokeWeight(8);
            line(pointA.x, pointA.y, pointB.x,pointB.y);



        }


    }




}