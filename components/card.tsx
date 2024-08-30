import { View, Text, Image,  Linking,StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';

const CardJobDetails = (prop: { job: any; }) => {
    
   const job = prop.job;
    return (
      <Card containerStyle={{ borderRadius: 20 }} >
        {/* <Card.Title>{job.title}</Card.Title>
        <Card.Divider /> */}
        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: "nowrap" }}> 
          <Image
            source={{ uri: job.company_logo }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
            defaultSource={{uri: "/assets/images/icon.png"}}
          />
          <View style={{ marginLeft: 16, marginTop: 0 }}>
          <InfoRow label="Company Name: " value={job.company_name} />
          <InfoRow label="Category: " value={job.category} />
          <InfoRow label="Job Type: " value={job.job_type} />
          <InfoRow label="Salary: " value={job.salary} />
          <InfoRow label="Remote Location : " value={job.candidate_required_location} />
          </View>
        </View>
      </Card>
    );
  };

  const InfoRow = ({ label, value }) => (
    <Text style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text>{value}</Text>
    </Text>
  );
  const styles = StyleSheet.create({
    
    infoRow: {
      marginBottom: 8, // Adjust as needed
    },
    label: {
      fontWeight: '700',
    },
  });
  
  export default CardJobDetails;