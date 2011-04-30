public var object : Transform; //Dummy object goes here

Screen.showCursor = false;

function LateUpdate () {
	var ray = camera.ScreenPointToRay (Input.mousePosition);
	Debug.DrawRay (ray.origin, ray.direction * 20, Color.red); // (Debug.DrawRay)this is for visual confirmation and can be commented out for build.
	var target = ray.GetPoint(-ray.origin.z / ray.direction.z); 
	object.transform.position = target;
}