import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#b9bdb4',
},
display:{
    flex:2,
    backgroundColor: '#ecf0e6',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    padding:12,
},
calnum:{
    fontSize:20,
},
keypad:{
    flex:3,
    backgroundColor: '#151d1dd3',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    padding:30,
  },
  disnum:{
    fontSize:65,
  },
  keys:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    gap:20,
  },
  button:{
    height:70,
    width:60,
    borderRadius:10,
    alignItems:'center',
    borderBlockEndColor:'white',
  },
});


export default styles;