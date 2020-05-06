// canvasの準備
var canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext('2d');

// 画像をロード
var ground = new Image();
ground.src = "resources/first-world.jpg";

//キー設定
var rightKey = "o", leftKey = "u", upKey = "8", downKey = "i";
var charaX = 1, charaY = 1;

Input.setup();
KeyBoard.setup(document.getElementById('keyboard'), 0, 0, 500, 500);

//0が地面で、1が壁。。。。。
var map =
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

// この中をループ実行
function loop() {
    ctx.clearRect(0, 0, 1000, 1000); //全部の画面を真っ白にする！

    KeyBoard.draw();

    ctx.drawImage(ground,0,0,0,0)
    //MAP描画
    /*for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map.length; x++) {
            if (map[y][x] == 0) {
                ctx.drawImage(ground, x * 50, y * 50, 50, 50);        //グラウンドを描画する。。。      
            } else if (map[y][x] == 1) {
                ctx.drawImage(wall, x * 50, y * 50, 50, 50);
            }
        }
    }
    //宝箱描画、MAPでいう[5][5]の位置
    ctx.drawImage(box, 250, 250, 50, 50); //固定したい
    //キャラ描画
    ctx.drawImage(tri, 50 * charaX, 50 * charaY, 50, 50); 

    if (charaX == 5 && charaY == 5) {
        ctx.drawImage(goal, 100, 300, 300, 150);
        ctx.drawImage(tri, 250 * Math.random(), 250 * Math.random(), 50, 50);
    } //ループが回っている中でやらんと何回券らしいよ　まじで知らんけど*/
}

setInterval(loop, 33);


document.addEventListener('keydown', (event) => {

    /*
    if (event.key == upKey && map[charaY-1][charaX]!=1 ) { //壁にめり込まない処理
            charaY -= 1
    } else if (event.key == rightKey && map[charaY][charaX+1]!=1 ) {
            charaX += 1;
    } else if (event.key == leftKey && map[charaY][charaX-1]!=1 ) {
            charaX -= 1;   
    } else if (event.key == downKey && map[charaY+1][charaX]!=1 ) {
            charaY += 1;
    }
    */
});

//壁貫通しないようにする！





//宝箱マスにたどり着くとメッセージボックスが出るようにする。





// スマホでスクロール禁止
document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

