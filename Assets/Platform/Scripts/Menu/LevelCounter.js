var level = 0;

function Update() {
	gameObject.GetComponent(TextMesh).text = String.Format("{0:d2}", level);
}