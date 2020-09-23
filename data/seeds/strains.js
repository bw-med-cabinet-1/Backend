
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strains').del()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        {
          id: 1, 
          strain: "100-Og", 
          type: "hybrid", 
          rating: 4.0,
          effects:"creative,energetic,tingly,euphoric,relaxed",
          flavors:"earthy,sweet,citrus",
          description:"$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side.",
        },
        {
          id: 2, 
          strain: "98-white-widow", 
          type: "hybrid", 
          rating: 4.7,
          effects:"relaxed, aroused, creative, happy,energetic",
          flavors:"flowery, violet, diesel",
          description:"The ‘98 Aloha White Widow is an especially potent cut of White Widow that has grown in renown alongside Hawaiian legends like Maui Wowie and Kona Gold. This White Widow phenotype reeks of diesel and skunk and has a rich earthy taste with intermittent notes of hash. Its buds are coated in trichomes, giving its dark foliage a lustrous glint to go along with its room-filling odor. This one-hitter-quitter uplifts the mind with mind-bending euphoria that materializes in the body as airy relaxation. ‘98 Aloha White Widow is available from Pua Mana 1st Hawaiian Pakalōlō Seed Bank.",
        },
        {
          id: 3, 
          strain: "1024", 
          type: "sativa", 
          rating: 4.4,
          effects:"uplifted, happy, relaxed, energetic,creative",
          flavors:"spicy/herbal, sage, woody",
          description:"1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co. The breeders claim to guard the secret genetics due to security reasons, but regardless of its genetic heritage, 1024 is a THC powerhouse with a sweet and spicy bouquet. Subtle fruit flavors mix with an herbal musk to produce uplifting sativa effects. One specific phenotype is noted for having a pungent odor that fills a room, similar to burning incense.",
        },
        {
          id: 4, 
          strain: "13-dawgs", 
          type: "hybrid", 
          rating: 4.2,
          effects:"tingly, creative, hungry, relaxed, uplifted",
          flavors:"apricot, citrus, grapefruit",
          description:"13 Dawgs is a hybrid of G13 and Chemdawg genetics bred by Canadian LP Delta 9 BioTech. The two potent strains mix to create a balance between indica and sativa effects. 13 Dawgs has a sweet earthy musk that brings a blend of woody citrus flavors. The effects of 13 Dawgs induce a happy, relaxed body buzz with a creative and focused mind that counters depression and stimulates the appetite.",
        },
        {
          id: 5, 
          strain: "24K-gold", 
          type: "hybrid", 
          rating: 4.6,
          effects:"happy, relaxed, euphoric, uplifted,talkative",
          flavors:"citrus, earthy, orange",
          description:"Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%; definitely not for novice users!",
        },
      ]);
    });
};
