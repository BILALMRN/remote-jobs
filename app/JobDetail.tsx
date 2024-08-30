import { Image, StyleSheet, Platform, Linking, Button, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CardJobDetails from '@/components/card';
import { useRoute } from '@react-navigation/native';
import { Card, Divider } from '@rneui/themed';
import RenderHtml from 'react-native-render-html';
import { Text } from 'react-native';
import { color } from '@rneui/themed/dist/config';

export default function JobDetail() {
  const route = useRoute();
  const job = route.params?.job;
  if (!job) return <Text>No job data available.</Text>;
  return (

    <>
      <CardJobDetails job={job} />
      {/* <Divider style={ {margin:10} }/>
        <Button
        title="Apply Now"
        onPress={() => {
          if (job.url) {
            Linking.openURL(job.url);
          }
        }}
      /> */}
    <Divider style={{marginBottom : 10,marginTop:5}}/>
        <ScrollView contentContainerStyle={{ padding: 2}}>
      <Card containerStyle={{ borderRadius: 20 }} >
          {/* <ThemedView style={styles.titleContainer}> */}
            <ThemedText type="title" style={{ color: 'orange', alignItems: 'center' }}>desception!</ThemedText>

            {/* </ThemedView> */}
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

});
