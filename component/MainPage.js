import React,{useState}from 'react'
import { Text, View, Image,TouchableHighlight, StyleSheet,Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const MainPage= () => {
   const [mode, setmode]= useState(false)
   const change= ()=>setmode(!mode)


  return (
    <View style={mode?dark.container:light.container}>
        <Text style={mode?dark.h1:light.h1}>WELCOME B-BUGGER!</Text>
        <View style={light.mt20}>
            <Text style={mode?dark.h3:light.h3}>최고의 인기메뉴</Text>
        </View>
        
        <View style={mode?dark.boxA:light.boxA}>
            <View style={light.flxwrap}>
                <View style={light.smallImgbox}>
                   <Image source={require('../img/002.png')} style={light.smallImg} />
                </View>
                <View style={light.burgerText}>
                    <Text style={light.burgerTextBt}>Burger</Text>
                    <Text style={light.burgerTextSt}>Junk Food</Text> 
                </View>   
                <View style={light.heartBox}>
                     <Icon name="home" size={20} color="#ffffff" />
                </View>


                <View style={light.bigBurgurBox}>
                    <View style={light.bigBurgurTextBox}>
                        <Text style={light.bigBurgurText}>Pimento Burger & Cheddar Cheese</Text>
                        <TouchableHighlight>
                            <View style={light.buttonStyle}>
                                <Text style={light.buttonSmall}>Price</Text>
                                <Text style={light.buttonBig}>5,000원</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={light.bigBurgurBox2}>
                         <Image source={require('../img/001.png')} style={light.bigBurgur}/>
                    </View>
                </View>
            </View>
        </View>

        {/* 금주의 메뉴 */}
        <View style={light.detailContainer}>
            <Text style={mode?dark.h1:light.h1}>금주의 메뉴</Text>
            <View style={light.flexRow}>
                <View style={light.orangeBox}>
                    <Text style={[light.h1, light.white]}>
                        French fries
                    </Text>
                    <Text style={[light.h3, light.white]}>
                        금주의 메뉴는 엄청나게 맛있는 프렌치프라이드 입니다.
                    </Text>
                    <View style={light.frideBox}>
                        <View style={light.frideBoxO}>
                            <Image source={require('../img/003.png')} style={light.french} />
                        </View>
                    </View>
                </View>
                <View style={light.columnBox}>
                    <View style={light.gryBox}>
       
                    </View>
                    <View style={light.gryBox}>
                    </View>
                </View>
            </View>
        </View>
        <View style={{marginTop:20,marginBottom:20, alignItems:'center'}}>

            <Pressable style={mode?dark.button:light.button} onPress={change}>
               <Icon name={mode?'sun':'moon'} size={12} color={mode?'black':'white'}></Icon>
               <Text style={ mode?dark.buttontext:light.buttontext}>다크모드</Text>
            </Pressable>
         </View>
    </View>
  )
}
const dark = StyleSheet.create({
   container: {
      backgroundColor:'black',
      paddingTop: 45,
      paddingLeft: 20,
      paddingRight:20
   },
   h1: {
      fontSize:20,
      color:'#ffffff',
      fontWeight:'bold'
   },
   h3: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'#ffffff'
   },
   white: {
      color:'#000000'
   },
   mt20: {
      marginTop: 20
   },
   boxA: {
      backgroundColor: '#144C59',
      borderRadius: 10,
      padding:20,
      marginTop:10    
   },
   flxwrap: {
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row'
   },
   smallImgbox: {
      borderRadius: 9,
      backgroundColor:'#2c5d8b',
      justifyContent:'center',
      alignItems:'center',
      padding:5,
   },
   smallImg: {
      width: 25,
      height: 25
   },
   burgerText: {
      flexDirection: 'column',
      width:'70%'
   },
   burgerTextBt: {
      color:'#ffffff',
      fontSize: 13,
      fontWeight:'bold'
   },
   burgerTextSt: {
      color:'#ffffff',
      fontSize: 12
   },
   heartBox:{
      width:31,
      height:31,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 9,
      backgroundColor:'#2c5d8b'
   },
   bigBurgurBox: {
      marginTop:30,
      flexDirection: 'row'
   },
   bigBurgurTextBox: {
      flex: 2
   },
   bigBurgurText: {
      fontSize: 16,
      fontWeight: 'bold',
      color:'#ffffff'
   },
   bigBurgurBox2: {
     flex: 1,
     alignItems:'center'
   },
   bigBurgur: {
      width: 130,
      height: 130
   },
   buttonStyle: {
      borderRadius:15,
      backgroundColor:'#ffffff',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      paddingLeft:15,
      paddingRight:15,
      paddingTop: 10,
      paddingBottom: 10,
      width:'85%',
      marginTop:20
   },
   buttonSmall: {
      fontSize:12
   },
   buttonBig: {
      fontSize: 16,
      fontWeight: '600'
   },
   detailContainer:{
      marginTop:50
   },
   flexRow: {
      flexDirection:'row',
      justifyContent: 'space-between'
   },
   orangeBox: {
      flex:1,
      width: '95%',
      backgroundColor:'#F08040',
      borderRadius: 15,
      paddingTop: 18,
      paddingLeft: 15,
      paddingRight: 15
   },
   columnBox: {
      flex: 1,
      width: '95%'
   },
   frideBox: {
      justifyContent:'center',
      alignItems: 'flex-end',
      marginTop: 20
   },
   frideBoxO: {
      width:150,
      height:150,
      borderRadius:75,
      backgroundColor:'#dc570b'
   },
   french: {
      width:150,
      height:150
   },
   button:{
      flex:1,
      width:100,
      height:30,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius:15,
      flexDirection:'row'
   },
   buttontext:{
      color:'black',
   }
})

