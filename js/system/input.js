class Input
{
    constructor()
    {
        /* nop */
    }

    static keyConfig = {};
    static keyDown = [];
    static requestedKeyDown = [];

    static get Key()
    {
        var result =
        {
            Up: 1,
            Down: 2,
            Right: 3,
            Left: 4,
        }
        return result;
    }

    static setup()
    {
        this.keyDown = [];
        this.requestedKeyDown = [];

        document.addEventListener('keydown', (event) =>
        {
            var key = this.keyConfig[event.key];
            this.requestedKeyDown.push(key);
        });
    }

    static update()
    {
        this.keyDown = this.requestedKeyDown;
        this.requestedKeyDown = [];
    }
    
    /**
    * キー設定
    */
    static setKeyConfig(keyType, key)
    {
        this.keyConfig[key] = keyType;
    }

    /**
    * キーの押下状態を取得
    */
    static getKeyDown(key)
    {
        return this.keyDown.indexOf(key) >= 0;
    }

}

