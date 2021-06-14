// Imports: Dependencies
import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { reduxDecreaseCounter, reduxIncreaseCounter, reduxMultiply, resetCount, shareCount  } from '../actions/counterAction'
// Screen Dimensions
const { height, width } = Dimensions.get('window');
// Screen: Counter
const teste = null
const Counter =(props)=>  {
    return (
      <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.counterTitle}>Counter</Text>
          <Text style={styles.counterText}>{props.counter}</Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.buttonOperation} onPress={props.reduxIncreaseCounter}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.buttonOperation} onPress={props.reduxDecreaseCounter}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.buttonOperation} onPress={()=>props.reduxMultiply(props.counter)}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOperation} onPress={props.shareCount}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonReset} onPress={()=>props.resetCount()}>
            <Text style={{color: '#fff'}}>Limpar</Text>
        </TouchableOpacity>
      </SafeAreaView>
      </>
    )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '300',
    color: '#fff',
  },
  buttonReset: { 
    width: 130, 
    height: 40, 
    backgroundColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 5 
  },
  buttonOperation: { 
    width: 40, 
    height: 40, 
    backgroundColor: '#000', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 5 ,
    marginHorizontal: 25,
    marginVertical: 5
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) =>({
   counter: state.counter.counter,
})

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = dispatch => bindActionCreators({
  reduxDecreaseCounter, reduxIncreaseCounter, reduxMultiply, resetCount, shareCount
}, dispatch)


// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);