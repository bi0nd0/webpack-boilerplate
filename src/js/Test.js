import axios from 'axios'
class Test {
  constructor() { }

  async getTodos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    const { data } = response
    console.log(data)
    return data
  }

  async getPreview() {
    const response = await axios.get("/api/?redcap_csrf_token=6b37a016be0d8e8cc5dba824de3c2e22&route=CdpController%3AgetPreviewData&pid=50&record_identifier=202946", {
      headers: {
        "accept": "application/json",
        "accept-language": "en-US,en;q=0.9,it-IT;q=0.8,it;q=0.7",
        "x-requested-with": "XMLHttpRequest"
      }
    })
    const { data } = await response
    console.log(data)
    return data
  }

  *generator(i) {
    yield i;
    yield i + 10;
  }
}

export default Test