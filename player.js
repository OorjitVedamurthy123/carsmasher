class Player{
    constructor(speed){
        this.x = 400;
        this.y = 200;
        this.sprite = createSprite(this.x,this.y,50,50);
        this.speed = speed;
        
        this.sprite.shapeColor = "orange";
    }
    display(){
        this.sprite.velocityY = this.speed;
    camera.position.x = displayWidth/2;
     camera.position.y = this.sprite.y
}
}