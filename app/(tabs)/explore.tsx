import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>


      <Collapsible title="Privacy Policy">
        <ThemedText>
          Welcome to [App Name]! Your privacy is important to us.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app.
        </ThemedText>
        <ExternalLink href="#">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Terms Of Use">
        <ThemedText>
          By accessing or using [App Name], you agree to comply with and be bound by these Terms of Use.
          If you do not agree, please do not use the app.
        </ThemedText>
        <ExternalLink href="#">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="//\\">

        <ThemedText type="defaultSemiBold">
          <ExternalLink href="#">
            <ThemedText type="link">Github Repo</ThemedText>
          </ExternalLink>
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          <ExternalLink href="#">
            <ThemedText type="link">License</ThemedText>
          </ExternalLink>
        </ThemedText>



      </Collapsible>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
