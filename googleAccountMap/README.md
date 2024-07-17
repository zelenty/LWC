# AccountMap LWC Component

This repository contains the `AccountMap` Lightning Web Component (LWC) for Salesforce. The component displays a map with markers pointing to account locations based on billing addresses.

## Component Files

- `GoogleAccountMap.js`: JavaScript controller for the component.
- `GoogleAccountMap.html`: HTML template for the component.
- `GoogleAccountMap.css` (optional): CSS file for custom styling.

## Usage

1. **Apex Controller:**

   Ensure you have the following Apex controller to fetch account data:

   ```apex
   public with sharing class GoogleAccountMapController {
       @AuraEnabled(cacheable=true)
       public static List<Account> getAccounts() {
           return [SELECT Id, Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry FROM Account];
       }
   }
