import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ea76e270d9694acba60623300823de22"
  }
})