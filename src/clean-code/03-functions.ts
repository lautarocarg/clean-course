(() => {

    
    // función para obtener información de una película por Id
    function getMovieInformationById( movieId: string ) {
        console.log({ movieId });
    }
    
    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsById( moiveId: string ) {
        console.log({ moiveId });
    }
    
    // funcion para obtener el bio del actor por el id
    function getActorBiographyById( id: string ) {
        console.log({ id });
    }
    
    interface Movie{
        cast:        string[];
        description: string; 
        rating:      number;
        title:       string;
    }

    // Crear una película
    function createMovie( {title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead ) return 1500;
               
        if ( isSeparated ) return 2500;
                
        return ( isRetired )? 3000: 4000;
    }

    


})();