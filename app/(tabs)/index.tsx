import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Bem vindo ao UniChat!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            UniChat é a solução definitiva para gerenciar todas as suas redes
            sociais em um único lugar. Com UniChat, você pode conectar e
            sincronizar suas contas de diversas plataformas, como Facebook,
            Twitter, Instagram, LinkedIn e muitas outras, facilitando a
            visualização e a interação com suas redes de forma centralizada.
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          Me chamo Douglas Eduardo e estou fazendo um aplciativo que contenha
          algumas redes socias
        </ThemedText>
      </ThemedView> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
