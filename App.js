import '@fortawesome/fontawesome-free/css/all.min.css';

import { TabActions } from '@react-navigation/native';

import { Input, Tab, Text, TextInput, TabView } from '@rneui/themed';

import React from 'react';
export default () => {
const [index, setIndex] = React.useState(0);

return (
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
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Historico"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'beige', width: '100%' , padding: 25}}>
        <TabView style={{ flex: 1, justifyContent: 'top', alignItems: 'center', padding: 12 }}>
          <Input
            style={{borderBottonColor: '#CCC', borderWidth: 1, padding: 12, 
            width: '95%' }}
            placeholder="Digite a cidade!"/>
        </TabView>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'beige', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
    </TabView>
  </>
);
};