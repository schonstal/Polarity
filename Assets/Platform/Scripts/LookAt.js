var target : Transform;
var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
var c3 : Color = Color.blue;

var lengthOfLineRenderer : int = 20;
 
function Start() {
     var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
     lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
     lineRenderer.SetColors(c1, c2);
     lineRenderer.SetWidth(0.2,0.2);
     lineRenderer.SetVertexCount(2);
}

function Update ()
{
	var hit : RaycastHit;
	var lineRenderer : LineRenderer = GetComponent(LineRenderer);
	
	if (Physics.Raycast (transform.position, Vector3.Normalize(target.position - transform.position), hit)) {
		
		if(Input.GetMouseButton(0)) {
			shoot(hit, lineRenderer, 1);
		} else if(Input.GetMouseButton(1)) {
			shoot(hit, lineRenderer, -1);
		} else {
			lineRenderer.SetColors(Color.clear, Color.clear);
		}
	} else {
		lineRenderer.SetColors(Color.clear, Color.clear);
	}
}

function shoot(hit : RaycastHit, lineRenderer : LineRenderer, polarity : int) : void {
	lineRenderer.SetColors((polarity<0?c3:c2), (polarity<0?c3:c2));
	lineRenderer.SetPosition(0, transform.position);
	lineRenderer.SetPosition(1, hit.point);
	if(hit.transform.tag == "Polarized") {
		hit.transform.parent.parent.GetComponent(PolarizeGroup).SetPolarity(polarity);
	}
}