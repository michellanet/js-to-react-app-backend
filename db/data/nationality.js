// Get all ethnicities from North America
const northAmerica = [
  "Anguillan",
  "Antiguan or Barbudan",
  "Bahamian",
  "Barbadian",
  "Belizean",
  "Bermudian, Bermudan",
  "Canadian",
  "Caymanian",
  "Costa Rican",
  "Cuban",
  "Dominican",
  "Salvadoran",
  "Greenlandic",
  "Grenadian",
  "Guadeloupe",
  "Guatemalan",
  "Haitian",
  "Honduran",
  "Jamaican",
  "Martiniquais, Martinican",
  "Mexican",
  "Montserratian",
  "Nicaraguan",
  "Panamanian",
  "Puerto Rican",
  "Barth\u00e9lemois",
  "Kittitian or Nevisian",
  "Saint Lucian",
  "Saint-Martinoise",
  "Saint-Pierrais or Miquelonnais",
  "Saint Vincentian, Vincentian",
  "Sint Maarten",
  "Turks and Caicos Island",
  "American",
  "British Virgin Island",
  "U.S. Virgin Island"
];

// Get all ethnicities from Europe
const europe = [
  "\u00c5land Island",
  "Albanian",
  "Andorran",
  "Austrian",
  "Azerbaijani, Azeri",
  "Belarusian",
  "Belgian",
  "Bosnian or Herzegovinian",
  "Bulgarian",
  "Croatian",
  "Cypriot",
  "Czech",
  "Danish",
  "Estonian",
  "Faroese",
  "Finnish",
  "French",
  "Georgian",
  "German",
  "Gibraltar",
  "Greek",
  "Channel Island",
  "Vatican",
  "Hungarian",
  "Icelandic",
  "Irish",
  "Manx",
  "Italian",
  "Latvian",
  "Liechtenstein",
  "Lithuanian",
  "Luxembourg, Luxembourgish",
  "Macedonian",
  "Maltese",
  "Moldovan",
  "Mon\u00e9gasque, Monacan",
  "Montenegrin",
  "Dutch, Netherlandic",
  "Norwegian",
  "Polish",
  "Portuguese",
  "Romanian",
  "Russian",
  "Sammarinese",
  "Serbian",
  "Slovak",
  "Slovenian, Slovene",
  "Spanish",
  "Svalbard",
  "Swedish",
  "Swiss",
  "Turkish",
  "Ukrainian",
  "British"
];

// Get all ethnicities from Asia
const asia = [
  "Afghan",
  "Armenian",
  "Bahraini",
  "Bangladeshi",
  "Bhutanese",
  "BIOT",
  "Bruneian",
  "Cambodian",
  "Chinese",
  "Christmas Island",
  "Cocos Island",
  "Hong Kongese",
  "Indian",
  "Indonesian",
  "Iranian, Persian",
  "Iraqi",
  "Israeli",
  "Japanese",
  "Jordanian",
  "Kazakhstani, Kazakh",
  "North Korean",
  "South Korean",
  "Kuwaiti",
  "Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz",
  "Lao, Laotian",
  "Lebanese",
  "Macanese",
  "Malaysian",
  "Maldivian",
  "Mongolian",
  "Burmese",
  "Nepali, Nepalese",
  "Omani",
  "Pakistani",
  "Palestinian",
  "Philippine, Filipino",
  "Qatari",
  "Saudi, Saudi Arabian",
  "Singaporean",
  "Sri Lankan",
  "Syrian",
  "Taiwanese",
  "Tajikistani",
  "Thai",
  "Timorese",
  "Turkmen",
  "Emirati, Emirian, Emiri",
  "Uzbekistani, Uzbek",
  "Vietnamese",
  "Yemeni"
];

// Get all ethnicities from South America
const southAmerica = [
  "Argentine",
  "Aruban",
  "Bolivian",
  "Bonaire",
  "Brazilian",
  "Chilean",
  "Colombian",
  "Cura\u00e7aoan",
  "Ecuadorian",
  "Falkland Island",
  "French Guianese",
  "Guyanese",
  "Paraguayan",
  "Peruvian",
  "Pitcairn Island",
  "South Georgia, South Sandwich Islands",
  "Surinamese",
  "Trinidadian or Tobagonian",
  "Uruguayan",
  "Venezuelan"
];

// Get all ethnicities from Africa
const africa = [
  "Algerian",
  "Angolan",
  "Beninese, Beninois",
  "Motswana, Botswanan",
  "Burkinab\u00e9",
  "Burundian",
  "Cabo Verdean",
  "Cameroonian",
  "Central African",
  "Chadian",
  "Comoran, Comorian",
  "Congolese",
  "Ivorian",
  "Djiboutian",
  "Egyptian",
  "Equatorial Guinean, Equatoguinean",
  "Eritrean",
  "Ethiopian",
  "Gabonese",
  "Gambian",
  "Ghanaian",
  "Guinean",
  "Bissau-Guinean",
  "Kenyan",
  "Basotho",
  "Liberian",
  "Libyan",
  "Malagasy",
  "Malawian",
  "Malian, Malinese",
  "Mauritanian",
  "Mauritian",
  "Mahoran",
  "Moroccan",
  "Mozambican",
  "Namibian",
  "Nigerien",
  "Nigerian",
  "Rwandan",
  "Saint Helenian",
  "S\u00e3o Tom\u00e9an",
  "Senegalese",
  "Seychellois",
  "Sierra Leonean",
  "Somali, Somalian",
  "South African",
  "South Sudanese",
  "Sudanese",
  "Swazi",
  "Tanzanian",
  "Togolese",
  "Tunisian",
  "Ugandan",
  "Sahrawi, Sahrawian, Sahraouian",
  "Zambian",
  "Zimbabwean"
];

// Get all ethnicities from Australia
const australia = [
  "American Samoan",
  "Australian",
  "Bouvet Island",
  "Cook Island",
  "Fijian",
  "French Polynesian",
  "Guamanian, Guambat",
  "I-Kiribati",
  "Marshallese",
  "Micronesian",
  "Nauruan",
  "New Caledonian",
  "New Zealander",
  "Niuean",
  "Norfolk Island",
  "Northern Marianan",
  "Palauan",
  "Papua New Guinean, Papuan",
  "Samoan",
  "Solomon Island",
  "Tokelauan",
  "Tongan",
  "Tuvaluan",
  "Ni-Vanuatu, Vanuatuan",
  "Wallis and Futuna, Wallisian or Futunan"
];

