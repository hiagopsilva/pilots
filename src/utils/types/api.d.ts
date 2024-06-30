import {PilotsTypes} from './pilots'

export namespace ApiType {
  export type GetPilotsResponse = {
    response: Response
    data: PilotsTypes.Root
  }
}
