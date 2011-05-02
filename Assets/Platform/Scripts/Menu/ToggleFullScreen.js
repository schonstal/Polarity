function OnMouseUp () {
	Screen.fullScreen = !Screen.fullScreen;
}

function Update() {
	transform.Find("Text").gameObject.GetComponent(TextMesh).text = "Fullscreen: " + (Screen.fullScreen?"On":"Off");
}