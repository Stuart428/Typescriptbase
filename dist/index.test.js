"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const globals_1 = require("@jest/globals");
(0, globals_1.test)('adds 1 + 2 to equal 3', () => {
    (0, globals_1.expect)((0, index_1.sum)(1, 2)).toBe(3);
});
