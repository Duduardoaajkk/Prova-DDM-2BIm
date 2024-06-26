import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
  Linking,
} from "react-native"; // Importações atualizadas
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Happy: require("@/assets/fonts/Happy.otf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText style={styles.titleText}>Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/1.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() => Linking.openURL("https://wa.me/5518998106469")}
          >
            <ThemedText style={styles.text}>Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/7.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/douglas-eduardo-a26327312/"
              )
            }
          >
            <ThemedText style={styles.text}>Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/8.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() =>
              Linking.openURL("mailto:douglasclassroomeduardo@gmail.com")
            }
          >
            <ThemedText style={styles.text}>Email</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/2.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() => Linking.openURL("https://github.com/Duduardoaajkk")}
          >
            <ThemedText style={styles.text}>Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/3.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://br.pinterest.com/douglasclassroomeduardo/"
              )
            }
          >
            <ThemedText style={styles.text}>Pinterest</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/4.png")}
            style={styles.icon}
          />
          <Pressable onPress={() => Linking.openURL("tel:+5518998106469")}>
            <ThemedText style={styles.text}>Telefone</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/5.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.instagram.com/duduardoajk/")
            }
          >
            <ThemedText style={styles.text}>Instagram</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/6.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() => Linking.openURL("https://x.com/douglsapenas")}
          >
            <ThemedText style={styles.text}>Twiter</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/9.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() => Linking.openURL("https://discord.gg/duduardoaajkk")}
          >
            <ThemedText style={styles.text}>Discord</ThemedText>
          </Pressable>
        </ThemedView>
        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/10.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://open.spotify.com/user/c9ejs5mc6skc0lpna2y9yepo3?si=0dWFKvG_Q32wGgnHYYhsOw%0A"
              )
            }
          >
            <ThemedText style={styles.text}>Spotify</ThemedText>
          </Pressable>
        </ThemedView>
        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/11.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.reddit.com/user/Duduardoaajkk/")
            }
          >
            <ThemedText style={styles.text}>Reddit</ThemedText>
          </Pressable>
        </ThemedView>
        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/12.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.tiktok.com/@duduardoaajkk")
            }
          >
            <ThemedText style={styles.text}>Tik Tok</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  titleText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "Happy", // Aplicação da fonte Monolite
    textAlign: "center",
    marginBottom: 15,
    paddingVertical: 5,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 5,
    borderColor: '#b558ef',
    width: '90%',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: "#353636",
    textAlign: "center",
    fontFamily: "Happy",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
