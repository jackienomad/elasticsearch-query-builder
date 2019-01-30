export const expectedReturnOfElasticSearch = {
  took: 84,
  timed_out: false,
  _shards: {
    total: 10,
    successful: 10,
    failed: 0
  },
  hits: {
    total: 73,
    max_score: 9.622395,
    hits: [
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '32cd9d43db4e4bb6a6e924b03a175ba8',
        _score: 9.622395,
        _source: {
          'Vessel Name': 'CMA CGM DALILA',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9450624',
          'Manifest Unit': 'PKG',
          'Voyage Number': '0VC0Z',
          Containers: [
            {
              'Seal Numbers': ['EMCMNW3348'],
              Cargoes: [
                {
                  Keywords: ['aluminium window barn vent pvc'],
                  'Piece Count': 66,
                  Description: 'ALUMINIUM WINDOW BARN VENT PVC WINDOW'
                }
              ],
              Width: 0,
              Length: 0,
              'Equipment Description': 'AC',
              Marks: ['NO MARKS'],
              Type: ' 0 Foot Container',
              'Load Status': 'Loaded',
              'Type Of Service': 'Pier to Pier',
              Height: 0,
              'Container Number': 'TCLU1829519'
            },
            {
              'Seal Numbers': ['EMCMNW3358'],
              Cargoes: [
                {
                  Keywords: ['aluminium window barn vent pvc'],
                  'Piece Count': 364,
                  Description: 'ALUMINIUM WINDOW BARN VENT PVC WINDOW'
                }
              ],
              Width: 0,
              Length: 0,
              'Equipment Description': 'AC',
              Marks: ['NO MARKS'],
              Type: ' 0 Foot Container',
              'Load Status': 'Loaded',
              'Type Of Service': 'Pier to Pier',
              Height: 0,
              'Container Number': 'XINU8152762'
            }
          ],
          'Run Date': 1535155200,
          'Arrival Date': 1535068800,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'FR',
          'Master Bill of Lading Number': 'EGLV142800825715',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'f633d7170fef2d07080fa8a2fdb94d5d',
          Shipper: {
            _id: 'e9de722b48c2429ee5382b7467cdf912',
            Name: 'HUZHOU YOU DAO IMP & EXP CO.,LTD',
            Address:
              '36-101 GOLDEN MEDITERRANEAN COMMUNITY ZHEJIANG HUZHOU 313000 CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 430,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVCGSSHA23414',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 2,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1534809600,
          Weight: 26875,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1531958400,
          Measurement: 0,
          'Port of Unlading': 'Charleston, South Carolina'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '314affc3d3339970621521978403e1a3',
        _score: 9.609712,
        _source: {
          'Vessel Name': 'CORNELIA MAERSK',
          'Mode of Transportation': 'Vessel, non-container',
          'Country of Origin': 'China',
          'Second Notify Party': 'MAEU',
          'Conveyance ID': '9245756',
          'Manifest Unit': 'CTN',
          'Voyage Number': '829E',
          Containers: [
            {
              'Seal Numbers': ['CN0212934'],
              Cargoes: [
                {
                  Keywords: ['swing kit chain'],
                  'Piece Count': 703,
                  Description: 'SWING KIT CHAIN LR03 BATT LR6 BATTERY'
                }
              ],
              Width: 802,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['N/M'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'Container Yard',
              Height: 806,
              'Container Number': 'MSKU6364031'
            }
          ],
          'Run Date': 1535328000,
          'Arrival Date': 1535241600,
          'Port of Destination': '',
          'Place of Receipt': 'NINGBO',
          'Vessel Country': 'DK',
          'Master Bill of Lading Number': 'MAEU584490268',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'e077cf532b7a35e4e11f92cd60351d33',
          Shipper: {
            _id: '54010c1e7d4bd85d871444145cb8e7b1',
            Name: 'NINGBO YINZHOU HENGLIAN',
            Address:
              'INTERNATIONAL TRADE CO.,LTD G24, NO.55-61,LANE165,CAIHONGROAD YINZHOU,NINGBO, ZHEJIANG CHINA TE87706046'
          },
          'Foreign Port of Lading': 'Ningpo',
          'Manifest Quantity': 703,
          'Foreign Port of Lading ID': '73603b3c54b7daf7d9e7d8ffb2c26b46',
          'Bill of Lading Number': 'LFFVNGB80708845',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '933435',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535241600,
          'Notify Party': {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011'
          },
          Weight: 12756,
          'Measurement Unit': 'CM',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 TE630-860-7280'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1532044800,
          Measurement: 46,
          'Port of Unlading': 'Baltimore, Maryland'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '0d51b1e4aa2b912f9fd9968b99bda00b',
        _score: 9.595141,
        _source: {
          'Vessel Name': 'CMA CGM MELISANDE',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9473028',
          'Manifest Unit': 'PKG',
          'Voyage Number': '0VC0V',
          Containers: [
            {
              'Seal Numbers': ['EMCMMR7638'],
              Cargoes: [
                {
                  Keywords: ['aluminum window pvc barn vent'],
                  'Piece Count': 498,
                  Description: 'ALUMINUM WINDOW PVC WINDOW BARN VENT'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Passive vents at upper part of cargo space',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'EITU1568236'
            },
            {
              'Seal Numbers': ['EMCMMR7628'],
              Cargoes: [
                {
                  Keywords: ['aluminum window pvc barn vent'],
                  'Piece Count': 378,
                  Description: 'ALUMINUM WINDOW PVC WINDOW BARN VENT'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Passive vents at upper part of cargo space',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'HMCU9054836'
            }
          ],
          'Run Date': 1535155200,
          'Arrival Date': 1535068800,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'MT',
          'Master Bill of Lading Number': 'EGLV142800825740',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'e077cf532b7a35e4e11f92cd60351d33',
          Shipper: {
            _id: '5ca69527818642a5a588b7ebf0145d6f',
            Name: 'HUZHOU YOU DAO IMP & EXP CO LTD',
            Address:
              '36-101 GOLDEN MEDITERRANEAN COMMUNITY HUZHOU ZHEJIANG CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 876,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVCGSSHA23403',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 2,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1534032000,
          Weight: 23352,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1530835200,
          Measurement: 0,
          'Port of Unlading': 'Baltimore, Maryland'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '82e85b3dab4fe24a4c982cfa45243d84',
        _score: 9.587973,
        _source: {
          'Vessel Name': 'CMA CGM DALILA',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9450624',
          'Manifest Unit': 'CTN',
          'Voyage Number': '0VC0Z',
          Containers: [
            {
              'Seal Numbers': ['EMCMNW3398'],
              Cargoes: [
                {
                  Keywords: ['hinges door latch'],
                  'Piece Count': 580,
                  Description: 'HINGES DOOR LATCH'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'TLLU5915146'
            },
            {
              'Seal Numbers': ['EMCMNW3388'],
              Cargoes: [
                {
                  Keywords: ['hinges door latch'],
                  'Piece Count': 909,
                  Description: 'HINGES DOOR LATCH'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'TEMU6119610'
            }
          ],
          'Run Date': 1535673600,
          'Arrival Date': 1535587200,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'FR',
          'Master Bill of Lading Number': 'EGLV142800825766',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'e077cf532b7a35e4e11f92cd60351d33',
          Shipper: {
            _id: '989ffce80eb83b7faf884798d7cfffe9',
            Name: 'GOLDEN CHAMPION BEARING CORPORATION',
            Address:
              'LTD ROOM 404 NO.10 LANE 40 GUOFENG STREET NINGBO 315012 CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 1489,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVCGSSHA23417',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 2,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535241600,
          Weight: 21130,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1531958400,
          Measurement: 0,
          'Port of Unlading': 'Baltimore, Maryland'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: '1ac20c8ac9bf324f47dacb81f93cb6b7',
        _score: 9.587096,
        _source: {
          'Vessel Name': 'APL PARIS',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'APLU',
          'Conveyance ID': '9601302',
          'Manifest Unit': 'PKG',
          'Voyage Number': '139',
          Containers: [
            {
              'Seal Numbers': ['K5341273'],
              Cargoes: [
                {
                  Keywords: ['aluminium window barn vent'],
                  'Piece Count': 340,
                  Description: 'ALUMINIUM WINDOW BARN VENT'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'Container Yard',
              Height: 900,
              'Container Number': 'CMAU4098815'
            }
          ],
          'Run Date': 1536105600,
          'Arrival Date': 1536019200,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'SG',
          'Master Bill of Lading Number': 'APLU104478539',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'd2d46008adf7fca07102a9945e59eace',
          Shipper: {
            _id: '272fe19504f5c5d8ed9863d1003a0332',
            Name: 'HUZHOU YOUDAO IMP & EXP CO.,LTD',
            Address:
              '36-101 GOLDEN MEDITERRANEAN COMMUNITY HUZHOU ZHEJIANG CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 340,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVJLSES1808006',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535241600,
          Weight: 12466,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1533772800,
          Measurement: 0,
          'Port of Unlading': 'Seattle, Washington'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'b2aabe75bf63a8bbe0cf515860ea6984',
        _score: 9.587096,
        _source: {
          'Vessel Name': 'CMA CGM DALILA',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9450624',
          'Manifest Unit': 'PKG',
          'Voyage Number': '0VC0Z',
          Containers: [
            {
              'Seal Numbers': ['EMCMNW3398'],
              Cargoes: [
                {
                  Keywords: ['hinge hex log home screw aluminum window pvc'],
                  'Piece Count': 322,
                  Description: 'HINGE HEX LOG HOME SCREW ALUMINUM WINDOW PVC .'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['WINDOW BARN VENT EYE BOLT NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'TLLU5915146'
            },
            {
              'Seal Numbers': ['EMCMNW3388'],
              Cargoes: [
                {
                  Keywords: ['hinge hex log home screw aluminum window pvc'],
                  'Piece Count': 725,
                  Description: 'HINGE HEX LOG HOME SCREW ALUMINUM WINDOW PVC .'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['WINDOW BARN VENT EYE BOLT NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'TEMU6119610'
            },
            {
              'Seal Numbers': ['EMCNFQ0957'],
              Cargoes: [
                {
                  Keywords: ['hinge hex log home screw aluminum window pvc'],
                  'Piece Count': 303,
                  Description: 'HINGE HEX LOG HOME SCREW ALUMINUM WINDOW PVC .'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['WINDOW BARN VENT EYE BOLT NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'TLLU5910421'
            }
          ],
          'Run Date': 1535673600,
          'Arrival Date': 1535587200,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'FR',
          'Master Bill of Lading Number': 'EGLV142800825766',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'e077cf532b7a35e4e11f92cd60351d33',
          Shipper: {
            _id: 'e9de722b48c2429ee5382b7467cdf912',
            Name: 'HUZHOU YOU DAO IMP & EXP CO.,LTD',
            Address:
              '36-101 GOLDEN MEDITERRANEAN COMMUNITY ZHEJIANG HUZHOU 313000 CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 1350,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVCGSSHA23413',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 3,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535241600,
          Weight: 27341,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1531958400,
          Measurement: 0,
          'Port of Unlading': 'Baltimore, Maryland'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'd5e2bffbc1e0c8f2835ebb0b29635e10',
        _score: 9.584279,
        _source: {
          'Vessel Name': 'EVER LINKING',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China Taiwan',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9629043',
          'Manifest Unit': 'CTN',
          'Voyage Number': '027E',
          Containers: [
            {
              'Seal Numbers': ['EMCNFJ2218'],
              Cargoes: [
                {
                  Keywords: ['screw'],
                  'Piece Count': 1488,
                  Description: 'SCREW'
                }
              ],
              Width: 0,
              Length: 0,
              'Equipment Description': 'AC',
              Marks: ['NO MARKS'],
              Type: ' 0 Foot Container',
              'Load Status': 'Loaded',
              'Type Of Service': 'Pier to Pier',
              Height: 0,
              'Container Number': 'EITU0042545'
            }
          ],
          'Run Date': 1535673600,
          'Arrival Date': 1535587200,
          'Port of Destination': '',
          'Place of Receipt': 'KAOHSIUNG TAIWAN',
          'Vessel Country': 'GB',
          'Master Bill of Lading Number': 'EGLV003802007176',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'e077cf532b7a35e4e11f92cd60351d33',
          Shipper: {
            _id: '83dacb5ca92e203ac8dc5740a65a6dc2',
            Name: 'LANDWIDE CO., LTD.',
            Address:
              'NO.306, HSIN CHUANG 1ST RD., ZUOYING DIST., KAOHSIUNG CITY TAIWAN'
          },
          'Foreign Port of Lading': 'Kaohsiung',
          'Manifest Quantity': 1488,
          'Foreign Port of Lading ID': '878f3a40c956de20b3487cb5ec973b9c',
          'Bill of Lading Number': 'SCQHTWNS88000138',
          Carrier: {
            City: 'KOWLOON',
            Code: 'SCQH',
            Name: 'SCANWELL CONTAINER LINE LTD',
            Country: 'HONG KONG',
            'Zip Code': '',
            State: '',
            Address: 'UNIT 5 6F PO LUNG CTR 11 WANG CHIU RD'
          },
          'Country of Origin ID': 'f99c4639a3c74aefe01b45801459d128',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535673600,
          Weight: 20293,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1532649600,
          Measurement: 0,
          'Port of Unlading': 'Baltimore, Maryland'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'b88049a66bee31beec053d764b800d68',
        _score: 9.581405,
        _source: {
          'Vessel Name': 'EVER LUNAR',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9629093',
          'Manifest Unit': 'PKG',
          'Voyage Number': '024E',
          Containers: [
            {
              'Seal Numbers': ['EMCPLW9148'],
              Cargoes: [
                {
                  Keywords: ['aluminium window barn vent'],
                  'Piece Count': 260,
                  Description: 'ALUMINIUM WINDOW BARN VENT'
                }
              ],
              Width: 0,
              Length: 0,
              'Equipment Description': 'AC',
              Marks: ['NO MARKS'],
              Type: ' 0 Foot Container',
              'Load Status': 'Loaded',
              'Type Of Service': 'Pier to Pier',
              Height: 0,
              'Container Number': 'EISU9040175'
            },
            {
              'Seal Numbers': ['EMCPLZ1618'],
              Cargoes: [
                {
                  Keywords: ['aluminium window barn vent'],
                  'Piece Count': 149,
                  Description: 'ALUMINIUM WINDOW BARN VENT'
                }
              ],
              Width: 0,
              Length: 0,
              'Equipment Description': 'AC',
              Marks: ['NO MARKS'],
              Type: ' 0 Foot Container',
              'Load Status': 'Loaded',
              'Type Of Service': 'Pier to Pier',
              Height: 0,
              'Container Number': 'EGSU9193226'
            }
          ],
          'Run Date': 1535328000,
          'Arrival Date': 1535241600,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'TW',
          'Master Bill of Lading Number': 'EGLV142800825723',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'f633d7170fef2d07080fa8a2fdb94d5d',
          Shipper: {
            _id: '272fe19504f5c5d8ed9863d1003a0332',
            Name: 'HUZHOU YOUDAO IMP & EXP CO.,LTD',
            Address:
              '36-101 GOLDEN MEDITERRANEAN COMMUNITY HUZHOU ZHEJIANG 313000 CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 409,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVCGSSHA23420',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 2,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535414400,
          Weight: 24252,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1532908800,
          Measurement: 0,
          'Port of Unlading': 'Charleston, South Carolina'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'd0516fa63eb1bf3f851dc441e9ff4189',
        _score: 9.581405,
        _source: {
          'Vessel Name': 'EVER LEADER',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9595503',
          'Manifest Unit': 'PKG',
          'Voyage Number': '036E',
          Containers: [
            {
              'Seal Numbers': ['EMCPLV7568'],
              Cargoes: [
                {
                  Keywords: ['aluminium window barn vent'],
                  'Piece Count': 60,
                  Description: 'ALUMINIUM WINDOW BARN VENT'
                }
              ],
              Width: 0,
              Length: 0,
              'Equipment Description': 'AC',
              Marks: ['NO MARKS'],
              Type: ' 0 Foot Container',
              'Load Status': 'Loaded',
              'Type Of Service': 'Pier to Pier',
              Height: 0,
              'Container Number': 'TCLU9146437'
            },
            {
              'Seal Numbers': ['EMCPLV7578'],
              Cargoes: [
                {
                  Keywords: ['aluminium window barn vent'],
                  'Piece Count': 214,
                  Description: 'ALUMINIUM WINDOW BARN VENT'
                }
              ],
              Width: 0,
              Length: 0,
              'Equipment Description': 'AC',
              Marks: ['NO MARKS'],
              Type: ' 0 Foot Container',
              'Load Status': 'Loaded',
              'Type Of Service': 'Pier to Pier',
              Height: 0,
              'Container Number': 'EITU1555007'
            }
          ],
          'Run Date': 1535932800,
          'Arrival Date': 1535846400,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'SG',
          'Master Bill of Lading Number': 'EGLV142801031534',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'f633d7170fef2d07080fa8a2fdb94d5d',
          Shipper: {
            _id: '272fe19504f5c5d8ed9863d1003a0332',
            Name: 'HUZHOU YOUDAO IMP & EXP CO.,LTD',
            Address:
              '36-101 GOLDEN MEDITERRANEAN COMMUNITY HUZHOU ZHEJIANG 313000 CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 274,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVCGSSHA23425',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 2,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1536278400,
          Weight: 26572,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1533168000,
          Measurement: 0,
          'Port of Unlading': 'Charleston, South Carolina'
        }
      },
      {
        _index: 'us_import',
        _type: 'shipment',
        _id: 'f245db2badd043560b1c4b0155066c76',
        _score: 9.5741,
        _source: {
          'Vessel Name': 'CMA CGM DALILA',
          'Mode of Transportation': 'Vessel, containerized',
          'Country of Origin': 'China',
          'Second Notify Party': 'EGLV',
          'Conveyance ID': '9450624',
          'Manifest Unit': 'CTN',
          'Voyage Number': '0VC0Z',
          Containers: [
            {
              'Seal Numbers': ['EMCMNW3398'],
              Cargoes: [
                {
                  Keywords: ['plastic shutter rubber pumper vent'],
                  'Piece Count': 310,
                  Description: 'PLASTIC SHUTTER RUBBER PUMPER PLASTIC VENT'
                }
              ],
              Width: 800,
              Length: 4000,
              'Equipment Description': 'CN',
              Marks: ['NO MARKS'],
              Type:
                '40 Foot General Purpose Container, Openings at one or both ends',
              'Load Status': 'Loaded',
              'Type Of Service': 'House to House',
              Height: 900,
              'Container Number': 'TLLU5915146'
            }
          ],
          'Run Date': 1535673600,
          'Arrival Date': 1535587200,
          'Port of Destination': '',
          'Place of Receipt': 'SHANGHAI CHINA',
          'Vessel Country': 'FR',
          'Master Bill of Lading Number': 'EGLV142800825766',
          'In-Bond Entry Type': '',
          'Foreign Port of Destination': '',
          'Port of Unlading ID': 'e077cf532b7a35e4e11f92cd60351d33',
          Shipper: {
            _id: '360045e683bef023fc8f4aa8206311d9',
            Name: 'NINGBO DACHUAN UNION IMP AND EXP CO',
            Address:
              'LTD NO.16 CAIHONG SOUTH RD JIANGDONG DISTRICT NINGBO CHINA'
          },
          'Foreign Port of Lading': 'Shanghai',
          'Manifest Quantity': 310,
          'Foreign Port of Lading ID': '5466ee572bcbc75830d044e66ab429bc',
          'Bill of Lading Number': 'IMAVCGSSHA23409',
          Carrier: {
            City: null,
            Code: null,
            Name: null,
            Country: null,
            'Zip Code': null,
            State: null,
            Address: null
          },
          'Country of Origin ID': 'ae54a5c026f31ada088992587d92cb3a',
          'Manifest Number': '000001',
          'Number of Containers': 1,
          'Bill Type': 'House Bill',
          'Estimated Arrival Date': 1535241600,
          Weight: 2439,
          'Measurement Unit': '',
          Consignee: {
            'Cleaned Address Breakdown': {
              StreetNamePostType: 'DR',
              PlaceName: 'CAMP HILL',
              StateName: 'PA',
              ZipCode: '17011',
              CountryName: 'USA',
              AddressNumber: '2850',
              StreetName: 'APPLETON'
            },
            'Cleaned Address': '2850 APPLETON DR, CAMP HILL, PA 17011, USA',
            _id: '67927f30aba060a757a37173942069f2',
            Name: 'APPLE FASTENERS',
            Address: '2850 APPLETON DRIVE CAMP HILL PA 17011 USA'
          },
          'Weight Unit': 'KG',
          'Trade Update Date': 1531958400,
          Measurement: 0,
          'Port of Unlading': 'Baltimore, Maryland'
        }
      }
    ]
  },
  aggregations: {
    shipmentAggregate: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 30,
      buckets: [
        {
          key: 'APPLE FASTENERS',
          doc_count: 11,
          weight_kg: {
            value: 202315
          },
          weight_lb: {
            value: 202315
          },
          containers_count: {
            value: 18
          }
        },
        {
          key: 'APPLE INC. AI RETAIL HUB WEST',
          doc_count: 16,
          weight_kg: {
            value: 83887
          },
          weight_lb: {
            value: 83887
          },
          containers_count: {
            value: 16
          }
        },
        {
          key: 'RED APPLE STORES INC',
          doc_count: 7,
          weight_kg: {
            value: 12942
          },
          weight_lb: {
            value: 12942
          },
          containers_count: {
            value: 7
          }
        },
        {
          key: 'APPLE STAR ENTERPRISE',
          doc_count: 5,
          weight_kg: {
            value: 58938
          },
          weight_lb: {
            value: 58938
          },
          containers_count: {
            value: 5
          }
        },
        {
          key: 'APPLE INC C/O SYNCREON / LO 55',
          doc_count: 4,
          weight_kg: {
            value: 13324
          },
          weight_lb: {
            value: 13324
          },
          containers_count: {
            value: 4
          }
        }
      ]
    }
  }
}
export const emptyResultOfBuckets = {
  took: 71,
  timed_out: false,
  _shards: {
    total: 10,
    successful: 10,
    failed: 0
  },
  hits: {
    total: 0,
    max_score: null,
    hits: []
  },
  aggregations: {
    shipmentAggregate: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: []
    }
  }
}
export default { expectedReturnOfElasticSearch, emptyResultOfBuckets }
