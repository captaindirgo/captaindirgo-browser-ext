const Server = require('bittorrent-tracker').Server

var opts = {};
opts.http = false;
opts.udp = false;
opts.ws = true;
opts.serverType = 'ws'

const server = new Server(opts)

server.on('error', err => { console.log(err) })
server.on('warning', err => { console.log(err) })

server.listen(38295, () => {

    const port = server[opts.serverType].address().port
    let announceUrl
    if (opts.serverType === 'http') {
        announceUrl = `http://127.0.0.1:${port}/announce`
    } else if (opts.serverType === 'udp') {
        announceUrl = `udp://127.0.0.1:${port}`
    } else if (opts.serverType === 'ws') {
        announceUrl = `ws://127.0.0.1:${port}`
    }
    
    console.log(`Listening to ${announceUrl}`)
})
