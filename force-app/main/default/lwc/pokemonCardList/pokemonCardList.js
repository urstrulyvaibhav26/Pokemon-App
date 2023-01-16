import { LightningElement } from 'lwc';
import getPokemons from '@salesforce/apex/PokemonClass.getPokemons';

export default class PokemonCardList extends LightningElement
{
    pokemons;
    error;
    searchWords='';
    isSearchNotAvailable = false;


    connectedCallback(){
        this.loadPokemons(this.searchWords);
    }

    handleSearch(event){
        this.searchWords = event.target.value;

        this.loadPokemons(this.searchWords)
    }
    loadPokemons(searchWords){
        //alert('hii');
        getPokemons({searchKey: searchWords})
        .then(response=>{
            this.pokemons = response;

            if(this.pokemons.length>0)
            {
                //alert('hi');
                this.isSearchNotAvailable = false;
            }
            else{
                this.isSearchNotAvailable = true;
            }
        }).catch(error=>{
            this.error = error;
        });
    }
}