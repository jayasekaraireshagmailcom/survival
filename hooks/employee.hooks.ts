export const fetchData = async () => {
  const response = await fetch('/api')
  return await response.json()
};