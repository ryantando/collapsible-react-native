import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';

const SECTIONS = [
    {
      title: 'Deposit',
      content: 'Lorem ipsum...'
    },
    {
      title: 'Withdraw',
      content: 'Lorem ipsum...'
    }
  ];
  
class DetailScreen extends Component{

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Transfer Detail',
        headerTintColor:'#fff',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        headerStyle: {
           color: '#fff',
           backgroundColor:'#0F70CD'
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../img/back.png')} 
                        style={{marginTop: 10, marginLeft:10, width:40,height:40, justifyContent: 'center', alignItems: 'center'}} />
                    </TouchableOpacity>
    });

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam');
        let buttonSend;
            if(otherParam.status==='pending'){
                buttonSend = (
                    <TouchableOpacity onPress={() => { Alert.alert('Send Payment Detail!');}}>
                        <View style = {styles.btn}>
                            <Text style = {styles.btnText}>SEND PAYMENT DETAIL</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            return (
            <View style={{ flex: 1, backgroundColor:'#fff', padding: 20 }}>
                {otherParam.status==='complete' ? <Text style={styles.description}>Transfer Completed</Text> :  <Text style={styles.description}>Please transfer to custodian bank</Text> }
                <Text style={styles.title}>Bank Name</Text>
                <Text style={styles.content}>{otherParam.bank}</Text>
                <Text style={styles.title}>Account Holder name</Text>
                <Text style={styles.content}>{otherParam.tofrom}</Text>
                <Text style={styles.title}>Account Number</Text>
                <Text style={styles.content}>{otherParam.bankNum}</Text>
                <Text style={styles.title}>Investing Amount</Text>
                <Text style={styles.content}>{otherParam.amount}</Text>
                {buttonSend}
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
      },
      center : {
        alignSelf:"center"
      },
      description : {
        fontSize: 15,
        fontWeight:'bold',
        marginBottom:30
      },
      title:{
        fontSize: 13,
        color:'#949494'
      },
      content:{
        fontSize: 15,
        color:'#3983D4',
        marginBottom:30
      },
      btn :{
        backgroundColor: '#3A83FA', 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5
      },
      btnText :{
        color: 'white', 
        fontSize:15, 
        fontWeight: 'bold'
      }
  }); 

export default DetailScreen;