
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strains').del()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        {
          id: 1, 
          strain_name: "$100 OG Kush", 
          type: "Hybrid", 
          thc_content:"25%",
          cbd_content:"",
          symptoms:"anxiety, chronic pain, insomnia, muscle spasms, tremors",
          effects: "relaxation, boost in appetite",
          description:"The relaxing euphoria easing their mind and either alleviating their anxiety or helping lull them into a relaxed sleep. Those suffering chronic pain can also find relief when using $100 OG Kush.",
        },
        {
          id: 2, 
          strain_name: '3D CBD', 
          type: 'Sativa', 
          thc_content:'8%',
          cbd_content:'18%',
          symptoms:"insomina, migranes, arthritis",
          effects: "Calm, Mellow",
          description:"3D CBD is a medicinal strain with mellow THC effects. The high starts off with a relaxing lift of the spirits providing the feeling of happiness and mellowed out, just kicking back and enjoying the atmosphere around you.",
        },
        {
          id: 3, 
          strain_name: 'Fruity Pebbles', 
          type: 'Indica', 
          thc_content:'23%',
          cbd_content:'19%',
          symptoms:"",
          effects: "",
          description:'Most cannabis strains sold under the label Fruity Pebbles provides a hybrid-type high that takes hold quickly, with a soft but strong body buzz that can provide relaxation and some psychedelic effects. In general, these strains may be effective medication for pain, mood disorders, migraines, and attention deficit disorders.',
        },
        {
          id: 4,
          strain_name: "A-Train",
          type: "Hybrid",
          thc_content: "20%",
          cbd_content: "",
          symptoms:"depression, loss of apetite, anxiety",
          effects: "",
          description: ""
      },
      {
        id: 5,
        strain_name: "Zelly's Gift",
        type: "Sativa",
        thc_content: "18%",
        cbd_content: "",
        symptoms:"anxiety, depression, stress",
        effects: "",
        description: "Depending on how you look at it, Zelly’s Gift could be offering up a variety of presents to your life including great flavors, happiness, creativity, or relief from mental woes. We don’t want to say she’s perfect, but she nearly is. Enjoy this strain before you head into the office for the day or share some with friends before you head out for a fun weekend adventure."
    },
      ]);
    });
};
