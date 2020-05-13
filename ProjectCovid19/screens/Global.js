import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Global extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      refreshing: false
    }
  }
  
  onRefresh= () =>{
    this.getDataApi();
  }

  componentDidMount = () =>{
    this.getDataApi();
  }

  getDataApi = async () => {
    const response = await fetch('https://covid19.mathdro.id/api')
    const data = await response.json()
    const { confirmed , recovered , deaths, lastUpdate} = await data
    this.setState({
        data: {
            confirmed: await confirmed,
            recovered: await recovered,
            death: await deaths,
            lastUpdate: await lastUpdate,
        }
    })
}

  render(){
    if (!this.state.data.confirmed) {
      return <Text>Loading..</Text>
    }
    if (!this.state.data.recovered){
      return <Text>Loading..</Text>
    }
    if (!this.state.data.death){
      return <Text>Loading..</Text>
    }
    if (!this.state.data.lastUpdate){
      return <Text>Loading..</Text>
    }
     return (
      <View style={styles.container}>
        <View>
          <Text style={styles.Global}>GLOBAL</Text>
        </View>
        <View style={{marginTop:90}}></View>
        <TouchableOpacity>
        <View style={{backgroundColor: 'yellow',marginLeft:50,marginRight:50,borderWidth:1,borderRadius:10}}>
          <Text style={styles.confirmed}>Confirmed</Text>
          <Text style={styles.confirmedValue}>{this.state.data.confirmed.value}</Text>
        </View>
        </TouchableOpacity>
        <View style={{marginTop:90,marginBottom:30}}></View>
        <TouchableOpacity>
        <View style={{backgroundColor: 'blue',marginLeft:50,marginRight:50,borderWidth:1,borderRadius:10}}>
          <Text style={styles.recovered}>Recovered</Text>
          <Text style={styles.recoveredValue}>{this.state.data.recovered.value}</Text>
        </View>
        </TouchableOpacity>
        <View style={{marginTop:90,marginBottom:30}}></View>
        <TouchableOpacity>
        <View style={{backgroundColor: 'orange',marginLeft:50,marginRight:50,borderWidth:1,borderRadius:10}}>
          <Text style={styles.death}>Deaths</Text>
          <Text style={styles.deathValue}>{this.state.data.death.value}</Text>
        </View>
        </TouchableOpacity>
        <Text style={{marginTop:83,fontSize:9}}>Last Update: {this.state.data.lastUpdate}</Text>
      </View>
    );
  }
}
export default Global;




const styles = StyleSheet.create({
  deathValue:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:10,
    marginBottom:10
  },

  recoveredValue:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:10,
    marginBottom:10
  },

  confirmedValue:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:10,
    marginBottom:10
  },

  Global:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:28,
    marginTop:50,
    fontFamily:'sans-serif-light'
  },

  confirmed:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:5,
    marginBottom:5
  },

  recovered:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:5,
    marginBottom:5
  },

  death:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:5,
    marginBottom:5
  },

  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },

  name:{
    fontSize:20,
    fontWeight: 'bold',
    color: "#20aa05",
    alignSelf: 'center',
    margin:25
},
})
