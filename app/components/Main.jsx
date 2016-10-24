var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div >
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
          <h1 className="text-center">This is the Main page.</h1>


        </div>
      </div>

    </div>
  );
};

module.exports = Main;