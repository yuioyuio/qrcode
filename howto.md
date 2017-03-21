
### Preliminaries

Assuming Ubuntu (Xenial) as the host system.

``` shell
# add the nodejs 7.x repo
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ sudo apt-get install nodejs
$ nodejs -v
v7.7.3
$ npm -v
4.1.2
```

Setting up the project structure:

``` shell
$ pwd
~/qrcode
# defaults are fine
$ npm init
# note we don't use the -g switch which would instal this globally - we just want local
$ npm install express --save
```