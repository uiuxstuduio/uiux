import React from 'react';
import { getSreachResult } from '../../../../services/pages.service';

const LoginBanner = () => {

  const handleSerach = async (event)=>{
    event.preventDefault();

    const searchValue = event.target.search.value;
  
    const serachResult = await getSreachResult(searchValue);
    console.log('serachResult',serachResult)
      // setData(data.data);
      // setOpen(false);
  
  }

  return (
    <section className="buildSites_wrapper banner_Wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Build an ultimate website with UIUX Studio</h1>
            <form onSubmit={handleSerach}>
              <input
                type="text"
                placeholder="Find Your Dream Website..."
                id="search"
                className="check"
              />
              <button className="btn_wrapper" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginBanner;
