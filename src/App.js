
import { Nav } from './components/navbar';
import {Hero} from'./components/hero'
import {About} from'./components/about'
import {Unicef} from './components/unicef'
import {Honda} from './components/honda'
import {Dpworld} from './components/dpworld'
import {Rexona} from './components/rexona' 
import {Careers} from './components/careers'
import {Footer} from './components/footer.js'

function App() {

  return (
<div className="App">
<Nav/>
<Hero/>
 <About/>
<Unicef/>
 <Honda/>
<Dpworld/>
 <Rexona/>
<Careers/>
<Footer/>
</div>
  );
}

export default App;

