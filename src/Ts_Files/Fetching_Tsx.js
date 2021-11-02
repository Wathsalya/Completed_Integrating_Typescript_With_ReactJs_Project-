import  Page2 from './Page2';
import { QueryClient, QueryClientProvider } from 'react-query';


const client = new QueryClient();

export default function Fetching_Tsx(){
  return(
    <div>
   <QueryClientProvider client={client}>
    <Page2/>
    
  </QueryClientProvider>
  </div>
  
);
}
