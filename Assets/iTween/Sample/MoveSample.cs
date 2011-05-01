using UnityEngine;
using System.Collections;

public class MoveSample : MonoBehaviour
{	
	void Start(){
		iTween.MoveBy(gameObject, iTween.Hash("x", 70, "easeType", "easeInOutCubic", "loopType", "pingPong", "delay", .1));
	}
}

