var incrementAmount = 1;

function OnMouseUp() {
	var newLevel = GameObject.Find("LevelCounter").GetComponent(LevelCounter).level + incrementAmount;
	
	if(newLevel > 0 && newLevel <= 99 && newLevel < Application.levelCount - 1) {
		GameObject.Find("LevelCounter").GetComponent(LevelCounter).level = newLevel;
		GameObject.Find("Start").GetComponent(StartGame).level = newLevel + 1;
	}
}