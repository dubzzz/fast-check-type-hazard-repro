import fcMJS from "fast-check";
import { identifier as identifierCJS } from "./mod-cjs.cjs";
import { identifier as identifierMJS } from "./mod-mjs.mjs";

// In pure theory, TypeScript is right to consider that a depth identifier coming from CJS world
// is not compatible with one coming from MJS one. But in practice, identifiers are just raw objects
// with depth in the context of fast-check. As such there is no problem with taking one from CJS world
// and use it in MJS one.
function getDepth(identifier: fcMJS.DepthIdentifier) {
  return fcMJS.getDepthContextFor(identifier);
}
getDepth(identifierCJS); // used not to compile in fast-check 3.17.0
getDepth(identifierMJS);
getDepth({}); // compiled with proposals/fast-check-pr4842-6a46d52.tgz
