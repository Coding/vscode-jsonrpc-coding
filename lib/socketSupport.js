/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var net_1 = require("net");
var messageReader_1 = require("./messageReader");
var messageWriter_1 = require("./messageWriter");
function createClientSocketTransport(port, encoding) {
    if (encoding === void 0) { encoding = 'utf-8'; }
    var connectResolve;
    var connected = new Promise(function (resolve, _reject) {
        connectResolve = resolve;
    });
    return new Promise(function (resolve, reject) {
        var server = net_1.createServer(function (socket) {
            server.close();
            connectResolve([
                new messageReader_1.SocketMessageReader(socket, encoding),
                new messageWriter_1.SocketMessageWriter(socket, encoding)
            ]);
        });
        server.on('error', reject);
        server.listen(port, '127.0.0.1', function () {
            server.removeListener('error', reject);
            resolve({
                onConnected: function () { return connected; }
            });
        });
    });
}
exports.createClientSocketTransport = createClientSocketTransport;
function createServerSocketTransport(port, encoding) {
    if (encoding === void 0) { encoding = 'utf-8'; }
    var socket = net_1.createConnection(port, '127.0.0.1');
    return [
        new messageReader_1.SocketMessageReader(socket, encoding),
        new messageWriter_1.SocketMessageWriter(socket, encoding)
    ];
}
exports.createServerSocketTransport = createServerSocketTransport;
