class Ground{
    constructor(x,y,w,h){
        var g_options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,g_options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }

    display(){
        var gos = this.body.position;
        fill("red");
        stroke("red")
        rectMode(CENTER);
        rect(gos.x,gos.y,this.width,this.height);

    }

}