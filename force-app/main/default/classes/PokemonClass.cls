public with sharing class PokemonClass
{

    @AuraEnabled(cacheable=true)
    public static List<Pokemon__c> getPokemons(String searchKey)
    {
        try {
                if(searchKey !='' && searchKey!= null)
                {
                    String sk = '%' + searchKey + '%';
                    List<Pokemon__c> pokemonSearchList = [Select Id,Name,Height__c,Weight__c,Images__c,Trainer__r.FirstName From Pokemon__c where Name like :sk];
                    return pokemonSearchList;
                }
                else
                {
                    List<Pokemon__c> pokemonList = [Select Id,Name,Height__c,Weight__c,Images__c,Trainer__r.FirstName From Pokemon__c];
                    if(!pokemonList.isEmpty())
                    {
                        return pokemonList;
                    }
                        return Null;
                }

            } catch (Exception e)
            {
                throw new AuraHandledException(e.getMessage());
            }
    }
}