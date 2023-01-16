import { LightningElement, api,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

const NAME = 'Pokemon__c.Name';
const LATITUDE = 'Pokemon__c.Location__Latitude__s';
const LONGITUDE = 'Pokemon__c.Location__Longitude__s';

const pokemonField = [NAME,LATITUDE,LONGITUDE];



export default class PokemonLocation extends LightningElement
{
    @api recordId;     //recordId of particular page
    mapMarkers=[];     //
    name;
    cardTitle;    //passing the name in cardTitle

    @wire(getRecord,{recordId:'$recordId', fields:pokemonField})
    getPokemons({error, data}){
        if(data)
        {
            //alert('Button Called');
            this.name = getFieldValue(data,NAME);
            this.cardTitle = this.name;

            const Latitude = getFieldValue(data,LATITUDE);
            const Longitude = getFieldValue(data,LONGITUDE);

            this.mapMarkers =[{
                    location : {Latitude,Longitude},
                    title : this.name,
                    description: `Coords : ${Latitude}, ${Longitude}`
            }]
            console.log("this.mapMarkers: "+JSON.stringify(this.mapMarkers));
        }
        else if(error)
        {
            console.error('err:'+JSON.stringify(error));
        }
    }
}