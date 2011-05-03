
function OnTriggerEnter() {
	for (var child : Transform in transform) {
    	child.transform.GetComponent(BoxCollider).isTrigger = false;
	}
}