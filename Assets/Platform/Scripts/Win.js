function OnTriggerEnter (other : Collider) {
	var nextLevel = Application.loadedLevel + 1;
	if(nextLevel < Application.levelCount) {
    	Application.LoadLevel(nextLevel);
    }
}