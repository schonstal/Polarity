private var cameraFade : CameraFade;
var fadeTime = 0.4;

//Awake
cameraFade = gameObject.AddComponent(CameraFade);
cameraFade.SetScreenOverlayColor(Color.black);
cameraFade.StartFade(Color.clear, fadeTime);