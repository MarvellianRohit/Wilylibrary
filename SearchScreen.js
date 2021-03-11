import React from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import db from '../config'
import {ScrollView} from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allTransactions: [],
      lastVisibleTransaction: null,
      search: ''
    }
  }
  
  fetchMoreTransactions = async() => {
    var text = this.state.search.toUpperCase()
    var enteredText = text.split("")

    if(enteredText[0].toUpperCase()==='B'){
      const query = await db.collection("Transaction").where('bookId','===',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.set.allTransactions,doc.data()],
          lastVisibleTransaction: doc
        })
      })
    }
    
    else if(enteredText[0].toUpperCase()==='S'){
      const query = await db.collection("Transaction").where('bookId','===',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.set.allTransactions,doc.data()],
          lastVisibleTransaction: doc
        })
      })
    }
  }

searchTransactions = async(text) => {
  var enteredText = text.split("")
  if(enteredText[0].toUpperCase()==='B'){
      const transaction = await db.collection("Transaction").where('bookId','===',text).get()
      transaction.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.state.allTransactions,doc.data()],
          lastVisibleTransaction: doc
        })
      })
  }

  else if(enteredText[0].toUpperCase()==='S'){
      const transaction = await db.collection("Transaction").where('StudentId','===',text).get()
      transaction.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.state.allTransactions,doc.data()],
          lastVisibleTransaction: doc
        })
      })
  }
}

  componentDidMount = async() => {
    const query = await db.collection("Transaction").limit(10).get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions:[],
        lastVisibleTransaction:doc
      })
    })
  }
    render() {
      return (
        <ScrollView>
        {this.state.allTransactions.map((transaction)=>{
          return(
            <View>
            <Text>{transaction.transactionType}</Text>
            </View>
          )
        })}
        </ScrollView>
      );
    }
  }