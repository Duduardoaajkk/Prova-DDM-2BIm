import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, ActivityIndicator, Linking } from 'react-native'; // Importações atualizadas
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image
            source={require("@/assets/images/1.png")}
            style={styles.icon}
          />
          <Pressable
            onPress={() => Linking.openURL("https://wa.me/qr/5518998106469")}
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
          <Pressable onPress={() => Linking.openURL("tel:5518998106469")}>
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
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 200, // Adjusted height for header image
  },
  titleContainer: {
    paddingTop: 24, // Adjusted padding top for title container
    paddingBottom: 16, // Adjusted padding bottom for title container
    backgroundColor: "#353636", // Added background color for title container
  },
  title: {
    fontSize: 24, // Adjusted font size for title
    color: "#FFFFFF", // Changed text color to white
    textAlign: "center",
    fontFamily: "Monolite", // Ensure this line is included for the title font
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12, // Decreased marginTop for smaller spacing
    backgroundColor: "#FFFFFF", // Changed background color to white
    borderRadius: 100,
    paddingVertical: 14, // Adjusted vertical padding for smaller buttons
    paddingHorizontal: 24, // Adjusted horizontal padding for smaller buttons
    marginBottom: 12, // Added marginBottom for better spacing between buttons
  },
  icon: {
    width: 40, // Decreased icon size
    height: 40, // Decreased icon size
    marginRight: 12, // Decreased margin right for smaller spacing
  },
  text: {
    fontSize: 16, // Decreased font size for button text
    color: "#353636", // Changed text color to dark gray
    textAlign: "center",
    fontFamily: "Monolite", // Ensure this line is included for the button text font
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
