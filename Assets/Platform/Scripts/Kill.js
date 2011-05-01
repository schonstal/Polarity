var currentLevel : int = 0;

function OnTriggerEnter (other : Collider) {
    Application.LoadLevel(currentLevel);
}