var level = 2;
var isLevelSelect = false;

private var cameraFade : CameraFade;
cameraFade = gameObject.AddComponent(CameraFade);

function OnMouseUp () {
	cameraFade.StartFade(Color.black, 1.0);
	yield WaitForSeconds(0.9);
	Application.LoadLevel(level);
}