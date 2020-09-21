
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
          best_time_for_use:"Night",
          more_info:"Users can treat medical conditions such as anxiety and insomnia, the relaxing euphoria easing their mind and either alleviating their anxiety or helping lull them into a relaxed sleep. Those suffering chronic pain can also find relief when using $100 OG Kush. The strain is also used to treat muscle spasms and tremors. For those who need a boost in appetite, $100 OG Kush is a great choice as it tends to stimulate the appetite effectively, and may also be used to alleviate Gastrointestinal Disorder. Others may use it to treat symptoms of Bipolar Disorder, Attention Deficit Disorder (ADD) and Attention Deficit Hyperactivity Disorder (ADHD).",
        },
        {
          id: 2, 
          strain_name: '3D CBD', 
          type: 'Sativa', 
          thc_content:'8%',
          cbd_content:'18%',
          best_time_for_use:'Morning',
          more_info:'Common usage for insomina, migranes and arthritis.',
        },
        {
          id: 3, 
          strain_name: 'Fruity Pebbles', 
          type: 'Indica', 
          thc_content:'23%',
          cbd_content:'19%',
          best_time_for_use:'Afternoon',
          more_info:'Most cannabis strains sold under the label Fruity Pebbles provides a hybrid-type high that takes hold quickly, with a soft but strong body buzz that can provide relaxation and some psychedelic effects. In general, these strains may be effective medication for pain, mood disorders, migraines, and attention deficit disorders.',
        },
        {
          id: 4,
          strain_name: "A-Train",
          type: "Hybrid",
          thc_content: "20%",
          cbd_content: "",
          best_time_for_use: "Night",
          more_info: "Common usage for depression, loss of apetite and anxiety."
      },
      {
        id: 5,
        strain_name: "Zelly's Gift",
        type: "Sativa",
        thc_content: "18%",
        cbd_content: "",
        best_time_for_use: "Morning",
        more_info: "Depending on how you look at it, Zelly’s Gift could be offering up a variety of presents to your life including great flavors, happiness, creativity, or relief from mental woes. We don’t want to say she’s perfect, but she nearly is. Enjoy this strain before you head into the office for the day or share some with friends before you head out for a fun weekend adventure."
    },
    {
        id: 6,
        strain_name: "Mango Sapphire",
        type: "Indica",
        thc_content: "23%",
        cbd_content: "1%",
        best_time_for_use: "Afternoon",
        more_info: "Common usage for depression, loss of apetite and anxiety."
    },
    {
      id: 7,
      strain_name: "Girl Scout Cookies",
      type: "Indica",
      thc_content: "28%",
      cbd_content: "1%",
      best_time_for_use: "Night",
      more_info: "First and foremost, this is a great strain for treating chronic pain, inflammation, muscle tension, and cramps. Its highly sedative properties will have you feeling relief in no time. Additionally, many use this strain as a stress reliever. The tranquilizer-like feeling of this bud puts you in a place of complete relaxation, slaying stress and even getting you ready for a good night’s sleep."
  },
  {
      id: 8,
      strain_name: "Nurse Jackie",
      type: "Sativa",
      thc_content: "24%",
      cbd_content: "",
      best_time_for_use: "Morning",
      more_info: "Common usage for depression, pain and nausea."
  },
  {
      id: 9,
      strain_name: "Blue Dream",
      type: "Hybrid",
      thc_content: "27%",
      cbd_content: "2%",
      best_time_for_use: "Afternoon",
      more_info: "Users who suffer from anxiety disorders are not recommended to use this strain as it has a tendency to get ahead of you quickly and could definitely agitate pre-existing conditions."
  },
  {
      id: 10,
      strain_name: "X Wing",
      type: "Indica",
      thc_content: "26%",
      cbd_content: "",
      best_time_for_use: "Night",
      more_info: "With an astronomically high average of 26% THC, this is a strong, albeit happy, high that will have you floating around a field of creativity after just one hit."
  },
      ]);
    });
};
