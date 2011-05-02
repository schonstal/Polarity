var repulsionColor = Color.red;
var attractionColor = Color.blue;
var maxIntensity = 1.0;
var lerpTime = 0.1;
var lerpFadeTime = 0.2;

private var intensity : float = 0.0;
private var lerpCounter : float = 0.0;
private var lerpFadeCounter : float = 0.0;

function FixedUpdate() {
	var light : Light = gameObject.GetComponent(Light);
	var polarity : int = transform.parent.GetComponent(Polarity).polarity;

	
	switch(polarity) {
		case 1:
			setLightColor(repulsionColor);
			break;
		case -1:
			setLightColor(attractionColor);
			break;
		default:
			if(lerpFadeCounter < 1) {
				lerpFadeCounter += Time.deltaTime * 1/lerpFadeTime;
			}
			intensity = Mathf.Lerp(maxIntensity, 0, lerpFadeCounter);
			lerpCounter = 0;
	}
	
	light.intensity = intensity;
}

function setLightColor(color : Color) {
	if(lerpCounter < 1) {
		lerpCounter += Time.deltaTime * 1/lerpTime;
	}
	intensity = Mathf.Lerp(0, maxIntensity, lerpCounter);
	light.color = color;
	lerpFadeCounter = 0;
}