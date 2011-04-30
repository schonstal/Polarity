public var object : Transform; //Dummy object goes here

Screen.showCursor = false;

function FixedUpdate () {
	var ray = camera.ScreenPointToRay (Input.mousePosition);
	var target = ray.GetPoint(-ray.origin.z / ray.direction.z); 
	object.transform.position = target;
}