<script lang="ts">
  var Client = require('bittorrent-tracker')
  const Buffer = require('buffer/').Buffer;

  var requiredOpts = {
    infoHash: new Buffer("ae023c98433bdc380114"), // hex string or Buffer
    peerId: new Buffer("ae023c98433bdc380114"), // hex string or Buffer
    announce: ['ws://127.0.0.1:38295']//, // list of tracker server urls, TODO 2.5 put this into settings.
    //port: 6881 // torrent client port, (in browser, optional)
  }

  var client = new Client(requiredOpts)

  client.on('error', function (err) {
    // fatal client error!
    console.log(err.message)
  })

  client.on('warning', function (err) {
    // a tracker was unavailable or sent bad data to the client. you can probably ignore it
    console.log(err.message)
  })

  console.log('starting!')
  // start getting peers from the tracker
  client.start()

  client.on('update', function (data) {
    console.log('got an announce response from tracker: ' + data.announce)
    console.log('number of seeders in the swarm: ' + data.complete)
    console.log('number of leechers in the swarm: ' + data.incomplete)
  })

  client.once('peer', function (addr) {
    console.log('found a peer: ' + addr) // 85.10.239.191:48623
  })

</script>

<div>Hello world2!</div>
