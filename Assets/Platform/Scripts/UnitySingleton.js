private static var instance:UnitySingleton;
public static function GetInstance() : UnitySingleton {
return instance;
}

function Awake() {
    if (instance != null && instance != this) {
        Destroy(this.gameObject);
        return;
    } else {
        instance = this;
    }
    DontDestroyOnLoad(this.gameObject);
}