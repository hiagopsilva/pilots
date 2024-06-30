declare namespace PilotsTypes {
  type Driver = {
    driverId: string
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
    permanentNumber?: string
    code?: string
  }

  type DriverTable = {
    Drivers: Driver[]
  }

  type MRData = {
    DriverTable: DriverTable
  }

  type Root = {
    MRData: MRData
  }
}
