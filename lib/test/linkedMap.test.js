/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var linkedMap_1 = require("../linkedMap");
var assert = require("assert");
describe('Linked Map', function () {
    it('Simple', function () {
        var map = new linkedMap_1.LinkedMap();
        map.set('ak', 'av');
        map.set('bk', 'bv');
        assert.deepStrictEqual(map.keys(), ['ak', 'bk']);
        assert.deepStrictEqual(map.values(), ['av', 'bv']);
    });
    it('Touch First one', function () {
        var map = new linkedMap_1.LinkedMap();
        map.set('ak', 'av');
        map.set('ak', 'av', linkedMap_1.Touch.First);
        assert.deepStrictEqual(map.keys(), ['ak']);
        assert.deepStrictEqual(map.values(), ['av']);
    });
    it('Touch Last one', function () {
        var map = new linkedMap_1.LinkedMap();
        map.set('ak', 'av');
        map.set('ak', 'av', linkedMap_1.Touch.Last);
        assert.deepStrictEqual(map.keys(), ['ak']);
        assert.deepStrictEqual(map.values(), ['av']);
    });
    it('Touch First two', function () {
        var map = new linkedMap_1.LinkedMap();
        map.set('ak', 'av');
        map.set('bk', 'bv');
        map.set('bk', 'bv', linkedMap_1.Touch.First);
        assert.deepStrictEqual(map.keys(), ['bk', 'ak']);
        assert.deepStrictEqual(map.values(), ['bv', 'av']);
    });
    it('Touch Last two', function () {
        var map = new linkedMap_1.LinkedMap();
        map.set('ak', 'av');
        map.set('bk', 'bv');
        map.set('ak', 'av', linkedMap_1.Touch.Last);
        assert.deepStrictEqual(map.keys(), ['bk', 'ak']);
        assert.deepStrictEqual(map.values(), ['bv', 'av']);
    });
    it('Touch Frist from middle', function () {
        var map = new linkedMap_1.LinkedMap();
        map.set('ak', 'av');
        map.set('bk', 'bv');
        map.set('ck', 'cv');
        map.set('bk', 'bv', linkedMap_1.Touch.First);
        assert.deepStrictEqual(map.keys(), ['bk', 'ak', 'ck']);
        assert.deepStrictEqual(map.values(), ['bv', 'av', 'cv']);
    });
    it('Touch Last from middle', function () {
        var map = new linkedMap_1.LinkedMap();
        map.set('ak', 'av');
        map.set('bk', 'bv');
        map.set('ck', 'cv');
        map.set('bk', 'bv', linkedMap_1.Touch.Last);
        assert.deepStrictEqual(map.keys(), ['ak', 'ck', 'bk']);
        assert.deepStrictEqual(map.values(), ['av', 'cv', 'bv']);
    });
});
