class KeyBoard
{
    constructor()
    {
        /* nop */
    }

    static layout =
        [
            [0, 1, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ];

    static canvas = null;
    static context = null;
    static x = 0;
    static y = 0;
    static width = 0;
    static height = 0;

    /**
     * セットアップ
     */
    static setup(canvas, x, y, width, height)
    {
        this.canvas = canvas;
        this.canvas.left = x;
        this.canvas.top = y;
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    static draw()
    {
        ctx.clearRect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = "rgb(50, 50, 50)";
        this.context.fillRect(this.x, this.y, this.width, this.height);

        var rawCount = this.layout[0].length;
        var colCount = this.layout.length;
        var margin = { x: this.width * 0.01, y: this.height * 0.01 };
        var size = { x: this.width / rawCount, y: this.height / colCount };
        for (var y = 0; y < colCount; y++)
        {
            for (var x = 0; x < rawCount; x++)
            {
                switch (this.layout[y][x])
                {
                    case 0:
                        break;
                    case 1:
                        this.context.fillStyle = "rgb(100, 100, 100)";
                        this.context.fillRect(size.x * x + margin.x, size.y * y + margin.y, size.x - margin.x * 2, size.y - margin.y * 2);
                    default:
                        break;
                }
            }  
        }
    }
}