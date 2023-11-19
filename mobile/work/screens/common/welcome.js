import React, { useEffect } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import Svg, { G, Path, Circle, Defs, ClipPath } from "react-native-svg"

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={430}
    height={932}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path fill="#F7F7F7" d="M0 0h430v932H0z" />
      <G clipPath="url(#b)">
        <Path fill="#12229D" d="M0 0h430v932H0z" />
        <Circle cx={81.5} cy={-16.5} r={179.5} fill="#9AB4FF" />
        <Circle cx={416} cy={-143} r={233} fill="#9AB4FF" fillOpacity={0.5} />
        <Circle
          cx={135}
          cy={1066}
          r={233}
          fill="#9AB4FF"
          fillOpacity={0.5}
          transform="rotate(180 135 1066)"
        />
        <Circle
          cx={469.5}
          cy={939.5}
          r={179.5}
          fill="#9AB4FF"
          transform="rotate(180 469.5 939.5)"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h430v932H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M0 0h430v932H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)


const Welcome = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(()=>{
      navigation.navigate('Login')
    }, 3500)
  },[])

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.imagen}
      />

      <SvgComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#12229D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    position:'absolute',
    zIndex: 2,
    width: 500,
    height: 500,
    resizeMode: 'contain',
  }
});
export default Welcome;
