import React from 'react';
import Iconfa from 'react-native-vector-icons/FontAwesome';
import theme from '../theme';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Biaya = () => {
  return (
    <View
      style={{
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15,
        marginBottom: 20,
      }}>
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 25,
            paddingRight: 25,
            height: 60,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 8,
            borderColor: theme.colors.gray1,
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 70,
                height: 10,
                backgroundColor: theme.colors.gray50,
                borderRadius: 9,
              }}
            />
            <View
              style={{
                width: 70,
                height: 10,
                backgroundColor: theme.colors.gray50,
                borderRadius: 9,
                marginLeft: 5,
              }}
            />
            <View
              style={{
                width: 70,
                height: 10,
                backgroundColor: theme.colors.gray50,
                borderRadius: 9,
                marginLeft: 5,
              }}
            />
          </View>
          <View />
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{marginLeft: 25, marginRight: 25}}>
      <SkeletonPlaceholder>
        <View
          style={{
            padding: 25,

            borderRadius: 9,
            alignItems: 'center',
            borderColor: theme.colors.gray1,
            borderWidth: 1,
          }}>
          <View style={{width: 120, height: 120, borderRadius: 120 / 2}} />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 80,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 120,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

const Menus = () => {
  return (
    <SkeletonPlaceholder>
      {/* card */}
      <View
        style={{
          flexDirection: 'row',
          marginRight: 25,
          marginLeft: 25,
          marginTop: 20,
          justifyContent: 'space-between',
          borderRadius: 8,
          borderColor: theme.colors.gray1,
          borderWidth: 1,
        }}>
        {/* menu */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            flex: 1,
          }}>
          {/* strip */}
          <View
            style={{
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
        </View>
        {/* menu */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            flex: 1,
          }}>
          {/* strip */}
          <View
            style={{
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
        </View>
        {/* menu */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            flex: 1,
          }}>
          {/* strip */}
          <View
            style={{
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
        </View>
        {/* menu */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            flex: 1,
          }}>
          {/* strip */}
          <View
            style={{
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
          <View
            style={{
              marginTop: 15,
              height: 10,
              width: 70,
              borderRadius: 9,
              backgroundColor: theme.colors.gray50,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const Aktivitas = () => {
  return (
    <View>
      <SkeletonPlaceholder>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
            width: 100,
            height:20,
            borderRadius:9,
            color: theme.colors.gray6,
          }}
        />
        <View
          style={{
            backgroundColor: theme.colors.gray1,
            height: 70,
            marginVertical: 4,
            marginHorizontal: 25,
            borderRadius: 7,
          }}
        />
        <View
          style={{
            backgroundColor: theme.colors.gray1,
            height: 70,
            marginVertical: 4,
            marginHorizontal: 25,
            borderRadius: 7,
          }}
        />
        <View
          style={{
            backgroundColor: theme.colors.gray1,
            height: 70,
            marginVertical: 4,
            marginHorizontal: 25,
            borderRadius: 7,
          }}
        />
      </SkeletonPlaceholder>
    </View>
  );
};

export default HomeLoading = () => {
  return (
    <View style={{ backgroundColor:'#fff',flex:1 }}>
      <Biaya />
      <Profile />
      <Menus />
      <Aktivitas />
    </View>
  );
};
