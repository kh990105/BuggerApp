import React from 'react'
import { ScrollView ,StyleSheet} from 'react-native'
import MainPage from './component/MainPage'

const App = () => {
  return (
    <ScrollView style={st.container}>
      <MainPage/>
    </ScrollView>
  )
}
const st=StyleSheet.create({
  container: {
    marginTop:15
  }
})
export default App