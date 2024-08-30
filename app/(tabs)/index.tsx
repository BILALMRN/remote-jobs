import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';
import CardJobDetails from '@/components/card';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { Collapsible } from '@/components/Collapsible';

const baseURL = 'https://remotive.com/api/remote-jobs?limit=150'; // Fetching all data once

const HomeScreen = () => {
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(null);
  
  const navigation = useNavigation();

  const ITEMS_PER_PAGE = 30; // Number of items to display per page
  

  // Fetch data from the URL once
  const fetchData = async (value = category) => {
    try {
      setLoading(true);
      const url = value!==null ? `${baseURL}&category=${value}` : baseURL;
      const response = await axios.get(url);
      setJobs(response.data.jobs); // Store all jobs
      setDisplayedJobs(response.data.jobs.slice(0, ITEMS_PER_PAGE)); // Display the first page of jobs
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Handle loading more items
  const handleLoadMore = () => {
    const nextPage = page + 1;
    const start = page * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setDisplayedJobs(jobs.slice(0, end)); // Load more jobs
    setPage(nextPage); // Update page number
  };

  useEffect(() => {
    fetchData(category); // Fetch data on component mount or when category changes
  }, [category]);

  if (loading && jobs.length === 0) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={{ color: 'red' }}>{error.message}</Text>;

  const handleCardPress = (job) => {
    navigation.navigate('JobDetail', { job });
  };

  return (
    <>
        <Collapsible title={'Filter'}>
      
          <RNPickerSelect 
            onValueChange={(value) => {
              setCategory(value);
              setPage(1); // Reset page when filter changes
            }}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: ">>  Select job category", value: undefined }}
            items={[
              { label: 'Software Development', value: 'software-dev' },
              { label: 'Customer Service', value: 'customer-support' },
              { label: 'Design', value: 'design' },
              { label: 'Marketing', value: 'marketing' },
              { label: 'Sales & Business', value: 'sales-business' },
              { label: 'Project Management', value: 'project-management' },
              { label: 'Data Analysis', value: 'data' },
              { label: 'DevOps & Sysadmin', value: 'devops' },
              { label: 'Finance & Legal', value: 'finance-legal' },
              { label: 'Human Resources', value: 'hr' },
              { label: 'QA', value: 'qa' },
              { label: 'Writing', value: 'writing' },
              { label: 'Others', value: 'all-others' },
            ]}
          />
        </Collapsible>

      <FlatList
        data={displayedJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <CardJobDetails job={item} />
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl
              refreshing={loading}
              onRefresh={fetchData}
          />
      }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
      />
    </>
  );
};



export default HomeScreen;