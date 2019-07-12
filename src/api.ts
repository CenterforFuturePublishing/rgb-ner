import axios from "axios"
import "./style/main.scss"

export interface IApi {

  [key: string]: {

    jpgLink:  string
    metadata: {
      [parameterName: string]: string[] | number
    }

  }

}

export async function getJpegData() {

    const response = await axios.get('http://localhost:3000/info')
    return response.data as IApi

}
