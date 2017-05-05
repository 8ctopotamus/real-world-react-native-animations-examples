import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
	TouchableWithoutFeedback
} from 'react-native';

const { width, height } = Dimensions.get('window')

class Moment extends React.Component {
  render() {
    const animatedStyle = {
        transform: [
          { translateX: this.props.translateX }
        ]
    }

    return (
      <View style={styles.container}>
				<Animated.Image
					source={this.props.image}
					style={[styles.image, animatedStyle]}
					resizeMode="cover">
				</Animated.Image>

        <View style={[StyleSheet.absoluteFill, styles.center]}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		width,
		height,
		overflow: 'hidden'
	},
	image: {
		flex: 1,
		width: null,
		height: null
	},
	center: {
    justifyContent: 'center'
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    paddingVertical: 10
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  }
})

export default Moment
