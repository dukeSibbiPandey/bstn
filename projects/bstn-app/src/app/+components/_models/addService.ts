export interface AddService {      
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
    payerAgency?:string
   
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
    payerAgency?:string
   
}


export interface AddClientContact {      
    firstName?: string
    lastName?: string   
    relationship?: string 
    address?: string 
    addressLine2?: string 
    state?: string
    city?: string
    zip?: string
    speciality?: string
    agency?: string
    hourPhoneNo?: string
    homePhone?: string
    cellPhone?: string
    email?: string
    contactType?: string
    contactForEmergency?: boolean  

   
}