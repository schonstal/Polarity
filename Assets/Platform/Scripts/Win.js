var fadeTime = 0.7;
private var cameraFade : CameraFade;

function OnTriggerEnter (other : Collider) {
	var nextLevel = Application.loadedLevel + 1;
	if(nextLevel < Application.levelCount) {
		cameraFade = gameObject.AddComponent(CameraFade);
		cameraFade.StartFade(Color.black, fadeTime);
		
		yield WaitForSeconds(0.6);
    	
    	Application.LoadLevel(nextLevel);
    }
}

