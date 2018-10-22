import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Icon from './icons/icons'
import PropTypes from 'prop-types'

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        translate: new Animated.Value(200)
    };
  }

  componentDidMount = () =>{
      this.enter()
  }

  componentWillReceiveProps = (props) =>{
      this.leave()
  }

  render() {
      const { index, name, icon, iconColor, dotColor, iconType, onItemPressed, pressData } = this.props
      const dynStyle={
         bottom: 40 + (60 * index)
      }
      const enterStyles = {transform:[{translateX : this.state.translate}]}
    return (
        <Animated.View style={[enterStyles, dynStyle, styles.wrapper]}>
            <TouchableOpacity style={styles.categoryItem} onPress={onItemPressed(pressData)}>
                <View style={styles.categoryLabel}>
                    <Text style={styles.categoryText}>
                        {name}
                    </Text>
                </View>
                <View style={[styles.categoryDot, {backgroundColor: dotColor}]}>
                    <Icon
                        name={icon}
                        type={iconType}
                        color={iconColor}
                        size={22}
                    />
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
  }

  enter = () =>{
      Animated.spring(this.state.translate, {
        toValue: 0,
        duration: 200,
        delay: (50 * (this.props.index)),
        useNativeDriver: true
      }).start()
  }

  leave = () =>{
    Animated.timing(this.state.translate, {
        toValue: 200,
        duration: 200,
        delay: (50 * (this.props.index)),
        useNativeDriver: true
      }).start()
  }

}

MenuItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    dotColor: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
    onItemPressed: PropTypes.func.isRequired,
    pressData: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: 'transparent',
        height: 36,
        width: 160,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        right: 20 + 11,
        position: 'absolute',
    },
    categoryItem:{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end'
        
    },
    categoryDot:{
        height: 36,
        width: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    categoryLabel:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        marginRight: 12,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    }
})