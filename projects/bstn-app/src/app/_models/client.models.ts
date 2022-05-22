export interface ClientFilters {
    firstName?: string
    lastName?: string
    age?: number
    clientType?: string
    serviceType?: string
    residentialProvider?: string
    city?: string
    state?: string
    zip?: number
    assignedPhoneNumber?: string
    clientsPhoneNumber?: string
    Email?: string

}
export interface AddNewContact {
    contactId?: number
    firstName?: string
    lastName?: string
    relationship?: string
    address?: string
    addressLine2?: string
    city?: string
    state?: string
    zip?: number
    specialty?: string
    hourPhoneNo?: string
    cellPhone?: string
    homePhone?: string
    email?: string
    contactType?: string
    contactForEmergency?: boolean
    agency?: string;
}


export interface AddNewContactNew {

    ContactFirstName?: string
    ContactLastName?: string
    ContactRelationship?: string
    Contactaddress?: string
    ContactAddressLine2?: string
    ContactCity?: string
    ContactState?: string
    ContactZip?: number
    ContactSpeciality?: string
    ContactHourPhoneNo?: string
    ContactCellPhone?: string
    ContactHomePhone?: string
    ContactEmail?: string
    ContactContactType?: string
    ContactContactForEmergency?: boolean
    ContactAgency?: string;
}

export interface AddBehavior {
    billingType?: string
    serviceType?: string
    serviceRequestedDay?: string
    serviceRequestedMonth?: string
    serviceRequestedYear?: string
    serviceApproveDay?: string
    serviceApproveMonth?: string
    serviceApproveYear?: string
    serviceExpirationDay?: string
    serviceExpirationMonth?: string
    serviceExpirationYear?: string
    unitType?: string
    unitNumber?: string
    clientRatePerUnit?: string
    unitApproved?: string
    fundCode?: string
    payerAgency?: string
    payerAgencyAddress?: string

}

export interface AddServiceData {
    billingType?: string
    serviceType?: string
    serviceRequestedDay?: string
    serviceRequestedMonth?: string
    serviceRequestedYear?: string
    serviceApproveDay?: string
    serviceApproveMonth?: string
    serviceApproveYear?: string
    serviceExpirationDay?: string
    serviceExpirationMonth?: string
    serviceExpirationYear?: string
    unitType?: string
    unitNumber?: string
    clientRatePerUnit?: string
    unitApproved?: string
    fundCode?: string
    payerAgency?: string
    payerAgencyAddress?: string

}