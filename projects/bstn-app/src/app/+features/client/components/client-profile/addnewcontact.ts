export interface AddNewContact {  
    contactId?:number    
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
    homePhone?:string 
    email?: string  
    contactType?: string  
    contactForEmergency?: boolean  
    agency ? : string;
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
    ContactHomePhone?:string 
    ContactEmail?: string  
    ContactContactType?: string  
    ContactContactForEmergency?: boolean  
    ContactAgency ? : string;
}