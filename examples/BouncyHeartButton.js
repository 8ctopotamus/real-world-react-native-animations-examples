import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
	TouchableWithoutFeedback
} from 'react-native';

import Heart from './heart'

export default class BouncyHeartButton extends React.Component {
  constructor(props) {
    super(props)

		this.state = {
			liked: false,
			scale: new Animated.Value(0),
			animations: [
				new Animated.Value(0),
				new Animated.Value(0),
				new Animated.Value(0),
				new Animated.Value(0),
				new Animated.Value(0),
				new Animated.Value(0),
			]
		}

		this.triggerLike = this.triggerLike.bind(this)
  }

	triggerLike() {
		this.setState({
			liked: !this.state.liked
		})
		Animated.spring(this.state.scale, {
			toValue: 2,
			friction: 3
		}).start(() => {
			this.state.scale.setValue(0)
		})
	}

  render() {
		const BouncyHeart = this.state.scale.interpolate({
			inputRange: [0, 1, 2],
			outputRange: [1, .8, 1]
		})
		const heartButtonStyle = {
			transform: [
				{scale: BouncyHeart}
			]
		}

    return (
      <View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.triggerLike}>
					<Animated.View style={heartButtonStyle}>
	        	<Heart filled={this.state.liked} />
					</Animated.View>
				</TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
		justifyContent: 'center'
  },
})
