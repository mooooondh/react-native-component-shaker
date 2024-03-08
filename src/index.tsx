import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";

interface props {
    shakeDirection?: "horizon" | "vertical";
    shakeDistance?: number;
    shakeCount?: number;
    shakeDuration?: number;
    isShakeActivate: boolean;
    children: JSX.Element | JSX.Element[];
    onShakeEnd?(): void;
}

const ComponentShaker = ({
    shakeDirection = "horizon",
    shakeDistance = 16,
    shakeCount = 8,
    shakeDuration = 1000,
    isShakeActivate,
    children,
    onShakeEnd,
}: props) => {
    const shakeAnimation = useRef(new Animated.Value(0)).current;
    const shakeSequence = new Array(shakeCount).fill("").map((d, idx) =>
        idx % 2 === 0
            ? Animated.timing(shakeAnimation, {
                  toValue: shakeDistance,
                  duration: shakeDuration / shakeCount,
                  useNativeDriver: true,
              })
            : Animated.timing(shakeAnimation, {
                  toValue: shakeDistance * -1,
                  duration: shakeDuration / shakeCount,
                  useNativeDriver: true,
              })
    );

    shakeSequence.push(
        Animated.timing(shakeAnimation, {
            toValue: 0,
            duration: shakeDuration / shakeCount,
            useNativeDriver: true,
        })
    );

    const onShake = () => {
        Animated.sequence(shakeSequence).start(({ finished }) => {
            if (onShakeEnd && finished) onShakeEnd();
        });
    };

    useEffect(() => {
        if (isShakeActivate) onShake();
    }, [isShakeActivate]);

    return (
        <View
            style={[
                shakeDirection === "horizon"
                    ? { paddingHorizontal: shakeDistance }
                    : { paddingVertical: shakeDistance },
            ]}
        >
            <Animated.View
                style={[
                    shakeDirection === "horizon"
                        ? { transform: [{ translateX: shakeAnimation }] }
                        : { transform: [{ translateY: shakeAnimation }] },
                ]}
            >
                {children}
            </Animated.View>
        </View>
    );
};

export default ComponentShaker;
