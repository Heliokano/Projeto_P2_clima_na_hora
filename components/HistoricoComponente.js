import { StyleSheet, Text, View } from 'react-native'
import { TabView } from '@rneui/themed';
import React from 'react'

const HistoricoComponente = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  return (
     
    <TabView value={index} onChange={setIndex} animationType="spring">     
      <TabView.Item style={{ backgroundColor: 'beige', width: '100%', padding: 25 }}>
        {/* <Text h1>Historico</Text> */}
      </TabView.Item>      
    </TabView>
 
  )
}

export default HistoricoComponente

const styles = StyleSheet.create({})