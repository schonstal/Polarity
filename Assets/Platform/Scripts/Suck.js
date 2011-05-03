var amount = 20.0;
var radius = 8.0;

function OnTriggerStay (other : Collider) {
    if (other.attachedRigidbody) {
        other.attachedRigidbody.AddExplosionForce(amount, GameObject.Find("Sucker").transform.position, radius);
    }
}