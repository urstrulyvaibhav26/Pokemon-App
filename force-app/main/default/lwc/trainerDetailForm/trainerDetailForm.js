import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Trainer_Field from '@salesforce/schema/Pokemon__c.Trainer__c';

const pokemonFields = [Trainer_Field];

export default class TrainerDetailForm extends LightningElement
{
    @api recordId;

    @wire(getRecord, {recordId: '$recordId', fields:pokemonFields})
    pokemons;

    get trainerId(){
        return getFieldValue(this.pokemons.data,Trainer_Field);
    }
}