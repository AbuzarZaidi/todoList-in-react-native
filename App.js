import React,{useState} from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View,TextInput,TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
export default function App() {
  const [tasks,setTasks]=useState([]);
  const [task,setTask]=useState("");
  const handleAddTask=(newTask)=>{
    Keyboard.dismiss()
    setTasks([newTask,...tasks])
    setTask("")
  }
  const completeHandler=(index)=>{
let itemsCopy=[...tasks]
itemsCopy.splice(index,1)
setTasks(itemsCopy)
  }
  return (
    <View style={styles.container}>
     {/* Today Tasks */}
    <View style={styles.tasksWrapper}>
<Text  style={styles.sectionTitle}>Today's Tasks</Text>
<View style={styles.items}>
{/* Tasks Here */}
{tasks.map((val,index)=>{
  return <TouchableOpacity onPress={()=>completeHandler(index)}><Task text={val} key={index}/></TouchableOpacity>
  
})}

</View>
    </View>

    {/* New Task */}
    <KeyboardAvoidingView behavior={Platform.OS==="ios"?'padding':'height'} style={styles.writeTaskWrapper}>
<TextInput style={styles.input} placeholder={'Write a Task:'} value={task} onChangeText={(text)=>setTask(text)}/>
<TouchableOpacity onPress={()=>handleAddTask(task)}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText} >+</Text>
  </View>
</TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
sectionTitle:{
  fontSize:24,
  fontWeight:'bold'
},
items:{
  marginTop:20
},
writeTaskWrapper:{
  position:"absolute",
  flexDirection:"row",
  bottom:60,
  width:"100%",
  justifyContent:"space-around",
  alignItems:"center",
},
input:{
  width:250,
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:"#ffffff",
borderRadius:60,
borderWidth:1,
borderColor:"#C0C0C0"
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:"#ffffff",
  borderRadius:60,
  justifyContent:"center",
  alignItems:"center",
  borderWidth:1,
borderColor:"#C0C0C0",
},
addText:{
  fontSize:24
},
});
