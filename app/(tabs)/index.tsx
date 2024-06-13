import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Font from 'expo-font'; // Importação do expo-font
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Monolite: require("@/assets/fonts/Monolite.otf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Ou qualquer componente de carregamento
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title" style={styles.titleText}>Bem vindo ao UniChat!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText style={styles.defaultText}>
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
        <ThemedText style={styles.defaultText}>
          Me chamo Douglas Eduardo e estou fazendo um aplicativo que contém
          algumas redes sociais.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  textoContainer: {
    marginBottom: 16,
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  titleText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "Monolite", // Aplicação da fonte Monolite
  },
  defaultText: {
    fontSize: 16,
    color: "#000000",
    fontFamily: "Monolite", // Aplicação da fonte Monolite
  },
});
