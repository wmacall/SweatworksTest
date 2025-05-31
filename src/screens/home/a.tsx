import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const ITEMS = [
  {
    adult: false,
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg',
    genre_ids: [10751, 35, 878],
    id: 552524,
    original_language: 'en',
    original_title: 'Lilo & Stitch',
    overview:
      'The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.',
    popularity: 755.7423,
    poster_path:
      'https://image.tmdb.org/t/p/w500/Y6pjszkKQUZ5uBbiGg7KWiCksJ.jpg',
    release_date: '2025-05-17',
    title: 'Lilo & Stitch',
    video: false,
    vote_average: 7.1,
    vote_count: 322,
  },
  {
    adult: false,
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg',
    genre_ids: [10751, 35, 12, 14],
    id: 950387,
    original_language: 'en',
    original_title: 'A Minecraft Movie',
    overview:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    popularity: 501.4662,
    poster_path:
      'https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg',
    release_date: '2025-03-31',
    title: 'A Minecraft Movie',
    video: false,
    vote_average: 6.502,
    vote_count: 1545,
  },
  {
    adult: false,
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg',
    genre_ids: [27, 9648],
    id: 574475,
    original_language: 'en',
    original_title: 'Final Destination Bloodlines',
    overview:
      'Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.',
    popularity: 394.4219,
    poster_path:
      'https://image.tmdb.org/t/p/w500/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg',
    release_date: '2025-05-14',
    title: 'Final Destination Bloodlines',
    video: false,
    vote_average: 7,
    vote_count: 494,
  },
  {
    adult: false,
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg',
    genre_ids: [10751, 35, 878],
    id: 553524,
    original_language: 'en',
    original_title: 'Lilo & Stitch',
    overview:
      'The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.',
    popularity: 755.7423,
    poster_path:
      'https://image.tmdb.org/t/p/w500/Y6pjszkKQUZ5uBbiGg7KWiCksJ.jpg',
    release_date: '2025-05-17',
    title: 'Lilo & Stitch',
    video: false,
    vote_average: 7.1,
    vote_count: 322,
  },
  {
    adult: false,
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg',
    genre_ids: [10751, 35, 12, 14],
    id: 950187,
    original_language: 'en',
    original_title: 'A Minecraft Movie',
    overview:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    popularity: 501.4662,
    poster_path:
      'https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg',
    release_date: '2025-03-31',
    title: 'A Minecraft Movie',
    video: false,
    vote_average: 6.502,
    vote_count: 1545,
  },
  {
    adult: false,
    backdrop_path:
      'https://image.tmdb.org/t/p/w500/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg',
    genre_ids: [27, 9648],
    id: 574425,
    original_language: 'en',
    original_title: 'Final Destination Bloodlines',
    overview:
      'Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.',
    popularity: 394.4219,
    poster_path:
      'https://image.tmdb.org/t/p/w500/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg',
    release_date: '2025-05-14',
    title: 'Final Destination Bloodlines',
    video: false,
    vote_average: 7,
    vote_count: 494,
  },
];

export const A = () => {
  return (
    <FlatList
      data={ITEMS}
      numColumns={3}
      bounces={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Image
            source={{uri: item.poster_path}}
            style={{width: '100%', height: 150, borderRadius: 8}}
          />
        </View>
      )}
      contentContainerStyle={styles.flat_list}
      columnWrapperStyle={styles.flat_list}
    />
  );
};

const styles = StyleSheet.create({
  flat_list: {
    gap: 16,
  },
  item: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
