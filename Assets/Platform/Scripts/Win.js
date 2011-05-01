var nextLevel : int = 1;

function OnTriggerEnter (other : Collider) {
    Application.LoadLevel(nextLevel);
}