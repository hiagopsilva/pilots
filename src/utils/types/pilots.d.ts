export namespace PilotsTypes {
  export type Driver = {
    driverId: string
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
    permanentNumber?: string
    code?: string
  }

  export type DriverTable = {
    Drivers: Driver[]
  }

  export type MRData = {
    DriverTable: DriverTable
  }

  export type Root = {
    MRData: MRData
  }
}
