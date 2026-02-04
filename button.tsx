import {Text,TouchableOpacity} from 'react-native';
import styles from './styles'

const Button=({title,type,onPress}:{title:string,type:'top'|'right'|'number',onPress:()=>void})=>{
    return(
        <TouchableOpacity style={[styles.button,{
            backgroundColor:type=="top"? '#219ef2'
            :type=="right"? '#f78605':'#a1d8d6'
            
        }]} onPress={onPress}>
            <Text style={{fontSize:40,color:type=='number'?'black':'white'}}>{title}</Text>
            </TouchableOpacity>
    )
}

export default Button;



