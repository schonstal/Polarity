var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
var lengthOfLineRenderer : int = 20;
var target : Transform;
 
function Start() {
     var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
     lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
     lineRenderer.SetColors(c1, c2);
     lineRenderer.SetWidth(0.2,0.2);
     lineRenderer.SetVertexCount(2);
}

function FixedUpdate() {
    var lineRenderer : LineRenderer = GetComponent(LineRenderer);
	lineRenderer.SetPosition(0, transform.position);
	lineRenderer.SetPosition(1, target.position);
}