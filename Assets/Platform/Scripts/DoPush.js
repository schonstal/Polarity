var direction = 1;

function OnTriggerStay (other : Collider) {
    if (other.attachedRigidbody) {
        other.attachedRigidbody.AddForce(transform.up * 20 * direction * transform.parent.GetComponent(Polarity).polarity);
    }
}