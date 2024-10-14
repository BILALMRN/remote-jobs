import { Image, StyleSheet, Platform, Linking, Button, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import CardJobDetails from '@/components/CardJobDetails';
import { useRoute } from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import { Text } from 'react-native';
import Card from '@/components/Card';

export default function JobDetail() {
  const route = useRoute();
  const job = route.params?.job;
  if (!job) return <Text>No job data available.</Text>;
  return (

    <>
      <CardJobDetails job={job} />
      <View style={styles.divider} />
      <ScrollView contentContainerStyle={{ padding: 2 }}>
        <Card >
          <ThemedText type="title" style={{ color: 'orange', alignItems: 'center', margin: 10 }}>desception!</ThemedText>
          <RenderHtml
            contentWidth={300} // Adjust the width as needed
            source={{ html: `${job.description}` }} // Pass the HTML content here
          />
          <Button
            title="Apply Now"
            onPress={() => {
              if (job.url) {
                Linking.openURL(job.url);
              }
            }}
          />
        </Card>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    margin: 10,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc', // Change color as needed
    marginVertical: 10, // Adjust spacing as needed
  },

});
