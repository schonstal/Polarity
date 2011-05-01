var direction = 1;
var amount = 20;

function OnTriggerStay (other : Collider) {
    if (other.attachedRigidbody) {
        other.attachedRigidbody.AddForce(transform.up * amount * direction * transform.parent.GetComponent(Polarity).polarity);
    }
}