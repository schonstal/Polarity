var target : Transform;
function Update ()
{

	if(Input.GetMouseButtonDown(0)) {
		var hit : RaycastHit;
		
		if (Physics.Raycast (transform.position, Vector3.Normalize(target.position - transform.position), hit)) {
			Debug.Log("hit");
			hit.transform.renderer.material.color = Color.red;
		}
	}
	
	//transform.LookAt(Vector3(target.position.x, target.position.y, transform.position.z)); 
}