const nationalities = [
  {
    num_code: "4",
    alpha_2_code: "AF",
    alpha_3_code: "AFG",
    en_short_name: "Afghanistan",
    nationality: "Afghan",
    continent: "Asia"
  },
  {
    num_code: "248",
    alpha_2_code: "AX",
    alpha_3_code: "ALA",
    en_short_name: "\u00c5land Islands",
    nationality: "\u00c5land Island",
    continent: "Europe"
  },
  {
    num_code: "8",
    alpha_2_code: "AL",
    alpha_3_code: "ALB",
    en_short_name: "Albania",
    nationality: "Albanian",
    continent: "Europe"
  },
  {
    num_code: "12",
    alpha_2_code: "DZ",
    alpha_3_code: "DZA",
    en_short_name: "Algeria",
    nationality: "Algerian",
    continent: "Africa"
  },
  {
    num_code: "840",
    alpha_2_code: "US",
    alpha_3_code: "USA",
    en_short_name: "United States of America",
    nationality: "American",
    continent: "North America"
  },
  {
    num_code: "16",
    alpha_2_code: "AS",
    alpha_3_code: "ASM",
    en_short_name: "American Samoa",
    nationality: "American Samoan",
    continent: "Australia"
  },
  {
    num_code: "20",
    alpha_2_code: "AD",
    alpha_3_code: "AND",
    en_short_name: "Andorra",
    nationality: "Andorran",
    continent: "Europe"
  },
  {
    num_code: "24",
    alpha_2_code: "AO",
    alpha_3_code: "AGO",
    en_short_name: "Angola",
    nationality: "Angolan",
    continent: "Africa"
  },
  {
    num_code: "660",
    alpha_2_code: "AI",
    alpha_3_code: "AIA",
    en_short_name: "Anguilla",
    nationality: "Anguillan",
    continent: "North America"
  },
  {
    num_code: "28",
    alpha_2_code: "AG",
    alpha_3_code: "ATG",
    en_short_name: "Antigua and Barbuda",
    nationality: "Antiguan or Barbudan",
    continent: "North America"
  },
  {
    num_code: "32",
    alpha_2_code: "AR",
    alpha_3_code: "ARG",
    en_short_name: "Argentina",
    nationality: "Argentine",
    continent: "South America"
  },
  {
    num_code: "51",
    alpha_2_code: "AM",
    alpha_3_code: "ARM",
    en_short_name: "Armenia",
    nationality: "Armenian",
    continent: "Asia"
  },
  {
    num_code: "533",
    alpha_2_code: "AW",
    alpha_3_code: "ABW",
    en_short_name: "Aruba",
    nationality: "Aruban",
    continent: "South America"
  },
  {
    num_code: "36",
    alpha_2_code: "AU",
    alpha_3_code: "AUS",
    en_short_name: "Australia",
    nationality: "Australian",
    continent: "Australia"
  },
  {
    num_code: "40",
    alpha_2_code: "AT",
    alpha_3_code: "AUT",
    en_short_name: "Austria",
    nationality: "Austrian",
    continent: "Europe"
  },
  {
    num_code: "31",
    alpha_2_code: "AZ",
    alpha_3_code: "AZE",
    en_short_name: "Azerbaijan",
    nationality: "Azerbaijani, Azeri",
    continent: "Europe"
  },
  {
    num_code: "44",
    alpha_2_code: "BS",
    alpha_3_code: "BHS",
    en_short_name: "Bahamas",
    nationality: "Bahamian",
    continent: "North America"
  },
  {
    num_code: "48",
    alpha_2_code: "BH",
    alpha_3_code: "BHR",
    en_short_name: "Bahrain",
    nationality: "Bahraini",
    continent: "Asia"
  },
  {
    num_code: "50",
    alpha_2_code: "BD",
    alpha_3_code: "BGD",
    en_short_name: "Bangladesh",
    nationality: "Bangladeshi",
    continent: "Asia"
  },
  {
    num_code: "52",
    alpha_2_code: "BB",
    alpha_3_code: "BRB",
    en_short_name: "Barbados",
    nationality: "Barbadian",
    continent: "North America"
  },
  {
    num_code: "112",
    alpha_2_code: "BY",
    alpha_3_code: "BLR",
    en_short_name: "Belarus",
    nationality: "Belarusian",
    continent: "Europe"
  },
  {
    num_code: "56",
    alpha_2_code: "BE",
    alpha_3_code: "BEL",
    en_short_name: "Belgium",
    nationality: "Belgian",
    continent: "Europe"
  },
  {
    num_code: "84",
    alpha_2_code: "BZ",
    alpha_3_code: "BLZ",
    en_short_name: "Belize",
    nationality: "Belizean",
    continent: "North America"
  },
  {
    num_code: "204",
    alpha_2_code: "BJ",
    alpha_3_code: "BEN",
    en_short_name: "Benin",
    nationality: "Beninese, Beninois",
    continent: "Africa"
  },
  {
    num_code: "60",
    alpha_2_code: "BM",
    alpha_3_code: "BMU",
    en_short_name: "Bermuda",
    nationality: "Bermudian, Bermudan",
    continent: "North America"
  },
  {
    num_code: "64",
    alpha_2_code: "BT",
    alpha_3_code: "BTN",
    en_short_name: "Bhutan",
    nationality: "Bhutanese",
    continent: "Asia"
  },
  {
    num_code: "86",
    alpha_2_code: "IO",
    alpha_3_code: "IOT",
    en_short_name: "British Indian Ocean Territory",
    nationality: "BIOT",
    continent: "Asia"
  },
  {
    num_code: "68",
    alpha_2_code: "BO",
    alpha_3_code: "BOL",
    en_short_name: "Bolivia",
    nationality: "Bolivian",
    continent: "South America"
  },
  {
    num_code: "535",
    alpha_2_code: "BQ",
    alpha_3_code: "BES",
    en_short_name: "Bonaire, Sint Eustatius, and Saba",
    nationality: "Bonaire",
    continent: "South America"
  },
  {
    num_code: "70",
    alpha_2_code: "BA",
    alpha_3_code: "BIH",
    en_short_name: "Bosnia and Herzegovina",
    nationality: "Bosnian or Herzegovinian",
    continent: "Europe"
  },
  {
    num_code: "72",
    alpha_2_code: "BW",
    alpha_3_code: "BWA",
    en_short_name: "Botswana",
    nationality: "Motswana, Botswanan",
    continent: "Africa"
  },
  {
    num_code: "74",
    alpha_2_code: "BV",
    alpha_3_code: "BVT",
    en_short_name: "Bouvet Island",
    nationality: "Bouvet Island",
    continent: "Australia"
  },
  {
    num_code: "76",
    alpha_2_code: "BR",
    alpha_3_code: "BRA",
    en_short_name: "Brazil",
    nationality: "Brazilian",
    continent: "South America"
  },
  {
    num_code: "826",
    alpha_2_code: "GB",
    alpha_3_code: "GBR",
    en_short_name: "United Kingdom",
    nationality: "British",
    continent: "Europe"
  },
  {
    num_code: "96",
    alpha_2_code: "BN",
    alpha_3_code: "BRN",
    en_short_name: "Brunei",
    nationality: "Bruneian",
    continent: "Asia"
  },
  {
    num_code: "100",
    alpha_2_code: "BG",
    alpha_3_code: "BGR",
    en_short_name: "Bulgaria",
    nationality: "Bulgarian",
    continent: "Europe"
  },
  {
    num_code: "854",
    alpha_2_code: "BF",
    alpha_3_code: "BFA",
    en_short_name: "Burkina Faso",
    nationality: "Burkinab\u00e9",
    continent: "Africa"
  },
  {
    num_code: "108",
    alpha_2_code: "BI",
    alpha_3_code: "BDI",
    en_short_name: "Burundi",
    nationality: "Burundian",
    continent: "Africa"
  },
  {
    num_code: "132",
    alpha_2_code: "CV",
    alpha_3_code: "CPV",
    en_short_name: "Cabo Verde",
    nationality: "Cabo Verdean",
    continent: "Africa"
  },
  {
    num_code: "116",
    alpha_2_code: "KH",
    alpha_3_code: "KHM",
    en_short_name: "Cambodia",
    nationality: "Cambodian",
    continent: "Asia"
  },
  {
    num_code: "120",
    alpha_2_code: "CM",
    alpha_3_code: "CMR",
    en_short_name: "Cameroon",
    nationality: "Cameroonian",
    continent: "Africa"
  },
  {
    num_code: "124",
    alpha_2_code: "CA",
    alpha_3_code: "CAN",
    en_short_name: "Canada",
    nationality: "Canadian",
    continent: "North America"
  },
  {
    num_code: "136",
    alpha_2_code: "KY",
    alpha_3_code: "CYM",
    en_short_name: "Cayman Islands",
    nationality: "Caymanian",
    continent: "North America"
  },
  {
    num_code: "140",
    alpha_2_code: "CF",
    alpha_3_code: "CAF",
    en_short_name: "Central African Republic",
    nationality: "Central African",
    continent: "Africa"
  },
  {
    num_code: "148",
    alpha_2_code: "TD",
    alpha_3_code: "TCD",
    en_short_name: "Chad",
    nationality: "Chadian",
    continent: "Africa"
  },
  {
    num_code: "152",
    alpha_2_code: "CL",
    alpha_3_code: "CHL",
    en_short_name: "Chile",
    nationality: "Chilean",
    continent: "South America"
  },
  {
    num_code: "156",
    alpha_2_code: "CN",
    alpha_3_code: "CHN",
    en_short_name: "China",
    nationality: "Chinese",
    continent: "Asia"
  },
  {
    num_code: "162",
    alpha_2_code: "CX",
    alpha_3_code: "CXR",
    en_short_name: "Christmas Island",
    nationality: "Christmas Island",
    continent: "Asia"
  },
  {
    num_code: "166",
    alpha_2_code: "CC",
    alpha_3_code: "CCK",
    en_short_name: "Cocos (Keeling) Islands",
    nationality: "Cocos Island",
    continent: "Asia"
  },
  {
    num_code: "170",
    alpha_2_code: "CO",
    alpha_3_code: "COL",
    en_short_name: "Colombia",
    nationality: "Colombian",
    continent: "South America"
  },
  {
    num_code: "174",
    alpha_2_code: "KM",
    alpha_3_code: "COM",
    en_short_name: "Comoros",
    nationality: "Comoran, Comorian",
    continent: "Africa"
  },
  {
    num_code: "178",
    alpha_2_code: "CG",
    alpha_3_code: "COG",
    en_short_name: "Republic of the Congo",
    nationality: "Congolese",
    continent: "Africa"
  },
  {
    num_code: "180",
    alpha_2_code: "CD",
    alpha_3_code: "COD",
    en_short_name: "Democratic Republic of the Congo",
    nationality: "Congolese",
    continent: "Africa"
  },
  {
    num_code: "184",
    alpha_2_code: "CK",
    alpha_3_code: "COK",
    en_short_name: "Cook Islands",
    nationality: "Cook Island",
    continent: "Australia"
  },
  {
    num_code: "188",
    alpha_2_code: "CR",
    alpha_3_code: "CRI",
    en_short_name: "Costa Rica",
    nationality: "Costa Rican",
    continent: "North America"
  },
  {
    num_code: "384",
    alpha_2_code: "CI",
    alpha_3_code: "CIV",
    en_short_name: "C\u00f4te d'Ivoire",
    nationality: "Ivorian",
    continent: "Africa"
  },
  {
    num_code: "191",
    alpha_2_code: "HR",
    alpha_3_code: "HRV",
    en_short_name: "Croatia",
    nationality: "Croatian",
    continent: "Europe"
  },
  {
    num_code: "192",
    alpha_2_code: "CU",
    alpha_3_code: "CUB",
    en_short_name: "Cuba",
    nationality: "Cuban",
    continent: "North America"
  },
  {
    num_code: "531",
    alpha_2_code: "CW",
    alpha_3_code: "CUW",
    en_short_name: "Cura\u00e7ao",
    nationality: "Cura\u00e7aoan",
    continent: "South America"
  },
  {
    num_code: "196",
    alpha_2_code: "CY",
    alpha_3_code: "CYP",
    en_short_name: "Cyprus",
    nationality: "Cypriot",
    continent: "Europe"
  },
  {
    num_code: "203",
    alpha_2_code: "CZ",
    alpha_3_code: "CZE",
    en_short_name: "Czech Republic",
    nationality: "Czech",
    continent: "Europe"
  },
  {
    num_code: "208",
    alpha_2_code: "DK",
    alpha_3_code: "DNK",
    en_short_name: "Denmark",
    nationality: "Danish",
    continent: "Europe"
  },
  {
    num_code: "262",
    alpha_2_code: "DJ",
    alpha_3_code: "DJI",
    en_short_name: "Djibouti",
    nationality: "Djiboutian",
    continent: "Africa"
  },
  {
    num_code: "212",
    alpha_2_code: "DM",
    alpha_3_code: "DMA",
    en_short_name: "Dominica",
    nationality: "Dominican",
    continent: "North America"
  },
  {
    num_code: "214",
    alpha_2_code: "DO",
    alpha_3_code: "DOM",
    en_short_name: "Dominican Republic",
    nationality: "Dominican",
    continent: "North America"
  },
  {
    num_code: "218",
    alpha_2_code: "EC",
    alpha_3_code: "ECU",
    en_short_name: "Ecuador",
    nationality: "Ecuadorian",
    continent: "South America"
  },
  {
    num_code: "818",
    alpha_2_code: "EG",
    alpha_3_code: "EGY",
    en_short_name: "Egypt",
    nationality: "Egyptian",
    continent: "Africa"
  },
  {
    num_code: "222",
    alpha_2_code: "SV",
    alpha_3_code: "SLV",
    en_short_name: "El Salvador",
    nationality: "Salvadoran",
    continent: "North America"
  },
  {
    num_code: "226",
    alpha_2_code: "GQ",
    alpha_3_code: "GNQ",
    en_short_name: "Equatorial Guinea",
    nationality: "Equatorial Guinean, Equatoguinean",
    continent: "Africa"
  },
  {
    num_code: "232",
    alpha_2_code: "ER",
    alpha_3_code: "ERI",
    en_short_name: "Eritrea",
    nationality: "Eritrean",
    continent: "Africa"
  },
  {
    num_code: "233",
    alpha_2_code: "EE",
    alpha_3_code: "EST",
    en_short_name: "Estonia",
    nationality: "Estonian",
    continent: "Europe"
  },
  {
    num_code: "231",
    alpha_2_code: "ET",
    alpha_3_code: "ETH",
    en_short_name: "Ethiopia",
    nationality: "Ethiopian",
    continent: "Africa"
  },
  {
    num_code: "238",
    alpha_2_code: "FK",
    alpha_3_code: "FLK",
    en_short_name: "Falkland Islands",
    nationality: "Falkland Island",
    continent: "South America"
  },
  {
    num_code: "234",
    alpha_2_code: "FO",
    alpha_3_code: "FRO",
    en_short_name: "Faroe Islands",
    nationality: "Faroese",
    continent: "Europe"
  },
  {
    num_code: "242",
    alpha_2_code: "FJ",
    alpha_3_code: "FJI",
    en_short_name: "Fiji",
    nationality: "Fijian",
    continent: "Australia"
  },
  {
    num_code: "246",
    alpha_2_code: "FI",
    alpha_3_code: "FIN",
    en_short_name: "Finland",
    nationality: "Finnish",
    continent: "Europe"
  },
  {
    num_code: "250",
    alpha_2_code: "FR",
    alpha_3_code: "FRA",
    en_short_name: "France",
    nationality: "French",
    continent: "Europe"
  },
  {
    num_code: "254",
    alpha_2_code: "GF",
    alpha_3_code: "GUF",
    en_short_name: "French Guiana",
    nationality: "French Guianese",
    continent: "South America"
  },
  {
    num_code: "258",
    alpha_2_code: "PF",
    alpha_3_code: "PYF",
    en_short_name: "French Polynesia",
    nationality: "French Polynesian",
    continent: "Australia"
  },
  {
    num_code: "266",
    alpha_2_code: "GA",
    alpha_3_code: "GAB",
    en_short_name: "Gabon",
    nationality: "Gabonese",
    continent: "Africa"
  },
  {
    num_code: "270",
    alpha_2_code: "GM",
    alpha_3_code: "GMB",
    en_short_name: "Gambia",
    nationality: "Gambian",
    continent: "Africa"
  },
  {
    num_code: "268",
    alpha_2_code: "GE",
    alpha_3_code: "GEO",
    en_short_name: "Georgia",
    nationality: "Georgian",
    continent: "Europe"
  },
  {
    num_code: "276",
    alpha_2_code: "DE",
    alpha_3_code: "DEU",
    en_short_name: "Germany",
    nationality: "German",
    continent: "Europe"
  },
  {
    num_code: "288",
    alpha_2_code: "GH",
    alpha_3_code: "GHA",
    en_short_name: "Ghana",
    nationality: "Ghanaian",
    continent: "Africa"
  },
  {
    num_code: "292",
    alpha_2_code: "GI",
    alpha_3_code: "GIB",
    en_short_name: "Gibraltar",
    nationality: "Gibraltar",
    continent: "Europe"
  },
  {
    num_code: "300",
    alpha_2_code: "GR",
    alpha_3_code: "GRC",
    en_short_name: "Greece",
    nationality: "Greek",
    continent: "Europe"
  },
  {
    num_code: "304",
    alpha_2_code: "GL",
    alpha_3_code: "GRL",
    en_short_name: "Greenland",
    nationality: "Greenlandic",
    continent: "North America"
  },
  {
    num_code: "308",
    alpha_2_code: "GD",
    alpha_3_code: "GRD",
    en_short_name: "Grenada",
    nationality: "Grenadian",
    continent: "North America"
  },
  {
    num_code: "312",
    alpha_2_code: "GP",
    alpha_3_code: "GLP",
    en_short_name: "Guadeloupe",
    nationality: "Guadeloupe",
    continent: "North America"
  },
  {
    num_code: "316",
    alpha_2_code: "GU",
    alpha_3_code: "GUM",
    en_short_name: "Guam",
    nationality: "Guamanian, Guambat",
    continent: "Australia"
  },
  {
    num_code: "320",
    alpha_2_code: "GT",
    alpha_3_code: "GTM",
    en_short_name: "Guatemala",
    nationality: "Guatemalan",
    continent: "North America"
  },
  {
    num_code: "831",
    alpha_2_code: "GG",
    alpha_3_code: "GGY",
    en_short_name: "Guernsey",
    nationality: "Channel Island",
    continent: "Europe"
  },
  {
    num_code: "324",
    alpha_2_code: "GN",
    alpha_3_code: "GIN",
    en_short_name: "Guinea",
    nationality: "Guinean",
    continent: "Africa"
  },
  {
    num_code: "624",
    alpha_2_code: "GW",
    alpha_3_code: "GNB",
    en_short_name: "Guinea-Bissau",
    nationality: "Bissau-Guinean",
    continent: "Africa"
  },
  {
    num_code: "328",
    alpha_2_code: "GY",
    alpha_3_code: "GUY",
    en_short_name: "Guyana",
    nationality: "Guyanese",
    continent: "South America"
  },
  {
    num_code: "332",
    alpha_2_code: "HT",
    alpha_3_code: "HTI",
    en_short_name: "Haiti",
    nationality: "Haitian",
    continent: "North America"
  },
  {
    num_code: "336",
    alpha_2_code: "VA",
    alpha_3_code: "VAT",
    en_short_name: "Vatican City",
    nationality: "Vatican",
    continent: "Europe"
  },
  {
    num_code: "340",
    alpha_2_code: "HN",
    alpha_3_code: "HND",
    en_short_name: "Honduras",
    nationality: "Honduran",
    continent: "North America"
  },
  {
    num_code: "344",
    alpha_2_code: "HK",
    alpha_3_code: "HKG",
    en_short_name: "Hong Kong",
    nationality: "Hong Kongese",
    continent: "Asia"
  },
  {
    num_code: "348",
    alpha_2_code: "HU",
    alpha_3_code: "HUN",
    en_short_name: "Hungary",
    nationality: "Hungarian",
    continent: "Europe"
  },
  {
    num_code: "352",
    alpha_2_code: "IS",
    alpha_3_code: "ISL",
    en_short_name: "Iceland",
    nationality: "Icelandic",
    continent: "Europe"
  },
  {
    num_code: "356",
    alpha_2_code: "IN",
    alpha_3_code: "IND",
    en_short_name: "India",
    nationality: "Indian",
    continent: "Asia"
  },
  {
    num_code: "360",
    alpha_2_code: "ID",
    alpha_3_code: "IDN",
    en_short_name: "Indonesia",
    nationality: "Indonesian",
    continent: "Asia"
  },
  {
    num_code: "364",
    alpha_2_code: "IR",
    alpha_3_code: "IRN",
    en_short_name: "Iran",
    nationality: "Iranian, Persian",
    continent: "Asia"
  },
  {
    num_code: "368",
    alpha_2_code: "IQ",
    alpha_3_code: "IRQ",
    en_short_name: "Iraq",
    nationality: "Iraqi",
    continent: "Asia"
  },
  {
    num_code: "372",
    alpha_2_code: "IE",
    alpha_3_code: "IRL",
    en_short_name: "Ireland",
    nationality: "Irish",
    continent: "Europe"
  },
  {
    num_code: "833",
    alpha_2_code: "IM",
    alpha_3_code: "IMN",
    en_short_name: "Isle of Man",
    nationality: "Manx",
    continent: "Europe"
  },
  {
    num_code: "376",
    alpha_2_code: "IL",
    alpha_3_code: "ISR",
    en_short_name: "Israel",
    nationality: "Israeli",
    continent: "Asia"
  },
  {
    num_code: "380",
    alpha_2_code: "IT",
    alpha_3_code: "ITA",
    en_short_name: "Italy",
    nationality: "Italian",
    continent: "Europe"
  },
  {
    num_code: "388",
    alpha_2_code: "JM",
    alpha_3_code: "JAM",
    en_short_name: "Jamaica",
    nationality: "Jamaican",
    continent: "North America"
  },
  {
    num_code: "392",
    alpha_2_code: "JP",
    alpha_3_code: "JPN",
    en_short_name: "Japan",
    nationality: "Japanese",
    continent: "Asia"
  },
  {
    num_code: "832",
    alpha_2_code: "JE",
    alpha_3_code: "JEY",
    en_short_name: "Jersey",
    nationality: "Channel Island",
    continent: "Europe"
  },
  {
    num_code: "400",
    alpha_2_code: "JO",
    alpha_3_code: "JOR",
    en_short_name: "Jordan",
    nationality: "Jordanian",
    continent: "Asia"
  },
  {
    num_code: "398",
    alpha_2_code: "KZ",
    alpha_3_code: "KAZ",
    en_short_name: "Kazakhstan",
    nationality: "Kazakhstani, Kazakh",
    continent: "Asia"
  },
  {
    num_code: "404",
    alpha_2_code: "KE",
    alpha_3_code: "KEN",
    en_short_name: "Kenya",
    nationality: "Kenyan",
    continent: "Africa"
  },
  {
    num_code: "296",
    alpha_2_code: "KI",
    alpha_3_code: "KIR",
    en_short_name: "Kiribati",
    nationality: "I-Kiribati",
    continent: "Australia"
  },
  {
    num_code: "408",
    alpha_2_code: "KP",
    alpha_3_code: "PRK",
    en_short_name: "North Korea",
    nationality: "North Korean",
    continent: "Asia"
  },
  {
    num_code: "410",
    alpha_2_code: "KR",
    alpha_3_code: "KOR",
    en_short_name: "South Korea",
    nationality: "South Korean",
    continent: "Asia"
  },
  {
    num_code: "414",
    alpha_2_code: "KW",
    alpha_3_code: "KWT",
    en_short_name: "Kuwait",
    nationality: "Kuwaiti",
    continent: "Asia"
  },
  {
    num_code: "417",
    alpha_2_code: "KG",
    alpha_3_code: "KGZ",
    en_short_name: "Kyrgyzstan",
    nationality: "Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz",
    continent: "Asia"
  },
  {
    num_code: "418",
    alpha_2_code: "LA",
    alpha_3_code: "LAO",
    en_short_name: "Laos",
    nationality: "Lao, Laotian",
    continent: "Asia"
  },
  {
    num_code: "428",
    alpha_2_code: "LV",
    alpha_3_code: "LVA",
    en_short_name: "Latvia",
    nationality: "Latvian",
    continent: "Europe"
  },
  {
    num_code: "422",
    alpha_2_code: "LB",
    alpha_3_code: "LBN",
    en_short_name: "Lebanon",
    nationality: "Lebanese",
    continent: "Asia"
  },
  {
    num_code: "426",
    alpha_2_code: "LS",
    alpha_3_code: "LSO",
    en_short_name: "Lesotho",
    nationality: "Basotho",
    continent: "Africa"
  },
  {
    num_code: "430",
    alpha_2_code: "LR",
    alpha_3_code: "LBR",
    en_short_name: "Liberia",
    nationality: "Liberian",
    continent: "Africa"
  },
  {
    num_code: "434",
    alpha_2_code: "LY",
    alpha_3_code: "LBY",
    en_short_name: "Libya",
    nationality: "Libyan",
    continent: "Africa"
  },
  {
    num_code: "438",
    alpha_2_code: "LI",
    alpha_3_code: "LIE",
    en_short_name: "Liechtenstein",
    nationality: "Liechtenstein",
    continent: "Europe"
  },
  {
    num_code: "440",
    alpha_2_code: "LT",
    alpha_3_code: "LTU",
    en_short_name: "Lithuania",
    nationality: "Lithuanian",
    continent: "Europe"
  },
  {
    num_code: "442",
    alpha_2_code: "LU",
    alpha_3_code: "LUX",
    en_short_name: "Luxembourg",
    nationality: "Luxembourg, Luxembourgish",
    continent: "Europe"
  },
  {
    num_code: "446",
    alpha_2_code: "MO",
    alpha_3_code: "MAC",
    en_short_name: "Macao",
    nationality: "Macanese",
    continent: "Asia"
  },
  {
    num_code: "807",
    alpha_2_code: "MK",
    alpha_3_code: "MKD",
    en_short_name: "Macedonia",
    nationality: "Macedonian",
    continent: "Europe"
  },
  {
    num_code: "450",
    alpha_2_code: "MG",
    alpha_3_code: "MDG",
    en_short_name: "Madagascar",
    nationality: "Malagasy",
    continent: "Africa"
  },
  {
    num_code: "454",
    alpha_2_code: "MW",
    alpha_3_code: "MWI",
    en_short_name: "Malawi",
    nationality: "Malawian",
    continent: "Africa"
  },
  {
    num_code: "458",
    alpha_2_code: "MY",
    alpha_3_code: "MYS",
    en_short_name: "Malaysia",
    nationality: "Malaysian",
    continent: "Asia"
  },
  {
    num_code: "462",
    alpha_2_code: "MV",
    alpha_3_code: "MDV",
    en_short_name: "Maldives",
    nationality: "Maldivian",
    continent: "Asia"
  },
  {
    num_code: "466",
    alpha_2_code: "ML",
    alpha_3_code: "MLI",
    en_short_name: "Mali",
    nationality: "Malian, Malinese",
    continent: "Africa"
  },
  {
    num_code: "470",
    alpha_2_code: "MT",
    alpha_3_code: "MLT",
    en_short_name: "Malta",
    nationality: "Maltese",
    continent: "Europe"
  },
  {
    num_code: "584",
    alpha_2_code: "MH",
    alpha_3_code: "MHL",
    en_short_name: "Marshall Islands",
    nationality: "Marshallese",
    continent: "Australia"
  },
  {
    num_code: "474",
    alpha_2_code: "MQ",
    alpha_3_code: "MTQ",
    en_short_name: "Martinique",
    nationality: "Martiniquais, Martinican",
    continent: "North America"
  },
  {
    num_code: "478",
    alpha_2_code: "MR",
    alpha_3_code: "MRT",
    en_short_name: "Mauritania",
    nationality: "Mauritanian",
    continent: "Africa"
  },
  {
    num_code: "480",
    alpha_2_code: "MU",
    alpha_3_code: "MUS",
    en_short_name: "Mauritius",
    nationality: "Mauritian",
    continent: "Africa"
  },
  {
    num_code: "175",
    alpha_2_code: "YT",
    alpha_3_code: "MYT",
    en_short_name: "Mayotte",
    nationality: "Mahoran",
    continent: "Africa"
  },
  {
    num_code: "484",
    alpha_2_code: "MX",
    alpha_3_code: "MEX",
    en_short_name: "Mexico",
    nationality: "Mexican",
    continent: "North America"
  },
  {
    num_code: "583",
    alpha_2_code: "FM",
    alpha_3_code: "FSM",
    en_short_name: "Federated States of Micronesia",
    nationality: "Micronesian",
    continent: "Australia"
  },
  {
    num_code: "498",
    alpha_2_code: "MD",
    alpha_3_code: "MDA",
    en_short_name: "Moldova",
    nationality: "Moldovan",
    continent: "Europe"
  },
  {
    num_code: "492",
    alpha_2_code: "MC",
    alpha_3_code: "MCO",
    en_short_name: "Monaco",
    nationality: "Mon\u00e9gasque, Monacan",
    continent: "Europe"
  },
  {
    num_code: "496",
    alpha_2_code: "MN",
    alpha_3_code: "MNG",
    en_short_name: "Mongolia",
    nationality: "Mongolian",
    continent: "Asia"
  },
  {
    num_code: "499",
    alpha_2_code: "ME",
    alpha_3_code: "MNE",
    en_short_name: "Montenegro",
    nationality: "Montenegrin",
    continent: "Europe"
  },
  {
    num_code: "500",
    alpha_2_code: "MS",
    alpha_3_code: "MSR",
    en_short_name: "Montserrat",
    nationality: "Montserratian",
    continent: "North America"
  },
  {
    num_code: "504",
    alpha_2_code: "MA",
    alpha_3_code: "MAR",
    en_short_name: "Morocco",
    nationality: "Moroccan",
    continent: "Africa"
  },
  {
    num_code: "508",
    alpha_2_code: "MZ",
    alpha_3_code: "MOZ",
    en_short_name: "Mozambique",
    nationality: "Mozambican",
    continent: "Africa"
  },
  {
    num_code: "104",
    alpha_2_code: "MM",
    alpha_3_code: "MMR",
    en_short_name: "Myanmar",
    nationality: "Burmese",
    continent: "Asia"
  },
  {
    num_code: "516",
    alpha_2_code: "NA",
    alpha_3_code: "NAM",
    en_short_name: "Namibia",
    nationality: "Namibian",
    continent: "Africa"
  },
  {
    num_code: "520",
    alpha_2_code: "NR",
    alpha_3_code: "NRU",
    en_short_name: "Nauru",
    nationality: "Nauruan",
    continent: "Australia"
  },
  {
    num_code: "524",
    alpha_2_code: "NP",
    alpha_3_code: "NPL",
    en_short_name: "Nepal",
    nationality: "Nepali, Nepalese",
    continent: "Asia"
  },
  {
    num_code: "528",
    alpha_2_code: "NL",
    alpha_3_code: "NLD",
    en_short_name: "Netherlands",
    nationality: "Dutch, Netherlandic",
    continent: "Europe"
  },
  {
    num_code: "540",
    alpha_2_code: "NC",
    alpha_3_code: "NCL",
    en_short_name: "New Caledonia",
    nationality: "New Caledonian",
    continent: "Australia"
  },
  {
    num_code: "554",
    alpha_2_code: "NZ",
    alpha_3_code: "NZL",
    en_short_name: "New Zealand",
    nationality: "New Zealander",
    continent: "Australia"
  },
  {
    num_code: "558",
    alpha_2_code: "NI",
    alpha_3_code: "NIC",
    en_short_name: "Nicaragua",
    nationality: "Nicaraguan",
    continent: "North America"
  },
  {
    num_code: "562",
    alpha_2_code: "NE",
    alpha_3_code: "NER",
    en_short_name: "Niger",
    nationality: "Nigerien",
    continent: "Africa"
  },
  {
    num_code: "566",
    alpha_2_code: "NG",
    alpha_3_code: "NGA",
    en_short_name: "Nigeria",
    nationality: "Nigerian",
    continent: "Africa"
  },
  {
    num_code: "570",
    alpha_2_code: "NU",
    alpha_3_code: "NIU",
    en_short_name: "Niue",
    nationality: "Niuean",
    continent: "Australia"
  },
  {
    num_code: "574",
    alpha_2_code: "NF",
    alpha_3_code: "NFK",
    en_short_name: "Norfolk Island",
    nationality: "Norfolk Island",
    continent: "Australia"
  },
  {
    num_code: "580",
    alpha_2_code: "MP",
    alpha_3_code: "MNP",
    en_short_name: "Northern Mariana Islands",
    nationality: "Northern Marianan",
    continent: "Australia"
  },
  {
    num_code: "578",
    alpha_2_code: "NO",
    alpha_3_code: "NOR",
    en_short_name: "Norway",
    nationality: "Norwegian",
    continent: "Europe"
  },
  {
    num_code: "512",
    alpha_2_code: "OM",
    alpha_3_code: "OMN",
    en_short_name: "Oman",
    nationality: "Omani",
    continent: "Asia"
  },
  {
    num_code: "586",
    alpha_2_code: "PK",
    alpha_3_code: "PAK",
    en_short_name: "Pakistan",
    nationality: "Pakistani",
    continent: "Asia"
  },
  {
    num_code: "585",
    alpha_2_code: "PW",
    alpha_3_code: "PLW",
    en_short_name: "Palau",
    nationality: "Palauan",
    continent: "Australia"
  },
  {
    num_code: "275",
    alpha_2_code: "PS",
    alpha_3_code: "PSE",
    en_short_name: "State of Palestine",
    nationality: "Palestinian",
    continent: "Asia"
  },
  {
    num_code: "591",
    alpha_2_code: "PA",
    alpha_3_code: "PAN",
    en_short_name: "Panama",
    nationality: "Panamanian",
    continent: "North America"
  },
  {
    num_code: "598",
    alpha_2_code: "PG",
    alpha_3_code: "PNG",
    en_short_name: "Papua New Guinea",
    nationality: "Papua New Guinean, Papuan",
    continent: "Australia"
  },
  {
    num_code: "600",
    alpha_2_code: "PY",
    alpha_3_code: "PRY",
    en_short_name: "Paraguay",
    nationality: "Paraguayan",
    continent: "South America"
  },
  {
    num_code: "604",
    alpha_2_code: "PE",
    alpha_3_code: "PER",
    en_short_name: "Peru",
    nationality: "Peruvian",
    continent: "South America"
  },
  {
    num_code: "608",
    alpha_2_code: "PH",
    alpha_3_code: "PHL",
    en_short_name: "Philippines",
    nationality: "Philippine, Filipino",
    continent: "Asia"
  },
  {
    num_code: "612",
    alpha_2_code: "PN",
    alpha_3_code: "PCN",
    en_short_name: "Pitcairn",
    nationality: "Pitcairn Island",
    continent: "South America"
  },
  {
    num_code: "616",
    alpha_2_code: "PL",
    alpha_3_code: "POL",
    en_short_name: "Poland",
    nationality: "Polish",
    continent: "Europe"
  },
  {
    num_code: "620",
    alpha_2_code: "PT",
    alpha_3_code: "PRT",
    en_short_name: "Portugal",
    nationality: "Portuguese",
    continent: "Europe"
  },
  {
    num_code: "630",
    alpha_2_code: "PR",
    alpha_3_code: "PRI",
    en_short_name: "Puerto Rico",
    nationality: "Puerto Rican",
    continent: "North America"
  },
  {
    num_code: "634",
    alpha_2_code: "QA",
    alpha_3_code: "QAT",
    en_short_name: "Qatar",
    nationality: "Qatari",
    continent: "Asia"
  },

  {
    num_code: "642",
    alpha_2_code: "RO",
    alpha_3_code: "ROU",
    en_short_name: "Romania",
    nationality: "Romanian",
    continent: "Europe"
  },
  {
    num_code: "643",
    alpha_2_code: "RU",
    alpha_3_code: "RUS",
    en_short_name: "Russia",
    nationality: "Russian",
    continent: "Europe"
  },
  {
    num_code: "646",
    alpha_2_code: "RW",
    alpha_3_code: "RWA",
    en_short_name: "Rwanda",
    nationality: "Rwandan",
    continent: "Africa"
  },
  {
    num_code: "652",
    alpha_2_code: "BL",
    alpha_3_code: "BLM",
    en_short_name: "Saint Barth\u00e9lemy",
    nationality: "Barth\u00e9lemois",
    continent: "North America"
  },
  {
    num_code: "654",
    alpha_2_code: "SH",
    alpha_3_code: "SHN",
    en_short_name: "Saint Helena, Ascension, and Tristan da Cunha",
    nationality: "Saint Helenian",
    continent: "Africa"
  },
  {
    num_code: "659",
    alpha_2_code: "KN",
    alpha_3_code: "KNA",
    en_short_name: "Saint Kitts and Nevis",
    nationality: "Kittitian or Nevisian",
    continent: "North America"
  },
  {
    num_code: "662",
    alpha_2_code: "LC",
    alpha_3_code: "LCA",
    en_short_name: "Saint Lucia",
    nationality: "Saint Lucian",
    continent: "North America"
  },
  {
    num_code: "663",
    alpha_2_code: "MF",
    alpha_3_code: "MAF",
    en_short_name: "Saint Martin",
    nationality: "Saint-Martinoise",
    continent: "North America"
  },
  {
    num_code: "666",
    alpha_2_code: "PM",
    alpha_3_code: "SPM",
    en_short_name: "Saint Pierre and Miquelon",
    nationality: "Saint-Pierrais or Miquelonnais",
    continent: "North America"
  },
  {
    num_code: "670",
    alpha_2_code: "VC",
    alpha_3_code: "VCT",
    en_short_name: "Saint Vincent and the Grenadines",
    nationality: "Saint Vincentian, Vincentian",
    continent: "North America"
  },
  {
    num_code: "882",
    alpha_2_code: "WS",
    alpha_3_code: "WSM",
    en_short_name: "Samoa",
    nationality: "Samoan",
    continent: "Australia"
  },
  {
    num_code: "674",
    alpha_2_code: "SM",
    alpha_3_code: "SMR",
    en_short_name: "San Marino",
    nationality: "Sammarinese",
    continent: "Europe"
  },
  {
    num_code: "678",
    alpha_2_code: "ST",
    alpha_3_code: "STP",
    en_short_name: "Sao Tome and Principe",
    nationality: "S\u00e3o Tom\u00e9an",
    continent: "Africa"
  },
  {
    num_code: "682",
    alpha_2_code: "SA",
    alpha_3_code: "SAU",
    en_short_name: "Saudi Arabia",
    nationality: "Saudi, Saudi Arabian",
    continent: "Asia"
  },
  {
    num_code: "686",
    alpha_2_code: "SN",
    alpha_3_code: "SEN",
    en_short_name: "Senegal",
    nationality: "Senegalese",
    continent: "Africa"
  },
  {
    num_code: "688",
    alpha_2_code: "RS",
    alpha_3_code: "SRB",
    en_short_name: "Serbia",
    nationality: "Serbian",
    continent: "Europe"
  },
  {
    num_code: "690",
    alpha_2_code: "SC",
    alpha_3_code: "SYC",
    en_short_name: "Seychelles",
    nationality: "Seychellois",
    continent: "Africa"
  },
  {
    num_code: "694",
    alpha_2_code: "SL",
    alpha_3_code: "SLE",
    en_short_name: "Sierra Leone",
    nationality: "Sierra Leonean",
    continent: "Africa"
  },
  {
    num_code: "702",
    alpha_2_code: "SG",
    alpha_3_code: "SGP",
    en_short_name: "Singapore",
    nationality: "Singaporean",
    continent: "Asia"
  },
  {
    num_code: "534",
    alpha_2_code: "SX",
    alpha_3_code: "SXM",
    en_short_name: "Sint Maarten",
    nationality: "Sint Maarten",
    continent: "North America"
  },
  {
    num_code: "703",
    alpha_2_code: "SK",
    alpha_3_code: "SVK",
    en_short_name: "Slovakia",
    nationality: "Slovak",
    continent: "Europe"
  },
  {
    num_code: "705",
    alpha_2_code: "SI",
    alpha_3_code: "SVN",
    en_short_name: "Slovenia",
    nationality: "Slovenian, Slovene",
    continent: "Europe"
  },
  {
    num_code: "90",
    alpha_2_code: "SB",
    alpha_3_code: "SLB",
    en_short_name: "Solomon Islands",
    nationality: "Solomon Island",
    continent: "Australia"
  },
  {
    num_code: "706",
    alpha_2_code: "SO",
    alpha_3_code: "SOM",
    en_short_name: "Somalia",
    nationality: "Somali, Somalian",
    continent: "Africa"
  },
  {
    num_code: "710",
    alpha_2_code: "ZA",
    alpha_3_code: "ZAF",
    en_short_name: "South Africa",
    nationality: "South African",
    continent: "Africa"
  },
  {
    num_code: "239",
    alpha_2_code: "GS",
    alpha_3_code: "SGS",
    en_short_name: "South Georgia and the South Sandwich Islands",
    nationality: "South Georgia, South Sandwich Islands",
    continent: "South America"
  },
  {
    num_code: "728",
    alpha_2_code: "SS",
    alpha_3_code: "SSD",
    en_short_name: "South Sudan",
    nationality: "South Sudanese",
    continent: "Africa"
  },
  {
    num_code: "724",
    alpha_2_code: "ES",
    alpha_3_code: "ESP",
    en_short_name: "Spain",
    nationality: "Spanish",
    continent: "Europe"
  },
  {
    num_code: "144",
    alpha_2_code: "LK",
    alpha_3_code: "LKA",
    en_short_name: "Sri Lanka",
    nationality: "Sri Lankan",
    continent: "Asia"
  },
  {
    num_code: "729",
    alpha_2_code: "SD",
    alpha_3_code: "SDN",
    en_short_name: "Sudan",
    nationality: "Sudanese",
    continent: "Africa"
  },
  {
    num_code: "740",
    alpha_2_code: "SR",
    alpha_3_code: "SUR",
    en_short_name: "Suriname",
    nationality: "Surinamese",
    continent: "South America"
  },
  {
    num_code: "744",
    alpha_2_code: "SJ",
    alpha_3_code: "SJM",
    en_short_name: "Svalbard and Jan Mayen",
    nationality: "Svalbard",
    continent: "Europe"
  },
  {
    num_code: "748",
    alpha_2_code: "SZ",
    alpha_3_code: "SWZ",
    en_short_name: "Swaziland",
    nationality: "Swazi",
    continent: "Africa"
  },
  {
    num_code: "752",
    alpha_2_code: "SE",
    alpha_3_code: "SWE",
    en_short_name: "Sweden",
    nationality: "Swedish",
    continent: "Europe"
  },
  {
    num_code: "756",
    alpha_2_code: "CH",
    alpha_3_code: "CHE",
    en_short_name: "Switzerland",
    nationality: "Swiss",
    continent: "Europe"
  },
  {
    num_code: "760",
    alpha_2_code: "SY",
    alpha_3_code: "SYR",
    en_short_name: "Syria",
    nationality: "Syrian",
    continent: "Asia"
  },
  {
    num_code: "158",
    alpha_2_code: "TW",
    alpha_3_code: "TWN",
    en_short_name: "Taiwan",
    nationality: "Taiwanese",
    continent: "Asia"
  },
  {
    num_code: "762",
    alpha_2_code: "TJ",
    alpha_3_code: "TJK",
    en_short_name: "Tajikistan",
    nationality: "Tajikistani",
    continent: "Asia"
  },
  {
    num_code: "834",
    alpha_2_code: "TZ",
    alpha_3_code: "TZA",
    en_short_name: "Tanzania",
    nationality: "Tanzanian",
    continent: "Africa"
  },
  {
    num_code: "764",
    alpha_2_code: "TH",
    alpha_3_code: "THA",
    en_short_name: "Thailand",
    nationality: "Thai",
    continent: "Asia"
  },
  {
    num_code: "626",
    alpha_2_code: "TL",
    alpha_3_code: "TLS",
    en_short_name: "Timor-Leste",
    nationality: "Timorese",
    continent: "Asia"
  },
  {
    num_code: "768",
    alpha_2_code: "TG",
    alpha_3_code: "TGO",
    en_short_name: "Togo",
    nationality: "Togolese",
    continent: "Africa"
  },
  {
    num_code: "772",
    alpha_2_code: "TK",
    alpha_3_code: "TKL",
    en_short_name: "Tokelau",
    nationality: "Tokelauan",
    continent: "Australia"
  },
  {
    num_code: "776",
    alpha_2_code: "TO",
    alpha_3_code: "TON",
    en_short_name: "Tonga",
    nationality: "Tongan",
    continent: "Australia"
  },
  {
    num_code: "780",
    alpha_2_code: "TT",
    alpha_3_code: "TTO",
    en_short_name: "Trinidad and Tobago",
    nationality: "Trinidadian or Tobagonian",
    continent: "South America"
  },
  {
    num_code: "788",
    alpha_2_code: "TN",
    alpha_3_code: "TUN",
    en_short_name: "Tunisia",
    nationality: "Tunisian",
    continent: "Africa"
  },
  {
    num_code: "792",
    alpha_2_code: "TR",
    alpha_3_code: "TUR",
    en_short_name: "Turkey",
    nationality: "Turkish",
    continent: "Europe"
  },
  {
    num_code: "795",
    alpha_2_code: "TM",
    alpha_3_code: "TKM",
    en_short_name: "Turkmenistan",
    nationality: "Turkmen",
    continent: "Asia"
  },
  {
    num_code: "796",
    alpha_2_code: "TC",
    alpha_3_code: "TCA",
    en_short_name: "Turks and Caicos Islands",
    nationality: "Turks and Caicos Island",
    continent: "North America"
  },
  {
    num_code: "798",
    alpha_2_code: "TV",
    alpha_3_code: "TUV",
    en_short_name: "Tuvalu",
    nationality: "Tuvaluan",
    continent: "Australia"
  },
  {
    num_code: "800",
    alpha_2_code: "UG",
    alpha_3_code: "UGA",
    en_short_name: "Uganda",
    nationality: "Ugandan",
    continent: "Africa"
  },
  {
    num_code: "804",
    alpha_2_code: "UA",
    alpha_3_code: "UKR",
    en_short_name: "Ukraine",
    nationality: "Ukrainian",
    continent: "Europe"
  },
  {
    num_code: "784",
    alpha_2_code: "AE",
    alpha_3_code: "ARE",
    en_short_name: "United Arab Emirates",
    nationality: "Emirati, Emirian, Emiri",
    continent: "Asia"
  },
  {
    num_code: "858",
    alpha_2_code: "UY",
    alpha_3_code: "URY",
    en_short_name: "Uruguay",
    nationality: "Uruguayan",
    continent: "South America"
  },
  {
    num_code: "860",
    alpha_2_code: "UZ",
    alpha_3_code: "UZB",
    en_short_name: "Uzbekistan",
    nationality: "Uzbekistani, Uzbek",
    continent: "Asia"
  },
  {
    num_code: "548",
    alpha_2_code: "VU",
    alpha_3_code: "VUT",
    en_short_name: "Vanuatu",
    nationality: "Ni-Vanuatu, Vanuatuan",
    continent: "Australia"
  },
  {
    num_code: "862",
    alpha_2_code: "VE",
    alpha_3_code: "VEN",
    en_short_name: "Venezuela",
    nationality: "Venezuelan",
    continent: "South America"
  },
  {
    num_code: "704",
    alpha_2_code: "VN",
    alpha_3_code: "VNM",
    en_short_name: "Vietnam",
    nationality: "Vietnamese",
    continent: "Asia"
  },
  {
    num_code: "92",
    alpha_2_code: "VG",
    alpha_3_code: "VGB",
    en_short_name: "British Virgin Islands",
    nationality: "British Virgin Island",
    continent: "North America"
  },
  {
    num_code: "850",
    alpha_2_code: "VI",
    alpha_3_code: "VIR",
    en_short_name: "U.S. Virgin Islands",
    nationality: "U.S. Virgin Island",
    continent: "North America"
  },
  {
    num_code: "876",
    alpha_2_code: "WF",
    alpha_3_code: "WLF",
    en_short_name: "Wallis and Futuna",
    nationality: "Wallis and Futuna, Wallisian or Futunan",
    continent: "Australia"
  },
  {
    num_code: "732",
    alpha_2_code: "EH",
    alpha_3_code: "ESH",
    en_short_name: "Western Sahara",
    nationality: "Sahrawi, Sahrawian, Sahraouian",
    continent: "Africa"
  },
  {
    num_code: "887",
    alpha_2_code: "YE",
    alpha_3_code: "YEM",
    en_short_name: "Yemen",
    nationality: "Yemeni",
    continent: "Asia"
  },
  {
    num_code: "894",
    alpha_2_code: "ZM",
    alpha_3_code: "ZMB",
    en_short_name: "Zambia",
    nationality: "Zambian",
    continent: "Africa"
  },
  {
    num_code: "716",
    alpha_2_code: "ZW",
    alpha_3_code: "ZWE",
    en_short_name: "Zimbabwe",
    nationality: "Zimbabwean",
    continent: "Africa"
  }
];

module.exports = {
  africa,
  asia,
  australia,
  europe,
  northAmerica,
  southAmerica,
  nationalities
}
