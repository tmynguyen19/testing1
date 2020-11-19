
      import React from 'react';
      import { render } from 'react-dom';
      import 'carbon-components/css/carbon-components.min.css';
      import { Search } from 'carbon-components-react';
    
      const App = () => (
        
<Search
  id="search-1"
  placeHolderText="Search"
/>
  
      );

      render(<App />, document.getElementById('root'));
    