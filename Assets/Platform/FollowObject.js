var target : Transform;
var followX = true;
var followY = false;

//Kinda gross, but I like the way it shows up in the editor...
var minimumX = -100;
var maximumX = 100;
var minimumY = -100;
var maximumY = 100;

function Update() {
    if(target) {
		if(followX) {
			if(target.position.x > minimumX && target.position.x < maximumX)
				transform.position.x = target.position.x;
		}
		if(followY) {
			if(target.position.y > minimumY && target.position.y < maximumY)
				transform.position.y = target.position.y;
		}
    }
}