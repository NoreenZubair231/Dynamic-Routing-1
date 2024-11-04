
export default function CountryName({params}:{params:{country_name:string}}) {

const countries:{
  name:string,
  capital:string,
  population:number
}[] = [{ //array of object

      name:"Pakistan",
      capital:"Islamabad",
      population:252536368
    } ,
    {
      name:"India",
      capital:"Dalhi",
      population:1455097350
    } , 
    {
      name:"Japan",
      capital:"Tokyo",
      population:123452377
    } , 
    {
      name:"Saudiya",
      capital:"Riyadh",
      population:34156175
    },
    {
      name:"Turkey",
      capital:"Ankara",
      population:85372377
  }
]; 

    function findCountry(name:string):{name:string,capital:string,population:number } |undefined{
      return countries.find((country) => name.toLowerCase() == country.name.toLowerCase());
    }

    const result = findCountry(params.country_name);

    return (
      <div>
        {
          result ? (
            <>
              <h1>Country Name: {result.name}</h1>
              <h1>Country Capital: {result.capital}</h1>
              <h1>Country Population: {result.population}</h1>
            </>
          ):(
            <h1>Country Not Found</h1>
        )
      }
    </div>
    
  );
}