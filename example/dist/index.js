import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
var ComponentShaker = function (_a) {
    var shakeDirection = _a.shakeDirection, shakeDistance = _a.shakeDistance, shakeCount = _a.shakeCount, shakeDuration = _a.shakeDuration, isShakeActivate = _a.isShakeActivate, children = _a.children, onShakeEnd = _a.onShakeEnd;
    var shakeAnimation = useRef(new Animated.Value(0)).current;
    var shakeSequence = new Array(shakeCount).fill("").map(function (d, idx) {
        return idx % 2 === 0
            ? Animated.timing(shakeAnimation, {
                toValue: shakeDistance,
                duration: shakeDuration / 7,
                useNativeDriver: true,
            })
            : Animated.timing(shakeAnimation, {
                toValue: shakeDistance * -1,
                duration: shakeDuration / 7,
                useNativeDriver: true,
            });
    });
    shakeSequence.push(Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: shakeDuration / 7,
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