import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/logo.jpg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/1.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://wa.me/qr/5D2XL6JUTF74P1')}>
            <ThemedText>Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/7.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.linkedin.com/in/douglas-eduardo-a26327312/')}>
            <ThemedText>Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/8.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('mailto:douglasclassroomeduardo@gmail.com')}>
            <ThemedText>Email</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/2.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://github.com/Duduardoaajkk')}>
            <ThemedText>Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/3.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://br.pinterest.com/douglasclassroomeduardo/')}>
            <ThemedText>Pinterest</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/4.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('tel:5518998106469')}>
            <ThemedText>Telefone</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/5.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.instagram.com/duduardoajk/')}>
            <ThemedText>Instagram</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/6.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://x.com/douglsapenas')}>
            <ThemedText>Twiter</ThemedText>
          </Pressable>
        </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});
