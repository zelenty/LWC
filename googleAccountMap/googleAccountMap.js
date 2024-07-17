import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/GoogleAccountMapController.getAccounts';

export default class AccountMap extends LightningElement {
    mapMarkers = [];
    mapCenter = {
        location: {
            
            Latitude: 38.5435,  // Latitude for USA
            Longitude: -101.9698 // Longitude for USA
        }
    };
    zoomLevel = 4;  // Zoom level to cover the USA

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.mapMarkers = data.map(account => {
                return {
                    location: {
                        Street: account.BillingStreet,
                        City: account.BillingCity,
                        State: account.BillingState,
                        PostalCode: account.BillingPostalCode,
                        Country: account.BillingCountry
                    },
                    title: account.Name,
                    description: `Billing Address: ${account.BillingStreet}, ${account.BillingCity}, ${account.BillingState}, ${account.BillingPostalCode}, ${account.BillingCountry}`
                };
            });
        } else if (error) {
            // Handle error
            console.error(error);
        }
    }
}