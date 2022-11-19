import '@fortawesome/fontawesome-free/css/all.min.css';

import { Tab } from '@rneui/themed';

import HistoricoTab from './abas/HistoricoTab' // perguntar o porquê de 0 . funcionar e o .. não sendo que estão no mesmo nível
import PesquisaTab from './abas/PesquisaTab' 
import React from 'react';
export default () => {
const [index, setIndex] = React.useState(0);

return (
  // por que o  tem o <> </> vazio
  <> 
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Pesquisa"
        titleStyle={{ fontSize: 12 }}
        //icon={{ name: 'search-outline', type: 'ionicon', color: 'white' }}
        icon={'fa-solid fa-magnifying-glass'}
        
      />
      <Tab.Item
        title="Historico"
        titleStyle={{ fontSize: 12 }}
        //icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />
    </Tab>
   <PesquisaTab/>
   <HistoricoTab/>
  </>
);
};


