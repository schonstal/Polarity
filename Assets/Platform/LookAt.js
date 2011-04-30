var target : Transform;
var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
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
		
		if(Input.GetMouseButtonDown(0)) {
			shoot(hit, Color.red, lineRenderer);
		} else if(Input.GetMouseButtonDown(1)) {
			shoot(hit, Color.blue, lineRenderer);
		} else {
			lineRenderer.SetColors(Color.clear, Color.clear);
		}
	} else {
		lineRenderer.SetColors(Color.clear, Color.clear);
	}
}

function shoot(hit : RaycastHit, color : Color, lineRenderer : LineRenderer) : void {
	lineRenderer.SetColors(c1, color);
	lineRenderer.SetPosition(0, transform.position);
	lineRenderer.SetPosition(1, hit.point);
	hit.transform.renderer.material.color = color;
}