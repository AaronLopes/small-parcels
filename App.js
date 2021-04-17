import React, {Component} from 'react';
import { View, Button } from 'react-native';
import axios from 'axios'; 



var url = "http://192.168.1.79:5000/get_zipto";

export default class PrevCommune extends Component {
    constructor(props){
        super(props);
        this.navigation=this.props.navigation;
    };

    getAxios=()=>{
        axios.get(`${url}`).then((response)=>{
            console.log("succes axios :",response);
        }).catch((error)=>{
            console.log("fail axios :", error);
        });
    };

    getFetch=()=>{
        fetch(url).then((response)=>{
            console.log("succes fetch :",response)
        }).catch((error)=>{
            console.log("fail fetch :",error)
        })
    }

    render(){
        return (
            <View>
                <Button onPress={()=>this.getAxios()} title={"get axios"}></Button>

                <Button onPress={()=>this.getFetch()} title={"get fetch"}></Button>
            </View>
        );
    };
};