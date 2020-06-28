// Node.js socket server script
const WebSocket = require('ws');

const json = {
  "order": {
    "id": 450789469,
    "email": "bob.norman@hostmail.com",
    "closed_at": null,
    "created_at": "2008-01-10T11:00:00-05:00",
    "updated_at": "2008-01-10T11:00:00-05:00",
    "number": 1,
    "note": null,
    "token": "b1946ac92492d2347c6235b4d2611184",
    "gateway": "authorize_net",
    "test": false,
    "total_price": "598.94",
    "subtotal_price": "597.00",
    "total_weight": 0,
    "total_tax": "11.94",
    "taxes_included": false,
    "currency": "USD"
  }
}
var port = 8080;

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(JSON.stringify(json));
  });
});
