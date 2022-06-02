import __axios from "../plugins/index";

export async function getBuyFonts() {
  const response = await __axios.get(`${process.env.REACT_APP_BASE_URL}/fonts_b`)
  if (
      response &&
      response.status &&
      response.status === 200
      ) {
        return response
      }
  else return []
}