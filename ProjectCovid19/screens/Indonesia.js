import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';


class Indonesia extends Component{
  constructor(){
    super();
    this.state={
        DataIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
    
      <View style={styles.box1}><Text style={{marginBottom:10,fontSize:13}}>{item.provinsi}</Text></View>
      <View style={styles.box2}><Text style={styles.box1text}>{item.kasusPosi}</Text></View>
      <View style={styles.box3}><Text style={styles.box1text}>{item.kasusSemb}</Text></View>
      <View style={styles.box4}><Text style={styles.box1text}>{item.kasusMeni}</Text></View>

    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataGlobal();
}

componentDidMount = () =>{
    this.getDataGlobal();
}

getDataGlobal = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const DataIndo = await response.json()
  const { data } = await DataIndo
  this.setState({
      DataIndo: {
          Data: await data,
      }
  })
}

render(){
    if (!this.state.DataIndo) {
        return <Text>Loading...</Text>
    }
    return (
        <View>
          <Text style={styles.textIndonesia}>Indonesia</Text>
          <View style={styles.indoContainer}>
              <Text styles={styles.textIndonesia}>  Positif </Text>
              <View style={styles.box2}></View>
              <Text styles={styles.textIndonesia}> Sembuh </Text>
              <View style={styles.box3}></View>
              <Text styles={styles.textIndonesia}> Meninggal </Text>
              <View style={styles.box4}></View>
          </View>
          <View>
            <FlatList 
                data={this.state.DataIndo.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default Indonesia;

const styles = StyleSheet.create({
  returnContainer: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    borderWidth:1,
    backgroundColor: '#fedada',
  },
  container: {
    flex: 4,
    flexDirection:'row',
    borderRadius:8,
    padding:20,
    borderWidth:1,
    backgroundColor: '#fedada',
  },
  indoContainer:{
    flexDirection:'row',
    borderBottomWidth:1,
    padding:10
  },
  textIndonesia:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:28,
    marginTop:30,
    fontFamily:'sans-serif-light'
  },

  box1:{
    width:160,
    padding:3,
    height:20
  },

  box1text:{
    alignSelf: 'center',
  },

  box2:{
    width:50,
    marginLeft:10,
    borderRadius:10,
    height:20,
    backgroundColor:'yellow'
  },
  box3:{
    width:50,
    marginLeft:10,
    borderRadius:10,
    height:20,
    backgroundColor:'blue'
  },
  box4:{
    marginLeft:10,
    borderRadius:10,
    width:50,
    height:20,
    backgroundColor:'orange'
  },

  name:{
    fontSize:20,
    fontWeight: 'bold',
    color: "#20aa05",
    alignSelf: 'center',
    margin:25
},
})

 