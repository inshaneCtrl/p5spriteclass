class Hero extends Sprite{
  
  constructor(locationY, locationX, imageArray){
    super(locationY, locationX, imageArray);
    this.direction = 1;
    this.state = "standing";
    this.velocityY = 0;
  }
  
  update(){
  
  }
  
  isGrounded() {
    
  }
}
