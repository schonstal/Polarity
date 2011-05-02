var repulsionColor = Color.red;
var attractionColor = Color.blue;
var maxIntensity = 1.0;
var lerpTime = 0.1;

private var intensity : float = 0.0;
private var lerpCounter : float = 0.0;

function FixedUpdate() {
	var light : Light = gameObject.GetComponent(Light);
	var polarity : int = transform.parent.GetComponent(Polarity).polarity;
	
	if(lerpCounter < 1/lerpTime) {
		lerpCounter += Time.deltaTime * 1/lerpTime;
	}
	
	switch(polarity) {
		case 1:
			intensity = Mathf.Lerp(0, maxIntensity, lerpCounter);
			light.color = repulsionColor;
			break;
		case -1:
			intensity = Mathf.Lerp(0, maxIntensity, lerpCounter);
			light.color = attractionColor;
			break;
		default:
			intensity = 0;
			lerpCounter = 0;
	}
	
	light.intensity = intensity;
}