import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
var ComponentShaker = function (_a) {
    var _b = _a.shakeDirection, shakeDirection = _b === void 0 ? "horizon" : _b, _c = _a.shakeDistance, shakeDistance = _c === void 0 ? 16 : _c, _d = _a.shakeCount, shakeCount = _d === void 0 ? 8 : _d, _e = _a.shakeDuration, shakeDuration = _e === void 0 ? 1000 : _e, isShakeActivate = _a.isShakeActivate, children = _a.children, onShakeEnd = _a.onShakeEnd;
    var shakeAnimation = useRef(new Animated.Value(0)).current;
    var shakeSequence = new Array(shakeCount).fill("").map(function (d, idx) {
        return idx % 2 === 0
            ? Animated.timing(shakeAnimation, {
                toValue: shakeDistance,
                duration: shakeDuration / shakeCount,
                useNativeDriver: true,
            })
            : Animated.timing(shakeAnimation, {
                toValue: shakeDistance * -1,
                duration: shakeDuration / shakeCount,
                useNativeDriver: true,
            });
    });
    shakeSequence.push(Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: shakeDuration / shakeCount,
        useNativeDriver: true,
    }));
    var onShake = function () {
        Animated.sequence(shakeSequence).start(function (_a) {
            var finished = _a.finished;
            if (onShakeEnd && finished)
                onShakeEnd();
        });
    };
    useEffect(function () {
        if (isShakeActivate)
            onShake();
    }, [isShakeActivate]);
    return (<View style={[
            shakeDirection === "horizon"
                ? { paddingHorizontal: shakeDistance }
                : { paddingVertical: shakeDistance },
        ]}>
            <Animated.View style={[
            shakeDirection === "horizon"
                ? { transform: [{ translateX: shakeAnimation }] }
                : { transform: [{ translateY: shakeAnimation }] },
        ]}>
                {children}
            </Animated.View>
        </View>);
};
export default ComponentShaker;
//# sourceMappingURL=index.js.map