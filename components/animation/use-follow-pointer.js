import { useState, RefObject, useEffect } from "react";

("use strict");
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFollowPointer = void 0;
function useFollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  useEffect(function () {
    if (!ref.current) return;
    var handlePointerMove = function (_a) {
      var clientX = _a.clientX,
        clientY = _a.clientY;
      var element = ref.current;
      var x = clientX - element.offsetLeft - element.offsetWidth / 2;
      var y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x: x, y: y });
    };
    window.addEventListener("pointermove", handlePointerMove);
    return function () {
      return window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return point;
}

exports.useFollowPointer = useFollowPointer;
