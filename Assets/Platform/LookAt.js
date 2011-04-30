var target : Transform;
function Update ()
{
	var hit : RaycastHit;
	
	if (Physics.Raycast (transform.position, Vector3.Normalize(target.position - transform.position), hit)) {
		if(Input.GetMouseButtonDown(0)) {
			hit.transform.renderer.material.color = Color.red;
		}
		if(Input.GetMouseButtonDown(1)) {
			hit.transform.renderer.material.color = Color.blue;
		}
	}
}