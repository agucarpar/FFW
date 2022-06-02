import __axios from "../plugins/index";

export async function getMyFonts() {
  console.log('PACOOO', process.env.REACT_APP_BASE_URL)
  const response = await __axios.get(`${process.env.REACT_APP_BASE_URL}/fonts_a`)
  if (
      response &&
      response.status &&
      response.status === 200
      ) return response
  else return []
}