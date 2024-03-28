import assert from "assert";
import { mjsSymbol } from "./mod.mjs";
import { cjsSymbol } from "./mod.cjs";

assert.equal(mjsSymbol, cjsSymbol); // Symbol.for extracts the same entity in both contexts
