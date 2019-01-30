export const sampleESResponse = {
  took: 12,
  timed_out: false,
  _shards: {
    total: 10,
    successful: 10,
    failed: 0
  },
  hits: {
    total: 11,
    max_score: 8.085318,
    hits: [
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '798847604de2fb6cd83c1cc39708e4c6',
        _score: 8.085318,
        _source: {
          'Vessel Name': 'COSCO ASIA',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': '',
          'Conveyance ID': '9345403',
          'Manifest Unit': 'CTN',
          'Voyage Number': '056E',
          Containers: [
            {
              'Seal Numbers': ['7934614'],
              Cargoes: [
                {
                  Keywords: ['hat'],
                  'Piece Count': 11,
                  Description: 'HAT'
                },
                {
                  Keywords: ['plastic ball'],
                  'Piece Count': 1060,
                  Description: 'PLASTIC BALL'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS NO MARKS'],
              Type: '40 Foot Dry Container, Opening at one or both end',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'FCIU9510812'
            }
          ],
          'Run Date': 1535760000,
          'Arrival Date': 1535673600,
          'Port of Destination': '',
          'Place of Receipt': 'NINGBO',
          'Vessel Country': 'PA',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'a59dbe43608805d5f0c597f032ac7c5a',
          Shipper: {
            _id: '1f109428e819176130ef66b1fdba1ac9',
            Name: 'YIWU REDFOREST TRADING CO.,LIMITED',
            Address:
              'UNIT A6,9/F SILVERCORP INTERNATIONA KOWLOON . HONG KONG TE31158545'
          },
          'Foreign Port of Lading': 'Ningpo',
          'Manifest Quantity': 1071,
          'Foreign Port of Lading ID': '73603b3c54b7daf7d9e7d8ffb2c26b46',
          'Bill of Lading Number': 'COSU6184300680',
          Carrier: {
            City: 'SECAUCUS',
            Code: 'COSU',
            Name: 'CHINA OCEAN SHIPPING COMPANY',
            Country: '',
            'Zip Code': '07094',
            State: 'NJ',
            Address: '100 LIGHTINGWAY'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '598163',
          'Number of Containers': 1,
          'Bill Type': 'Regular Bill',
          'Estimated Arrival Date': 1535241600,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'AVE',
              PlaceName: 'ALHAMBRA',
              StateName: 'CA',
              ZipCode: '91801',
              CountryName: 'USA',
              StreetNamePreDirectional: 'SOUTH',
              AddressNumber: '801',
              StreetName: 'GARFIELD'
            },
            'Cleaned Address':
              '801 SOUTH GARFIELD AVE, ALHAMBRA, CA 91801, USA',
            _id: 'a88372e03ee1c26cceeaf1dd1b4fa88b',
            Name: 'GRAND OCEAN CUSTOMS BROKERAGE INCOR',
            Address:
              'SUITE 301 801 SOUTH GARFIELD AVENUE ALHAMBRA CA 91801 UNITED STATESTE4588862 4588862'
          },
          Weight: 16495,
          'Measurement Unit': 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'ST',
              PlaceName: 'VERNON CALIFORNIA CITY',
              StateName: 'CA',
              ZipCode: '90058',
              CountryName: 'USA',
              StreetNamePreDirectional: 'EAST',
              AddressNumber: '2323',
              StreetName: '52ND'
            },
            'Cleaned Address':
              '2323 EAST 52ND ST, VERNON CALIFORNIA CITY, CA 90058, USA',
            _id: '23350d1c87dfff272acc3184b326587f',
            Name: 'APPLE STAR ENTERPRISE',
            Address:
              '2323 E 52ND ST VERNON CALIFORNIA CITY CA 90058 UNITED STATES TE5888822'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1535328000,
          Measurement: 68,
          'Port of Unlading': 'Long Beach, California'
        },
        sort: ['YIWU REDFOREST TRADING CO.,LIMITED', 8.085318]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '27318bb5331cc4d26ebadf8b589c73e6',
        _score: 8.061739,
        _source: {
          'Vessel Name': 'COSCO EUROPE',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': '',
          'Conveyance ID': '9345415',
          'Manifest Unit': 'CTN',
          'Voyage Number': '061E',
          Containers: [
            {
              'Seal Numbers': ['8323787'],
              Cargoes: [
                {
                  Keywords: ['hat'],
                  'Piece Count': 324,
                  Description: 'HAT'
                },
                {
                  Keywords: ['windmill'],
                  'Piece Count': 678,
                  Description: 'WINDMILL'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Passive vents at upper part of cargo space',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'CBHU8833999'
            }
          ],
          'Run Date': 1534982400,
          'Arrival Date': 1534896000,
          'Port of Destination': '',
          'Place of Receipt': 'NINGBO',
          'Vessel Country': 'PA',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'a59dbe43608805d5f0c597f032ac7c5a',
          Shipper: {
            _id: '1f109428e819176130ef66b1fdba1ac9',
            Name: 'YIWU REDFOREST TRADING CO.,LIMITED',
            Address:
              'UNIT A6,9/F SILVERCORP INTERNATIONA KOWLOON . HONG KONG TE31158545'
          },
          'Foreign Port of Lading': 'Ningpo',
          'Manifest Quantity': 1002,
          'Foreign Port of Lading ID': '73603b3c54b7daf7d9e7d8ffb2c26b46',
          'Bill of Lading Number': 'COSU6184300580',
          Carrier: {
            City: 'SECAUCUS',
            Code: 'COSU',
            Name: 'CHINA OCEAN SHIPPING COMPANY',
            Country: '',
            'Zip Code': '07094',
            State: 'NJ',
            Address: '100 LIGHTING WAY'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '598217',
          'Number of Containers': 1,
          'Bill Type': 'Regular Bill',
          'Estimated Arrival Date': 1534636800,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'AVE',
              PlaceName: 'ALHAMBRA',
              StateName: 'CA',
              ZipCode: '91801',
              CountryName: 'USA',
              StreetNamePreDirectional: 'SOUTH',
              AddressNumber: '801',
              StreetName: 'GARFIELD'
            },
            'Cleaned Address':
              '801 SOUTH GARFIELD AVE, ALHAMBRA, CA 91801, USA',
            _id: 'a88372e03ee1c26cceeaf1dd1b4fa88b',
            Name: 'GRAND OCEANCUSTOMS BROKERAGE INCOR',
            Address:
              'SUITE 301 801 SOUTH GARFIELD AVENUE ALHAMBRA CA 91801 UNITED STATES TE4588862 4588862'
          },
          Weight: 15005,
          'Measurement Unit': 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'ST',
              PlaceName: 'VERNON CALIFORNIA CITY',
              StateName: 'CA',
              ZipCode: '90058',
              CountryName: 'USA',
              StreetNamePreDirectional: 'EAST',
              AddressNumber: '2323',
              StreetName: '52ND'
            },
            'Cleaned Address':
              '2323 EAST 52ND ST, VERNON CALIFORNIA CITY, CA 90058, USA',
            _id: '23350d1c87dfff272acc3184b326587f',
            Name: 'APPLE STAR ENTERPRISE',
            Address:
              '2323 E 52ND ST VERNON CALIFORNIA CITY CA 90058 UNITED STATES TE5888822'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1534291200,
          Measurement: 68,
          'Port of Unlading': 'Long Beach, California'
        },
        sort: ['YIWU REDFOREST TRADING CO.,LIMITED', 8.061739]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'c7e599134a65572fd304c292224d308f',
        _score: 8.0545435,
        _source: {
          'Vessel Name': 'COSCO ASIA',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': '',
          'Conveyance ID': '9345403',
          'Manifest Unit': 'CTN',
          'Voyage Number': '056E',
          Containers: [
            {
              'Seal Numbers': ['7934672'],
              Cargoes: [
                {
                  Keywords: ['hat'],
                  'Piece Count': 195,
                  Description: 'HAT'
                },
                {
                  Keywords: ['key chain'],
                  'Piece Count': 191,
                  Description: 'KEY CHAIN'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS NO MARKS'],
              Type: '40 Foot Dry Container, Opening at one or both end',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'CSNU7047817'
            }
          ],
          'Run Date': 1535760000,
          'Arrival Date': 1535673600,
          'Port of Destination': '',
          'Place of Receipt': 'NINGBO',
          'Vessel Country': 'PA',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'a59dbe43608805d5f0c597f032ac7c5a',
          Shipper: {
            _id: '1f109428e819176130ef66b1fdba1ac9',
            Name: 'YIWU REDFOREST TRADING CO.,LIMITED',
            Address:
              'UNIT A6,9/F SILVERCORP INTERNATIONA KOWLOON . HONG KONG TE31158545'
          },
          'Foreign Port of Lading': 'Ningpo',
          'Manifest Quantity': 386,
          'Foreign Port of Lading ID': '73603b3c54b7daf7d9e7d8ffb2c26b46',
          'Bill of Lading Number': 'COSU6184300720',
          Carrier: {
            City: 'SECAUCUS',
            Code: 'COSU',
            Name: 'CHINA OCEAN SHIPPING COMPANY',
            Country: '',
            'Zip Code': '07094',
            State: 'NJ',
            Address: '100 LIGHTING WAY'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '598163',
          'Number of Containers': 1,
          'Bill Type': 'Regular Bill',
          'Estimated Arrival Date': 1535241600,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'AVE',
              PlaceName: 'ALHAMBRA',
              StateName: 'CA',
              ZipCode: '91801',
              CountryName: 'USA',
              StreetNamePreDirectional: 'SOUTH',
              AddressNumber: '801',
              StreetName: 'GARFIELD'
            },
            'Cleaned Address': '801 SOUTH GARFIELD AVE, ALHAMBRA,CA 91801, USA',
            _id: 'a88372e03ee1c26cceeaf1dd1b4fa88b',
            Name: 'GRAND OCEAN CUSTOMS BROKERAGE INCOR',
            Address:
              'SUITE 301 801 SOUTH GARFIELD AVENUE ALHAMBRA CA 91801 UNITED STATES TE4588862 4588862'
          },
          Weight: 6522,
          'Measurement Unit': 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'ST',
              PlaceName: 'VERNON CALIFORNIA CITY',
              StateName: 'CA',
              ZipCode: '90058',
              CountryName: 'USA',
              StreetNamePreDirectional: 'EAST',
              AddressNumber: '2323',
              StreetName: '52ND'
            },
            'Cleaned Address':
              '2323 EAST 52ND ST, VERNON CALIFORNIA CITY, CA 90058, USA',
            _id: '23350d1c87dfff272acc3184b326587f',
            Name: 'APPLE STAR ENTERPRISE',
            Address:
              '2323 E 52ND ST VERNON CALIFORNIA CITY CA 90058 UNITED STATES TE5888822'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1535328000,
          Measurement: 68,
          'Port of Unlading': 'Long Beach, California'
        },
        sort: ['YIWU REDFOREST TRADING CO.,LIMITED', 8.0545435]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'bfabf43fd3f710b69e71b433834d21d6',
        _score: 8.020551,
        _source: {
          'Vessel Name': 'COSCO EUROPE',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': '',
          'Conveyance ID': '9345415',
          'Manifest Unit': 'CTN',
          'Voyage Number': '061E',
          Containers: [
            {
              'Seal Numbers': ['8323795'],
              Cargoes: [
                {
                  Keywords: ['hat'],
                  'Piece Count': 306,
                  Description: 'HAT'
                },
                {
                  Keywords: ['windmill'],
                  'Piece Count': 582,
                  Description: 'WINDMILL'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS NO MARKS'],
              Type:
                '40 Foot Ventilated Container, Passive vents at upper part of cargo space. Total vent cross-section area < 25cm2/m of nominal length',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'CRSU9294366'
            }
          ],
          'Run Date': 1534982400,
          'Arrival Date': 1534896000,
          'Port of Destination': '',
          'Place of Receipt': 'NINGBO',
          'Vessel Country': 'PA',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'a59dbe43608805d5f0c597f032ac7c5a',
          Shipper: {
            _id: '1f109428e819176130ef66b1fdba1ac9',
            Name: 'YIWU REDFOREST TRADING CO.,LIMITED',
            Address:
              'UNIT A6,9/F SILVERCORP INTERNATIONA KOWLOON. HONG KONG TE31158545'
          },
          'Foreign Port of Lading': 'Ningpo',
          'Manifest Quantity': 888,
          'Foreign Port of Lading ID': '73603b3c54b7daf7d9e7d8ffb2c26b46',
          'Bill of Lading Number': 'COSU6184300570',
          Carrier: {
            City: 'SECAUCUS',
            Code: 'COSU',
            Name: 'CHINA OCEAN SHIPPING COMPANY',
            Country: '',
            'Zip Code': '07094',
            State: 'NJ',
            Address: '100 LIGHTING WAY'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '598217',
          'Number of Containers': 1,
          'Bill Type': 'Regular Bill',
          'Estimated Arrival Date': 1534636800,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'AVE',
              PlaceName: 'ALHAMBRA',
              StateName: 'CA',
              ZipCode: '91801',
              CountryName: 'USA',
              StreetNamePreDirectional: 'SOUTH',
              AddressNumber: '801',
              StreetName: 'GARFIELD'
            },
            'Cleaned Address':
              '801 SOUTH GARFIELD AVE, ALHAMBRA, CA 91801, USA',
            _id: 'a88372e03ee1c26cceeaf1dd1b4fa88b',
            Name: 'GRAND OCEAN CUSTOMS BROKERAGE INCOR',
            Address:
              'SUITE 301 801 SOUTH GARFIELD AVENUE ALHAMBRA CA 91801 UNITED STATES TE4588862 4588862'
          },
          Weight: 14086,
          'Measurement Unit': 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'ST',
              PlaceName: 'VERNON CALIFORNIA CITY',
              StateName: 'CA',
              ZipCode: '90058',
              CountryName: 'USA',
              StreetNamePreDirectional: 'EAST',
              AddressNumber: '2323',
              StreetName: '52ND'
            },
            'Cleaned Address':
              '2323 EAST 52ND ST, VERNON CALIFORNIA CITY, CA 90058, USA',
            _id: '23350d1c87dfff272acc3184b326587f',
            Name: 'APPLE STAR ENTERPRISE',
            Address:
              '2323 E 52ND ST VERNON CALIFORNIA CITY CA 90058 UNITED STATES TE5888822'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1534291200,
          Measurement: 68,
          'Port of Unlading': 'Long Beach,California'
        },
        sort: ['YIWU REDFOREST TRADING CO.,LIMITED', 8.020551]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'ddb2a44b0b6e177a4da5ca32db286e9d',
        _score: 8.020551,
        _source: {
          'Vessel Name': 'EVER ENVOY',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': '',
          'Conveyance ID': '9241308',
          'Manifest Unit': 'CTN',
          'Voyage Number': '1050E',
          Containers: [
            {
              'Seal Numbers': ['CD954697'],
              Cargoes: [
                {
                  Keywords: ['plastic toys'],
                  'Piece Count': 403,
                  Description: 'PLASTIC TOYS'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS'],
              Type:
                '40 Foot Ventilated Container, Passive vents atupper part of cargo space. Total vent cross-section area < 25cm2/m of nominal length',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'CAIU4791663'
            }
          ],
          'Run Date': 1536105600,
          'Arrival Date': 1536019200,
          'Port of Destination': '',
          'Place of Receipt': 'YANTIAN',
          'Vessel Country': 'GB',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'b8003d5a69e263a1ed97050b6be7f4ba',
          Shipper: {
            _id: '1f109428e819176130ef66b1fdba1ac9',
            Name: 'YIWU REDFOREST TRADING CO.,LIMITED',
            Address:
              'UNIT A6,9/F SILVERCORP INTERNATIONA KOWLOON . HONG KONG TE31158545'
          },
          'Foreign Port of Lading': 'Yantian',
          'Manifest Quantity': 403,
          'Foreign Port of Lading ID': 'b4f1318343e0feb9d5c2e6d79ebade82',
          'Bill of Lading Number': 'COSU6188682690',
          Carrier: {
            City: 'SECAUCUS',
            Code: 'COSU',
            Name: 'CHINA OCEAN SHIPPING COMPANY',
            Country: '',
            'Zip Code': '07094',
            State: 'NJ',
            Address: '100 LIGHTING WAY'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '598090',
          'Number of Containers': 1,
          'Bill Type': 'Regular Bill',
          'Estimated Arrival Date': 1535846400,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'AVE',
              PlaceName: 'ALHAMBRA',
              StateName: 'CA',
              ZipCode: '91801',
              CountryName: 'USA',
              StreetNamePreDirectional: 'SOUTH',
              AddressNumber: '801',
              StreetName: 'GARFIELD'
            },
            'Cleaned Address':
              '801 SOUTH GARFIELD AVE, ALHAMBRA, CA 91801, USA',
            _id: 'a88372e03ee1c26cceeaf1dd1b4fa88b',
            Name: 'GRAND OCEAN CUSTOMS BROKERAGE INCOR',
            Address:
              'SUITE 301 801 SOUTH GARFIELD AVENUE ALHAMBRA CA 91801 UNITED STATES TE4588862 4588862'
          },
          Weight: 6830,
          MeasurementUnit: 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'ST',
              PlaceName: 'VERNON CALIFORNIA CITY',
              StateName: 'CA',
              ZipCode: '90058',
              CountryName: 'USA',
              StreetNamePreDirectional: 'EAST',
              AddressNumber: '2323',
              StreetName: '52ND'
            },
            'Cleaned Address':
              '2323 EAST 52ND ST, VERNON CALIFORNIA CITY, CA 90058, USA',
            _id: '23350d1c87dfff272acc3184b326587f',
            Name: 'APPLE STAR ENTERPRISE',
            Address:
              '2323 E 52ND ST VERNON CALIFORNIA CITY CA 90058 UNITED STATES TE5888822'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1535500800,
          Measurement: 68,
          'Port of Unlading': 'Los Angeles, California'
        },
        sort: ['YIWU REDFOREST TRADING CO.,LIMITED', 8.020551]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '21f006efe7b262a0de68ff1e3441a5c6',
        _score: 8.0415745,
        _source: {
          'Vessel Name': 'MOL BEACON',
          'Mode of Transportation': 'Vessel, non-container',
          'Country of Origin': 'Hong Kong',
          'Second Notify Party': '',
          'Conveyance ID': '9713337',
          'Manifest Unit': 'CTN',
          'Voyage Number': '023E',
          Containers: [
            {
              'Seal Numbers': ['MOL402097N'],
              Cargoes: [
                {
                  Keywords: ['womens leather', 'tote bag', 'snap closure'],
                  'Piece Count': 38,
                  Description: 'WOMENS LEATHER, TOTE BAG, WITH SNAP CLOSURE,'
                },
                {
                  Keywords: ['womens plastic sheeting handba g shell'],
                  'Piece Count': 8,
                  Description: 'WOMENS PLASTIC SHEETING HANDBA G SHELL 100S'
                },
                {
                  Keywords: ['mens mmf tote bag shell face'],
                  'Piece Count': 49,
                  Description: 'MENS MMF TOTE BAG SHELL FACE 100 POLYESTER S'
                },
                {
                  Keywords: ['womens leather handbag shell'],
                  'Piece Count': 32,
                  Description: 'WOMENS LEATHER HANDBAG SHELL 100 COW LEATHER'
                },
                {
                  Keywords: ['womens plastic sheeting wristlet shell'],
                  'Piece Count': 6,
                  Description: 'WOMENS PLASTIC SHEETING WRISTLET SHELL 100 S'
                },
                {
                  Keywords: ['womens plastic sheeting wristlet shell'],
                  'Piece Count': 3,
                  Description: 'WOMENS PLASTIC SHEETING WRISTLET SHELL 100 S'
                }
              ],
              Width: 802,
              Length: 4000,
              'Equipment Description': '00',
              Marks: [
                '000000026 3685 NORTH GAP DRIVE FRESNO CA 9372 US PO PREPACKSTYLE SIZE QTY TOTAL PACK 000000026 3685 NORTH GAP DRIVE FRESNO CA 9377 US PO PREPACK STYLE SIZE QTY TOTAL PACS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9327 USPO PREPACK STYLE SIZE QTY TOTAL PAKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9727 US PO PREPACK STYLE SIZE QTY TOTAL P',
                'CKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 3727 US PO PREPACK STYLE SIZE QTY TOTAL ACKS 000000026 3685 NORTH GAP DRIVE FRESNO CA93727 US PO PREPACK STYLE SIZE QTY TOTALPACKS 000000026 3685 000000026 3685 NORTH GAP DRIVE FRESNO CA 9372 US PO PREPACK STYLE SIZE QTY TOTAL PACK',
                '000000026 3685 NORTH GAP DRIVE FRESNO CA 9377 US PO PREPACK STYLE SIZE QTY TOTAL PACS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9327 US PO PREPACK STYLE SIZE QTY TOTAL PAKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9727 US PO PREPACK STYLE SIZEQTY TOTAL PCKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 3727 US PO PREPACK STYLE SIZE QTY TOTAL',
                'ACKS 000000026 3685 NORTH GAP DRIVE FRESNO CA93727 US PO PREPACK STYLE SIZE QTY TOTALPACKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9372 US PO PREPACK STYLE SIZE QTY TOTAL PACK 000000026 3685 NORTH GAP DRIVE FRESNO CA 9377 US PO PREPACK STYLE SIZE QTY TOTAL PACS 000000026 3685 NORTH GAP DRIVE FRESNO CA 93',
                '27 US PO PREPACK STYLE SIZE QTY TOTAL PAKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9727 US PO PREPACK STYLE SIZE QTY TOTAL PCKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 3727 US PO PREPACK STYLE SIZE QTY TOTAL ACKS 000000026 3685 NORTH GAP DRIVE FRESNO CA93727 US PO PREPACK STYLE SIZE QTY TOTALPACKS',
                '000000026 3685 NORTH GAP DRIVE FRESNO CA 9372 US PO PREPACK STYLE SIZE QTY TOTAL PACK 000000026 3685 NORTH GAP DRIVE FRESNO CA 9377 US PO PREPACK STYLE SIZE QTY TOTAL PACS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9327 US PO PREPACK STYLE SIZE QTY TOTAL PAKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 9727 US PO PREPACK STYLE SIZE QTY TOTAL P',
                'CKS 000000026 3685 NORTH GAP DRIVE FRESNO CA 3727 US PO PREPACK STYLE SIZE QTY TOTAL ACKS 000000026 3685 NORTH GAP DRIVE FRESNO CA93727 US PO PREPACK STYLE SIZE QTY TOTALPACKS STYLE SIZE'
              ],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'Container Yard',
              Height: 907,
              'Container Number': 'KKFU7589056'
            }
          ],
          'Run Date': 1535068800,
          'Arrival Date': 1534982400,
          'Port of Destination': '',
          'Place of Receipt': 'HONG KONG',
          'Vessel Country': 'HK',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Portof Unlading ID': 'a59dbe43608805d5f0c597f032ac7c5a',
          Shipper: {
            _id: '1d9c658fe90cce114be2beb2aec7c8b2',
            Name: 'TRENER INDUSTRIES LTD',
            Address: '. 12 F,WING TAIFACTORY BUILDING HONG KONG 999077 HK'
          },
          'Foreign Port of Lading': 'Hong Kong',
          'Manifest Quantity': 136,
          'Foreign Port of Lading ID': '8b476ff778119b8d49588f3daadf69a1',
          'Bill of Lading Number': 'ONEYHKGUG2114402',
          Carrier: {
            City: 'TORONTO',
            Code: 'ONEY',
            Name: 'ORATEL NETWORKS',
            Country: 'CANADA',
            'Zip Code': 'M5X 1C7',
            State: 'ON',
            Address: '100 KING STREET WEST SUITE 5700'
          },
          'Country of Origin ID': '8b476ff778119b8d49588f3daadf69a1',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'Regular Bill',
          'Estimated Arrival Date': 1534896000,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'ST',
              PlaceName: 'SAVANNAH',
              StateName: 'GA',
              ZipCode: '31401',
              CountryName: 'USA',
              StreetNamePreDirectional: 'EAST',
              AddressNumber: '2',
              StreetName: 'BRYAN'
            },
            'Cleaned Address': '2 EAST BRYAN ST,SAVANNAH, GA 31401, USA',
            _id: '334cdd89d06666664f930d3346ca5b4e',
            Name: 'EXPEDITORS INT L - SAVANNAH',
            Address: '. 2 E BRYAN ST SAVANNAH GA 31401 US'
          },
          Weight: 1019,
          'Measurement Unit': 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'STREET',
              PlaceName: 'SAN FRANCISCO SAN FRANCISCO',
              StateName: 'CA',
              ZipCode: '94105',
              CountryName: 'USA',
              AddressNumber: '2',
              StreetName: 'FOLSOM'
            },
            'Cleaned Address':
              '2 FOLSOM STREET, SAN FRANCISCO SAN FRANCISCO, CA 94105, USA',
            _id: '507c2dc6c7a2bfecffa1d25d049fe144',
            Name: 'BANANA REPUBLIC LLCV',
            Address:
              '. 2 FOLSOM STREET SAN FRANCISCO, SAN FRANCISCO CA 94105 US'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1533081600,
          Measurement: 10,
          'Port of Unlading': 'Long Beach, California'
        },
        sort: ['TRENER INDUSTRIES LTD', 8.0415745]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '8e9a02711cb8f4f3904c08b5c13a7b81',
        _score: 5.9934163,
        _source: {
          'Vessel Name': 'MOL BRILLIANCE',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'ONEY',
          'Conveyance ID': 'MOL BRILLIANCE',
          'Manifest Unit': 'CTN',
          'Voyage Number': '025E',
          Containers: [
            {
              'Seal Numbers': ['CNAB51781'],
              Cargoes: [
                {
                  Keywords: ['mouse lithium battery'],
                  'Piece Count': 1350,
                  Description: 'MOUSE WITH LITHIUM BATTERY'
                }
              ],
              Width: 802,
              Length: 4000,
              'Equipment Description': '00',
              Marks: ['PNMLA02LLA'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'Container Yard',
              Height: 806,
              'Container Number': 'MOFU6710231'
            }
          ],
          'Run Date': 1535673600,
          'Arrival Date': 1535587200,
          'Port of Destination': '',
          'Place of Receipt': 'CN',
          'Vessel Country': 'HK',
          'Master Bill of Lading Number': 'ONEYHKGUG7782600',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'a59dbe43608805d5f0c597f032ac7c5a',
          Shipper: {
            _id: '2e18a8996c0d5d0a2fe35f4db0b6c6a5',
            Name: 'PRIMAX ELECTRONICS LTD',
            Address:
              'LIU WU DISTRICT, SANHENG ROAD XINCHENG DISTRICT, SHEK KIT TOWN DONGGUAN GUANGDONG CN'
          },
          'Foreign Port of Lading': 'Yantian',
          'Manifest Quantity': 1350,
          'Foreign Port of Lading ID': 'b4f1318343e0feb9d5c2e6d79ebade82',
          'Bill of Lading Number': 'FTNVSZOAPM000559',
          Carrier: {
            City: 'BUFFALO',
            Code: 'FTNV',
            Name: 'FEDEX TRADE NETWORKS TRANSPORT & BROKERAGE INC',
            Country: '',
            'Zip Code': '14207',
            State: 'NY',
            Address: '128 DEARBORN STREET'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535414400,
          Weight: 4415,
          'Measurement Unit': 'X',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'RD',
              PlaceName: 'RIALTO',
              StateName: 'CA',
              ZipCode: '92376',
              CountryName: 'USA',
              StreetNamePreDirectional: 'WEST',
              AddressNumber: '1710',
              StreetName: 'BASE LINE'
            },
            'Cleaned Address': '1710 WEST BASE LINE RD, RIALTO, CA 92376, USA',
            _id: 'f0fa095822e62d3d1c642a0fcfc073b9',
            Name: 'APPLE COMPUTER, INC. C/O OHL',
            Address:
              '1710 W BASE LINE RD, SUITE 300 RIALTO CA 92376 USA RIALTO CA 92376 US'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1533772800,
          Measurement: 28,
          'Port of Unlading': 'Long Beach, California'
        },
        sort: ['PRIMAX ELECTRONICS LTD', 5.9934163]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '65584653365fcdf943a70bb211342d35',
        _score: 5.9934163,
        _source: {
          'Vessel Name': 'MOL BEACON',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'YMLU',
          'Conveyance ID': 'MOL BEACON',
          'Manifest Unit': 'CTN',
          'Voyage Number': '023E',
          Containers: [
            {
              'Seal Numbers': ['YMAB425571'],
              Cargoes: [
                {
                  Keywords: ['mouse trackpad lithium battery'],
                  'Piece Count': 1348,
                  Description: 'MOUSE AND TRACKPAD WITH LITHIUM BATTERY'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': '  ',
              Marks: ['PNMJ2R2LLA MLA02LLA'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'TCNU3803064'
            }
          ],
          'Run Date': 1535068800,
          'Arrival Date': 1534982400,
          'Port of Destination': '',
          'Place of Receipt': 'CN',
          'Vessel Country': 'HK',
          'Master Bill of Lading Number': 'YMLUW302289667',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'a59dbe43608805d5f0c597f032ac7c5a',
          Shipper: {
            _id: '2e18a8996c0d5d0a2fe35f4db0b6c6a5',
            Name: 'PRIMAX ELECTRONICS LTD',
            Address: 'LIU WU DISTRICT SHEK KIT TOWN DONGGUAN GUANGDONG CN'
          },
          'Foreign Port of Lading': 'Yantian',
          'Manifest Quantity': 1348,
          'Foreign Port of Lading ID': 'b4f1318343e0feb9d5c2e6d79ebade82',
          'Bill of Lading Number': 'FTNVSZOAPM000555',
          Carrier: {
            City: 'BUFFALO',
            Code: 'FTNV',
            Name: 'FEDEX TRADE NETWORKS TRANSPORT & BROKERAGE INC',
            Country: '',
            'Zip Code': '14207',
            State: 'NY',
            Address: '128 DEARBORN STREET'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1534809600,
          Weight: 4818,
          'Measurement Unit': 'X',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'RD',
              PlaceName: 'RIALTO',
              StateName: 'CA',
              ZipCode: '92376',
              CountryName: 'USA',
              StreetNamePreDirectional: 'WEST',
              AddressNumber: '1710',
              StreetName: 'BASE LINE'
            },
            'Cleaned Address': '1710 WEST BASE LINE RD, RIALTO, CA 92376, USA',
            _id: 'f0fa095822e62d3d1c642a0fcfc073b9',
            Name: 'APPLE COMPUTER, INC. C/O OHL',
            Address:
              '1710 W BASE LINE RD, SUITE 300 RIALTO CA 92376 USA RIALTO CA 92376 US'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1533168000,
          Measurement: 27,
          'Port of Unlading': 'Long Beach, California'
        },
        sort: ['PRIMAX ELECTRONICS LTD', 5.9934163]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '93522f60a950fb58eea9314dec3e3366',
        _score: 7.091108,
        _source: {
          'Vessel Name': 'ARCHIMIDIS',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'Germany',
          'Second Notify Party': 'MEDU',
          'Conveyance ID': 'ARCHIMIDIS',
          'Manifest Unit': 'PKG',
          'Voyage Number': '834W',
          Containers: [
            {
              'Seal Numbers': ['PR994505'],
              Cargoes: [
                {
                  Keywords: ['new forum seats'],
                  'Piece Count': 16,
                  Description: 'NEW FORUM SEATS'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['AS ADDRESSED'],
              Type:
                '40 Foot Ventilated Container, Passive vents at upper part of cargospace. Total vent cross-section area < 25cm2/m of nominal length',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'CAIU7393410'
            }
          ],
          'Run Date': 1536192000,
          'Arrival Date': 1536105600,
          'Port of Destination': '',
          'Place of Receipt': 'AHAUS',
          'Vessel Country': 'LR',
          'Master Bill of Lading Number': 'MEDUBM025921',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': '9854065fc326b076e63b4ef618a3aa0c',
          Shipper: {
            _id: '101dbae62ecad7187e9d882ce2afba50',
            Name: 'DULA WERKE DUSTMAN & CO KG',
            Address: 'MAX-PLACK-STRASSE 8 VREDEN 48691 DE'
          },
          'Foreign Port of Lading': 'Bremerhaven',
          'Manifest Quantity': 16,
          'Foreign Port of Lading ID': '8d6105d0508b65125c483d7aab26b3b3',
          'Bill of Lading Number': 'PYRDDUS186338786',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'd8b00929dec65d422303256336ada04f',
          'Manifest Number': '114384',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535932800,
          Weight: 3524,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'HWY',
              PlaceName: 'AUBURN',
              StateName: 'WA',
              ZipCode: '98001',
              CountryName: 'USA',
              StreetNamePreDirectional: 'WEST',
              AddressNumber: '3102',
              StreetName: 'VALLEY'
            },
            'Cleaned Address': '3102 WEST VALLEY HWY, AUBURN, WA 98001, USA',
            _id: '92fa5c74c8d62668aa8f3c100857fac5',
            Name: 'APPLE RETAIL STORE ALEDENWOOD MALL',
            Address: '3102 WEST VALLEY HWY N AUBURN WA98001 US'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1534291200,
          Measurement: 0,
          'Port of Unlading': 'New York/Newark Area, Newark, New Jersey'
        },
        sort: ['DULA WERKE DUSTMAN & CO KG', 7.091108]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'bd020edb99949ecbd3c34611b7e14931',
        _score: 7.9910746,
        _source: {
          'Vessel Name': 'YM MASCULINITY',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'Hong Kong',
          'Second Notify Party': 'ONEY',
          'Conveyance ID': 'YM MASCULINITY',
          'Manifest Unit': 'CTN',
          'Voyage Number': '052E',
          Containers: [
            {
              'Seal Numbers': ['MOL406905N'],
              Cargoes: [
                {
                  Keywords: ['lids'],
                  'HS Code': 'HS Code 3923 5000',
                  'Piece Count': 12,
                  Description:
                    'LIDS HS:392350PLASTIC CUP HS:392410TEAHS:0 90230SPOON HS:392410'
                }
              ],
              Width: 802,
              Length: 4000,
              'Equipment Description': '41',
              Marks: ['GOLDEN BANANA, INCSAN FRANCISCO'],
              Type:
                '40 Foot Integral Reefer Container, Mechanically refrigerated',
              'Load Status': 'Loaded',
              'Type Of Service': 'Container Yard',
              Height: 907,
              'Container Number': 'MORU1135646'
            }
          ],
          'Run Date': 1536278400,
          'Arrival Date': 1536105600,
          'Port of Destination': '',
          'Place of Receipt': 'HONGKONG',
          'Vessel Country': 'LR',
          'Master Bill of Lading Number': 'ONEYSZPU70424900',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': '3ae2c6fc62401d656eee5f520d178920',
          Shipper: {
            _id: 'b8ae1140785ba6c8be74d40c8aad55ca',
            Name: 'DONGGUAN DUOJIE PAPERAND PLASTIC CO',
            Address:
              'BAO AN WEIINDUSTRIAL ZONE, GAO BUT OWN,DONGGUAN CITY,CHINA .'
          },
          'Foreign Port of Lading': 'Hong Kong',
          'Manifest Quantity': 12,
          'Foreign Port of Lading ID': '8b476ff778119b8d49588f3daadf69a1',
          'Bill of Lading Number': 'MGNGSFO18080650',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': '8b476ff778119b8d49588f3daadf69a1',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535673600,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'AVE',
              PlaceName: 'SAN FRANCISCO',
              StateName: 'CA',
              ZipCode: '94122',
              CountryName: 'USA',
              AddressNumber: '1746',
              StreetName: '24TH'
            },
            'Cleaned Address': '1746 24TH AVE, SAN FRANCISCO, CA 94122, USA',
            _id: '88d7b4403e6c16c67a5b35e035d018a6',
            Name: 'GOLDEN BANANA, INC',
            Address: '1746 24TH AVE, SAN FRANCISCO ,CA,US A 94122 CODE: 94122 .'
          },
          Weight: 138,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'AVE',
              PlaceName: 'SAN FRANCISCO',
              StateName: 'CA',
              ZipCode: '94122',
              CountryName: 'USA',
              AddressNumber: '1746',
              StreetName: '24TH'
            },
            'Cleaned Address': '1746 24TH AVE, SAN FRANCISCO, CA 94122, USA',
            _id: '88d7b4403e6c16c67a5b35e035d018a6',
            Name: 'GOLDEN BANANA, INC',
            Address: '1746 24TH AVE, SAN FRANCISCO ,CA,US A 94122 CODE: 94122 .'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1533772800,
          Measurement: 0,
          'Port of Unlading': 'Oakland, California'
        },
        sort: ['DONGGUAN DUOJIE PAPERAND PLASTIC CO', 7.9910746]
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'db4461d0d00c470cfd0ed29c789e1bc0',
        _score: 8.0415745,
        _source: {
          'Vessel Name': 'YM UNICORN',
          'Mode of Transportation': 'Vessel, non-container',
          'Country of Origin': 'China',
          'Second Notify Party': '',
          'Conveyance ID': '9462732',
          'Manifest Unit': 'CTN',
          'Voyage Number': '031E',
          Containers: [
            {
              'Seal Numbers': ['CNA370768'],
              Cargoes: [
                {
                  Keywords: ['no lining women s kni'],
                  'Piece Count': 7,
                  Description: '77 WOOL 23 NYLON NO LINING WOMEN S WOOL KNI'
                }
              ],
              Width: 802,
              Length: 4500,
              'Equipment Description': '00',
              Marks: ['FDC 0026 3685 NORTH GAP DRIVE FRESNO, CA 9372 USA'],
              Type:
                '45 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'Container Yard',
              Height: 907,
              'Container Number': 'SEGU5930225'
            }
          ],
          'Run Date': 1536192000,
          'Arrival Date': 1536105600,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI, SHANGHA',
          'Vessel Country': 'TW',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'b8003d5a69e263a1ed97050b6be7f4ba',
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 7,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'ONEYSH8ELJ737951',
          Carrier: {
            City: 'TORONTO',
            Code: 'ONEY',
            Name: 'ORATEL NETWORKS',
            Country: 'CANADA',
            'Zip Code': 'M5X 1C7',
            State: 'ON',
            Address: '100 KING STREET WEST SUITE 5700'
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'Regular Bill',
          'Estimated Arrival Date': 1535673600,
          Weight: 43,
          'Measurement Unit': 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              CountryName: 'USA',
              PlaceName: 'SAN FRANCISCO',
              StateName: 'CA',
              ZipCode: '94105'
            },
            'Cleaned Address': ', SAN FRANCISCO, CA 94105, USA',
            _id: 'f9d3e6c622eec6b380fbd659b3e93b6e',
            Name: 'BANANA REPUBLIC LL',
            Address: '. SAN FRANCISCO CA 94105 US'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1534204800,
          Measurement: 0,
          'Port of Unlading': 'Los Angeles, California'
        },
        sort: [null, 8.0415745]
      }
    ]
  }
}
export default sampleESResponse
