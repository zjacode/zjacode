from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# 首页路由
@app.route('/')
def index():
    return render_template('test.html')

# Favicon 路由
@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static/images', 'favicon.png')

# 音频文件路由
@app.route('/audio/music.mp3')
def audio():
    return send_from_directory('audio', 'music.mp3')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


