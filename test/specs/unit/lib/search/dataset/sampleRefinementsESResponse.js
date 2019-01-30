export const sampleRefinementESResponse = {
  took: 4,
  timed_out: false,
  _shards: {
    total: 10,
    successful: 10,
    failed: 0
  },
  hits: {
    total: 4446,
    max_score: 0,
    hits: []
  },
  aggregations: {
    MarksAndNumbers: {
      doc_count_error_upper_bound: 10,
      sum_other_doc_count: 3022,
      buckets: [
        {
          key: 'FDC-0026 3685 NORTH GAP DRIVE FRESNO, CA 93727 USA',
          doc_count: 421
        },
        {
          key: 'NDC-0028 100 MERRITT BLVD. FISHKILL, NY 12524 USA',
          doc_count: 373
        },
        {
          key: 'N/M',
          doc_count: 228
        },
        {
          key: 'TDC-0020 200GAP BLVD. GALLATIN, TN 37066 USA',
          doc_count: 209
        },
        {
          key: 'OFC-0010 6001 GREEN POINT DRIVE SOUTH GROVEPORT, OH 43125 USA',
          doc_count: 202
        },
        {
          key: 'SALSON LOGISTICS 888 DOREMUS AVE. NEWARK NJ 07114',
          doc_count: 131
        },
        {
          key: 'CEO 300 GAP BLVD GALLATIN, TN, USA 37066',
          doc_count: 111
        },
        {
          key:
            'NDC-0028 100 MERRITT BLVD. FISHKILL, NY 12524 USA 3RD NOTIFY PARTY-',
          doc_count: 108
        },
        {
          key:
            'SHIP TO ADDRESS ITO NYCSALSON LOGISTICS 888 DOREMUS AVE. NEWARK NJ 07114',
          doc_count: 70
        },
        {
          key: 'MADE IN CHINA',
          doc_count: 62
        },
        {
          key: '. TDC-0020 200 GAP BLVD. GALLATIN, TN 37066 USA',
          doc_count: 54
        },
        {
          key: 'NO MARK',
          doc_count: 52
        },
        {
          key: 'NO MARKS',
          doc_count: 50
        },
        {
          key: 'NO MARKS NO MARKS NO MARKS NO MARKS NO MARKS',
          doc_count: 47
        },
        {
          key: '. NDC-0028 100 MERRITT BLVD. FISHKILL, NY 12524 USA',
          doc_count: 45
        },
        {
          key:
            'AS PER COMMERCIAL INVOICE AS PER COMMERCIAL INVOICE AS PER COMMERCIAL',
          doc_count: 45
        },
        {
          key: 'NDC-0028 100 MERRITT BLVD. FISHKIL L, NY 12524 USA',
          doc_count: 45
        },
        {
          key: 'TDC 0020 200 GAP BLVD GALLATIN, TN 37066 USA',
          doc_count: 44
        },
        {
          key: '. FDC-0026 3685 NORTH GAP DRIVE FRESNO, CA 93727 USA',
          doc_count: 43
        },
        {
          key:
            '. OFC-0010 6001 GREEN POINT DRIVE SOUTH GROVEPORT, OH 43125 USA',
          doc_count: 42
        },
        {
          key: 'FDC-0026 3685 NORTH GAP DRIVE FRES NO, CA 93727 USA',
          doc_count: 41
        },
        {
          key: 'TDC-0020 200 GAP BLVD. GALLATIN, T N 37066 USA',
          doc_count: 40
        },
        {
          key: 'NO MARKS NO MARKS NO MARKS',
          doc_count: 36
        },
        {
          key: 'NO MARKS NO MARKS',
          doc_count: 35
        },
        {
          key: 'OFC-0010 6001 GREEN POINT DRIVE SO UTH GROVEPORT, OH 43125 USA',
          doc_count: 32
        },
        {
          key: 'FDC-0026 3685 NORTH GAP DRIVE FRESNO CA 93727 US',
          doc_count: 30
        },
        {
          key: 'SALSON LOGISTICS 888 DOREMUS AVE. NEWARK NJ 07114.',
          doc_count: 30
        },
        {
          key:
            'OFC - 0010 6001 GREEN POINT DR SOUTH GROVEPORT, OH 43125 3RD NOTIFY PARTY-',
          doc_count: 28
        },
        {
          key:
            'OFC-0010 6001 GREEN POINT DR SOUTH GROVEPORT, OH 43125 3RD NOTIFY PARTY-',
          doc_count: 25
        },
        {
          key:
            'FDC-0026 3685 NORTH GAP DRIVE FRESNO, CA 93727 USA FDC-0026 3685 NORTH GAP',
          doc_count: 24
        },
        {
          key:
            'NDC-0028 100 MERRITT BLVD. FISHKILL, NY 12524 USA NDC-0028 100 MERRITT',
          doc_count: 24
        },
        {
          key: 'UNIT-PREPACK CARTON OF',
          doc_count: 24
        },
        {
          key: 'NM',
          doc_count: 22
        },
        {
          key: 'NO MARKS NO MARKS NO MARKS NO MARKS',
          doc_count: 22
        },
        {
          key: '93727 USA FDC-0026 3685 NORTH GAP DRIVE FRESNO, CA 93727 USA',
          doc_count: 21
        },
        {
          key:
            'BLVD. FISHKILL, NY 12524 USA NDC-0028 100 MERRITT BLVD. FISHKILL, NY',
          doc_count: 21
        },
        {
          key: 'AS PER COMMERCIAL INVOICE AS PER COMMERCIAL INVOICE',
          doc_count: 20
        },
        {
          key:
            'DRIVE FRESNO, CA 93727 USA FDC-0026 3685 NORTH GAP DRIVE FRESNO, CA',
          doc_count: 20
        },
        {
          key: 'BLVD. FISHKILL, NY 12524 USA',
          doc_count: 19
        },
        {
          key: 'NM NM NM NM NM NM',
          doc_count: 19
        },
        {
          key: 'NO MARKS NO MARKS NO MARKS NO MARKS NO MARKS NO MARKS',
          doc_count: 19
        },
        {
          key: 'AS ADDRESSED',
          doc_count: 18
        },
        {
          key: 'AS PER COMMERCIAL INVOICE',
          doc_count: 17
        },
        {
          key: 'TDC-0020 200 GAP BLVD. GALLATIN TN 37066 US',
          doc_count: 17
        },
        {
          key: '12524 USA NDC-0028 100 MERRITT BLVD. FISHKILL, NY 12524 USA',
          doc_count: 16
        },
        {
          key: 'DRIVE FRESNO, CA 93727 USA',
          doc_count: 16
        },
        {
          key: 'OFC 0010 6001 GREEN POINT DRIVE SOUTH GROVEPOT, OH 43125 USA',
          doc_count: 16
        },
        {
          key:
            'CENTRAL OMNI CEO -000000021- 300 GAP BOULEVARD GALLATIN TN 37066 US',
          doc_count: 15
        },
        {
          key: 'INVOICE AS PER COMMERCIAL INVOICE AS PER COMMERCIAL INVOICE',
          doc_count: 15
        },
        {
          key: 'MADE IN KOREA',
          doc_count: 15
        },
        {
          key: '== DITTO ==',
          doc_count: 14
        },
        {
          key:
            'NDC-0028 100 MERRITT BOULEVARD FISHKILL, NY 12524 USA PO# SKU-ITEM',
          doc_count: 13
        },
        {
          key: '066 USA',
          doc_count: 12
        },
        {
          key:
            'OFC-0010 6001 GREEN POINT DRIVE SOUTH GROVEPORT, OH 43125 USA OFC-0010 6001 GREEN',
          doc_count: 12
        },
        {
          key: 'TDC-0020 200 GAP BLVD. GALLATIN, T N, USA 37066',
          doc_count: 12
        },
        {
          key:
            'UNIT-PREPACK CARTON OF NDC-0028 100 MERRITT BOULEVARD FISHKILL, NY 12524 USA',
          doc_count: 12
        },
        {
          key: 'NDC-0028 100 MERRITT BOULEVARD FISHKILL NY 12524 US',
          doc_count: 11
        },
        {
          key:
            'PO# SKU-ITEM UNIT-PREPACK CARTON OF NDC-0028 100 MERRITT BOULEVARD FISHKILL, NY',
          doc_count: 11
        },
        {
          key:
            'SHIP TO ADDREES ITO NYCSALSON LOGISTICS 888 DOREMUS AVE. NEWARK NJ 07114',
          doc_count: 11
        },
        {
          key:
            'TDC - 0020200 GAP BOULEVARD GALLATIN, TN 37066. USA PO# SKU-ITEM',
          doc_count: 11
        },
        {
          key:
            'TDC 0020 200 GAP BLVD GALLATIN, TN 37066 USATDC 0020 200 GAP BLVDGALLATIN, TN 37066 USATDC 0020 200 GAP BLVD GALLATIN, TN 37066 USATDC 0020 200 GAP BLVD GALLATIN, TN 37066 USATDC 0020 200 GAP BLVD GALLATIN, TN 37066 USATDC 0020 200 GAP BLVD GALLATIN, TN 37066 USATDC 0020 200 GAP BLVD GALLATIN, TN 37066 USATDC 0020 200 GAP BLVD GALLATIN, TN 37066 USA',
          doc_count: 11
        },
        {
          key:
            '12524 USA PO# SKU-ITEM UNIT-PREPACK CARTON OF NDC-0028 100 MERRITT',
          doc_count: 10
        },
        {
          key:
            'BOULEVARD FISHKILL, NY 12524 USA PO# SKU-ITEM UNIT-PREPACK CARTON OF',
          doc_count: 10
        },
        {
          key: 'CA 93727 US',
          doc_count: 10
        },
        {
          key:
            'FDC-0026 3685,NORTH GAP DRIVE FRESNO,CA,9372 7 UNITED STATES FDC-0026 3685,NORTH GAP',
          doc_count: 10
        },
        {
          key: 'N/M N/M',
          doc_count: 10
        },
        {
          key:
            ', 93727UNITED STATES FDC-0026--BANA NA REP UBLIC, LLC3685 NORTH GAP DRIVEFRESNO,',
          doc_count: 9
        },
        {
          key:
            '12524UNITED STA TES NDC-0028--BANA NA REP UBLIC, LLC100 MERRIT T',
          doc_count: 9
        },
        {
          key:
            '37066. USA PO# SKU-ITEM UNIT-PREPACK CARTON OF TDC - 0020 200 GAP',
          doc_count: 9
        },
        {
          key:
            '7 UNITED STATES FDC-0026 3685,NORTH GAP DRIVE FRESNO,CA,9372 7 UNITED STATES',
          doc_count: 9
        },
        {
          key:
            'BOULEVARD GALLATIN, TN 37066. USA PO# SKU-ITEM UNIT-PREPACK CARTON OF',
          doc_count: 9
        },
        {
          key:
            'CARTON__OF__ PO# STYLE __SIZE__ QTY- GROSS WEIGHT- NET WEIGHT- CARTON DIMENSIONS-',
          doc_count: 9
        },
        {
          key: 'CEO-0021 300 GAP BLVD GALLATIN, TN , USA 37066',
          doc_count: 9
        },
        {
          key: 'INVOICE',
          doc_count: 9
        },
        {
          key: 'MADE IN CHINA MADE IN CHINA',
          doc_count: 9
        },
        {
          key: 'NDC-0028 100 MERRITT BOULEVARD FISHKILL, NY 12 524 US',
          doc_count: 9
        },
        {
          key:
            'TDC - 0020--BANANA R EPUBLIC, LLC200 GAP BLVD.GALLATIN, TN, 3 7066UNITED',
          doc_count: 9
        },
        {
          key:
            'TDC-0020 200GAP BLVD GALLATIN,TN,37 066 UNITED STATES TDC-0020 200 GAP BLVD GALLATIN,TN,37',
          doc_count: 9
        },
        {
          key: 'TDC-0020 200 GAP BOULEVARD GALLATIN, TN, USA 37066',
          doc_count: 9
        },
        {
          key:
            'UNIT-PREPACK CARTON OF TDC - 0020 200 GAP BOULEVARD GALLATIN, TN 37066. USA',
          doc_count: 9
        },
        {
          key: '-SIDE MARK- NO SIDE MARK',
          doc_count: 8
        },
        {
          key:
            '066 UNITED STATES TDC-0020 200 GAP BLVD GALLATIN,TN,37 066 UNITED STATES TDC-0020',
          doc_count: 8
        },
        {
          key: '37066 USA',
          doc_count: 8
        },
        {
          key: 'CEO 300 GAP BOULEVARD GALLATIN, TN 37066 USA',
          doc_count: 8
        },
        {
          key:
            'DRIVE FRESNO,CA,9372 7 UNITED STATES FDC-0026 3685,NORTH GAP DRIVE FRESNO,CA,9372',
          doc_count: 8
        },
        {
          key: 'INVOICE AS PER COMMERCIAL INVOICE',
          doc_count: 8
        },
        {
          key: 'NM NM NM NM NM',
          doc_count: 8
        },
        {
          key:
            'PART OF CENTRAL OMNI CE O 300 GAP BOULEVA RD GALLATIN TN 370 66 USA',
          doc_count: 8
        },
        {
          key:
            'POINT DRIVE SOUTH GROVEPORT, OH 43125 USA OFC-0010 6001 GREEN POINT DRIVE SOUTH',
          doc_count: 8
        },
        {
          key:
            'TDC-0020 200 GAP BOULEVARD GALLATI N,TN 37066 US MADE IN CAMBODIA',
          doc_count: 8
        },
        {
          key:
            'US PO # SKU-ITEM UNIT-PREPACK CARTON OF == DITTO == == DITTO == == DITTO ==',
          doc_count: 8
        },
        {
          key: '000000026 3685 NORTH GAP DRIVE FRESNO CA 93727 US PO# PREPACK#',
          doc_count: 7
        },
        {
          key: '12524 USA',
          doc_count: 7
        },
        {
          key:
            'BLVD FISHKILL,NY,12 524 UNITED STATES NDC-0028 100 METTITT BLVD FISHKILL,NY,12',
          doc_count: 7
        },
        {
          key:
            'BOULEVARDFISH KILL, NY, 12524UNITED STA TES NDC-0028--BANA NA REP',
          doc_count: 7
        },
        {
          key: 'CENTRAL OMNI CEO 300GAP BOULEVARD GALLATIN TN 370066 US',
          doc_count: 7
        },
        {
          key:
            'FCL/FCL FREIGHT COLLECT NON-NEGOTIABLE WAYBILL RELEASE PROCEDURE TDC-0020 200 GAP BLVD. GALLATIN, TN 37',
          doc_count: 7
        },
        {
          key: 'FDC-0026 3685 N. GAP DRIVE FRESNO, CA, USA 93727',
          doc_count: 7
        },
        {
          key:
            'FDC-0026--BANA NA REP UBLIC, LLC3685 NORTH GAP DRIVEFRESNO, CA , 93727UNITED',
          doc_count: 7
        },
        {
          key: 'FISHKILL NY 125 24 US',
          doc_count: 7
        }
      ]
    },
    ForeignPort: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'Colombo',
          doc_count: 1000
        },
        {
          key: 'Shanghai',
          doc_count: 871
        },
        {
          key: 'Yantian',
          doc_count: 322
        },
        {
          key: 'Hong Kong',
          doc_count: 262
        },
        {
          key: 'Pusan',
          doc_count: 256
        },
        {
          key: 'Ching Tao',
          doc_count: 246
        },
        {
          key: 'Haifa',
          doc_count: 225
        },
        {
          key: 'Nhava Sheva',
          doc_count: 200
        },
        {
          key: 'Tanjung Priok',
          doc_count: 169
        },
        {
          key: 'Singapore',
          doc_count: 167
        },
        {
          key: 'Ningpo',
          doc_count: 145
        },
        {
          key: 'Vung Tau',
          doc_count: 138
        },
        {
          key: 'Algeciras',
          doc_count: 135
        },
        {
          key: 'Xiamen',
          doc_count: 115
        },
        {
          key: 'Yangshan',
          doc_count: 75
        },
        {
          key: 'Kaohsiung',
          doc_count: 72
        },
        {
          key: 'Colon',
          doc_count: 13
        },
        {
          key: 'Santo Tomas',
          doc_count: 8
        },
        {
          key: 'Port Swettenham',
          doc_count: 5
        },
        {
          key: 'Nansha',
          doc_count: 3
        },
        {
          key: 'Rotterdam',
          doc_count: 3
        },
        {
          key: 'Bremerhaven',
          doc_count: 2
        },
        {
          key: 'Hsinkang',
          doc_count: 2
        },
        {
          key: 'Stade',
          doc_count: 2
        },
        {
          key: 'Cartagena',
          doc_count: 1
        },
        {
          key: 'Chiwan',
          doc_count: 1
        },
        {
          key: 'Genova',
          doc_count: 1
        },
        {
          key: 'Kwangyang',
          doc_count: 1
        },
        {
          key: 'Laem Chabang',
          doc_count: 1
        },
        {
          key: 'Okinawa Island',
          doc_count: 1
        },
        {
          key: 'Prince Rupert, BC',
          doc_count: 1
        },
        {
          key: 'Sao Paulo',
          doc_count: 1
        },
        {
          key: 'Sines',
          doc_count: 1
        },
        {
          key: 'Southhampton',
          doc_count: 1
        }
      ]
    },
    CountryOfOrigin: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'China',
          doc_count: 1780
        },
        {
          key: 'Sri Lanka',
          doc_count: 1000
        },
        {
          key: 'Hong Kong',
          doc_count: 262
        },
        {
          key: 'South Korea',
          doc_count: 257
        },
        {
          key: 'Israel',
          doc_count: 225
        },
        {
          key: 'India',
          doc_count: 200
        },
        {
          key: 'Indonesia',
          doc_count: 169
        },
        {
          key: 'Singapore',
          doc_count: 167
        },
        {
          key: 'Vietnam',
          doc_count: 138
        },
        {
          key: 'Spain',
          doc_count: 135
        },
        {
          key: 'China Taiwan',
          doc_count: 72
        },
        {
          key: 'Panama',
          doc_count: 13
        },
        {
          key: 'Guatemala',
          doc_count: 8
        },
        {
          key: 'Malaysia',
          doc_count: 5
        },
        {
          key: 'Germany',
          doc_count: 4
        },
        {
          key: 'Netherlands',
          doc_count: 3
        },
        {
          key: 'Brazil',
          doc_count: 1
        },
        {
          key: 'Canada',
          doc_count: 1
        },
        {
          key: 'Colombia',
          doc_count: 1
        },
        {
          key: 'Italy',
          doc_count: 1
        },
        {
          key: 'Japan',
          doc_count: 1
        },
        {
          key: 'Portugal',
          doc_count: 1
        },
        {
          key: 'Thailand',
          doc_count: 1
        },
        {
          key: 'United Kingdom',
          doc_count: 1
        }
      ]
    },
    ConsigneeZipCode: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: '94105',
          doc_count: 3994
        },
        {
          key: '91730',
          doc_count: 237
        },
        {
          key: '92376',
          doc_count: 95
        },
        {
          key: '90058',
          doc_count: 36
        },
        {
          key: '90266',
          doc_count: 17
        },
        {
          key: '90040',
          doc_count: 13
        },
        {
          key: '91748',
          doc_count: 13
        },
        {
          key: '94122',
          doc_count: 7
        },
        {
          key: '95014',
          doc_count: 5
        },
        {
          key: '94544',
          doc_count: 4
        },
        {
          key: '94118',
          doc_count: 3
        },
        {
          key: '91324',
          doc_count: 2
        },
        {
          key: '90069',
          doc_count: 1
        },
        {
          key: '90220',
          doc_count: 1
        },
        {
          key: '90232',
          doc_count: 1
        },
        {
          key: '90501',
          doc_count: 1
        },
        {
          key: '90640',
          doc_count: 1
        },
        {
          key: '91761',
          doc_count: 1
        },
        {
          key: '92121',
          doc_count: 1
        },
        {
          key: '92307',
          doc_count: 1
        },
        {
          key: '92337',
          doc_count: 1
        },
        {
          key: '92551',
          doc_count: 1
        },
        {
          key: '92614',
          doc_count: 1
        },
        {
          key: '92660',
          doc_count: 1
        },
        {
          key: '94063',
          doc_count: 1
        },
        {
          key: '94133',
          doc_count: 1
        },
        {
          key: '94538',
          doc_count: 1
        },
        {
          key: '94583',
          doc_count: 1
        },
        {
          key: '94607',
          doc_count: 1
        },
        {
          key: '95035',
          doc_count: 1
        },
        {
          key: '95133',
          doc_count: 1
        },
        {
          key: '95828',
          doc_count: 1
        }
      ]
    },
    NotifyPartyAddress: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: '5757 WEST CENTURY BLVD, LOS ANGELES, CA 90045, USA',
          doc_count: 496
        },
        {
          key: '849 THOMAS DR, BENSENVILLE, IL 60106, USA',
          doc_count: 281
        },
        {
          key: '245 ROGER AVE, INWOOD, NY 11096, USA',
          doc_count: 277
        },
        {
          key: '888 DOREMUSAVE, NEWARK, NJ 7114, USA',
          doc_count: 262
        },
        {
          key: '2 EAST BRYAN STREET, SAVANNAH, GA 31401, USA',
          doc_count: 212
        },
        {
          key: '2265 CLEMENTS FERRY RD, CHARLESTON, SC 29492, USA',
          doc_count: 95
        },
        {
          key: '8675 ROCHESTER AVE, RANCHO, CA 91730, USA',
          doc_count: 94
        },
        {
          key: 'THOMAS DR, BENSENVILLE, IL60106, USA',
          doc_count: 74
        },
        {
          key: '8675 ROCHESTER AVE, RANCHO CUCAMONGA, CA 91730, USA',
          doc_count: 66
        },
        {
          key: '801 SOUTH GARFIELD AVE, ALHAMBRA, CA 91801, USA',
          doc_count: 33
        },
        {
          key: '3015 EAST ANA ST, COMPTON, CA 90221, USA',
          doc_count: 25
        },
        {
          key: '2 EAST BRYAN ST, SAVANNAH, GA 31401, USA',
          doc_count: 20
        },
        {
          key: '8675 ROCHESTER AVE, RANC, CA 91730, USA',
          doc_count: 16
        },
        {
          key: '1746 24TH AVE, SAN FRANCISCO, CA 94122, USA',
          doc_count: 6
        },
        {
          key: '1601 NORTH SEPULVEDA BLVD, MANHATT AN BEACH, CA 90266, USA',
          doc_count: 5
        },
        {
          key: '1601 NORTH SEPULVEDA BLVD, MANHATTAN, CA 90266, USA',
          doc_count: 5
        },
        {
          key: '18539 EAST GALE AVE, CITY OF INDUSTRY, CA 91748, USA',
          doc_count: 5
        },
        {
          key: '18539 GALE AVE, CITY OF INDUSTRY, CA 91748, USA',
          doc_count: 5
        },
        {
          key: '2 FOLSOM STREET, SAN FRANCISCO, CA 94105, USA',
          doc_count: 5
        },
        {
          key: '8675 ROCHESTER AVE, RANCHO CACAMON, CA 91730, USA',
          doc_count: 5
        },
        {
          key: '1601 NORTH SEPULVEDA BLVD, MANHATTAN BEACH, CA 90266, USA',
          doc_count: 4
        },
        {
          key: '1710 WEST BASE LINE RD, RIALTO, CA 92376, USA',
          doc_count: 3
        },
        {
          key: '2655 COMMERCE WAY, COMMERCE, CA 90040, USA',
          doc_count: 2
        },
        {
          key: '801 SOUTH GARFIELD AVE, LHAMBRA, CA 91801, USA',
          doc_count: 2
        },
        {
          key: '10700 BUSINESS DR, FONTANA, CA 92337, USA',
          doc_count: 1
        },
        {
          key: '10885 NORTH WOLFE RD, CUPERTINO, CA 95014, USA',
          doc_count: 1
        },
        {
          key: '10950 CHURCH STREET, RAN RANCHO CUCAMONGA, CA 91730, USA',
          doc_count: 1
        },
        {
          key: '1230 YARD CT, SAN JOSE, CA 95133, USA',
          doc_count: 1
        },
        {
          key: '1401 LINCOLN LANE, NEWPORT BEACH, CA 92660, USA',
          doc_count: 1
        },
        {
          key: '1458 SOUTH SAN FEDRO ST, LOS ANGELES, CA 90058, USA',
          doc_count: 1
        },
        {
          key: '150 16 132ND AVE, JAMAICA, NY 11434, USA',
          doc_count: 1
        },
        {
          key: '1690 NORTH DOHENY DR, LOS ANGELES, CA 90069, USA',
          doc_count: 1
        },
        {
          key: '17165 VON KARMAN AVE, IRVINE, CA 92614, USA',
          doc_count: 1
        },
        {
          key: '18924 SOUTH LAUREL PK RD, RNACHO DOMINGUEZ, CA 90221, USA',
          doc_count: 1
        },
        {
          key: '2 EAST BRYAN STREET, SAVAN NAH GA, GA 31401, USA',
          doc_count: 1
        },
        {
          key: '22239 POPLAR ST, OAKLAND, CA 94607, USA',
          doc_count: 1
        },
        {
          key: '25220 BLACK MOUNTAIN QUARRY RD, APPLE VALLEY, CA 92307, USA',
          doc_count: 1
        },
        {
          key: '2655 COMMERCE WAY, COMMERCE CALIFO, CA 90040, USA',
          doc_count: 1
        },
        {
          key: '2655 COMMERCE WAY, COMMERCE CALIFORN, CA 90040, USA',
          doc_count: 1
        },
        {
          key: '2655 COMMERCE WAY, LOS ANGELES, CA 90040, USA',
          doc_count: 1
        },
        {
          key: '599 SEAPORT BLVD, REDWOOD CITY, CA 94063, USA',
          doc_count: 1
        },
        {
          key: '601 NORTH SEPULVEDA BLVD, MANHATTAN BEACH, CA 90266, USA',
          doc_count: 1
        },
        {
          key: '675 ROCHESTER AVE, RANCHO, CA 91730, USA',
          doc_count: 1
        },
        {
          key: '71 MCMURRAY RD, PITTSBURGH, PA 15241, USA',
          doc_count: 1
        },
        {
          key: '8675 ROCHESTER AVE, RAN CHO, CA 91730, USA',
          doc_count: 1
        },
        {
          key: '8675 ROCHESTER AVE, RANC ROCHESTER, CA 91730, USA',
          doc_count: 1
        },
        {
          key: '9030 CARROLL WAY, SAN DIEGO, CA 92121, USA',
          doc_count: 1
        },
        {
          key: 'CLEMENT ST, SAN FRANCISCO, CA 94118, USA',
          doc_count: 1
        },
        {
          key: 'THOMAS DR, BENSENVILLE BENSENVILL E, IL 60106, USA',
          doc_count: 1
        }
      ]
    },
    DestinationPort: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'Los Angeles, California',
          doc_count: 1926
        },
        {
          key: 'New York/Newark Area, Newark, New Jersey',
          doc_count: 1618
        },
        {
          key: 'Long Beach, California',
          doc_count: 623
        },
        {
          key: 'Savannah, Georgia',
          doc_count: 155
        },
        {
          key: 'Baltimore, Maryland',
          doc_count: 96
        },
        {
          key: 'Oakland, California',
          doc_count: 19
        },
        {
          key: 'Miami, Florida',
          doc_count: 4
        },
        {
          key: 'Port Everglades, Florida',
          doc_count: 4
        },
        {
          key: 'New York, New York',
          doc_count: 1
        }
      ]
    },
    Consignee: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'BANANA REPUBLIC LLC',
          doc_count: 3654
        },
        {
          key: 'APPLE TREE INTERNATIONAL',
          doc_count: 235
        },
        {
          key: 'BANANA REPUBLIC, LLC.',
          doc_count: 105
        },
        {
          key: 'APPLE COMPUTER, INC. C/O OHL',
          doc_count: 91
        },
        {
          key: 'BANANA REPUBLIC, LLC ( BANANA REPUB',
          doc_count: 89
        },
        {
          key: 'APPLE STAR ENTERPRISE',
          doc_count: 35
        },
        {
          key: 'BANANA REPUBLIC,LLC',
          doc_count: 30
        },
        {
          key: 'BANANA REPUBLIC, LLC',
          doc_count: 24
        },
        {
          key: 'BANANA REPUBLIC, LLC (BANANA REPUBL',
          doc_count: 23
        },
        {
          key: 'BANANA REPUBLIC, LLC ( BANANA REP',
          doc_count: 22
        },
        {
          key: 'BANANA REPUBLIC.LLC',
          doc_count: 13
        },
        {
          key: 'GREEN APPLE LIFESTYLE, INC',
          doc_count: 13
        },
        {
          key: 'BANANA PEBUBLIC, LLC',
          doc_count: 11
        },
        {
          key: 'BANANA REBUBLIC LLC',
          doc_count: 10
        },
        {
          key: 'APPLE EVENT SUPPLIES, INC.',
          doc_count: 9
        },
        {
          key: 'APPLE EVENT SUPPLIES INC.',
          doc_count: 8
        },
        {
          key: 'BANANA REPUBLIC',
          doc_count: 7
        },
        {
          key: 'APPLE INC',
          doc_count: 5
        },
        {
          key: 'APPLE EVENT SUPPLIER INC.',
          doc_count: 4
        },
        {
          key: 'APPLE EVENT SUPPLIES INC',
          doc_count: 4
        },
        {
          key: 'APPLE CUPERTINO',
          doc_count: 3
        },
        {
          key: 'GOLDEN BANANA, INC',
          doc_count: 3
        },
        {
          key: 'APPLE CAMPUS 2',
          doc_count: 2
        },
        {
          key: 'APPLE TREE INTERNATIONAL CORP.',
          doc_count: 2
        },
        {
          key: 'GOLDEN BANANA INC',
          doc_count: 2
        },
        {
          key: 'GOLDEN BANANA,INC',
          doc_count: 2
        },
        {
          key: 'GREEN APPLE BOOKS',
          doc_count: 2
        },
        {
          key: 'GREEN APPLE LIFESTYLE INC',
          doc_count: 2
        },
        {
          key: 'GREEN APPLE LIFESTYLE,INC.',
          doc_count: 2
        },
        {
          key: 'APPLE (SANTA ROSA)',
          doc_count: 1
        },
        {
          key: 'APPLE (SANTA ROSA), C/O CEVA',
          doc_count: 1
        },
        {
          key: 'APPLE - VARIOUS PROJECTS',
          doc_count: 1
        },
        {
          key: 'APPLE EVENT SUPPLIES,INC.',
          doc_count: 1
        },
        {
          key: 'APPLE GREEN BISTNO',
          doc_count: 1
        },
        {
          key: 'APPLE GREEN INC',
          doc_count: 1
        },
        {
          key: 'APPLE ON TOP',
          doc_count: 1
        },
        {
          key: 'APPLE PARK',
          doc_count: 1
        },
        {
          key: 'APPLE SECURESHIP',
          doc_count: 1
        },
        {
          key: 'APPLE TREE HOUSE INC.',
          doc_count: 1
        },
        {
          key: 'APPLE TREE INTERNATIONA',
          doc_count: 1
        },
        {
          key: 'APPLE WAREHOUSE',
          doc_count: 1
        },
        {
          key: 'APPLE, DARYLL',
          doc_count: 1
        },
        {
          key: 'AUNTY APPLE AND PRODUCTIONS',
          doc_count: 1
        },
        {
          key: 'BANANA FASHION LAND LLC',
          doc_count: 1
        },
        {
          key: 'BANANA JOE INC.',
          doc_count: 1
        },
        {
          key: 'BANANA PRODUCTS LLC',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC LL',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC LLC 2 FOLSOM',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC LLC, 2 FOLSOM STREE',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC LLCV',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC, LLC (BANANA REPU',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC, LLCONAL',
          doc_count: 1
        },
        {
          key: 'BLF BIG APPLE LLC',
          doc_count: 1
        },
        {
          key: 'CEMEX APPLE VALLEY',
          doc_count: 1
        },
        {
          key: 'ETS-LINDGREN C/O APPLE BEATS',
          doc_count: 1
        },
        {
          key: 'JOHNNY APPLE',
          doc_count: 1
        },
        {
          key: 'KIRACO LLC DBA APPLE ON TOP',
          doc_count: 1
        },
        {
          key: 'PHILIPS C/O APPLE UTC C/O CEVA',
          doc_count: 1
        },
        {
          key: 'SHENZHENSHI BANANA CO, LTD',
          doc_count: 1
        },
        {
          key: 'SHOTPUT/BANANA PRODUCTS LLC',
          doc_count: 1
        },
        {
          key: 'STONE APPLE FIREPLACE',
          doc_count: 1
        },
        {
          key: 'SWANK BANANA MARKETING, LLC.',
          doc_count: 1
        },
        {
          key: 'THE APPLE PROJECT IS IN SAN FRANCI',
          doc_count: 1
        }
      ]
    },
    NotifyParty: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: "EXPEDITORS INT'L - LOS ANGELES",
          doc_count: 385
        },
        {
          key: 'EXPEDITORS INT L - CHICAGO',
          doc_count: 281
        },
        {
          key: 'SALSON LOGISTICS',
          doc_count: 262
        },
        {
          key: 'APPLE TREE INTERNATIONAL',
          doc_count: 234
        },
        {
          key: 'EXPEDITORS INT L - SAVANNAH',
          doc_count: 186
        },
        {
          key: "EXPEDITORS INT'L - CHICAGO",
          doc_count: 157
        },
        {
          key: 'EXPEDITORS INTERNATIONAL OF WASHING',
          doc_count: 140
        },
        {
          key: 'EXPEDITORS INT L - LOS ANGELES',
          doc_count: 112
        },
        {
          key: "EXPEDITORS INT'L - CHARLESTON",
          doc_count: 95
        },
        {
          key: 'EXPEDITORS INTL OFWA INC',
          doc_count: 73
        },
        {
          key: 'EI-INWOOD',
          doc_count: 62
        },
        {
          key: "EXPEDITORS INT'L - SAVANNAH",
          doc_count: 47
        },
        {
          key: 'GRAND OCEAN CUSTOMS BROKERAGE INCOR',
          doc_count: 33
        },
        {
          key: 'APLL',
          doc_count: 25
        },
        {
          key: 'GREEN APPLE LIFESTYLE, INC',
          doc_count: 13
        },
        {
          key: 'APPLE EVENT SUPPLIES INC.',
          doc_count: 8
        },
        {
          key: 'EXPEDITORS INT_L - SAVANNAH',
          doc_count: 7
        },
        {
          key: 'APPLE EVENT SUPPLIER INC.',
          doc_count: 4
        },
        {
          key: 'APPLE COMPUTER, INC. C/O OHL',
          doc_count: 3
        },
        {
          key: 'APPLE EVENT SUPPLIES INC',
          doc_count: 2
        },
        {
          key: 'BANANA REPUBLIC, LLC',
          doc_count: 2
        },
        {
          key: 'EXPEDITORS INTL OF WASH INC',
          doc_count: 2
        },
        {
          key: 'GOLDEN BANANA INC',
          doc_count: 2
        },
        {
          key: 'GOLDEN BANANA, INC',
          doc_count: 2
        },
        {
          key: 'GOLDEN BANANA,INC',
          doc_count: 2
        },
        {
          key: 'GRAND OCEAN CUSTOM SERVICE',
          doc_count: 2
        },
        {
          key: 'GREEN APPLE LIFESTYLE INC',
          doc_count: 2
        },
        {
          key: 'GREEN APPLE LIFESTYLE,INC.',
          doc_count: 2
        },
        {
          key: 'APPLE EVENT SUPPLIES,INC.',
          doc_count: 1
        },
        {
          key: 'APPLE GREEN BISTNO',
          doc_count: 1
        },
        {
          key: 'APPLE GREEN INC',
          doc_count: 1
        },
        {
          key: 'APPLE TREE HOUSE INC.',
          doc_count: 1
        },
        {
          key: 'APPLE TREE INTERNATIONA',
          doc_count: 1
        },
        {
          key: 'AUNTY APPLE AND PRODUCTIONS',
          doc_count: 1
        },
        {
          key: 'BANANA JOE INC.',
          doc_count: 1
        },
        {
          key: 'BANANA PRODUCTS LLC',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC, LLC.',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC,LLC',
          doc_count: 1
        },
        {
          key: 'BANANA REPUBLIC.LLC',
          doc_count: 1
        },
        {
          key: 'BLF BIG APPLE LLC',
          doc_count: 1
        },
        {
          key: 'CEMEX APPLE VALLEY',
          doc_count: 1
        },
        {
          key: 'D.B. GROUP AMERIC, LTD.',
          doc_count: 1
        },
        {
          key: 'EXPEDITORS INTERNATIONAL',
          doc_count: 1
        },
        {
          key: 'FULL SERVICE RELOCATION,INC.',
          doc_count: 1
        },
        {
          key: 'JOHNNY APPLE',
          doc_count: 1
        },
        {
          key: 'SHOTPUT/BANANA PRODUCTS LLC',
          doc_count: 1
        },
        {
          key: 'STONEAPPLE FIREPLACE',
          doc_count: 1
        },
        {
          key: 'SWANK BANANA MARKETING, LLC.',
          doc_count: 1
        },
        {
          key: 'THE APPLE PROJECT IS IN SAN FRANCI',
          doc_count: 1
        },
        {
          key: 'USA ATT:KRISTOPHER KRIETER-',
          doc_count: 1
        }
      ]
    },
    ShipperAddress: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 274,
      buckets: [
        {
          key: '13 A/F S TOWER WORLD FINANCECTRTSI MSHATSUIKL HONG KONG HK',
          doc_count: 113
        },
        {
          key:
            '5/F, SOO BOK BUILDING 110 SAIMDANG-RO, SEOCHO-DONG SEOCHO-GU,SEOUL, KOREA',
          doc_count: 95
        },
        {
          key: 'JL. BRAGA NO. 106 BANDUNG 40111 INDONESIA',
          doc_count: 69
        },
        {
          key:
            'JL.SODONG/ALTERNATIF JONGGOL RT.001/RW 003 DS.MEKARGALIH KECAMATAN CIKALONG KULON JAVA TEBARAT, INDONESIA',
          doc_count: 59
        },
        {
          key:
            'PLOT NO.983, PO BOX#40 AD-DULAYL INDUSTRIAL ESTATE AD DULAYL 13136 JO',
          doc_count: 59
        },
        {
          key: 'NO 261, SIRI DHAMMA MAWATHA',
          doc_count: 57
        },
        {
          key:
            'AD DULAYL INDL PARK, 40 13136 AQABA 962-65522521 TEL EX 962-6552 04',
          doc_count: 51
        },
        {
          key: 'AD-DULAYL INDUSTRIAL PARK AD-DULAYL AZ 13136 JORDAN',
          doc_count: 49
        },
        {
          key: 'AD-DULAYL, AD-DULAYL INDUSTRIAL PAR AMMAN AM 13136 JORDAN',
          doc_count: 48
        },
        {
          key:
            'CENTRAL BLVD., BO. MAGUYAM SILANG CAVITE,PHILIPPINES TAX ID: 221-965-696-000',
          doc_count: 46
        },
        {
          key: 'INDUSTRIAL ESTATE, AL-HUSSEIN BIN A AL KARAK KA 61112 JORDAN',
          doc_count: 43
        },
        {
          key: '. SIRI DHAMMA MAWATHA COLOMBO 00100 LK',
          doc_count: 40
        },
        {
          key: '10TH INDL DIST N 2 DONGHUAN RD LONG HUA BAOAN SHENZHEN GD CN',
          doc_count: 40
        },
        {
          key:
            'JL.SODONG ALTERNATIF JONGGOL RT.001 RW 003 DS.MEKARGALIH KECAMATAN CIKALONG KULON JAVA TE BARAT, INDONESIA',
          doc_count: 36
        },
        {
          key: '. SIRI DHAMMA MAWATHA COLOMBO CO 0020 0 LK',
          doc_count: 33
        },
        {
          key:
            'AL-HUSSEIN BIN ABDULLAHII INDUSTRIAL ESTATE, P.O BOX 7 KARAK 61112 JORDAN 962-65522521 TEL EX 962-6552 04',
          doc_count: 33
        },
        {
          key:
            'STOCK COMPANY KM24 HIGHWAY NO 5A. DISU COMMUNE, MYHAO DIST HUNGYEN PROVINCE VIETNAM',
          doc_count: 33
        },
        {
          key: '. SIRI DHAMMA MAWATHA COLOMBO CO 0010 0 LK',
          doc_count: 31
        },
        {
          key: 'LIU WUDISTRICT SHEK KIT TOWN DONGGUAN GUANGDONG CN',
          doc_count: 31
        },
        {
          key: '13 F,HARBOUR CENTRE,25 HARBOUR ROAD,WANCHAI,HONG KONG',
          doc_count: 28
        },
        {
          key:
            'CN13,KHAI QUANG INDUSTRIAL AREA, KHAI QUANG WARD, VINH YEN CITY VINH PHUC PROVINCE, VIETNAM 84-2113842204 TEL EX 84-21130 42',
          doc_count: 27
        },
        {
          key: 'AD- DULAYL LNDUSTRIAL PARK P.O.BOX 204 AD-DULAYL JO',
          doc_count: 26
        },
        {
          key:
            'FLAT E2 F,4 F.,BLK.2,YIP FAT FTY BLDG.,73-75 HOI YUEN RD., KWUN TONG,',
          doc_count: 25
        },
        {
          key:
            '1-8 BLOCK A1,4-8 BLOCK A4,1-3&9-10 BLOCK KB1, TAN THOI HIEP IZ, HIEP THANH WARD, DIST 12, HCM CITY, VN 84-2837176300 TEL EX 84-08371 76',
          doc_count: 24
        },
        {
          key:
            '5-6 F., CRYSTAL INDUSTRIAL BUILDING,71 HOW MING STREET, KWUN TONG, HONG KONG',
          doc_count: 23
        },
        {
          key:
            'BLOCK 3 LOT 9, INTERSTAR ST. LIIP-SEPZA,BINAN,LAGUNA. PHILIPPINES',
          doc_count: 23
        },
        {
          key:
            'ROOM 3306-07,33 F.,LAWS COMMERCIAL PLAZA,788 CHEUNG SHA WAN ROAD, LAI CHI KOK,KLN,HK.',
          doc_count: 22
        },
        {
          key:
            'JL SULAWESI BLOK D 45B UNIT USAHA KAWASAN CAKUNG, KBN KEL.SUKAPURA, KEC.CILINCING JAKARTA-INDONESIA TE14140',
          doc_count: 20
        },
        {
          key:
            'PLOT NO. 983 AD-DULAYL INDUSTRIAL ESTATE AD DULAYL 13136 JORDAN 962-65522521 TEL EX 962-6552 04',
          doc_count: 20
        },
        {
          key:
            '(TIANJIN) CO.,LTD. NO. 9 BINSHUI ROAD HEXI DISTRICT TIANJIN,CHINA CN',
          doc_count: 19
        },
        {
          key:
            'JL. COASTER NO. 8 BLOCK A 15-15A TEPZ LAMICITRA, SEMARANG 50174 CENTRAL JAVA, INDONESIA',
          doc_count: 19
        },
        {
          key:
            'RIZAL ST. BGY. SANTOL MATAAS NA KAHOY BATANGAS PHILIPPINES 4223 TAX ID: 008-320-961-000',
          doc_count: 19
        },
        {
          key:
            '13 A/F S TOWER WORLD FINANCE CTR TSIMSHATSUIKL HONG KONG HONGKONG,CHINA CN',
          doc_count: 18
        },
        {
          key:
            'UNIT A6,9/F SILVERCORP INTERNATIONA KOWLOON . HONG KONG TE31158545',
          doc_count: 18
        },
        {
          key:
            'FLAT E2&F,4/F.,BLK.2,YIP FAT FTY BLDG.,73-75 HOI YUEN RD., KWUN TONG, 852-23424192 TEL EX 852-2341 84',
          doc_count: 17
        },
        {
          key:
            'ROOM 3306-07, 33/F., LAWS COMMERCIA L PLAZA, 788 CHEUNG SHA WAN ROAD, LAI CHI KO K, KLN HONG KONG HK',
          doc_count: 17
        },
        {
          key:
            'JL. RAYA SEMARANG PURWODADI KM 17 DESA KALITENGAH KEC. MRANGGEN KAB. DEMAK, SEMARANG 59567',
          doc_count: 16
        },
        {
          key:
            'UNIT A, 7 F., WING CHEUNG IND. BLDG., 58-70 KWAI CHEONG RD, KWAI CHUNG, NT., HK',
          doc_count: 16
        },
        {
          key: '12 F WING TAIFACTORY BUILDING,NO.3 TAI YIP STREET,KWUN TONG,HK',
          doc_count: 15
        },
        {
          key: '13 F.,HARBOUR CENTER 25 HARBOUR ROAD,WAN CHAI, HONGKONG',
          doc_count: 15
        },
        {
          key:
            'JL. KADUDAMPIT KM.05 RT.17/04 KEC.KADUDAMPIT - KAB SUKABUMI, WEST JA TELP. 0266-226985',
          doc_count: 15
        },
        {
          key:
            'JL. KARANG TENGAH KM. 14 NO. 741A KP. SELAAWI DESA KARANG TENGAH WEST JA KECAMATAN CIBADAK-KAB. TE SUKABUMI, INDON',
          doc_count: 15
        },
        {
          key:
            'ROOM 20A,KIU FU COMMERCIAL BUILDIN KOWLOON . HONG KONG TE31158545',
          doc_count: 15
        },
        {
          key:
            'JL SULAWESI BLOK D 45B UNIT USAHA KAWASAN CAKUNG, KBN KEL.SUKAPURA, KEC.CILINCING JAKARTA-INDONESIA TE 14140',
          doc_count: 13
        },
        {
          key:
            'JL. KARANG TENGAH KM. 14 NO. 741A KP. SELAAWI DESA KARANG TENGAH WEST JA KECAMATAN CIBADAK-KAB. TESUKABUMI, INDON',
          doc_count: 13
        },
        {
          key:
            'CO.,LTD AI QUOC WARD, HAI DUONG CITY, HAI DUONG PROVINCE, VIETNAM 84-2203752099 TEL EX 84-32037 52',
          doc_count: 12
        },
        {
          key: 'MINUANGODA ROAD, EKALA, JA-ELLA, SRI LANKA SVAT000236',
          doc_count: 12
        },
        {
          key: '. MINUANGODA ROAD COLOMBO CO 00200 LK',
          doc_count: 11
        },
        {
          key:
            'AD DULAYL INDL PARK, 40 13136 JORDAN 962-65522521 TEL EX 962-6552 04',
          doc_count: 11
        },
        {
          key: '. NAWAM MW COLOMBO CO 00200 LK',
          doc_count: 10
        },
        {
          key:
            'CN13,KHAI QUANG INDUSTRIAL AREA, KHAI QUANG WARD, VINH YEN CITY VINH PHUC PROVINCE, VIETNAM',
          doc_count: 10
        },
        {
          key:
            'LOT J2-CN, D1 STREET, MY PHUOC INDUSTRIAL PARK, BEN CAT DISTRICT, BINH DUONG PROVINCE, VIETNAM 84-6503566500 TEL EX 84-65035 66',
          doc_count: 10
        },
        {
          key:
            'NO.32, 2A ROAD, BIEN HOA INDUSTRIAL ZONE II,DONG NAI PROVINCE,VIETNAM 84-908839220',
          doc_count: 10
        },
        {
          key:
            'PLOT NO. 983 AD-DULAYL INDUSTRIAL ESTATE AD DULAYL 13136 JORDAN 962-53825508 TEL EX 962-5382 55',
          doc_count: 10
        },
        {
          key:
            'STOCK COMPANY KM24 HIGHWAY NO 5A. DISU COMMUNE, MYHAO DIST HUNGYEN PROVINCE VIETNAM 84-2213944045 TEL EX 84-32139 53',
          doc_count: 10
        },
        {
          key:
            'LIU WU DISTRICT, SANHENG ROAD XINCHENG DISTRICT, SHEK KIT TOWN DONGGUAN GUANGDONG CN',
          doc_count: 9
        },
        {
          key: '. MINUANGODA ROAD JA-ELA CO 11410 LK',
          doc_count: 8
        },
        {
          key: '13 A F S TOWER WORLD FINANCE CTR TS IMSHATSUIKL HONG KONG',
          doc_count: 8
        },
        {
          key:
            'CO.,LTD AI QUOC WARD, HAI DUONG CITY, HAI DUONG PROVINCE, VIETNAM',
          doc_count: 8
        },
        {
          key:
            'HOANG DIEU INDUSTRIAL ZONE GIA LOC DISTRICT, HAI DUONG PROVINCE VIETNAM 84-2203718304 TEL EX 84-32037 18',
          doc_count: 8
        },
        {
          key:
            'LIU WU SANHENG ROAD XINCHENG DISTRICT SHEKKIT TOWN DONGGUAN CITY GUANGDONG PROVIN 523 000 CN',
          doc_count: 8
        },
        {
          key: 'NO.9 BINSHUI ROAD HEXI DISTRICT TIANJIN CHINA',
          doc_count: 8
        },
        {
          key: 'CO., LTD. NHON HOA VILLAGE 1, DUC DUC HOA 81 000 VN',
          doc_count: 7
        },
        {
          key:
            'JINHUAMEI INDUSTRIAL PARK, NO.2 KAIFANAN RD NANPUXISAN DASHI,PANYU,GUANGZHOU,CHINA',
          doc_count: 7
        },
        {
          key:
            'JL. SODONG/ ALTERNATIF JONGGOL DS. MEKARGALIH KEC. CIKALONG KULON INDONESIA',
          doc_count: 7
        },
        {
          key:
            'LOTS 6-11, AREA E1, TAN THOI HIEP IZ, HIEP THANH WARD, DISTRICT 12, HO CHI MINH,VIETNAM 84-2839331220 TEL EX 84-08382 39',
          doc_count: 7
        },
        {
          key:
            'M - HOA BINH CO LTD. LUONG SON INDUSTRIAL PARK,HOA SON 84-2743757629 TEL EX 84-65037 57',
          doc_count: 7
        },
        {
          key:
            'NO. 374 BRGY SAN FELIX STO TOMAS BATANGAS CITY, PHILIPPINES TAX ID: 000-701-362-000',
          doc_count: 7
        },
        {
          key:
            'ROOM 3306-07,33/F.,LAWS COMMERCIAL PLAZA,788 CHEUNG SHA WAN ROAD, LAI CHI KOK,KLN,HK. 852-23711154 TEL EX 852-2370 67',
          doc_count: 7
        },
        {
          key:
            'THAP-HONG-KY INDUSTRIAL GROUP- DIEN HONG COMMMUNE-DIEN CHAU DISTRICT, NGHE AN PROVINCE, VIET TE NAM.',
          doc_count: 7
        },
        {
          key: '. MINUANGODA ROAD COLOMBO CO 00100 LK',
          doc_count: 6
        },
        {
          key: '. NAWAM MW COLOMBO CO 00100 LK',
          doc_count: 6
        },
        {
          key: '13 A F S TOWER WORLD FINANCE CTR TS IMSHATSUIKL',
          doc_count: 6
        },
        {
          key:
            '13 A/F S TOWER WORLD FINANCE CTR TSIMSHATSUIKL HONG KONG TE086-021-61807387',
          doc_count: 6
        },
        {
          key:
            'D. NO.08 ROAD 15, QUARTER 4, LINHTRUNG WARD,THU DUC DISTRICT, HOCHIMINH 84-837245211 TEL EX 84-08372 45',
          doc_count: 6
        },
        {
          key: 'JIN) CO.,LTD NO.9 BINSHUI ROAD HEXI DISTRICT TIANJIN CHINA',
          doc_count: 6
        },
        {
          key:
            'JL. KADUDAMPIT KM.05 RT.17 04 KEC.KADUDAMPIT - KAB SUKABUMI, WEST JA TELP. 0266-226985',
          doc_count: 6
        },
        {
          key:
            'TAN DAN COMMUNE, CHI LINH TOWN HAI DUONG PROVINCE, VIETNAM 84-3203888897 TEL EX 84-32038 88',
          doc_count: 6
        },
        {
          key:
            '- HOA BINH CO LTD. LUONG SON INDUSTRIAL PARK,HOA SON COMMUNE,LUONG SON DISTRICT,HOA TEBINH PROVINCE,VIETNAM',
          doc_count: 5
        },
        {
          key: '. MINUANGODA ROAD JA-ELA 11410 LK',
          doc_count: 5
        },
        {
          key:
            '1-8 BLOCK A1,4-8 BLOCK A4,1-3&9-10 BLOCK KB1, TAN THOI HIEP IZ, HIEP THANH WARD, DIST 12, HCM CITY, VN 84-2839331220 TEL EX 84-08382 39',
          doc_count: 5
        },
        {
          key:
            '15TH FLOOR, DAN 6, 6 FUI YIU KOK STREET, TSUENWAN, KOWLOON, HONG KONG',
          doc_count: 5
        },
        {
          key:
            '4 F.,BLK B,UNIT NO.7,PO LUNG CENTRE,11 WANG CHIU ROAD, KOWLOON BAY,KOWLOON,HONG KONG',
          doc_count: 5
        },
        {
          key:
            'AREA NO. 6, DON TAY, THANH VINH WARD PHU THO TOWN, PHU THO PROVINCE 293500, VIETNAM 84-466751553 TEL EX 84-04628 52',
          doc_count: 5
        },
        {
          key:
            'C O OCEAN KEN INTERNATIONAL LTD. RM 1104, 11 F WITTY COMM BLDG 1A-1L TUNG CHOI ST MONG KOK KL HK',
          doc_count: 5
        },
        {
          key:
            'GARMENT FACTORY NO.123,AVENIDA ALMIRANTE LACERDA HIP WA EDIF. TEIND.10 B MACAU',
          doc_count: 5
        },
        {
          key: 'JL. KADUDAMPIT KM.05 RT.17/04 KADUDAMPIT SUKABUMI INDONESIA',
          doc_count: 5
        },
        {
          key:
            'JL. KARANG TENGAH KM. 14 NO. 741A KP. SELAAWI DESA KARANG TENGAH SUKABUMI-INDONESIA',
          doc_count: 5
        },
        {
          key:
            'JL. RAYA CIDAHU KM.2 KP PONDOKKASO. DESA PONDOKKASO. TONGGOH KECAMATAN CIDAHU KABUPATEN. SUKABUMI TEINDONESIA',
          doc_count: 5
        },
        {
          key:
            'JL. SULAWESI BLOK D 45B UNITUSAHA CAKUNG, KBN KEL. SUKAPURA INDONESIA',
          doc_count: 5
        },
        {
          key:
            'STOCK COMPANY DOAN BAI COMMUNE, HIEP HOA DISTRICT BAC GIANG PROVINCE , VIETNAM',
          doc_count: 5
        },
        {
          key: '. NO.18 LOT C1 THONG NHAT ROAD DI AN 72000 VN',
          doc_count: 4
        },
        {
          key: '12/F CHANGCHUN MANSION NO.159, NINGBO CN',
          doc_count: 4
        },
        {
          key:
            'AD-DULAYL INDUSTRIAL PARK P.O.BOX 204 AD-DULAYL 962-53824766 TEL EX 962-5382 47',
          doc_count: 4
        },
        {
          key:
            'GOODS GIFT CO., LTD 1-5F,NO.4,SOUTH SIDE OF XINGYE LU, NANCUN TOWN,PANYU DISTRICT,GUANG TEZHOU CITY,GUANGDONG P.R.CHINA',
          doc_count: 4
        },
        {
          key:
            'HOANG DIEU INDUSTRIAL ZONE GIA LOC DISTRICT, HAI DUONG PROVINCE VIETNAM',
          doc_count: 4
        },
        {
          key:
            'JL. KADUDAMPIT KM.05 RT.17/04 KEC. KADUDAMPIT - KAB. SUKABUMI INDONESIA',
          doc_count: 4
        },
        {
          key:
            'JL. RAYA BOGOR KM 28 RT006 RW02 KEL. PEKAYON KEC. PASAR REB JAKARTA TIMUR',
          doc_count: 4
        },
        {
          key:
            'JL.RAYA KARANG TENGAH KM.14 NO.741A KP.SELAAWI DS.KARANG TENGAH KAB. SUKABUMI',
          doc_count: 4
        },
        {
          key:
            'JL.RAYA MAYOR OKING NO.112B KEL.CIRIMEKAR KEC.CIBINONG KAB.BOGOR, 16918 - INDONESIA',
          doc_count: 4
        }
      ]
    },
    Shipper: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 57,
      buckets: [
        {
          key: 'HONG KONG SEGAWE LTD',
          doc_count: 184
        },
        {
          key: 'EAM MALIBAN TEXTILE (PVT) LTD',
          doc_count: 121
        },
        {
          key: 'TUSKER APPAREL LTD CO',
          doc_count: 110
        },
        {
          key: 'PT.NOTOS',
          doc_count: 96
        },
        {
          key: 'ABSOLUTE INTERNATIONAL CO LTD',
          doc_count: 95
        },
        {
          key: 'TUSKER APPAREL LTD CO.',
          doc_count: 89
        },
        {
          key: 'PT. GISTEX GARMEN INDONESIA',
          doc_count: 69
        },
        {
          key: 'EAM MALIBAN TEXTILE PVT LTD',
          doc_count: 58
        },
        {
          key: 'EAM MALIBAN TEXTILES (PVT) LTD',
          doc_count: 49
        },
        {
          key: 'LITA LIMITED',
          doc_count: 49
        },
        {
          key: 'PT. DAEHAN GLOBAL',
          doc_count: 47
        },
        {
          key: 'FTN GARMENTS CORPORATION',
          doc_count: 46
        },
        {
          key: 'POLYTEX GARMENTS LTD',
          doc_count: 43
        },
        {
          key: 'VEGA TEXTILE LTD',
          doc_count: 43
        },
        {
          key: 'COVO KNITTERS LTD',
          doc_count: 42
        },
        {
          key: 'HON HAI PRECISION INDUSTRY CO LT',
          doc_count: 40
        },
        {
          key: 'PRIMAX ELECTRONICS LTD',
          doc_count: 40
        },
        {
          key: 'HUNG LONG GARMENT AND SERVICE',
          doc_count: 39
        },
        {
          key: 'VINA KOREA CO., LTD',
          doc_count: 38
        },
        {
          key: 'EAM MALIBAN TEXTILES JORDAN PVT LTD',
          doc_count: 34
        },
        {
          key: 'PT GUNUNG ABADI',
          doc_count: 33
        },
        {
          key: 'VEGA TEXTILE LTD.',
          doc_count: 33
        },
        {
          key: 'YIWU REDFOREST TRADING CO.,LIMITED',
          doc_count: 33
        },
        {
          key: 'PT. VIANA UNGGUL GARMINDO',
          doc_count: 32
        },
        {
          key: 'NOBLAND VIETNAM CO., LTD.',
          doc_count: 31
        },
        {
          key: 'ESQUEL ENTERPRISES LIMITED.',
          doc_count: 28
        },
        {
          key: 'TRADE FACILITATOR FULFILLMENT',
          doc_count: 28
        },
        {
          key: 'CRYSTAL APPARELLTD',
          doc_count: 23
        },
        {
          key: 'ON TIME MFG., INC.',
          doc_count: 23
        },
        {
          key: 'PT. PINNACLE APPARELS',
          doc_count: 21
        },
        {
          key: 'LHK CREATION INC.',
          doc_count: 19
        },
        {
          key: 'TRADE FACILITATOR FULFILLMENT (TIAN',
          doc_count: 18
        },
        {
          key: 'PT MELADY GARMENT INTERNATIONAL',
          doc_count: 17
        },
        {
          key: 'WOOIN VINACO., LTD',
          doc_count: 17
        },
        {
          key: 'ESQUEL ENTERPRISES LIMITED',
          doc_count: 16
        },
        {
          key: 'TRENER INDUSTRIES LTD',
          doc_count: 16
        },
        {
          key: 'UNIQUE FASHION HK LTD',
          doc_count: 16
        },
        {
          key: 'FORMOSTAR GARMENT(VIETNAM)',
          doc_count: 15
        },
        {
          key: 'SSV EXPORT GARMENT COMPANY',
          doc_count: 12
        },
        {
          key: 'ESQUEL GARMENT MANUFACTURING VIETNA',
          doc_count: 11
        },
        {
          key: 'PT. CIPTA DWI BUSANA',
          doc_count: 11
        },
        {
          key: 'UBI VINA 2 CO., LTD',
          doc_count: 11
        },
        {
          key: 'FTN VIET NAM CO., LTD',
          doc_count: 10
        },
        {
          key: 'TEXMA VINA CO., LTD',
          doc_count: 10
        },
        {
          key: 'UPS SCS (ASIA) LTD AS AGENT FOR',
          doc_count: 10
        },
        {
          key: 'PT. GUNUNG ABADI',
          doc_count: 9
        },
        {
          key: 'DONGGUAN TYMPHANY ACOUSTIC TECHNOLO',
          doc_count: 8
        },
        {
          key: 'HAPHONG EXPORT GARMENT JOINT',
          doc_count: 8
        },
        {
          key: 'PT. NOTOS',
          doc_count: 8
        },
        {
          key: 'CHUTEX INTERNATIONAL(LONG AN)',
          doc_count: 7
        },
        {
          key: 'JINHUAMEI LEATHERWARE MFG.CO.LTD',
          doc_count: 7
        },
        {
          key: 'MICHIGAN HAIDUONG CO.,LTD',
          doc_count: 7
        },
        {
          key: 'NINGBO XINHAO DESEN INTERNATIONAL',
          doc_count: 7
        },
        {
          key: 'NY SAN FELIX LTD. CORP.',
          doc_count: 7
        },
        {
          key: 'CHUTEX INTERNATIONAL CO.,LTD',
          doc_count: 6
        },
        {
          key: 'NINGBO ZHONGRUI IMPORT AND EXPORT',
          doc_count: 6
        },
        {
          key: 'PT. HARINDO',
          doc_count: 6
        },
        {
          key: 'PT. PRIMA SEJATI SEJAHTERA',
          doc_count: 6
        },
        {
          key: 'QINGDAO HUARUI FURNITURE CO., LTD.',
          doc_count: 6
        },
        {
          key: 'VINA CKGF TRADING CO., LTD',
          doc_count: 6
        },
        {
          key: 'FORMOSTAR GARMENT VIETNAM',
          doc_count: 5
        },
        {
          key: 'GEORGE HENSLER COMPANY.',
          doc_count: 5
        },
        {
          key: 'HUNG LONG GARMENT AND SERVICE STOCK',
          doc_count: 5
        },
        {
          key: 'JOINTGAIN INDUSTRIAL LIMITED',
          doc_count: 5
        },
        {
          key: 'RIVER GLORY LTD.',
          doc_count: 5
        },
        {
          key: 'SESHIN VIETNAM CO., LTD',
          doc_count: 5
        },
        {
          key: 'TIN TIN EXPRESS CO. LTD. O B FU SON',
          doc_count: 5
        },
        {
          key: 'GUANG ZHOU WELL HOPE LEATHER',
          doc_count: 4
        },
        {
          key: 'QINGDAO HUARUI FURNITURE CO.,LTD.',
          doc_count: 4
        },
        {
          key: 'QUANTA COMPUTER INC',
          doc_count: 4
        },
        {
          key: 'SUN GARMENT TEXTILE VIETNAM CO., LT',
          doc_count: 4
        },
        {
          key: 'VINA KYUNG SEUNG TRADING CO.,LTD',
          doc_count: 4
        },
        {
          key: 'BRANDIX APPAREL LTD',
          doc_count: 3
        },
        {
          key: 'DONGGUAN HONGDING LEATHER CO.,LTD',
          doc_count: 3
        },
        {
          key: 'HOA THO TEXTILE - GARMENT',
          doc_count: 3
        },
        {
          key: 'PT.PAN PACIFIC JAKARTA CAB SEMARANG',
          doc_count: 3
        },
        {
          key: 'QINGDAO WELHOME CO.,LTD.',
          doc_count: 3
        },
        {
          key: 'QINGDAO ZHONGSEN INDUSTRIAL CO.,LTD',
          doc_count: 3
        },
        {
          key: 'SOUTH ASIA KNITTING FACTORY LTD.',
          doc_count: 3
        },
        {
          key: 'TIANJIN CHINAPACK IMP.& EXP.CO.,LTD',
          doc_count: 3
        },
        {
          key: 'ARMANA APPARELS LTD.',
          doc_count: 2
        },
        {
          key: 'CIXI YONGYE FURNITURE CO.,LTD',
          doc_count: 2
        },
        {
          key: 'COSMOSUPPLYLAB LTD',
          doc_count: 2
        },
        {
          key: 'DONGGUAN LONGCHEN TRADING CO. LTD',
          doc_count: 2
        },
        {
          key: 'ESQUEL GARMENT MANUFACTURING',
          doc_count: 2
        },
        {
          key: 'ESQUEL GARMENT MANUFACTURING VIET',
          doc_count: 2
        },
        {
          key: 'HON HAI PRECISION INDUSTRY CO.,LTD',
          doc_count: 2
        },
        {
          key: 'HSIN HUNG TEXTILES LIMITED',
          doc_count: 2
        },
        {
          key: 'POLENZ GMBH& CO. KG',
          doc_count: 2
        },
        {
          key: 'PRO SPORTS GIAO THUY JOINT',
          doc_count: 2
        },
        {
          key: 'PT DAEHAN GLOBAL YEN DUNG JOINT',
          doc_count: 2
        },
        {
          key: 'PT. MELADY GARMENT INTERNATIONAL',
          doc_count: 2
        },
        {
          key: 'QINGDAO XINHUARUI INDUSTRY AND',
          doc_count: 2
        },
        {
          key: 'REFAT GARMENTS LIMITED,',
          doc_count: 2
        },
        {
          key: 'RICHTER LIGHTING TECHNOLOGIES GMBH',
          doc_count: 2
        },
        {
          key: 'SUN GARMENT TEXTILE VIETNAM CO.,',
          doc_count: 2
        },
        {
          key: 'TRADE FACILITATOR FUFILLMENT(TIANJI',
          doc_count: 2
        },
        {
          key: 'TULIP IMPORT & EXPORT CO.,LTD',
          doc_count: 2
        },
        {
          key: 'VINA KYUNG SEUNG TRADING CO., LTD',
          doc_count: 2
        },
        {
          key: 'YAKJIN VIETNAM CO., LTD',
          doc_count: 2
        }
      ]
    },
    ConsigneeStreet: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'FOLSOM',
          doc_count: 3942
        },
        {
          key: 'ROCHESTER',
          doc_count: 236
        },
        {
          key: 'BASE LINE',
          doc_count: 95
        },
        {
          key: '52ND',
          doc_count: 35
        },
        {
          key: 'SEPULVEDA',
          doc_count: 17
        },
        {
          key: 'COMMERCE',
          doc_count: 13
        },
        {
          key: 'GALE',
          doc_count: 13
        },
        {
          key: '24TH',
          doc_count: 7
        },
        {
          key: 'INFINITE',
          doc_count: 4
        },
        {
          key: 'WIEGMAN',
          doc_count: 4
        },
        {
          key: 'CLEMENT',
          doc_count: 3
        },
        {
          key: 'GLENOAKS',
          doc_count: 2
        },
        {
          key: 'HARRISON 2 FOLSOM',
          doc_count: 2
        },
        {
          key: 'AEROS',
          doc_count: 1
        },
        {
          key: 'BLACK MOUNTAIN QUARRY',
          doc_count: 1
        },
        {
          key: 'BUSINESS',
          doc_count: 1
        },
        {
          key: 'CARROLL',
          doc_count: 1
        },
        {
          key: 'CASA GRANDE',
          doc_count: 1
        },
        {
          key: 'CHRISTY',
          doc_count: 1
        },
        {
          key: 'CHURCH',
          doc_count: 1
        },
        {
          key: 'DOHENY',
          doc_count: 1
        },
        {
          key: 'FOLSOM STREETFARMS',
          doc_count: 1
        },
        {
          key: 'LINCOLN',
          doc_count: 1
        },
        {
          key: 'NANDINA',
          doc_count: 1
        },
        {
          key: 'POPLAR',
          doc_count: 1
        },
        {
          key: 'PROFORMA',
          doc_count: 1
        },
        {
          key: 'SAN FEDRO',
          doc_count: 1
        },
        {
          key: 'SEAPORT',
          doc_count: 1
        },
        {
          key: 'STELLER',
          doc_count: 1
        },
        {
          key: 'TAYLOR',
          doc_count: 1
        },
        {
          key: 'UNIVERSITY',
          doc_count: 1
        },
        {
          key: 'VON KARMAN',
          doc_count: 1
        },
        {
          key: 'WESTERN',
          doc_count: 1
        },
        {
          key: 'WOLFE',
          doc_count: 1
        },
        {
          key: 'YARD',
          doc_count: 1
        },
        {
          key: 'YOSEMITE',
          doc_count: 1
        },
        {
          key: 'YOUNGER CREEK',
          doc_count: 1
        }
      ]
    },
    ConsigneeState: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'CA',
          doc_count: 4446
        }
      ]
    },
    ConsigneeCity: {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'SAN FRANCISCO',
          doc_count: 3939
        },
        {
          key: 'RANCHO CUCAMONGA',
          doc_count: 118
        },
        {
          key: 'RANCHO',
          doc_count: 95
        },
        {
          key: 'RIALTO',
          doc_count: 95
        },
        {
          key: 'SAN FRANSISCO',
          doc_count: 53
        },
        {
          key: 'VERNON CALIFORNIA CITY',
          doc_count: 21
        },
        {
          key: 'RANC',
          doc_count: 16
        },
        {
          key: 'VERNON',
          doc_count: 14
        },
        {
          key: 'CITY OF INDUSTRY',
          doc_count: 12
        },
        {
          key: 'SAN FRANCISCO SAN F RANCISCO',
          doc_count: 10
        },
        {
          key: 'COMMERCE',
          doc_count: 8
        },
        {
          key: 'MANHATTAN',
          doc_count: 6
        },
        {
          key: 'CUPERTINO',
          doc_count: 5
        },
        {
          key: 'LOS ANGELES',
          doc_count: 5
        },
        {
          key: 'MANHATT AN BEACH',
          doc_count: 5
        },
        {
          key: 'MANHATTAN BEACH',
          doc_count: 5
        },
        {
          key: 'RANCHO CACAMON',
          doc_count: 5
        },
        {
          key: 'HAYWARD',
          doc_count: 4
        },
        {
          key: 'APPLE VALLEY',
          doc_count: 1
        },
        {
          key: 'CITY OF INDUATRY',
          doc_count: 1
        },
        {
          key: 'COMMERCE CALIFO',
          doc_count: 1
        },
        {
          key: 'COMMERCE CALIFORN',
          doc_count: 1
        },
        {
          key: 'CULVER CITY',
          doc_count: 1
        },
        {
          key: 'FONTANA',
          doc_count: 1
        },
        {
          key: 'FREMONT',
          doc_count: 1
        },
        {
          key: 'IRVINE',
          doc_count: 1
        },
        {
          key: 'MANHATTAN BEACH LOS ANGELES',
          doc_count: 1
        },
        {
          key: 'MILPITAS',
          doc_count: 1
        },
        {
          key: 'MONTEBELLO',
          doc_count: 1
        },
        {
          key: 'MORENO VALLEY',
          doc_count: 1
        },
        {
          key: 'NEWPORT BEACH',
          doc_count: 1
        },
        {
          key: 'OAKLAND',
          doc_count: 1
        },
        {
          key: 'ONTARIO',
          doc_count: 1
        },
        {
          key: 'R HO DOMINGUEZ',
          doc_count: 1
        },
        {
          key: 'RAN CHO',
          doc_count: 1
        },
        {
          key: 'RAN RANCHO CUCAMONGA',
          doc_count: 1
        },
        {
          key: 'RANC ROCHESTER',
          doc_count: 1
        },
        {
          key: 'REDWOOD CITY',
          doc_count: 1
        },
        {
          key: 'SACRAMENTO',
          doc_count: 1
        },
        {
          key: 'SAN DIEGO',
          doc_count: 1
        },
        {
          key: 'SAN FRANCISC',
          doc_count: 1
        },
        {
          key: 'SAN FRANCISCO SAN FRANCISCO',
          doc_count: 1
        },
        {
          key: 'SAN JOSE',
          doc_count: 1
        },
        {
          key: 'SAN RAMON',
          doc_count: 1
        },
        {
          key: 'STREECAT SAN FRANCISCO',
          doc_count: 1
        },
        {
          key: 'SUNVALLEY CALIFORNIA',
          doc_count: 1
        },
        {
          key: 'SUN VALLEY CALIFORNIA USA POST',
          doc_count: 1
        },
        {
          key: 'TORRANCE',
          doc_count: 1
        }
      ]
    },
    BlankConsigneesExcluded: {
      doc_count: 15
    }
  }
}

export default sampleRefinementESResponse
