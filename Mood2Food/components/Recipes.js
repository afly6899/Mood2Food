import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native';

export class Bulky extends Component {
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://prettysimplesweet.com/wp-content/uploads/2014/04/Peanut-Butter-Chocolate-Chip-Pancakes-2.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Peanut-Butter-Chocolate-Chip-Pancakes-1498252') } >Peanut Butter Pancakes
         </Text>
          <Image source={{uri: "https://dwumenp4rf1cd.cloudfront.net/wp-content/uploads/2017/04/Easy-and-Allergy-Friendly-Cucumber-and-Avocado-Sushi-Rolls-678x381.png", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Cucumber-and-Avocado-Quick-Nori-Roll-2300489') } >Nori Roll
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2016/02/53827-4539-mx.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Roast-Beef-Sandwich-with-Creamy-Horseradish-2217435') } >Roast Beef Sandwich
          </Text>
      </View>
    );
  }
};

export class Chocolate extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.averiecooks.com/wp-content/uploads/2014/01/redvelvetbarstext.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Velvet-Brownies-1238062') } >Velvet Brownies
         </Text>
          <Image source={{uri: "https://www.thefrugalnavywife.com/wp-content/uploads/2015/06/Lazy-Beef-Noodles.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Taffy-Flowers-2302396') } >Taffy Flowers
            </Text>
            <Image source={{uri: "https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Dark-Chocolate-Mousse-1507616') } >Mousse
          </Text>
      </View>
    );
  }
};

export class Meat extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.simplyrecipes.com/wp-content/uploads/2015/04/easy-beef-brisket-vertical-a2-1200.jpg", width: 100, height: 60}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.simplyrecipes.com/recipes/beef_brisket/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly') } >Beef Brisket
         </Text>
          <Image source={{uri: "https://www.thefrugalnavywife.com/wp-content/uploads/2015/06/Lazy-Beef-Noodles.jpg", width: 100, height: 60}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Lazy-Beef-_-Noodles-2501773') } >Beef & Noodles
            </Text>
            <Image source={{uri: "https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg", width: 100, height: 60}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Firecracker-Chicken-1864671') } >Firecracker Chicken
          </Text>
        <Image source={{uri: "https://www.iheartnaptime.net/wp-content/uploads/2017/05/Hawaiian-meatballs-i-heart-naptime.jpg", width: 100, height: 60}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Hawaiian-Meatballs-2345661') } >Hawaiian Meetballs
          </Text>
      </View>
    );
  }
};

export class Combinations extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Fresh-Fruit-Combo_exps170811_AC2930252A02_21_3bC_RMS-1.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Summer-Fruit-Combo-683947') } >Fruit Combo
         </Text>
          <Image source={{uri: "http://ohhappydane.com/wp-content/uploads/2015/04/IMG_4184.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Overnight-Oats-Double-Chocolate-Chia-Combo-1116260') } >Chocolate Chia Combo
            </Text>
            <Image source={{uri: "https://pinchofyum.com/wp-content/uploads/2013/05/quinoa-black-bean-1.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Southwestern-Bean-Combo-1290829') } >Bean Combo
          </Text>
      </View>
    );
  }
};

export class Others extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://belleofthekitchen.com/wp-content/uploads/2016/03/garlic-parmesan-roasted-asparagus-square.jpg", width: 100, height: 60}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Asparagus-998165') } >Asparagus
         </Text>
          <Image source={{uri: "https://www.skinnytaste.com/wp-content/uploads/2017/09/Chickpea-Avocado-Salad-1-2.jpg", width: 100, height: 60}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Avocado-Salad-2505275') } >Avocado Salad
            </Text>
            <Image source={{uri: "http://www.justsotasty.com/wp-content/uploads/2016/03/Blueberry-Crumble-Bars-2.jpg", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Blueberry-Crumb-Bars-1838585') } >Blueberry Crumb Bars
          </Text>
         <Image source={{uri: "https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201803/0027/img77l.jpg", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Roasted-Spiced-Walnuts-1575551') } >Roasted Spiced Walnuts
          </Text>
      </View>
    );
  }
};

export class ProteinVitamin extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/Salmon-con-Naranja.jpg", width: 100, height: 60}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Orange-Salmon-2060197') } >Orange Salmon
         </Text>
          <Image source={{uri: "https://www.whats4eats.com/files/fish-fish-chips-flickr-10413717%40N08-Smabs-Sputzer-9355126330-4x3.jpg", width: 100, height: 60}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/English-Fish-_n-Chips-1005960') } >English Fish & Chips
            </Text>
            <Image source={{uri: "http://3.bp.blogspot.com/-lxkVRbvXsFU/UMjSH4Owq6I/AAAAAAAACPA/I59PNux4LfE/s1600/030+vitamin+vegetable+soup.jpgZ", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Vitamin-Soup-1445401') } >Vitamin Soup
          </Text>
         <Image source={{uri: "https://img-aws.ehowcdn.com/350x235p/photos.demandstudios.com/227/57/fotolia_9512288_XS.jpg", width: 100, height: 60}} />
           <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Vitamin-C-Fruit-Smoothie-2546565') } >Vitamin Fruit Smoothie
          </Text>
      </View>
    );
  }
};

export class Salty extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F07%2F12%2Fpork-medallions-ck-1687641-x.jpg%3Fitok%3DVzWQhviK&w=1000&c=sc&poi=face&q=70", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Easy-Pork-Medallions-With-Maple-balsamic-Sauce-2526300') } >Pork Medallions
         </Text>
          <Image source={{uri: "https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/14/03/cant-believe-its-vegan-chili-ck-x.jpg?itok=tiavMceC", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Accidentally-Awesome-Vegan-Chili-With-No-Weird-Ingredients-2465773') } >Vegan Chili
            </Text>
            <Image source={{uri: "https://barefeetinthekitchen.com/wp-content/uploads/2015/12/crispy-cheese-bacon-potatoes-7.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Cheese-and-Bacon-Potatoes-2245614') } >Cheese&Bacon Potatoes
          </Text>
      </View>
    );
  }
};

export class Soft extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://s-media-cache-ak0.pinimg.com/originals/f7/35/80/f73580b26ffb1ebea3872779b7b2842e.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Soft-Homemade-Slider-Buns-2181607') } >Soft Slider Buns
         </Text>
          <Image source={{uri: "https://bakingamoment.com/wp-content/uploads/2018/08/IMG_9365-best-monster-cookies-square.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Soft-Monster-Cookies-1801838') } >Soft Monster Cookies
            </Text>
            <Image source={{uri: "https://barefeetinthekitchen.com/wp-content/uploads/2015/12/crispy-cheese-bacon-potatoes-7.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Cheese-and-Bacon-Potatoes-2245614') } >Cheese&Bacon Potatoes
          </Text>
      </View>
    );
  }
};

export class Starch extends Component{
  render(){
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://strengthandsunshine.com/wp-content/uploads/2018/10/Air-Fryer-Potato-Latkes-1.jpg", width: 130, height: 80}} />
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Crispy-Air-Fryer-Gluten-Free-Vegan-Potato-Latkes-_Allergy-Free_-Paleo_-2583328') } >Potato Latkes
         </Text>
          <Image source={{uri: "https://pbs.twimg.com/media/C6ilebbVsAAfEwH.jpg", width: 130, height: 80}} />
          <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Fereni-Starch-Pudding-Allrecipes') } >Fereni Starch Pudding
            </Text>
            <Image source={{uri: "https://cdn.cdkitchen.com/recipes/images/2016/02/53827-4539-mx.jpg", width: 130, height: 80}} />
       <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.yummly.com/recipe/Wheat-Starch-Dough-Wrappers-1532172') } >Wheat Dough Wrappers
          </Text>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container:{
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextStyle: {
    color: '#000080',
    textDecorationLine: 'underline'
  }
});
