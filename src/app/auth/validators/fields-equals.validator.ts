import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const fieldsEquals = ( firstField:string, secondField:string ):ValidatorFn => {
    return ( group:AbstractControl ):ValidationErrors|null => {
        const fieldOne = group.get( firstField )?.value;
        const fieldTwo = group.get( secondField )?.value;

        if ( fieldOne !== fieldTwo ) {
            return {
                fieldsEquals: true,
            }
        }
        
        return null;
    }
}