import SearchBar from './Search-Bar';
import Filter from './Filter';
import { fuels, yearsOfProduction } from '@/constants';

const Catalogue = ({ searchParams }: any) => {
  

  return (
    <section className='padding-x padding-y'>
      <div className='home__text-container'>
        <h2 className='text-4xl font-extrabold'>Car Catalogue</h2>
        <p>Explore the cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <Filter title="Fuel" options={fuels}/>
          <Filter title="Year" options={yearsOfProduction}/>
        </div>
      </div>

    
    </section>
  );
};

export default Catalogue;