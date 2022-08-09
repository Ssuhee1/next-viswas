import React, { useEffect, useState } from 'react';
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>Dashboard</h2>
      <h3>Posts - {dashboardData.posts}</h3>
      <h3>Likes - {dashboardData.likes}</h3>
      <h3>Followers - {dashboardData.followers}</h3>
      <h3>Following- {dashboardData.following}</h3>
    </>
  );
};

export default Dashboard;
