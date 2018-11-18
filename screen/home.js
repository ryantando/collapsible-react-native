import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, ListItem, Body, Right } from 'native-base';

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

const DATADEPO = [
  {
    type: 'Deposit',
    amount: '100.000.000',
    tofrom: 'HPAM Ultima Ekuitas 1',
    date: 'Aug 15, 2018',
    status: 'pending',
    desc: 'In Progress',
    step: 3,
    bank: 'BCA',
    bankNum: '9548 3425 5663'
  },{
    type: 'Deposit',
    amount: '50.000.000',
    tofrom: 'HPAM Ultima Ekuitas 1',
    date: 'Aug 15, 2018',
    status: 'complete',
    desc: 'Completed',
    step: 4,
    bank: 'BNI',
    bankNum: '222 222 222'
  }];

  const DATAWITH = [{
    type: 'Withdraw',
    amount: '100.000.000',
    tofrom: 'HPAM Ultima Ekuitas 1',
    date: 'Aug 15, 2018',
    status: 'pending',
    desc: 'Need Transfer Receipt',
    step: 2,
    bank: 'BRI',
    bankNum: '444 444 444'
  },{
    type: 'Withdraw',
    amount: '100.000.000',
    tofrom: 'HPAM Ultima Ekuitas 1',
    date: 'Aug 15, 2018',
    status: 'complete',
    desc: 'Completed',
    step: 4,
    bank: 'Mandiri',
    bankNum: '1234 1243 1234'
  }
];
  
class HomeScreen extends Component{
    constructor(props) {
      super(props);
      this.state = {
        activeSections: [],
        activeIndex: 0,
      };
    }

    static navigationOptions = {
        title: 'Invest',
        headerTintColor:'#fff',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        headerStyle: {
           color: '#fff',
           backgroundColor:'#0F70CD'
        },
        headerLeft: null
    }
    
    componentDidMount(){

    }

    _renderSectionTitle = section => {
        return (
            <View style={styles.content}>
            </View>
        );
    };

    _renderHeader = (section, index, activeIndex) => {
        return (
            <View style={styles.title}>
                <Icon name={activeIndex ? "remove-circle-outline" : "add-circle-outline"} size={30} color="#1171CD" />
                <Text style={styles.titleText}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = (section) => {
      let dataPending, dataPendingTitle, dataComplete, dataCompleteTitle;
      if(section.title === 'Withdraw'){
        DATAWITH.map((val, key) => {
          if(val.status==='pending')
            dataPending = (
                <ListItem key={key} onPress={() => {
                  this.props.navigation.navigate('Detail', {
                  otherParam: val
                });
                }}>
                  <Body>
                    <Text style={styles.transTitle}>{val.type} {val.amount}</Text>
                    <Text>{val.type==='Deposit'? 'To' : 'From'} {val.tofrom}</Text>
                    <Text>{val.date}</Text>
                  </Body>
                  <Right style={styles.RightAlign}>
                  <Text style={val.step == 2 ? styles.Step2 : val.step == 3? styles.Step3 : val.step == 4? styles.Step4 : styles.Step1}>{val.desc}</Text>
                    <Icon active name="arrow-forward" />
                  </Right>
                </ListItem>
            )
          else{
            dataComplete =  (
              <ListItem key={key} onPress={() => {
                this.props.navigation.navigate('Detail', {
                otherParam: val
              });
              }}>
                <Body>
                  <Text style={styles.transTitle}>{val.type} {val.amount}</Text>
                  <Text>{val.type==='Deposit'? 'To' : 'From'} {val.tofrom}</Text>
                  <Text>{val.date}</Text>
                </Body>
                <Right style={styles.RightAlign}>
                  <Text style={val.step == 2 ? styles.Step2 : val.step == 3? styles.Step3 : val.step == 4? styles.Step4 : styles.Step1}>{val.desc}</Text>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
            )
          }
        });
      }else{
        DATADEPO.map((val, key) => {
          if(val.status==='pending'){
            dataPending = (
              <ListItem key={key} onPress={() => {
                this.props.navigation.navigate('Detail', {
                otherParam: val
              });
              }}>
                <Body>
                  <Text style={styles.transTitle}>{val.type} {val.amount}</Text>
                  <Text>{val.type==='Deposit'? 'To' : 'From'} {val.tofrom}</Text>
                  <Text>{val.date}</Text>
                </Body>
                <Right style={styles.RightAlign}>
                  <Text style={val.step == 2 ? styles.Step2 : val.step == 3? styles.Step3 : val.step == 4? styles.Step4 : styles.Step1}>{val.desc}</Text>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
            )
          }else{
            dataComplete =  (
              <ListItem key={key} onPress={() => {
                this.props.navigation.navigate('Detail', {
                otherParam: val
              });
              }}>
                <Body>
                  <Text style={styles.transTitle}>{val.type} {val.amount}</Text>
                  <Text>{val.type==='Deposit'? 'To' : 'From'} {val.tofrom}</Text>
                  <Text>{val.date}</Text>
                </Body>
                <Right style={styles.RightAlign}>
                  <Text style={val.step == 2 ? styles.Step2 : val.step == 3? styles.Step3 : val.step == 4? styles.Step4 : styles.Step1}>{val.desc}</Text>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
            )
          }
        });
      }
      if(dataComplete){
        dataPendingTitle =  (
          <View style={styles.header}>
            <Icon active name="cached" size={30} color="#000" />
            <Text style={styles.center}> Pending Orders</Text>
          </View>
        )
      }
      if(dataPending){
        dataCompleteTitle =  (
          <View style={styles.header}>
            <Icon active name="playlist-add-check" size={30} color="#000" />
            <Text style={styles.center}> Complete Orders</Text>
          </View>
        )
      }

        return (
            <View style={styles.content}>
              {dataPendingTitle}
              {dataPending}
              {dataCompleteTitle}
              {dataComplete}
            </View>
        );
    };
    
    _updateSections = (activeSections) => {
        this.setState({ activeSections});
    };

    render() {
        return (
          <Container>
            <Content>
              <Accordion 
                sections={SECTIONS} 
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader} 
                renderContent={this._renderContent}
                underlayColor="#0972CE"
                onChange={this._updateSections}
            />
          </Content>
        </Container>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
      },
      title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
      },
      title: {
        flexDirection: 'row',
        padding: 10,
        height: 50
      },
      titleText: {
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
      },
      header: {
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        padding: 10,
        height: 50
      },
      headerText: {
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',
      },
      content: {
        padding: 20,
        backgroundColor: '#fff',
      },
      RightAlign : {
        flexDirection: 'row'
      },
      center : {
        alignSelf:"center"
      },
      transTitle : {
        fontWeight:"bold",
        marginBottom:3
      },
      Step1 : {
        color:'#ccc'
      },
      Step2 : {
        color:'#F29247'
      },
      Step3 : {
        color:'#6BA6E0'
      },
      Step4 : {
        color:'#74A877'
      }
  }); 

export default HomeScreen;