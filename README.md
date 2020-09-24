# Backend
Medicine Cabinet

## Documentation

Base URL for deployed API: https://bw-medicine-cabinet.herokuapp.com/

## **Endpoints**

| Method | URL | Description | Requires Token | Requires Admin |
|--------|-----|-------------|----------------|----------------|
| POST | /api/auth/register | register a new user | - | - |
| POST | /api/auth/login | login as existing user | - | - |
| POST | /api/strains | create a new strain | X | - |
| GET | /api/strains | gets all strains and their info | X | - |
| GET | /api/strains/:id | gets a specific strain by id | X | - |
| PUT | /api/strains/:id | edit a strain | X | X |
| DELETE | /api/strains/:id | delete a strain from database | X | X |

## **Table Requirements**

## **Users**

| Name | Type | Required | Unique | Notes |
|------|------|----------|--------|-------|
| id | integer | yes | yes | auto generated by the API |
| username | string | yes | yes | - |
| password | string | yes | no | - |
| role | boolean | no | no | 0 or 1 is the same as false and true, you can use either

Note: you must be registered and logged in to access the strains list/database

# **Strains**

| Name | Type | Required | Unique | Notes |
|------|------|----------|--------|-------|
| id | integer | yes | yes | auto generated by the API |
| strain_id | string| yes | yes | should come from DS? |
| strain | string | yes | yes | - |
| type | string | yes | no | could be either Hybrid, Sativa or Indica |
| rating | integer | yes | no | - |
| effects | text | yes | no | - |
| flavors | text | yes | no | - |
| description | text | yes | no | add more information about this strain |

## **Logins**

If i need to update the database at any point during the week all users made up until that point will be deleted. These logins will always be available to use.
| username | password |
| ----- | -------- |
| user | password |
| admin | password |

## **Requests and Returns**

### POST /api/auth/register
Request body:
```
{
    "username":"bea",
    "password":"password",
    "role": 0
}
```
Returns:
```
{
    "message": "user successfulled registered",
    "data": {
        "id": 4,
        "username": "bea",
        "password": "$2a$08$9BPGvk/6XQMRjKxed.B3tOIZsiLLkAdbBNbMAC8M61.EebIV.RQF2",
        "role": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlYSIsInJvbGUiOjAsInN1YmplY3QiOjQsImlhdCI6MTYwMDY2MDA5MSwiZXhwIjoxNjAwNjg4ODkxfQ.2M72kjDnqbXDwpKjfhdo3726zTQemDXht2SCL_l6RcM"
}
```

### POST /api/auth/login
Request body:
```
{
    "username":"user",
    "password":"password"
}
```
Returns:
```
{
    "message": "Welcome!",
    "user": {
        "id": 2,
        "username": "user",
        "password": "$2a$04$Ks3ueUHeiMI8Gi3N6uIvpuQddV9J9MGzLL0gtbU1Vwkbcy5z30UZS",
        "role": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJyb2xlIjowLCJzdWJqZWN0IjoyLCJpYXQiOjE2MDA2OTI3NzEsImV4cCI6MTYwMDcyMTU3MX0.t33fLygVQ8Qo1SvmrcxVe77HXfxfw3fosNKLn9rVy0Y"
}
```

### POST /api/strains
Request body:
```
{
    "strain": "new sstrain",
    "type": "hybrid",
    "rating": 4,
    "effects": "creative,energetic,tingly,euphoric,relaxed",
    "flavors": "earthy,sweet,citrus",
    "description": "Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side."
}
```
Returns:
```
{"message": "strain successfully created",
    "rez": {
        "strain": "new sstrain",
        "type": "hybrid",
        "rating": 4,
        "effects": "creative,energetic,tingly,euphoric,relaxed",
        "flavors": "earthy,sweet,citrus",
        "description": "Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side."
        }
}
```

