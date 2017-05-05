import React from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
	TouchableOpacity
} from 'react-native';

const getTransformStyle = (animation) => {
	return {
		transform: [
			{ translateY: animation }
		]
	}
}

export default class FAB extends React.Component {
  constructor(props) {
    super(props)

		this.state = {
			animate: new Animated.Value(0),
			fabs: [
				new Animated.Value(0),
				new Animated.Value(0),
				new Animated.Value(0),
			]
		}
		this.open = false
		this.handlePress = this.handlePress.bind(this)
  }

	handlePress() {
		const toValue = this.open ? 0 : 1
		const flyouts = this.state.fabs.map((value, i) => {
			return Animated.spring(value, {
				toValue: (i + 1) * -90 * toValue,
				friction: 5
			})
		})

		Animated.parallel([
			Animated.timing(this.state.animate, {
				toValue,
				duration: 300
			}),
			Animated.stagger(30, flyouts)
		]).start()

		this.open = !this.open
	}

  render() {
		const backgroundInterpolate = this.state.animate.interpolate({
			inputRange: [0, 1],
			outputRange: ['rgb(90, 34, 153)', 'rgb(36, 11, 63)']
		})
		const backgroundStyle = {
			backgroundColor: backgroundInterpolate
		}
		const buttonColorInterpolate = this.state.animate.interpolate({
			inputRange: [0, 1],
			outputRange: ['rgb(24, 214, 255)', 'rgb(255, 255, 255)']
		})
		const buttonRotate= this.state.animate.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '135deg']
		})
		const buttonStyle = {
			backgroundColor: buttonColorInterpolate,
			transform: [
				{ rotate: buttonRotate }
			]
		}

    return (
      <Animated.View style={[styles.container, backgroundStyle]}>
				<View style={styles.position}>
				{
					this.state.fabs.map((animation, i) => {
						return (
							<TouchableOpacity
								key={i}
								style={[styles.button, styles.fab, styles.flyout, getTransformStyle(animation)]}
								onPress={this.handlePress}>
							</TouchableOpacity>
						)
					})
				}

					<TouchableOpacity onPress={this.handlePress}>
						<Animated.View style={[styles.button, buttonStyle]}>
							<Text style={styles.plus}>+</Text>
						</Animated.View>
					</TouchableOpacity>
				</View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	position: {
		position: 'absolute',
		right: 45,
		bottom: 45,
	},
	fab: {
		position: 'absolute',
		bottom: 0 ,
		right: 0
	},
	button: {
		width: 80,
		height: 80,
		borderRadius: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	flyout: {
		backgroundColor: '#9439ff'
	},
	plus: {
		fontWeight: 'bold',
		fontSize: 30,
		color: '#00768F'
	}
})
