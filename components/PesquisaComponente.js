import { StyleSheet} from 'react-native'
import { Input, Tab, Text, TabView } from '@rneui/themed';
import React from 'react'


const PesquisaComponente = ({navigation}) => {

  const [index, setIndex] = React.useState(0);
  return (
   
    <TabView value={index} onChange={setIndex} animationType="spring">     
     
      <TabView.Item style={{ width: '100%', padding: 25}}>
        
        <TabView style={{ flex: 1, justifyContent: 'top', alignItems: 'center', padding: 12 }}>
        <Input style={{ borderWidth: 1, padding: 12, 
            width: '95%', borderRadius: 8 }}
            placeholder="Digite a cidade!"
        /> 
        </TabView>

      </TabView.Item>
    </TabView>

  )
}
export default PesquisaComponente

const styles = StyleSheet.create({})
