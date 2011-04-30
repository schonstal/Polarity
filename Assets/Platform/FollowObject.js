var target : Transform;
var followX = true;
var followY = false;

function Update() {
	//Remember: Add in ability to have a bounding box
    if(target) {
		if(followX)
			transform.position.x = target.position.x;
		if(followY)
			transform.position.y = target.position.y;
    }
}