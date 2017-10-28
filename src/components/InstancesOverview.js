import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BoxShadow as Shadow } from 'react-native-shadow'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  defaultOverview: {
    height: width * 0.6,
    backgroundColor: 'white'
  },
  normalText: {
    fontSize: 26,
    fontFamily: 'acrom',

    color: '#B4DFF2',

    fontWeight: '400',
    textAlign: 'left',

    paddingLeft: 30
  },
  bigText: {
    fontSize: 40,
    color: '#ffffff'
  },
  defaultGradient: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingTop: width * 0.15
  },
  defaultTitleWrapper: {
    flexGrow: 1,
    flexDirection: 'row'
  }
})

const statusStyles = StyleSheet.create({
  defaultText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: 'acrom'
  },
  defaultIcons: {
    height: 20,
    width: 20,
    transform: [{ translateY: -3 }]
  },
  defaultUnit: {
    display: 'flex',
    flexDirection: 'row'
  },
  number: {
    transform: [{ scale: 1.2 }]
  }
})

const tagsStyles = StyleSheet.create({
  defaultWrapper: {
    height: 30,
    flexDirection: 'row'
  },
  defaultOuterWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: 30
  }
})

const statusIcons = {
  Running: require('../assets/icons/running@png.png'),
  Pending: require('../assets/icons/pending@png.png'),
  Stopped: require('../assets/icons/stoped@png.png')
}

const Status = props =>
  <View>
    {
      ['Running', 'Pending', 'Stopped'].map((title, i) =>
        <View key={i} style={statusStyles.defaultUnit}>
          <Text style={[statusStyles.defaultText, statusStyles.number]}>8</Text>
          <Image style={statusStyles.defaultIcons} source={statusIcons[title]}/>
          <Text style={statusStyles.defaultText}>{title}</Text>
        </View>
      )
    }
  </View>

const tagsIcons = {
  QCLOUD: require('../assets/icons/qcloud_tag@png.png'),
  QINGCLOUD: require('../assets/icons/qingcloud_tag@png.png'),
  ALIYUN: require('../assets/icons/aliyun_tag@png.png')
}

const sizes = {
  QCLOUD: [240, 90],
  QINGCLOUD: [300, 90],
  ALIYUN: [210, 90]
}

const Tags = props =>
  <View style={tagsStyles.defaultOuterWrapper}>
    <View style={tagsStyles.defaultWrapper}>
      {
        ['qcloud', 'qingcloud', 'aliyun'].map(value =>
          <Image
            key={value}
            style={{ height: 30, width: 30 * sizes[value.toUpperCase()][0] / sizes[value.toUpperCase()][1] }}
            source={tagsIcons[value.toUpperCase()]}
          />
        )
      }
    </View>
  </View>

export default InstancesOverview = props =>
  <View
    {...props}
    style={[styles.defaultOverview, props.style]}
    elevation={5}
  >
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      colors={['#36D1DC', '#5B86E5']}
      style={styles.defaultGradient}
    >
      <View style={styles.defaultTitleWrapper}>
        <View style={{ flexGrow: 1 }}>
          <Text style={styles.normalText}>You Have</Text>
          <Text style={styles.normalText}>
            <Text style={[styles.normalText, styles.bigText]}>12 </Text>
        Instances
          </Text>
        </View>
        <View style={{ flexShrink: 0, width: 0.3 * width }}><Status/></View>
      </View>
      <View style={{ height: 0.2 * width }}><Tags/></View>
    </LinearGradient>
  </View>
