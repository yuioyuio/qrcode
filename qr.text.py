# pip install qrcode
# needs PIL, I am using winpython which comes with it pre-installed
import qrcode
img = qrcode.make('hello world')
img.save('test.png')