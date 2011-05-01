
function SetPolarity(polarity : int) {
	for (var child : Transform in transform) {
    	child.transform.GetComponent(Polarity).polarity = polarity;
	}
}