import {ApiType} from '../utils/types/api'

class ServiceAPI {
  getPilots = async (): Promise<ApiType.GetPilotsResponse> => {
    const response = await fetch('https://ergast.com/api/f1/drivers.json')

    return {
      response,
      data: await response.json(),
    }
  }
}

export default new ServiceAPI()
