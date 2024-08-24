import { StyleSheet } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Canvas } from "react-native-wgpu";

import { useWebGPU } from "../components/useWebGPU";

export function ImageBlur() {
  const { canvasRef } = useWebGPU(async ({ context, device, canvas }) => {
    function frame() {}
    return frame;
  });

  return (
    <View style={style.container}>
      <Canvas ref={canvasRef} style={style.webgpu} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  webgpu: {
    flex: 1,
  },
});
