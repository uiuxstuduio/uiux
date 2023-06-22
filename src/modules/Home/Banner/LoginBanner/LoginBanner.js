import React from 'react';

const LoginBanner = () => {
  return (
    <section className="buildSites_wrapper banner_Wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Build an ultimate website with UIUX Studio</h1>
            <form method="post" id="website_Find">
              <input
                type="text"
                placeholder="Find Your Dream Website..."
                id="search"
                className="check"
              />
              <button className="btn_wrapper" id="website_Find_Btn" type="submit">
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
