var cursorImage : Texture2D;

//Awake
Screen.showCursor = false;

function OnGUI() {
	GUI.DrawTexture(new Rect(Input.mousePosition.x - 32, Screen.height - Input.mousePosition.y - 32, 64, 64), cursorImage);
}