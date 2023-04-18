export const CDNN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://www.springerstudios.com/web/wpc/uploads/2020/02/Eat_Local_Logo_Design_Thumb.jpg";

export const API_URL_SWIGGY =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&page_type=DESKTOP_WEB_LISTING";

export const API_URL_MENU =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7605545&lng=83.3731675&restaurantId=";

/*
export const resList = 
{
  "statusCode": 0,
  "data": {
    "cacheExpiryTime": 320,
    "pages": 1,
    "pageIndex": 0,
    "scrubber": 0,
    "filters": [
      {
        "type": "FilterWidget",
        "title": "Cuisines",
        "key": "CUISINES",
        "configType": "checkbox",
        "visible": 1,
        "options": [
          {
            "option": "American",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Arabian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Bakery",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Barbecue",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Beverages",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Biryani",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Burgers",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Cafe",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Chaat",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Chinese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Continental",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Desserts",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Fast Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Healthy Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Hyderabadi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Ice Cream",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Ice Cream Cakes",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Italian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Italian-American",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Kebabs",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Lucknowi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Maharashtrian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mexican",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mughlai",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "North Eastern",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "North Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pan-Asian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pastas",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pizzas",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Punjabi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Salads",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Sindhi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Snacks",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "South Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Street Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Sweets",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Tandoor",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Thai",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Thalis",
            "selected": 0,
            "visible": 1
          }
        ],
        "detail": "",
        "heading": "Cuisines",
        "applicable": 1,
        "searchable": 1
      },
      {
        "type": "FilterWidget",
        "title": "Show Restaurants With",
        "key": "SHOW_RESTAURANTS_WITH",
        "configType": "checkbox",
        "visible": 1,
        "options": [
          {
            "option": "Offers",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pure Veg",
            "selected": 0,
            "visible": 1
          }
        ],
        "detail": "",
        "heading": "Offers & More",
        "applicable": 1,
        "searchable": 0
      }
    ],
    "sorts": [
      {
        "type": "SortWidget",
        "key": "RELEVANCE",
        "title": "Relevance",
        "selected": 1,
        "visible": 1,
        "defaultSelection": true
      },
      {
        "type": "SortWidget",
        "key": "DELIVERY_TIME",
        "title": "Delivery Time",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "RATING",
        "title": "Rating",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "COST_FOR_TWO",
        "title": "Cost: Low to High",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "COST_FOR_TWO_H2L",
        "title": "Cost: High to Low",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      }
    ],
    "configs": {
      "ribbons": {
        "PREORDER": {
          "type": "PREORDER",
          "text": "Preorder",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#af2330",
          "priority": 3
        },
        "EXCLUSIVE": {
          "type": "EXCLUSIVE",
          "text": "Exclusive",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#fa4a5b",
          "bottomBackgroundColor": "#d12a3b",
          "priority": 2
        },
        "NEW": {
          "type": "NEW",
          "text": "Newly Added",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#af2330",
          "priority": 4
        },
        "REPEAT": {
          "type": "REPEAT",
          "text": "Repeat",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#D53D4C",
          "bottomBackgroundColor": "#B02331",
          "priority": 6
        },
        "CLOUD": {
          "type": "CLOUD",
          "text": "Daily Menus",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#fa4a5b",
          "bottomBackgroundColor": "#d12a3b",
          "priority": 5
        },
        "PREMIUM": {
          "type": "PREMIUM",
          "text": "Premium",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#8a584b",
          "bottomBackgroundColor": "#583229",
          "priority": 7
        },
        "PROMOTED": {
          "type": "PROMOTED",
          "text": "Promoted",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#3a3c41",
          "bottomBackgroundColor": "#1e2023",
          "priority": 1
        }
      },
      "croutons": {
        "SPECIAL": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "High Demand",
          "message": "Surge fee of Rs ${amount} may be applicable"
        }
      }
    },
    "cards": [
      {
        "cardType": "carousel",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "carousel",
          "subtype": "topCarousel",
          "data": {
            "cards": [
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 635529,
                  "creativeId": "rng/md/carousel/production/pneknawbadtvceqzwiep",
                  "type": "restaurantCollectionV2",
                  "link": "49301",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 304993,
                  "creativeId": "rng/md/carousel/production/lori508m4xps01tnywxf",
                  "type": "restaurantCollectionV2",
                  "link": "47670",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181635,
                  "creativeId": "rng/md/carousel/production/yparhmxrby5lv0ubsel4",
                  "type": "restaurantCollectionV2",
                  "link": "56413",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181633,
                  "creativeId": "rng/md/carousel/production/dpqcjrxwruipnt1wyqnh",
                  "type": "restaurantCollectionV2",
                  "link": "56422",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181629,
                  "creativeId": "rng/md/carousel/production/lyn9at38gjithnogzfui",
                  "type": "restaurantCollectionV2",
                  "link": "56417",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181630,
                  "creativeId": "rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb",
                  "type": "restaurantCollectionV2",
                  "link": "56414",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 607188,
                  "creativeId": "rng/md/carousel/production/oxe97jexxbnxqtbhg2zo",
                  "type": "restaurantCollectionV2",
                  "link": "11740",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 607195,
                  "creativeId": "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
                  "type": "restaurantCollectionV2",
                  "link": "56421",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              }
            ]
          }
        },
        "parentWidget": false
      },
      {
        "cardType": "carousel",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "carousel",
          "subtype": "openFilter",
          "data": {
            "cards": [
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181684,
                  "creativeId": "bkhjfipzydkoqncrxpyi",
                  "type": "restaurantCollectionV2",
                  "link": "11718",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Offers Near You",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Offers Near You",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "eyperwsfhaoa5vktjtu4",
                  "dwebOpenFilterDeselectIcon": "urw8usdf4mk9aywd59gq"
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181680,
                  "creativeId": "a3jqjjod5taken7dh1bs",
                  "type": "restaurantCollectionV2",
                  "link": "11721",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Veg Only",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Vegetarian Options",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "qtjc8dzfexg72lug37a0",
                  "dwebOpenFilterDeselectIcon": "bm8bziikwyvwqsml1clm"
                }
              }
            ]
          }
        },
        "parentWidget": false
      },
      {
        "cardType": "seeAllRestaurants",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "seeAllRestaurants",
          "data": {
            "title": "SEE ALL",
            "totalOpenRestaurants": 351,
            "cards": [
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "600045",
                  "name": "Biryani By Kilo",
                  "uuid": "a7daf56a-eb4b-444f-9567-da419cba7510",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "p9gyhpujqtm1d3lo2aeq",
                  "cuisines": [
                    "Biryani",
                    "Hyderabadi",
                    "North Indian",
                    "Kebabs",
                    "Mughlai",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 70000,
                  "costForTwoString": "₹700 FOR TWO",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "slaString": "36 MINS",
                  "lastMileTravel": 0.4000000059604645,
                  "slugs": {
                    "restaurant": "biryani-by-kilo-gorakhpur-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "First Floor, Plot No 1073, Dharamshala Road, Gorakhpur, Gorakhpur Tahsil, Gorakhpur, Uttar Pradesh-273001",
                  "locality": "Dharamshala Road",
                  "parentId": 130,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FLAT125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6384739~p=1~eid=00000187-6ecf-8b2e-26f9-ad8100130120",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "600045",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 0.4000000059604645,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.1",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "297310",
                  "name": "Diamond Pizza",
                  "uuid": "ba6106f7-f6b5-4606-ad1a-575f036a4735",
                  "city": "117",
                  "area": "Miyan Baza",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "gaplfjku9bmv63qyuvtr",
                  "cuisines": [
                    "Pizzas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 37,
                  "minDeliveryTime": 37,
                  "maxDeliveryTime": 37,
                  "slaString": "37 MINS",
                  "lastMileTravel": 2,
                  "slugs": {
                    "restaurant": "diamonds\tpizza-golghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "MEWATIPUR NEAR DAVO FOODS PVT. LTD. GHOSH COMPANY, Raiganj, Zone No-2, Gorakhpur, Uttar Pradesh - 273001",
                  "locality": "Mewatipur",
                  "parentId": 72427,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FLAT125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "297310",
                    "deliveryTime": 37,
                    "minDeliveryTime": 37,
                    "maxDeliveryTime": 37,
                    "lastMileTravel": 2,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.7",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "98550",
                  "name": "Chowdhry Sweet House",
                  "uuid": "99de0428-4606-415f-a20f-af3c7c94b477",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "bhzkaqtksabwd2ula6cs",
                  "cuisines": [
                    "Sweets",
                    "North Indian",
                    "Chinese",
                    "South Indian",
                    "Continental"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 38,
                  "minDeliveryTime": 38,
                  "maxDeliveryTime": 38,
                  "slaString": "38 MINS",
                  "lastMileTravel": 1.100000023841858,
                  "slugs": {
                    "restaurant": "chowdhary-sweet-house-golghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "opposite vijay cinema  vijay chowk  gorakhpur",
                  "locality": "Vijay Chowk",
                  "parentId": 62950,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "98550",
                    "deliveryTime": 38,
                    "minDeliveryTime": 38,
                    "maxDeliveryTime": 38,
                    "lastMileTravel": 1.100000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.0",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "433399",
                  "name": "KFC",
                  "uuid": "a7389d8c-3d1f-4a1b-b433-a29e7de7a412",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                  "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 30,
                  "slaString": "30 MINS",
                  "lastMileTravel": 1,
                  "slugs": {
                    "restaurant": "kfc-gorakhpur-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "KFC Gorakhpur City Mall Ground Floor Shop No 1& 2, first floor shop no 10, city Mall, 6 Civil Lines, Park Road, Gorakhpur 273001",
                  "locality": "Gorakhpur City Mall",
                  "parentId": 547,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 on select items | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6386627~p=4~eid=00000187-6ecf-8b2e-26f9-ad8200130409",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "433399",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "lastMileTravel": 1,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.9",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "96857",
                  "name": "Singh Biryani Corner",
                  "uuid": "d6f9beb1-78e8-422e-8fe1-8d89e8d5ca8f",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "pf0xq0hkfqdncdxlyy3w",
                  "cuisines": [
                    "North Indian",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 22,
                  "minDeliveryTime": 22,
                  "maxDeliveryTime": 22,
                  "slaString": "22 MINS",
                  "lastMileTravel": 0.6000000238418579,
                  "slugs": {
                    "restaurant": "singh-biryani-corner-gol-ghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Golghar  Gorakhpur  Uttar Pradesh",
                  "locality": "Arya Nagar",
                  "parentId": 188386,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "96857",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 0.6000000238418579,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.6",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "96858",
                  "name": "Sher-E-Punjab Hotel Since 1965",
                  "uuid": "05c46bda-4c9b-4124-bb73-90f2ae695dd4",
                  "city": "117",
                  "area": "Miyan Baza",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "hbb1l8pv33zpazdhnspw",
                  "cuisines": [
                    "North Indian",
                    "Mughlai",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 0.6000000238418579,
                  "slugs": {
                    "restaurant": "sher-e-punjab-gol-ghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Ganesh Chauraha  Cinema Road Gol Ghar Gorakhpur",
                  "locality": "Cinema Road",
                  "parentId": 182848,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "96858",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 0.6000000238418579,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.6",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "389320",
                  "name": "Biryani Palace",
                  "uuid": "04f940a2-7dee-4cac-94d4-5e84a7638564",
                  "city": "117",
                  "area": "Rajendra Nagar",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "uigt66qzsgebzcpab1ao",
                  "cuisines": [
                    "Biryani",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 48,
                  "minDeliveryTime": 48,
                  "maxDeliveryTime": 48,
                  "slaString": "48 MINS",
                  "lastMileTravel": 4.099999904632568,
                  "slugs": {
                    "restaurant": "biryani-palace-golghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Nathmalpur, Tilak Nagar, Thana- Gorakhnath, Gorakhpur, Uttar Pradesh-273001",
                  "locality": "Tilak Nagar",
                  "parentId": 7511,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                      {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6459984~p=7~eid=00000187-6ecf-8b2e-26f9-ad8300130713",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "389320",
                    "deliveryTime": 48,
                    "minDeliveryTime": 48,
                    "maxDeliveryTime": 48,
                    "lastMileTravel": 4.099999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.1",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "97528",
                  "name": "Singh Burger",
                  "uuid": "c8b89b84-2ab2-4e9f-96a9-9b10e4770713",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "omh162apf9eh7px7q58u",
                  "cuisines": [
                    "Burgers",
                    "Chinese",
                    "South Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "slaString": "29 MINS",
                  "lastMileTravel": 1.100000023841858,
                  "slugs": {
                    "restaurant": "singh-burger-gol-ghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Opp Indira Bal Vihar Gol Gahr gorakhpur",
                  "locality": "Bal Vihar Road",
                  "parentId": 188392,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use JUMBO",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹100 on orders above ₹450 | Use code JUMBO",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use JUMBO",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹100 on orders above ₹450 | Use code JUMBO",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "97528",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 1.100000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.1",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "388020",
                  "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                  "uuid": "a8a8d7f4-2b93-4458-96d1-0ae486048870",
                  "city": "117",
                  "area": "Shahpur",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "lkmnthe5wtk0t0yaroia",
                  "cuisines": [
                    "Desserts",
                    "Ice Cream",
                    "Ice Cream Cakes"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "slaString": "24 MINS",
                  "lastMileTravel": 1.2999999523162842,
                  "slugs": {
                    "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-gorakhnath-gorakhnath-3",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "SHREE JAI COMMUNICATION AND GIFT CORNER: Dilezakpur, Post-Sadar, Thana Kotwali, Gorakhpur, Uttar Pradesh-273001",
                  "locality": "Rajbi Road",
                  "parentId": 582,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "10% off",
                    "shortDescriptionList": [
                      {
                        "meta": "10% off | Use SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 on select items | Use code SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "10% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 on select items | Use code SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6392209~p=16~eid=00000187-6ecf-8b2e-26f9-ad8600131013",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "388020",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.6",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "327895",
                  "name": "Famous Paratha",
                  "uuid": "f5ec15ac-cad3-4ee3-8e0f-ddce4887af9b",
                  "city": "117",
                  "area": "Kawwa Bagh Colony",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "b1ff8c1e1c7f19431a4b7875a7709c07",
                  "cuisines": [
                    "North Indian",
                    "Continental",
                    "Punjabi"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 0.699999988079071,
                  "slugs": {
                    "restaurant": "famous-paratha-golghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "SHOP NO. M G 04 SAUNDARIKARAN YOJANA ,RAILWAY STATOIN ROAD GORAKHPUR, Zone No-1, Gorakhpur (Uttar Pradesh), - 273012",
                  "locality": "Railway Statoin Road",
                  "parentId": 78488,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                      {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "327895",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 0.699999988079071,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.3",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "115343",
                  "name": "Quality Jalpan",
                  "uuid": "cd8879d8-1f33-418f-b407-46ed27322244",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "a5yxtpipcfqrvtvhjyys",
                  "cuisines": [
                    "North Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 1.2000000476837158,
                  "slugs": {
                    "restaurant": "quality-jalpan-golghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Shop No  16  Near by Bank of Baroda   Golghar  Gorakhpur",
                  "locality": "Belipar Road",
                  "parentId": 163305,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "10% off",
                    "shortDescriptionList": [
                      {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "10% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "115343",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.0",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "213218",
                  "name": "Adalat Handi Meat",
                  "uuid": "88502130-8999-4e77-a47f-da40a2e006aa",
                  "city": "117",
                  "area": "Kunraghat",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "m9ksag4fquixemnuxcxz",
                  "cuisines": [
                    "Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 39,
                  "minDeliveryTime": 39,
                  "maxDeliveryTime": 39,
                  "slaString": "39 MINS",
                  "lastMileTravel": 4.800000190734863,
                  "slugs": {
                    "restaurant": "adalat-handi-meat-kuraghat-kuraghat",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Adalat handi meat  Gorakhpur Kushinagar Road  Mahadev Jharkhandi  Awas Vikas Colony  Kunraghat  Gorakhpur  Uttar Pradesh  India",
                  "locality": "Awas Vikas Colony",
                  "parentId": 26923,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "FLAT125 off",
                    "shortDescriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "FLAT125 off | Use FLATDEAL",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3400,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3400,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3400",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6372626~p=13~eid=00000187-6ecf-8b2e-26f9-ad8500130d29",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "213218",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 4.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.6",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "97511",
                  "name": "Ganesh Misthan",
                  "uuid": "97958efe-8d4a-4681-8294-7bedc8a4d440",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "1cb09977ea460df6f83b0f5f2ffe80a1",
                  "cuisines": [
                    "Sweets",
                    "North Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 0.6000000238418579,
                  "slugs": {
                    "restaurant": "ganesh-misthan-gol-ghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Opp Post Office Park Road  Golghar  Gorakhpur",
                  "locality": "Park Road",
                  "parentId": 85991,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "10% off",
                    "shortDescriptionList": [
                      {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "10% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "97511",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 0.6000000238418579,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "608965",
                  "name": "GetAWay-Desserts",
                  "uuid": "e8a84bd0-fe97-4bec-9517-05e5b58c9b5b",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "l5ickveicykkjrooglxx",
                  "cuisines": [
                    "Healthy Food",
                    "Ice Cream",
                    "Desserts",
                    "Sweets"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 15000,
                  "costForTwoString": "₹150 FOR TWO",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "slaString": "26 MINS",
                  "lastMileTravel": 0.4000000059604645,
                  "slugs": {
                    "restaurant": "getawhey-healthy-ice-creams-gorakhpur-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "Biryani By Kilo, First Floor, Plot no. 1073, Dharamshala Road, Gorakhpur, Uttar Pradesh - 273001, India",
                  "locality": "Dharamshala Road",
                  "parentId": 354819,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "608965",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "lastMileTravel": 0.4000000059604645,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "303370",
                  "name": "La Pino'z Pizza",
                  "uuid": "399d80d9-d2ea-4d3d-beff-e2be7d95508d",
                  "city": "117",
                  "area": "Golghar",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "uu1dc6mbmbmkwtb1zhq5",
                  "cuisines": [
                    "Italian",
                    "Pizzas",
                    "Pastas",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "slaString": "31 MINS",
                  "lastMileTravel": 0.699999988079071,
                  "slugs": {
                    "restaurant": "la-pino'z-pizza-golghar-golghar",
                    "city": "gorakhpur"
                  },
                  "cityState": "117",
                  "address": "La Pino'z Pizza, Ground floor, City Hub, Cinema Road, Golghar Gorakhpur 273001 Uttar Pradesh",
                  "locality": "Cinema Road",
                  "parentId": 4961,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "303370",
                    "deliveryTime": 31,
                    "minDeliveryTime": 31,
                    "maxDeliveryTime": 31,
                    "lastMileTravel": 0.699999988079071,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              }
            ],
            "totalRestaurants": 351
          },
          "subtype": "personalized"
        },
        "parentWidget": false
      }
    ],
    "nextPageFetch": 0
  },
  "tid": "fc9639ad-e2ac-49f4-b0cd-97559a5a7fe3",
  "sid": "6fkb0cd6-ae6e-4ddb-9118-de407d47033e",
  "deviceId": "c370b4b4-00c4-bc37-067c-4695aaec76dd",
  "csrfToken": "eTuVPGv8wIHo-Vtz-a5WWHJSJyPY_wJjE3WQkfN4"
}
*/
