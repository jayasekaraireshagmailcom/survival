export const fetchData = async () => {
  const response = await fetch('/api')
  await response.json()
  return '1'
};