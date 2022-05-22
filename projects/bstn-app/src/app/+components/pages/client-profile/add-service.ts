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
    payerAgency?:string
    payerAgencyAddress?:string
   
}