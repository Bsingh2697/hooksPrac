/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Anime from './src/anime';
import UseEffectPrac from './src/useEffectPrac';
import DataFetchingWithHooks from './src/datafetchingwithhooks';
// import ComponentA from './src/useContext/componentA';
import { useReducer } from 'react';
import UseReducerOne from './src/useReducerHook/useReducerOne';
import UseReducerTwo from './src/useReducerHook/useReducerTwo';
import UseReducerThree from './src/useReducerHook/useReducerThree';
import ComponentA from './src/useReducerUseContext/componentA';
import ComponentB from './src/useReducerUseContext/componentB';
import UseReducerPrac from './src/useReducerHook/useReducerPrac';
import CompC from './src/uruc/compC';
import CompA from './src/uruc/compA';


// export const UserContext = React.createContext()

// export const CountContext = React.createContext()

export const TestCountContext = React.createContext()

const testInitialState = {
  count : 0
}

const testReducer = (state,action) => {
  switch(action){
    case 'increment' :
      return {...state, count : state.count + 1}
    case 'decrement' :
      return {...state, count : state.count - 1}
    case 'reset' :
      return testInitialState
    default :
      return state
  }
}

// const initialState = 0

// const reducer = (state,action) => {
//   switch(action){
//     case 'increment' :
//       return state + 1
//     case 'decrement' :
//       return state - 1
//     case 'reset' :
//       return initialState
//   }
// }

const obj = {
  fname : "Bharat",
  lname : "Singh"
}

const App = () => {

  // const [countState, dispatch] = useReducer(reducer,initialState)

  const [testState , testDispatch] = useReducer(testReducer,testInitialState)

  return (
    <>
      {/* <Anime/> */}
      {/* <UseEffectPrac/> */}
      {/* <DataFetchingWithHooks/> */}

      {/* <UserContext.Provider value={obj}> 
        <ComponentA/>
      </UserContext.Provider> */}

      {/* <UseReducerOne/> */}
      {/* <UseReducerTwo/> */}
      {/* <UseReducerThree/> */}

      {/* <CountContext.Provider value={{countValue : countState, countDispatch : dispatch}}>
        <ComponentA/>
        <ComponentB/>
      </CountContext.Provider> */}

      <TestCountContext.Provider value={{testCountValue : testState, testDispatch : testDispatch}}>
        <CompA/>
        <CompC/>
      </TestCountContext.Provider>

      {/* <UseReducerPrac/> */}

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
