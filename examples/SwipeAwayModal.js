import React from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View,
	TextInput,
	PanResponder
} from 'react-native';

export default class SwipeAwayModal extends React.Component {
  constructor(props) {
    super(props)

		this.state = {

		}
  }

	componentWillMount() {

	}

  render() {
    return (
      <View style={styles.container}>
				<Animated.View
					style={[styles.modal]}
				>
					<View style={styles.comments}>
						<ScrollView>
							<Text style={styles.fakeText}>Top</Text>
							<View style={styles.fakeComments} />
							<Text style={styles.fakeText}>Bottom</Text>
						</ScrollView>
					</View>
					<View style={styles.inputWrap}>
						<TextInput style={styles.textInput} placeholder="Comment" S/>
					</View>
				</Animated.View>
			</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})
