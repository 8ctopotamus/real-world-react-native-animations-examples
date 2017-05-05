import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Moment from './moment'

const { width, height } = Dimensions.get('window')

const Images = [
  { image: require('./images/lorempixel.jpg'), title: 'Vokda Cran' },
  { image: require('./images/lorempixel1.jpg'), title: 'Old Fashion' },
  { image: require('./images/lorempixel2.jpg'), title: 'Whiskey Coke' },
  { image: require('./images/lorempixel3.jpg'), title: 'Strawberry Daiquiry' }
]

const getInterpolate = (animatedScroll, i, ImageLength) => {
  const inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width
  ]

  const outputRange = i === 0 ? [0, 0, 150] : [-300, 0, 150]

  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp'
  })
}

export default class HorizontalParallaxScrollView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animatedScroll: new Animated.Value(0)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onScroll={
            Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.state.animatedScroll
                  }
                }
              }
            ])
          }
        >
          {Images.map((image, i) => {
            return (
              <Moment
                key={i}
                { ... image }
                translateX={getInterpolate(this.state.animatedScroll, i, Images.length)}
              />
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  separate: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 5
  }
});