const light = StyleSheet.create({
     container: {
        paddingTop: 45,
        paddingLeft: 20,
        paddingRight:20
     },
     h1: {
        fontSize:20,
        color:'#000000',
        fontWeight:'bold'
     },
     h3: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000000'
     },
     white: {
        color:'#ffffff'
     },
     mt20: {
        marginTop: 20
     },
     boxA: {
        backgroundColor: '#144C59',
        borderRadius: 10,
        padding:20,
        marginTop:10    
     },
     flxwrap: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row'
     },
     smallImgbox: {
        borderRadius: 9,
        backgroundColor:'#2c5d8b',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
     },
     smallImg: {
        width: 25,
        height: 25
     },
     burgerText: {
        flexDirection: 'column',
        width:'70%'
     },
     burgerTextBt: {
        color:'#ffffff',
        fontSize: 13,
        fontWeight:'bold'
     },
     burgerTextSt: {
        color:'#ffffff',
        fontSize: 12
     },
     heartBox:{
        width:31,
        height:31,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 9,
        backgroundColor:'#2c5d8b'
     },
     bigBurgurBox: {
        marginTop:30,
        flexDirection: 'row'
     },
     bigBurgurTextBox: {
        flex: 2
     },
     bigBurgurText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#ffffff'
     },
     bigBurgurBox2: {
       flex: 1,
       alignItems:'center'
     },
     bigBurgur: {
        width: 130,
        height: 130
     },
     buttonStyle: {
        borderRadius:15,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingLeft:15,
        paddingRight:15,
        paddingTop: 10,
        paddingBottom: 10,
        width:'85%',
        marginTop:20
     },
     buttonSmall: {
        fontSize:12
     },
     buttonBig: {
        fontSize: 16,
        fontWeight: '600'
     },
     detailContainer:{
        marginTop:50
     },
     flexRow: {
        flexDirection:'row',
        justifyContent: 'space-between'
     },
     orangeBox: {
        flex:1,
        width: '95%',
        backgroundColor:'#F08040',
        borderRadius: 15,
        paddingTop: 18,
        paddingLeft: 15,
        paddingRight: 15
     },
     columnBox: {
        flex: 1,
        width: '95%'
     },
     frideBox: {
        justifyContent:'center',
        alignItems: 'flex-end',
        marginTop: 20
     },
     frideBoxO: {
        width:150,
        height:150,
        borderRadius:75,
        backgroundColor:'#dc570b'
     },
     french: {
        width:150,
        height:150
     },
     button:{
      flex:1,
      width:100,
      height:30,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius:15,
      flexDirection:'row'
   },
   buttontext:{
      color:'white',
   }
});

export default MainPage