### GET /api/strains/
Returns:
```
{
    "strains": [
            {
            "id": 1,
            "strain_id": null,
            "strain": "100-Og",
            "type": "hybrid",
            "rating": 4,
            "effects": "creative,energetic,tingly,euphoric,relaxed",
            "flavors": "earthy,sweet,citrus",
            "description": "$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side."
        },
        {
            "id": 2,
            "strain_id": null,
            "strain": "98-white-widow",
            "type": "hybrid",
            "rating": 4.7,
            "effects": "relaxed, aroused, creative, happy,energetic",
            "flavors": "flowery, violet, diesel",
            "description": "The ‘98 Aloha White Widow is an especially potent cut of White Widow that has grown in renown alongside Hawaiian legends like Maui Wowie and Kona Gold. This White Widow phenotype reeks of diesel and skunk and has a rich earthy taste with intermittent notes of hash. Its buds are coated in trichomes, giving its dark foliage a lustrous glint to go along with its room-filling odor. This one-hitter-quitter uplifts the mind with mind-bending euphoria that materializes in the body as airy relaxation. ‘98 Aloha White Widow is available from Pua Mana 1st Hawaiian Pakalōlō Seed Bank."
        },
        {
            "id": 3,
            "strain_id": null,
            "strain": "1024",
            "type": "sativa",
            "rating": 4.4,
            "effects": "uplifted, happy, relaxed, energetic,creative",
            "flavors": "spicy/herbal, sage, woody",
            "description": "1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co. The breeders claim to guard the secret genetics due to security reasons, but regardless of its genetic heritage, 1024 is a THC powerhouse with a sweet and spicy bouquet. Subtle fruit flavors mix with an herbal musk to produce uplifting sativa effects. One specific phenotype is noted for having a pungent odor that fills a room, similar to burning incense."
        },
        {
            "id": 4,
            "strain_id": null,
            "strain": "13-dawgs",
            "type": "hybrid",
            "rating": 4.2,
            "effects": "tingly, creative, hungry, relaxed, uplifted",
            "flavors": "apricot, citrus, grapefruit",
            "description": "13 Dawgs is a hybrid of G13 and Chemdawg genetics bred by Canadian LP Delta 9 BioTech. The two potent strains mix to create a balance between indica and sativa effects. 13 Dawgs has a sweet earthy musk that brings a blend of woody citrus flavors. The effects of 13 Dawgs induce a happy, relaxed body buzz with a creative and focused mind that counters depression and stimulates the appetite."
        },
        {
            "id": 5,
            "strain_id": null,
            "strain": "24K-gold",
            "type": "hybrid",
            "rating": 4.6,
            "effects": "happy, relaxed, euphoric, uplifted,talkative",
            "flavors": "citrus, earthy, orange",
            "description": "Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%; definitely not for novice users!"
        }
    ]
}
```

### GET /api/strains/:id
Returns:
```
{
    "id": 5,
    "strain_id": null,
    "strain": "24K-gold",
    "type": "hybrid",
    "rating": 4.6,
    "effects": "happy, relaxed, euphoric, uplifted,talkative",
    "flavors": "citrus, earthy, orange",
    "description": "Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%; definitely not for novice users!"
}
```

### PUT /api/strains/:id
Request body:
```
{
    "id": 5,
    "strain_id": null,
    "strain": "24K-gold",
    "type": "hybrid",
    "rating": 4.6,
    "effects": "happy, relaxed, euphoric, uplifted,talkative",
    "flavors": "citrus, earthy, orange",
    "description": "THC levels range from 18% to 24%; definitely not for novice users!"
}
```
Returns:
```
{
    "message": "strain successfully updated",
    "rez": {
        "id": 1,
        "strain_name": "$100 OG Kush",
        "type": "Hybrid",
        "thc_content": "25%",
        "cbd_content": "",
        "symptoms": "anxiety, chronic pain, insomnia, muscle spasms, tremors",
        "effects": "relaxation, boost in appetite",
        "description": ""
    }
}
```

### DELETE /api/strains/:id
Returns:
```
{
    "message": "this strain was successfully deleted",
    "rez": {
        "id": 5,
        "strain_id": null,
        "strain": "24K-gold",
        "type": "hybrid",
        "rating": 4.6,
        "effects": "happy, relaxed, euphoric, uplifted,talkative",
        "flavors": "citrus, earthy, orange",
        "description": "THC levels range from 18% to 24%; definitely not for novice users!"
    }
}
```