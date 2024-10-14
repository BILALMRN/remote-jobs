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
        <ThemedText type="title">Overview</ThemedText>
      </ThemedView>
      <ThemedText>Browse through a wide range of job listings tailored to your skills and interests. 
        From technology and marketing to customer support and creative roles,
         we&apos;ve got something for everyone.</ThemedText>

      <Collapsible title="Explore">
      <ThemedText type="defaultSemiBold">
          <ExternalLink href="#">
            <ThemedText type="link">Website</ThemedText>
          </ExternalLink>
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          <ExternalLink href="#">
            <ThemedText type="link">Privacy Policy</ThemedText>
          </ExternalLink>
        </ThemedText>
        <ThemedText type="defaultSemiBold">
          <ExternalLink href="#">
            <ThemedText type="link">Terms Of Use</ThemedText>
          </ExternalLink>
        </ThemedText>
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
