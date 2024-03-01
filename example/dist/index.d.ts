import React from "react";
interface props {
    shakeDirection: "horizon" | "vertical";
    shakeDistance: number;
    shakeCount: number;
    shakeDuration: number;
    isShakeActivate: boolean;
    children: JSX.Element | JSX.Element[];
    onShakeEnd?(): void;
}
declare const ComponentShaker: ({ shakeDirection, shakeDistance, shakeCount, shakeDuration, isShakeActivate, children, onShakeEnd, }: props) => React.JSX.Element;
export default ComponentShaker;
//# sourceMappingURL=index.d.ts.map