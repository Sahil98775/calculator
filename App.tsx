import { StyleSheet, Text, View,Pressable, Touchable, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {Stack} from 'expo-router';
import styles from './styles'
import Button from './button';



// const calculator=()=>{
// }

export default function App() {
  const [firstValue,setFirstValue]=useState('');
  const[displayValue,setDisplayValue]=useState('0');
  const[operator,setOperator]=useState('');
  
  const handleInput=(num:string)=>{

  if(displayValue == '0'){
    setDisplayValue(num);
  }else{
      setDisplayValue(displayValue + num);
    }
  }

  const handleOperator=(operator:string)=>{
    setOperator(operator)
    setFirstValue(displayValue);
    setDisplayValue('0');
  }

  const handleCalculation=()=>{
    const num1= parseFloat(firstValue);
    const num2= parseFloat(displayValue);
    if(operator==='+'){
      setDisplayValue((num1+num2).toString());
    }
    else if(operator==='-'){
      setDisplayValue((num1 - num2).toString());
      
    }
    else if(operator==='/'){
      setDisplayValue((num1 / num2).toString());
    }
    else if(operator==='x'){
      setDisplayValue((num1 * num2).toString());

    }else if(operator==='%'){
      setDisplayValue((num1 % num2).toString());
    }

    setOperator('');
    setFirstValue('');
  }

  const handleClear=()=>{
    setFirstValue('')
    setDisplayValue('0')
    setOperator('')
  }

  const handleBack=()=>{
    if(displayValue.length==1){
      setDisplayValue("0");
    }else{
      setDisplayValue(displayValue.slice(0,-1));
    }
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.calnum}>{firstValue +operator}</Text>

        <Text style={styles.disnum}>{displayValue}</Text>
      </View>
      <View style={styles.keypad}>
        <View style={styles.keys}>
          <Button title='C'  type='top' onPress={handleClear}/>
          <Button title='<-' type='top' onPress={handleBack}/>
          <Button title='%'  type='top'   onPress={()=>{handleOperator('%')}}/>
          <Button title='/'  type='top'   onPress={()=>{handleOperator('/')}}/>
          <Button title='1'  type='number'    onPress={()=>handleInput('1')}/>
          <Button title='2'  type='number'    onPress={()=>handleInput('2')}/>
          <Button title='3'  type='number'    onPress={()=>handleInput('3')}/>
          <Button title='x'  type='right' onPress={()=>{handleOperator('x')}}/>
          <Button title='4'  type='number'    onPress={()=>handleInput('4')}/>
          <Button title='5'  type='number'    onPress={()=>handleInput('5')}/>
          <Button title='6'  type='number'    onPress={()=>handleInput('6')}/>
          <Button title='-'  type='right' onPress={()=>{handleOperator('-')}}/>
          <Button title='7'  type='number'    onPress={()=>handleInput('7')}/>
          <Button title='8'  type='number'    onPress={()=>handleInput('8')}/>
          <Button title='9'  type='number'    onPress={()=>handleInput('9')}/>
          <Button title='+'  type='right' onPress={()=>{handleOperator('+')}}/>
          <Button title='0'  type='number'    onPress={()=>handleInput('0')}/>
          <Button title='00' type='number'    onPress={()=>handleInput('00')}/>
          <Button title='.'  type='number'    onPress={()=>handleInput('.')}/>
          <Button title='='  type='right' onPress={handleCalculation}/>
        </View>
      </View>
    </View>
  
  );
}






