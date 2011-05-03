var track : AudioClip;

function Awake () {
	var go = GameObject.Find("Music");
	
	if(track != null)
		go.audio.clip = track;
		
	go.audio.Play();
}