function OnMouseEnter () {
	renderer.material.color = Color(0.8, 0.8, 0.8, 1);
	for(var child : Transform in transform) {
		child.renderer.material.color = Color.black;
	}
}

function OnMouseExit () {
	renderer.material.color = Color.black;
	for(var child : Transform in transform) {
		child.renderer.material.color = Color.white;
	}
}