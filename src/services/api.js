import axios from 'axios'

const API_URL = 'http://localhost:3001/api/portfolios'

const fetchAboutData = async () => {
  const response = await axios.get(`${API_URL}/about`)
  return response.data
}

const fetchNavData = async () => {
  const response = await axios.get(`${API_URL}/nav`)
  return response.data
}

const fetchServiceData = async () => {
  const response = await axios.get(`${API_URL}/service`)
  return response.data
}

const fetchFooterData = async () => {
  const response = await axios.get(`${API_URL}/footer`)
  return response.data
}

const fetchFormData = async () => {
  const response = await axios.get(`${API_URL}/form`)
  return response.data
}

const fetchHireData = async () => {
  const response = await axios.get(`${API_URL}/hire`)
  return response.data
}

const fetchPresentationData = async () => {
  const response = await axios.get(`${API_URL}/presentation`)
  return response.data
}

const fetchExperienceData = async () => {
  const response = await axios.get(`${API_URL}/experience`)
  return response.data
}

const fetchWorksData = async () => {
  const response = await axios.get(`${API_URL}/experience/works`)
  return response.data
}
const fetchFormationData = async () => {
  const response = await axios.get(`${API_URL}/formation`)
  return response.data
}
export {
  fetchAboutData,
  fetchNavData,
  fetchServiceData,
  fetchFooterData,
  fetchFormData,
  fetchHireData,
  fetchPresentationData,
  fetchExperienceData,
  fetchWorksData,
  fetchFormationData,
}

// //import axios from 'axios'

// const API_URL = 'localhost:3001/api/portfolios'

// export const fetchAboutData = async () => {
//   try {
//     debugger
//     const response = await fetch('localhost:3001/api/portfolios/about')
//     return response.data
//   } catch (error) {
//     console.error('Failed to fetch about data:', error)
//     throw error
//   }
// }

// export default fetchAboutData
