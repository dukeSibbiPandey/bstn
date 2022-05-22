export interface Country {
    name?: string;
    code?: string;
  }
  
  export interface Representative {
    name?: string;
    image?: string;
  }
  
  export interface Customer {
    id?: number;
    firstName?: string;
    lastName?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: boolean;
  }
  

  export interface ClientFilter {      
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