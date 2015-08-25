window.onload = function() {
	var canvas = document.getElementById('myCanvas');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		alert('失败!');
	}
	ctx.beginPath(); // 开始路径绘制
	ctx.moveTo(20, 20); // 设置路径起点，坐标为(20,20)
	ctx.lineTo(200, 20); // 绘制一条到(200,20)的直线
	ctx.lineWidth = 1.0; // 设置线宽
	ctx.strokeStyle = "#CC0000"; // 设置线的颜色
	ctx.stroke(); // 进行线的着色，这时整条线才变得可见
	ctx.fillStyle = 'yellow';
	ctx.fillRect(0, 0, 200, 100);
}
