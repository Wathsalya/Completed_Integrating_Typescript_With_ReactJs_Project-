import { Wrapper } from './Page2.styles';
import { Title } from './Page2.styles';
import { Button } from './Page2.styles';
import myimage1 from "./React.gif";
import myimage2 from "./Reactts.png";
import {useHistory} from 'react-router-dom';


 function RedirectButton(){
    const history = useHistory();
  
  function handleClick(){
    history.push("./page3");
  }
  return(
    <Button type="button" onClick={handleClick}>Go to Next Page</Button>   
  )}
  

function Page2(){

  return (
    <Wrapper>
      <Title>
      <h1>React + Javascript + TypeScript</h1>
      <div>
      <img alt="media-icon-link" src={myimage1} />
      <h2>React with TypeScript is an awesome tool used by frontend developers.The functionality of TypeScript makes it easier to read and debug than JavaScript code and provides great enhancements to web applications.Using them together, we can essentially build our UI more effectively.</h2>
      <img alt="media-icon-link" src={myimage2} />
      <div>
      <RedirectButton/>
      </div>
      </div> 
      </Title>
    </Wrapper>
  );
};

export default Page2;
