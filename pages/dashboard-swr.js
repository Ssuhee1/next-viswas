import useSWR from 'swr';
const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = response.json();
  return data;
};
const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher);
  if (error) return 'An error has occured';
  if (!data) return 'Loading';
  return (
    <div>
      <h2>Dashboard SWR</h2>
      <h3>Posts - {data.posts}</h3>
      <h3>Likes - {data.likes}</h3>
      <h3>Followers - {data.followers}</h3>
      <h3>Following- {data.following}</h3>
    </div>
  );
};
export default DashboardSWR;
