import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from './icons/icons'
import PropTypes from 'prop-types'

const { height, width } = Dimensions.get('window')

//Components
import FabItem from './MenuItem'
import MenuItem from './MenuItem';

export default class QuickMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            opening: false,
            overlayOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0)
          };
    }    

  render() { 
      const { open, overlayOpacity,rotation } = this.state
      const { items, fabColor } = this.props
      const coverOpacity = {opacity: overlayOpacity} 
     
      const rotate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg']
      })
    return (
          <View style={styles.wrapper}>
               
            { open ? 
                <Animated.View style={[styles.overlay, coverOpacity]}>
                    <TouchableOpacity style={styles.overlayAction} onPress={this.handleClose}>
                        
                    </TouchableOpacity>
                </Animated.View> : null
            }

            { open ? 
                this.loadCategories(items) : null
            }

              <TouchableOpacity style={[styles.button, {backgroundColor: fabColor}]} onPress={this.handleOpen}>
                <Animated.View style={{transform: [{rotate}] }}>
                    <Icon
                        name={"plus"}
                        type={"material-community"}
                        size={29}
                        color={'white'}
                        opening={this.state.opening}
                    />
                </Animated.View>
             </TouchableOpacity>

          </View>
           
    );
  }

  handleOpen = () =>{
    if(this.state.open){
        this.handleClose() 
    }else{
        this.rotateIcon()
        this.setState({open: true}, () => this.fadeIn())
    }
  }

  handleClose = () =>{
      this.normalizeIcon()
      this.setState({opening: false}, () =>{
        this.fadeOut(() => this.setState({open: false}))
      })
  }

  rotateIcon = () =>{
    Animated.timing(this.state.rotation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
    }).start()
  }

  normalizeIcon = () =>{
    Animated.timing(this.state.rotation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
    }).start()
  }

  fadeIn = () =>{
    Animated.timing(this.state.overlayOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
    }).start()
  }
  
  fadeOut = (callback) =>{
    Animated.timing(this.state.overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
    }).start(callback)
  }

  loadCategories = (items) =>{
    const { dotColor, iconColor, iconType, onItemPressed } = this.props
    let actions = []
    items.map((item, index) =>{
        index += 1
            actions.push(
               <MenuItem
                key={index}
                index={index}
                name={item.name}
                icon={item.icon}
                dotColor={dotColor}
                iconColor={iconColor}
                iconType={iconType}
                onItemPressed={this.handlePress}
                pressData={item}
               />
            )
    })
    return actions;
    }

    handlePress = (item) => () => this.props.onItemPressed(item)
}

QuickMenu.defaultProps = {
    dotColor: '#3E92CC',
    fabColor: '#3E92CC',
    iconColor: '#FFF',
    iconType: 'material-community'
}

QuickMenu.propTypes = {
    items: PropTypes.array.isRequired,
    onItemPressed: PropTypes.func.isRequired,
    dotColor: PropTypes.string,
    fabColor: PropTypes.string,
    iconColor: PropTypes.string,
    iconType: PropTypes.string
}

const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute', 
        bottom: 0,
        right: 0
    },
    overlay:{
        height, 
        width,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    overlayAction:{
        height, 
        width
    },
    button:{
        height: 60,
        width: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    }
  });
  