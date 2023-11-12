import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 0.92804769639356,
            longitude: 104.44775090441074,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}>
        <Marker
        coordinate={{ latitude: 0.924170025011049, longitude:  104.4448019556527}}
        title={'Masjid Ash Haaburrijal'}
        description={'Jl. Sunaryo, Tanjungpinang Barat '}
        />
          <Marker
            coordinate={{ latitude: 0.9254214779267403, longitude: 104.44116922199022 }}
            title={'Masjid Al Irsyad'}
            description={'Jl. Sudirman, Tanjungpinang Barat'}
          />
           <Marker
            coordinate={{ latitude: 0.9281251004382873, longitude: 104.44305635921074 }}
            title={'Masjid Agung Al-Hikmah'}
        description={'Jl. Mesjid, Tanjungpinang kota'}
        />
          <Marker
            coordinate={{ latitude: 0.9255790931774336, longitude: 104.44330216634874 }}
            title={'Masjid An Namira'}
            description={'Jl. Duyung Pasar Pagi, Tanjungpinang barat'}
          />
          <Marker
            coordinate={{ latitude: 0.9258773538835012, longitude: 104.45360525040326 }}
            title={'Masjid Syuhada'}
            description={'Jl. Gudang Minyak, Tanjungpinang'}
          />
          <Marker
            coordinate={{ latitude: 0.9007888670165664, longitude: 104.49569173935939 }}
            title={'Masjid At Taubah'}
            description={'Jl. Cendrawasih, Tanjungpinang'}
          />
          <Marker
            coordinate={{ latitude: 0.9122950312877122, longitude: 104.49324268168918 }}
            title={'Masjid Nurul Iman'}
            description={'Jl. Raja H.Fisabililah, Tanjungpinang'}
          />
          <Marker
            coordinate={{ latitude: 0.916246138760588, longitude: 104.48270999702957 }}
            title={'Masjid Al MUQODIMMAH'}
            description={'Jl. Melayu Kota Pirang, Tanjungpinang'}
          />
          <Marker
            coordinate={{ latitude: 0.9029928694503394, longitude: 104.46139739702957 }}
            title={'Masjid Nurul Huda'}
            description={'Jl. Pramuka No.2, Tanjungpinang'}
          />
          <Marker
            coordinate={{ latitude: 0.9203094385625444, longitude: 104.5036271105242 }}
            title={'Masjid Assakinah Tanjungpinang'}
            description={'Jl. D.I Panjaitan, Tanjungpinang'}
          />
          <Marker
            coordinate={{ latitude: 0.9139655824127646, longitude: 104.44714692688852 }}
            title={'Rumah Saya'}
            description={'Jl. Soekarno - Hatta, Gg. Tongkol I0'}
          />
        </MapView>
      </View>
    )
  }
}

export default App