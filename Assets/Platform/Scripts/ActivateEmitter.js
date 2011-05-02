var activationPolarity = 1;

function FixedUpdate() {
	var emitter = gameObject.GetComponent(ParticleEmitter);
	if(transform.parent.GetComponent(Polarity).polarity == activationPolarity) {
		emitter.emit = true;
	} else {
		emitter.emit = false;
	}
}